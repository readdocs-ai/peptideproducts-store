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

function getShippingRegionFromCountry(country?: string | null): "UK" | "International" {
  return (country || "").toUpperCase() === "GB" ? "UK" : "International";
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

      const fullSession = (await stripe.checkout.sessions.retrieve(
        session.id
      )) as Stripe.Checkout.Session & {
        shipping_details?: {
          name?: string | null;
          address?: {
            line1?: string | null;
            line2?: string | null;
            city?: string | null;
            state?: string | null;
            postal_code?: string | null;
            country?: string | null;
          } | null;
        } | null;
        total_details?: {
          amount_shipping?: number | null;
        } | null;
        customer_details?: {
          name?: string | null;
          email?: string | null;
          address?: {
            line1?: string | null;
            line2?: string | null;
            city?: string | null;
            state?: string | null;
            postal_code?: string | null;
            country?: string | null;
          } | null;
        } | null;
      };

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

      const shipping = fullSession.total_details?.amount_shipping
        ? fullSession.total_details.amount_shipping / 100
        : 0;

      const total = fullSession.amount_total
        ? fullSession.amount_total / 100
        : subtotal + shipping;

      const shippingAddress = {
        line1:
          fullSession.shipping_details?.address?.line1 ||
          fullSession.customer_details?.address?.line1 ||
          "",
        line2:
          fullSession.shipping_details?.address?.line2 ||
          fullSession.customer_details?.address?.line2 ||
          "",
        city:
          fullSession.shipping_details?.address?.city ||
          fullSession.customer_details?.address?.city ||
          "",
        state:
          fullSession.shipping_details?.address?.state ||
          fullSession.customer_details?.address?.state ||
          "",
        postalCode:
          fullSession.shipping_details?.address?.postal_code ||
          fullSession.customer_details?.address?.postal_code ||
          "",
        country:
          fullSession.shipping_details?.address?.country ||
          fullSession.customer_details?.address?.country ||
          "",
      };

      const shippingRegion = getShippingRegionFromCountry(shippingAddress.country);

      const customerName =
        fullSession.shipping_details?.name ||
        fullSession.customer_details?.name ||
        fullSession.customer_email ||
        "Stripe Customer";

      const customerEmail =
        fullSession.customer_details?.email ||
        fullSession.customer_email ||
        "";

      const order = await createOrder({
        name: customerName,
        email: customerEmail,
        shippingRegion,
        shippingAddress,
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
          subtotalGBP: order.subtotal,
          shippingGBP: order.shipping,
          totalGBP: order.total,
          items: order.items,
          shippingRegion: order.shippingRegion,
          shippingAddress: order.shippingAddress,
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