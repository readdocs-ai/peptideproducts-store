import { NextResponse } from "next/server";
import Stripe from "stripe";
import { products } from "@/data/products";

export const runtime = "nodejs";

const UK_SHIPPING_FEE_GBP = 0.00;
const INTERNATIONAL_SHIPPING_FEE_GBP = 14.99;

const ALLOWED_COUNTRIES: Stripe.Checkout.SessionCreateParams.ShippingAddressCollection.AllowedCountry[] =
  [
    "GB",
    "US",
    "CA",
    "AU",
    "NZ",
    "IE",
    "DE",
    "FR",
    "ES",
    "IT",
    "NL",
    "BE",
    "SE",
    "NO",
    "DK",
    "CH",
    "AT",
    "PT",
  ];

function getStripe() {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    throw new Error("Missing STRIPE_SECRET_KEY");
  }

  return new Stripe(secretKey);
}

function toMinorUnits(amountGbp: number) {
  return Math.round(amountGbp * 100);
}

function isUkCountry(country?: string) {
  return (country || "").trim().toUpperCase() === "GB";
}

type CheckoutItem = {
  productId: string;
  qty: number;
};

type CheckoutRequestBody = {
  items?: CheckoutItem[];
  customer?: {
    email?: string;
    name?: string;
  };
  shippingAddress?: {
    line1?: string;
    line2?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
  };
};

export async function POST(req: Request) {
  try {
    const stripe = getStripe();
    const body = (await req.json()) as CheckoutRequestBody;

    const items = body?.items ?? [];
    const shippingAddress = body?.shippingAddress;
    const shippingCountry = shippingAddress?.country?.trim().toUpperCase();

    if (!shippingCountry) {
      return NextResponse.json(
        { error: "Shipping country is required." },
        { status: 400 }
      );
    }

    if (!ALLOWED_COUNTRIES.includes(
      shippingCountry as Stripe.Checkout.SessionCreateParams.ShippingAddressCollection.AllowedCountry
    )) {
      return NextResponse.json(
        { error: "Shipping country is not supported." },
        { status: 400 }
      );
    }

    const productMap = new Map(products.map((p) => [p.id, p]));

    const lineItems = items
      .map((item) => {
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

    const shippingFee = isUkCountry(shippingCountry)
      ? UK_SHIPPING_FEE_GBP
      : INTERNATIONAL_SHIPPING_FEE_GBP;

    const shippingDisplayName = isUkCountry(shippingCountry)
      ? "UK delivery"
      : "International delivery";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      customer_creation: "always",

      billing_address_collection: "required",

      shipping_address_collection: {
        allowed_countries: ALLOWED_COUNTRIES,
      },

      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            display_name: shippingDisplayName,
            fixed_amount: {
              amount: toMinorUnits(shippingFee),
              currency: "gbp",
            },
            delivery_estimate: isUkCountry(shippingCountry)
              ? {
                  minimum: { unit: "business_day", value: 1 },
                  maximum: { unit: "business_day", value: 3 },
                }
              : {
                  minimum: { unit: "business_day", value: 5 },
                  maximum: { unit: "business_day", value: 10 },
                },
          },
        },
      ],

      phone_number_collection: {
        enabled: true,
      },

      customer_email: body?.customer?.email || undefined,

      metadata: {
        shipping_country: shippingCountry,
        shipping_fee_gbp: shippingFee.toFixed(2),
        customer_name: body?.customer?.name || "",
        cart_items: JSON.stringify(
          items.map((item) => ({
            productId: item.productId,
            qty: item.qty,
          }))
        ),
      },

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