import { NextResponse } from "next/server";
import Stripe from "stripe";
import { products } from "@/data/products";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const items = body?.items ?? [];

    const productMap = new Map(products.map((p) => [p.id, p]));

    const lineItems = items
      .map((item: { productId: string; qty: number }) => {
        const product = productMap.get(item.productId);

        if (!product) return null;
        if (!product.stripePriceId) return null;
        if (!item.qty || item.qty < 1) return null;

        return {
          price: product.stripePriceId,
          quantity: item.qty,
        };
      })
      .filter(Boolean) as { price: string; quantity: number }[];

    if (!lineItems.length) {
      return NextResponse.json(
        { error: "No valid Stripe items found in cart." },
        { status: 400 }
      );
    }

    if (!process.env.NEXT_PUBLIC_SITE_URL) {
      return NextResponse.json(
        { error: "NEXT_PUBLIC_SITE_URL is missing." },
        { status: 500 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/order-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cart`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Checkout failed. Check server logs." },
      { status: 500 }
    );
  }
}