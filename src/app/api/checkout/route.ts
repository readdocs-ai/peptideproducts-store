import { NextResponse } from "next/server";
import Stripe from "stripe";
import { products } from "@/data/products";
import { createOrder, updateOrderStripeSessionId, type StoredOrderItem } from "@/lib/orders";

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
};

const UK_SHIPPING_FEE_GBP = 0;
const INTERNATIONAL_SHIPPING_FEE_GBP = 25;
const ALLOWED_COUNTRIES = new Set([
  "GB", "US", "CA", "AU", "NZ", "IE", "DE", "FR", "ES", "IT",
  "NL", "BE", "SE", "NO", "DK", "CH", "AT", "PT", "SA", "AE",
]);
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

function isPromoEligibleProduct(productId: string) {
  return !productId.toLowerCase().includes("retatrutide");
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

function getPromoDiscountGBP(items: StoredOrderItem[]) {
  const eligibleUnitPrices: number[] = [];
  for (const item of items) {
    if (!isPromoEligibleProduct(item.id)) continue;
    for (let index = 0; index < item.qty; index += 1) {
      eligibleUnitPrices.push(item.priceGBP);
    }
  }
  return eligibleUnitPrices.length >= 3 ? roundGBP(Math.min(...eligibleUnitPrices)) : 0;
}

function buildStripeLineItems(items: StoredOrderItem[], promoDiscount: number): Stripe.Checkout.SessionCreateParams.LineItem[] {
  let discountRemaining = Math.round(promoDiscount * 100);
  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

  const orderedItems = [...items].sort((a, b) => a.priceGBP - b.priceGBP);

  for (const item of orderedItems) {
    const unitAmount = Math.round(item.priceGBP * 100);
    let quantity = item.qty;

    if (discountRemaining > 0 && isPromoEligibleProduct(item.id) && discountRemaining === unitAmount && quantity > 0) {
      if (quantity > 1) {
        lineItems.push({
          quantity: quantity - 1,
          price_data: {
            currency: "gbp",
            unit_amount: unitAmount,
            product_data: { name: item.name, metadata: { product_id: item.id } },
          },
        });
      }
      lineItems.push({
        quantity: 1,
        price_data: {
          currency: "gbp",
          unit_amount: 0,
          product_data: {
            name: `${item.name} — promotional unit`,
            metadata: { product_id: item.id, promotion: "buy_2_get_1" },
          },
        },
      });
      discountRemaining = 0;
      continue;
    }

    lineItems.push({
      quantity,
      price_data: {
        currency: "gbp",
        unit_amount: unitAmount,
        product_data: { name: item.name, metadata: { product_id: item.id } },
      },
    });
  }

  return lineItems;
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
      return NextResponse.json({ ok: false, error: "Shipping country is not supported." }, { status: 400 });
    }
    if (body.researchUseAccepted !== true) {
      return NextResponse.json({ ok: false, error: "You must accept the Research Use Declaration before continuing to payment." }, { status: 400 });
    }
    if (!rawItems.length) {
      return NextResponse.json({ ok: false, error: "Cart is empty." }, { status: 400 });
    }

    const items = buildItems(rawItems);
    const subtotal = roundGBP(items.reduce((sum, item) => sum + item.priceGBP * item.qty, 0));
    const promoDiscount = getPromoDiscountGBP(items);
    const discountedSubtotal = roundGBP(Math.max(0, subtotal - promoDiscount));
    const shipping = discountedSubtotal > 0 && !isUkCountry(shippingAddress.country)
      ? INTERNATIONAL_SHIPPING_FEE_GBP
      : UK_SHIPPING_FEE_GBP;
    const total = roundGBP(discountedSubtotal + shipping);
    const shippingRegion = isUkCountry(shippingAddress.country) ? "UK" : "International";

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
    const lineItems = buildStripeLineItems(items, promoDiscount);

    if (shipping > 0) {
      lineItems.push({
        quantity: 1,
        price_data: {
          currency: "gbp",
          unit_amount: Math.round(shipping * 100),
          product_data: { name: "International tracked shipping" },
        },
      });
    }

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
      promoDiscount,
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
