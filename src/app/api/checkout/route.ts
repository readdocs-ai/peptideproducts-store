import { NextResponse } from "next/server";
import Stripe from "stripe";
import { products } from "@/data/products";
import { createOrder, updateOrderStripeSessionId, type StoredOrderItem } from "@/lib/orders";
import { checkCheckoutProtection, getRequestIp } from "@/lib/checkout-protection";

export const runtime = "nodejs";

type ShippingAddress = {
  line1?: string;
  line2?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
};

type IncomingCartItem = {
  id?: string;
  productId?: string;
  qty?: number | string;
};

type Body = {
  name?: string;
  email?: string;
  phone?: string;
  marketingOptIn?: boolean;
  researchUseAccepted?: boolean;
  researchDeclarationVersion?: string;
  shippingAddress?: ShippingAddress;
  items?: IncomingCartItem[];
  website?: string;
};

const UK_SHIPPING_FEE_GBP = 0;
const ALLOWED_COUNTRIES = new Set(["GB"]);
const ENQUIRY_ONLY_PRODUCT_IDS = new Set([
  "reta-research-compound-10mg-vial",
  "reta-research-compound-20mg-vial",
  "reta-research-compound-40mg-vial",
  "retatrutide-research-compound-10mg-vial",
  "retatrutide-research-compound-20mg-vial",
  "retatrutide-research-compound-40mg-vial",
]);

function getStripe() {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) throw new Error("STRIPE_SECRET_KEY is not configured");
  return new Stripe(secretKey);
}

function roundGBP(value: number) {
  return Math.round(value * 100) / 100;
}

function normaliseQty(value: number | string | undefined) {
  const qty = Number(value);
  if (!Number.isFinite(qty)) return 0;
  return Math.max(0, Math.min(99, Math.floor(qty)));
}

function isUkCountry(country: string) {
  return country.trim().toUpperCase() === "GB";
}

function buildItems(rawItems: IncomingCartItem[]) {
  const productMap = new Map(products.map((product) => [product.id, product]));
  const merged = new Map<string, StoredOrderItem>();

  for (const rawItem of rawItems) {
    const productId = String(rawItem.productId || rawItem.id || "").trim();
    const qty = normaliseQty(rawItem.qty);
    const product = productMap.get(productId);

    if (ENQUIRY_ONLY_PRODUCT_IDS.has(productId)) {
      throw new Error("One or more products require availability confirmation before ordering.");
    }
    if (!product || product.stockStatus !== "in_stock" || qty < 1) {
      throw new Error("One or more cart items are invalid or unavailable.");
    }

    const existing = merged.get(product.id);
    merged.set(product.id, {
      id: product.id,
      name: product.name,
      qty: (existing?.qty || 0) + qty,
      priceGBP: product.priceGBP,
    });
  }

  return Array.from(merged.values());
}

