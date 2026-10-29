import { ORDERING_PAUSED, IS_PREVIEW } from "@/lib/maintenance";
import { NextResponse } from "next/server";
import { products } from "@/data/products";
import { createOrder, type StoredOrderItem } from "@/lib/orders";
import { sendOrderEmails } from "@/lib/email";
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

function roundGBP(value: number) {
  return Math.round(value * 100) / 100;
}

function normaliseQty(value: number | string | undefined) {
  // Reject fractional, negative and excessive quantities rather than silently changing an order.
  const qty = Number(value);
  if (!Number.isSafeInteger(qty) || qty < 1 || qty > 99) return 0;
  return qty;
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

    if (
      ENQUIRY_ONLY_PRODUCT_IDS.has(productId) ||
      product?.enquiryOnly ||
      product?.informationOnly
    ) {
      throw new Error("One or more products are not available for direct online ordering.");
    }
    if (!product || product.stockStatus !== "in_stock" || qty < 1) {
      throw new Error("One or more cart items are invalid or unavailable.");
    }

    const existing = merged.get(product.id);
    if ((existing?.qty || 0) + qty > 99) {
      throw new Error("Maximum quantity per product is 99.");
    }
    merged.set(product.id, {
      id: product.id,
      name: product.name,
      qty: (existing?.qty || 0) + qty,
      priceGBP: product.priceGBP,
    });
  }

  return Array.from(merged.values());
}

export async function POST(req: Request) {
  if (ORDERING_PAUSED) return NextResponse.json({ ok: false, error: "New orders are temporarily suspended for maintenance." }, { status: 503 });
  try {
    const declaredSize = Number(req.headers.get("content-length") || "0");
    if (declaredSize > 32768) {
      return NextResponse.json({ ok: false, error: "Checkout request is too large." }, { status: 413 });
    }
    const parsed: unknown = await req.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return NextResponse.json({ ok: false, error: "Invalid checkout details." }, { status: 400 });
    }
    const body = parsed as Body;
    const address = body.shippingAddress;
    const textFields = [body.name, body.email, body.phone,
      address?.line1, address?.line2, address?.city, address?.state,
      address?.postalCode, address?.country, body.researchDeclarationVersion];
    if (textFields.some((value) => value !== undefined && typeof value !== "string")) {
      return NextResponse.json({ ok: false, error: "Invalid checkout details." }, { status: 400 });
    }
    if (body.website !== undefined && typeof body.website !== "string") {
      return NextResponse.json({ ok: false, error: "Invalid checkout details." }, { status: 400 });
    }
    const name = body.name?.trim() || "";
    const email = body.email?.trim().toLowerCase() || "";
    // Preview is restricted to the explicitly designated test inbox.
    if (IS_PREVIEW && (!process.env.PP_TEST_ORDER_EMAIL?.trim() ||
        email !== process.env.PP_TEST_ORDER_EMAIL.trim().toLowerCase())) {
      return NextResponse.json({ ok: false, error: "Preview testing only: use the designated test email address." }, { status: 403 });
    }
    const phone = body.phone?.trim() || "";
    const rawItems = Array.isArray(body.items) ? body.items : [];
    if (rawItems.some((item) => !item || typeof item !== "object" || Array.isArray(item))) {
      return NextResponse.json({ ok: false, error: "Invalid cart items." }, { status: 400 });
    }
    if (rawItems.length > 100) {
      return NextResponse.json({ ok: false, error: "Too many cart items." }, { status: 400 });
    }
    if (body.shippingAddress && (typeof body.shippingAddress !== "object" || Array.isArray(body.shippingAddress))) {
      return NextResponse.json({ ok: false, error: "Invalid shipping address." }, { status: 400 });
    }
    const shippingAddress = {
      line1: body.shippingAddress?.line1?.trim() || "",
      line2: body.shippingAddress?.line2?.trim() || "",
      city: body.shippingAddress?.city?.trim() || "",
      state: body.shippingAddress?.state?.trim() || "",
      postalCode: body.shippingAddress?.postalCode?.trim() || "",
      country: body.shippingAddress?.country?.trim().toUpperCase() || "",
    };

    if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || phone.length < 7) {
      return NextResponse.json({ ok: false, error: "Valid contact details are required." }, { status: 400 });
    }
    if (!shippingAddress.line1 || !shippingAddress.city || !shippingAddress.postalCode ||
        !/^(GIR\s?0AA|(?:[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}))$/i.test(shippingAddress.postalCode)) {
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

    const accountName = process.env.BANK_TRANSFER_ACCOUNT_NAME?.trim() || "";
    const sortCode = process.env.BANK_TRANSFER_SORT_CODE || "";
    const accountNumber = process.env.BANK_TRANSFER_ACCOUNT_NUMBER || "";
    if (!accountName || !/^\d{6}$/.test(sortCode.replace(/\D/g, "")) || !/^\d{8}$/.test(accountNumber.replace(/\D/g, ""))) {
      return NextResponse.json({ ok: false, error: "Bank transfer is temporarily unavailable. Please contact us before placing an order." }, { status: 503 });
    }

    const order = await createOrder({
      name, email, phone,
      marketingOptIn: body.marketingOptIn === true,
      researchUseAccepted: true,
      researchDeclarationVersion: body.researchDeclarationVersion || "research-use-v1",
      shippingRegion, shippingAddress, subtotal, shipping, total, items,
      paymentMethod: "bank_transfer",
    });

    // The order is saved first. An email failure must not create duplicate orders.
    try {
      await sendOrderEmails({
        orderId: order.id, customerName: name, customerEmail: email, customerPhone: phone,
        paymentMethod: "bank_transfer", subtotalGBP: subtotal, shippingGBP: shipping,
        totalGBP: total, items, shippingRegion, shippingAddress,
      });
    } catch (emailError) {
      console.error("BANK TRANSFER ORDER EMAIL ERROR:", emailError);
    }

    return NextResponse.json({
      ok: true, orderId: order.id, paymentMethod: "bank_transfer", subtotal, shipping, total,
      bank: { accountName, sortCode, accountNumber },
    });
  } catch (error) {
    console.error("BANK TRANSFER CHECKOUT ERROR:", error);
    return NextResponse.json({ ok: false, error: "Unable to place the order. Please contact us if the problem continues." }, { status: 500 });
  }
}
