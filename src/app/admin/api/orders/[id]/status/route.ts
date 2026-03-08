import { NextResponse } from "next/server";
import { getOrder, updateOrderStatus } from "@/lib/orders";
import { sendShippedEmail } from "@/lib/email";

type OrderStatus = "pending" | "paid" | "shipped";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const body = await req.json();

    const status = body.status as OrderStatus;
    const trackingNumber =
      typeof body.trackingNumber === "string" ? body.trackingNumber : null;

    if (!["pending", "paid", "shipped"].includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

    if (status === "shipped" && !trackingNumber?.trim()) {
      return NextResponse.json(
        { error: "Tracking number is required for shipped orders" },
        { status: 400 }
      );
    }

    const existing = await getOrder(id);
    if (!existing) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    const updated = await updateOrderStatus({
      orderId: id,
      status,
      trackingNumber,
    });

    if (!updated) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    if (
      status === "shipped" &&
      trackingNumber?.trim() &&
      existing.status !== "shipped"
    ) {
      try {
        await sendShippedEmail({
          orderId: updated.id,
          customerName: updated.name,
          customerEmail: updated.email,
          trackingNumber: trackingNumber.trim(),
        });
      } catch (emailError) {
        console.error("SHIPPED EMAIL ERROR:", emailError);
      }
    }

    return NextResponse.json({ ok: true, order: updated });
  } catch (error) {
    console.error("ORDER STATUS UPDATE ERROR:", error);
    return NextResponse.json(
      { error: "Failed to update order status" },
      { status: 500 }
    );
  }
}