function buildStripeLineItems(items: StoredOrderItem[]): Stripe.Checkout.SessionCreateParams.LineItem[] {
  return items.map((item) => ({
    quantity: item.qty,
    price_data: {
      currency: "gbp",
      unit_amount: Math.round(item.priceGBP * 100),
      product_data: { name: item.name, metadata: { product_id: item.id } },
    },
  }));
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Body;
    const name = body.name?.trim() || "";
    const email = body.email?.trim().toLowerCase() || "";
    const phone = body.phone?.trim() || "";
    const rawItems = Array.isArray(body.items) ? body.items : [];
    const shippingAddress = {
      line1: body.shippingAddress?.line1?.trim() || "",
      line2: body.shippingAddress?.line2?.trim() || "",
      city: body.shippingAddress?.city?.trim() || "",
      state: body.shippingAddress?.state?.trim() || "",
      postalCode: body.shippingAddress?.postalCode?.trim() || "",
      country: body.shippingAddress?.country?.trim().toUpperCase() || "",
    };

    if (name.length < 2 || !email.includes("@") || phone.length < 7) {
      return NextResponse.json({ ok: false, error: "Valid contact details are required." }, { status: 400 });
    }
    if (!shippingAddress.line1 || !shippingAddress.city || !shippingAddress.postalCode) {
      return NextResponse.json({ ok: false, error: "A complete shipping address is required." }, { status: 400 });
    }
    if (!ALLOWED_COUNTRIES.has(shippingAddress.country)) {
      return NextResponse.json({ ok: false, error: "International shipping is temporarily suspended. We are currently accepting UK delivery addresses only." }, { status: 400 });
    }
    if (body.researchUseAccepted !== true) {
      return NextResponse.json({ ok: false, error: "You must accept the Research Use Declaration before continuing to payment." }, { status: 400 });
    }
    if (!rawItems.length) {
      return NextResponse.json({ ok: false, error: "Cart is empty." }, { status: 400 });
    }

    if (name.length > 120 || email.length > 180 || phone.length > 40 ||
        shippingAddress.line1.length > 160 || shippingAddress.line2.length > 160 ||
        shippingAddress.city.length > 100 || shippingAddress.state.length > 100 ||
        shippingAddress.postalCode.length > 24) {
      return NextResponse.json({ ok: false, error: "Please check the details entered and try again." }, { status: 400 });
    }

    const ip = getRequestIp(req);
    const userAgent = req.headers.get("user-agent") || "unknown";
    const payloadFingerprint = JSON.stringify({
      name: name.toLowerCase(),
      email,
      phone: phone.replace(/\D+/g, ""),
      shippingAddress,
      items: rawItems,
    });
    const protection = await checkCheckoutProtection({
      ip,
      name,
      email,
      phone,
      userAgent,
      payloadFingerprint,
      honeypot: body.website,
    });

    if (!protection.allowed) {
      const response = NextResponse.json(
        { ok: false, error: protection.reason || "Unable to start checkout." },
        { status: 429 },
      );
      if (protection.retryAfterSeconds) {
        response.headers.set("Retry-After", String(protection.retryAfterSeconds));
      }
      return response;
    }

    const items = buildItems(rawItems);
    const subtotal = roundGBP(items.reduce((sum, item) => sum + item.priceGBP * item.qty, 0));
    const shipping = UK_SHIPPING_FEE_GBP;
    const total = roundGBP(subtotal + shipping);
    const shippingRegion = "UK";

    const order = await createOrder({
      name,
      email,
      phone,
      marketingOptIn: body.marketingOptIn === true,
      researchUseAccepted: true,
      researchDeclarationVersion: body.researchDeclarationVersion || "research-use-v1",
      shippingRegion,
      shippingAddress,
      subtotal,
      shipping,
      total,
      items,
      paymentMethod: "card",
    });

    const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "https://www.peptideproducts.co.uk").replace(/\/$/, "");
    const stripe = getStripe();
    const lineItems = buildStripeLineItems(items);


    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: email,
      client_reference_id: order.id,
      line_items: lineItems,
      success_url: `${siteUrl}/order-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/checkout?payment=cancelled`,
      metadata: {
        app: "peptide-products",
        order_id: order.id,
        shipping_country: shippingAddress.country,
        checkout_version: "pp-dynamic-payments-v1",
        research_use_accepted: "true",
        research_declaration_version: body.researchDeclarationVersion || "research-use-v1",
      },
      payment_intent_data: {
        metadata: {
          app: "peptide-products",
          order_id: order.id,
          checkout_version: "pp-dynamic-payments-v1",
        research_use_accepted: "true",
        research_declaration_version: body.researchDeclarationVersion || "research-use-v1",
        },
      },
    });

    if (!session.url) throw new Error("Stripe did not return a checkout URL");

    await updateOrderStripeSessionId({ orderId: order.id, sessionId: session.id });

    return NextResponse.json({
      ok: true,
      orderId: order.id,
      paymentMethod: "card",
      checkoutUrl: session.url,
      subtotal,
      promoDiscount: 0,
      shipping,
      total,
    });
  } catch (error) {
    console.error("STRIPE CHECKOUT ERROR:", error);
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "Unable to start secure card checkout." },
      { status: 500 }
    );
  }
}
