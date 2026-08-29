import { NextResponse } from "next/server";
import Stripe from "stripe";
import { sendOrderEmails } from "@/lib/email";
import {
  getOrder,
  getOrderByStripeSessionId,
  updateOrderStatus,
  cancelOlderPendingCardOrders,
} from "@/lib/orders";

export const runtime = "nodejs";

function getStripe() {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) throw new Error("Missing STRIPE_SECRET_KEY");
  return new Stripe(secretKey);
}

export async function POST(req: Request) {
  const signature = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature) {
    return NextResponse.json(
      { error: "Missing Stripe signature" },
      { status: 400 }
    );
  }

  if (!webhookSecret) {
    return NextResponse.json(
      { error: "Missing STRIPE_WEBHOOK_SECRET" },
      { status: 500 }
    );
  }

  let event: Stripe.Event;

  try {
    const rawBody = await req.text();
    event = getStripe().webhooks.constructEvent(
      rawBody,
      signature,
      webhookSecret
    );
  } catch (error) {
    console.error("Stripe webhook signature error:", error);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    if (
      event.type !== "checkout.session.completed" &&
      event.type !== "checkout.session.async_payment_succeeded"
    ) {
      return NextResponse.json({ ok: true, ignored: true });
    }

    const session = event.data.object as Stripe.Checkout.Session;

    // Peptide Products must only process its own Stripe Checkout sessions.
    if (session.metadata?.app !== "peptide-products") {
      console.info("Peptide Products webhook ignored foreign Stripe session", {
        sessionId: session.id,
        app: session.metadata?.app || "missing",
      });
      return NextResponse.json({ ok: true, ignored: true });
    }

    if (session.payment_status !== "paid") {
      return NextResponse.json({ ok: true, awaitingPayment: true });
    }

    const orderId =
      session.metadata?.order_id || session.client_reference_id || "";

    const order = orderId
      ? await getOrder(orderId)
      : await getOrderByStripeSessionId(session.id);

    if (!order) {
      console.error("Stripe webhook could not find Peptide Products order", {
        sessionId: session.id,
        orderId,
      });
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    if (!order.id.startsWith("PP-")) {
      console.error("Peptide Products webhook rejected unexpected order prefix", {
        sessionId: session.id,
        orderId: order.id,
      });
      return NextResponse.json(
        { error: "Unexpected order type" },
        { status: 400 }
      );
    }

    const expectedAmount = Math.round(order.total * 100);

    if (
      typeof session.amount_total !== "number" ||
      session.amount_total !== expectedAmount
    ) {
      console.error("Stripe amount mismatch", {
        orderId: order.id,
        expectedAmount,
        stripeAmount: session.amount_total,
      });
      return NextResponse.json(
        { error: "Payment amount mismatch" },
        { status: 400 }
      );
    }

    if (order.status === "paid" || order.status === "shipped") {
      return NextResponse.json({ ok: true, duplicate: true });
    }

    const paidOrder = await updateOrderStatus({
      orderId: order.id,
      status: "paid",
    });

    const finalOrder = paidOrder || order;

    try {
      const abandonedOrders = await cancelOlderPendingCardOrders({
        paidOrderId: finalOrder.id,
        email: finalOrder.email,
        total: finalOrder.total,
        createdAt: finalOrder.createdAt,
        items: finalOrder.items,
        windowMinutes: 30,
      });

      if (abandonedOrders.length) {
        console.info("Cancelled older abandoned Stripe checkout attempts", {
          paidOrderId: finalOrder.id,
          cancelledOrderIds: abandonedOrders.map((item) => item.id),
        });
      }
    } catch (cleanupError) {
      console.error("ABANDONED CHECKOUT CLEANUP ERROR:", cleanupError);
    }

    try {
      await sendOrderEmails({
        orderId: finalOrder.id,
        customerName: finalOrder.name,
        customerEmail: finalOrder.email,
        paymentMethod: finalOrder.paymentMethod,
        subtotalGBP: finalOrder.subtotal,
        shippingGBP: finalOrder.shipping,
        totalGBP: finalOrder.total,
        items: finalOrder.items,
        shippingRegion: finalOrder.shippingRegion,
        shippingAddress: finalOrder.shippingAddress,
      });
    } catch (emailError) {
      console.error("STRIPE ORDER EMAIL ERROR:", emailError);
    }

    return NextResponse.json({ ok: true, orderId: finalOrder.id });
  } catch (error) {
    console.error("Stripe webhook processing error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}