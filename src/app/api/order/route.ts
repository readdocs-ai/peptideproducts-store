import { NextResponse } from "next/server";
import { makeOrderId, saveOrder, type StoredOrderItem } from "@/lib/orders";

export const runtime = "nodejs";

type Payload = {
  name: string;
  email: string;
  shippingRegion: "UK" | "INTL";
  subtotal: number;
  shipping: number;
  total: number;
  items: StoredOrderItem[];
};

function bad(msg: string, status = 400) {
  return NextResponse.json({ ok: false, error: msg }, { status });
}

export async function POST(req: Request) {
  let data: Payload;

  try {
    data = (await req.json()) as Payload;
  } catch {
    return bad("Invalid JSON payload");
  }

  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  const shippingRegion = data.shippingRegion;
  const subtotal = Number(data.subtotal || 0);
  const shipping = Number(data.shipping || 0);
  const total = Number(data.total || 0);
  const items = Array.isArray(data.items) ? data.items : [];

  if (!name || !email || !items.length) {
    return bad("Missing required order fields.");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return bad("Please enter a valid email address.");
  }

  const orderId = makeOrderId();

  await saveOrder({
    id: orderId,
    createdAt: Date.now(),
    customerName: name,
    customerEmail: email,
    shippingRegion,
    subtotal,
    shipping,
    total,
    status: "pending",
    paidAt: null,
    shippedAt: null,
    trackingNumber: null,
    items,
  });

  return NextResponse.json({
    ok: true,
    orderId,
  });
}
