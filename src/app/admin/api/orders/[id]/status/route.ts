import { NextResponse } from "next/server";
import {
  getOrder,
  updateOrderCustomerDetails,
  updateOrderCustomerEmail,
  updateOrderStatus,
} from "@/lib/orders";
import { sendOrderUpdateEmail, sendShippedEmail } from "@/lib/email";

type OrderStatus = "pending" | "paid" | "shipped" | "cancelled";

function safeMoney(value: unknown) {
  const amount = Number(value);

  if (!Number.isFinite(amount)) return null;

  return Math.max(0, Math.round(amount * 100) / 100);
}

function isValidEmail(value: string) {
  const email = value.trim().toLowerCase();
  return email.length > 5 && email.includes("@") && email.includes(".");
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const body = await req.json();

    if (body.action === "update_customer_details") {
      const name = typeof body.name === "string" ? body.name.trim() : "";
      const email =
        typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
      const phone = typeof body.phone === "string" ? body.phone.trim() : "";
      const rawAddress =
        body.shippingAddress && typeof body.shippingAddress === "object"
          ? body.shippingAddress
          : {};

      const shippingAddress = {
        name: typeof rawAddress.name === "string" ? rawAddress.name.trim() : "",
        line1: typeof rawAddress.line1 === "string" ? rawAddress.line1.trim() : "",
        line2: typeof rawAddress.line2 === "string" ? rawAddress.line2.trim() : "",
        city: typeof rawAddress.city === "string" ? rawAddress.city.trim() : "",
        state: typeof rawAddress.state === "string" ? rawAddress.state.trim() : "",
        postalCode:
          typeof rawAddress.postalCode === "string" ? rawAddress.postalCode.trim() : "",
        country:
          typeof rawAddress.country === "string"
            ? rawAddress.country.trim().toUpperCase()
            : "",
      };

      if (name.length < 2) {
        return NextResponse.json(
          { error: "Customer name is required" },
          { status: 400 },
        );
      }
      if (!isValidEmail(email)) {
        return NextResponse.json(
          { error: "Valid customer email is required" },
          { status: 400 },
        );
      }
      if (!shippingAddress.line1 || !shippingAddress.city || !shippingAddress.postalCode) {
        return NextResponse.json(
          { error: "A complete delivery address is required" },
          { status: 400 },
        );
      }

      const updated = await updateOrderCustomerDetails({
        orderId: id,
        name,
        email,
        phone,
        shippingAddress,
      });

      if (!updated) {
        return NextResponse.json({ error: "Order not found" }, { status: 404 });
      }

      return NextResponse.json({ ok: true, order: updated });
    }

    if (body.action === "update_customer_email") {
      const email =
        typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

      if (!isValidEmail(email)) {
        return NextResponse.json(
          { error: "Valid customer email is required" },
          { status: 400 }
        );
      }

      const updated = await updateOrderCustomerEmail({
        orderId: id,
        email,
      });

      if (!updated) {
        return NextResponse.json({ error: "Order not found" }, { status: 404 });
      }

      return NextResponse.json({ ok: true, order: updated });
    }

    const status = body.status as OrderStatus;
    const trackingNumber =
      typeof body.trackingNumber === "string" ? body.trackingNumber : null;

    const refundedAmount = safeMoney(body.refundedAmount);
    const adjustedTotal = safeMoney(body.adjustedTotal);
    const adminNote =
      typeof body.adminNote === "string" ? body.adminNote.trim() : "";

    if (!["pending", "paid", "shipped", "cancelled"].includes(status)) {
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
      refundedAmount,
      adjustedTotal,
      adminNote,
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

    if (body.sendCustomerUpdate === true) {
      try {
        await sendOrderUpdateEmail({
          orderId: updated.id,
          customerName: updated.name,
          customerEmail: updated.email,
          status: updated.status,
          paymentMethod: updated.paymentMethod,
          totalGBP: updated.total,
          refundedAmountGBP: updated.refundedAmount,
          adjustedTotalGBP: updated.adjustedTotal,
          adminNote: updated.adminNote,
          trackingNumber: updated.trackingNumber,
        });
      } catch (emailError) {
        console.error("ORDER UPDATE EMAIL ERROR:", emailError);
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