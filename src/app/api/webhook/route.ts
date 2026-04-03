import { NextResponse } from "next/server";
import Stripe from "stripe";
import { sendOrderEmails } from "@/lib/email";
import { products } from "@/data/products";
import {
  createOrder,
  getOrderByStripeSessionId,
  updateOrderStatus,
  type StoredOrderItem,
} from "@/lib/orders";

export const runtime = "nodejs";

function getStripe() {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    throw new Error("Missing STRIPE_SECRET_KEY");
  }

  return new Stripe(secretKey);
}

function priceIdToProductMap() {
  const map = new Map<string, (typeof products)[number]>();

  for (const product of products) {
    if (product.stripePriceId) {
      map.set(product.stripePriceId, product);
    }
  }

  return map;
}

export async function POST(req: Request) {
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "Missing Stripe signature" },
      { status: 400 }
    );
  }

  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json(
      { error: "Missing webhook secret" },
      { status: 500 }
    );
  }

  let event: Stripe.Event;

  try {
    const stripe = getStripe();
    const body = await req.text();

    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    console.error("Stripe webhook signature error:", error);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    if (event.type === "checkout.session.completed") {
      const stripe = getStripe();
      const session = event.data.object as Stripe.Checkout.Session;

      const existing = await getOrderByStripeSessionId(session.id);
      if (existing) {
        return NextResponse.json({ ok: true, duplicate: true });
      }

      const lineItemsResponse = await stripe.checkout.sessions.listLineItems(
        session.id,
        { limit: 100 }
      );

      const productByPriceId = priceIdToProductMap();

      const items: StoredOrderItem[] = lineItemsResponse.data
        .map((lineItem) => {
          const priceId =
            typeof lineItem.price === "string"
              ? lineItem.price
              : lineItem.price?.id;

          if (!priceId) return null;

          const product = productByPriceId.get(priceId);
          if (!product) return null;

          return {
            id: product.id,
            name: product.name,
            qty: lineItem.quantity || 1,
            priceGBP: product.priceGBP,
          };
        })
        .filter((item): item is StoredOrderItem => item !== null);

      const subtotal = items.reduce(
        (sum, item) => sum + item.priceGBP * item.qty,
        0
      );

      const shipping = 0;
      const total = subtotal + shipping;

      const customerName =
        session.customer_details?.name ||
        session.customer_details?.email ||
        "Stripe Customer";

      const customerEmail =
        session.customer_details?.email || session.customer_email || "";

      const order = await createOrder({
        name: customerName,
        email: customerEmail,
        shippingRegion: "UK",
        subtotal,
        shipping,
        total,
        items,
        paymentMethod: "card",
        stripeSessionId: session.id,
      });

      await updateOrderStatus({
        orderId: order.id,
        status: "paid",
      });

      try {
        await sendOrderEmails({
          orderId: order.id,
          customerName: order.name,
          customerEmail: order.email,
          paymentMethod: order.paymentMethod,
          totalGBP: order.total,
          items: order.items,
        });
      } catch (emailError) {
        console.error("STRIPE ORDER EMAIL ERROR:", emailError);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Stripe webhook processing error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}