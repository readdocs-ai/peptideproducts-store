import { NextResponse } from "next/server";
import { updateOrderStatus, type OrderStatus } from "@/lib/orders";

export const runtime = "nodejs";

const validStatuses: OrderStatus[] = ["pending", "paid", "shipped"];

type Payload = {
  status: OrderStatus;
  trackingNumber?: string | null;
};

function bad(msg: string, status = 400) {
  return NextResponse.json({ ok: false, error: msg }, { status });
}

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  let data: Payload;

  try {
    data = (await req.json()) as Payload;
  } catch {
    return bad("Invalid JSON payload");
  }

  const { id } = await params;
  const status = data.status;
  const trackingNumber =
    typeof data.trackingNumber === "string" ? data.trackingNumber : null;

  if (!validStatuses.includes(status)) {
    return bad("Invalid order status.");
  }

  if (status === "shipped" && !trackingNumber?.trim()) {
    return bad("Tracking number is required before marking an order as shipped.");
  }

  const updated = await updateOrderStatus({
    id,
    status,
    trackingNumber,
  });

  if (!updated) {
    return bad("Order not found.", 404);
  }

  return NextResponse.json({ ok: true, order: updated });
}
