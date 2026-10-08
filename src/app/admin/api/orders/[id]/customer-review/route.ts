import { NextResponse } from "next/server";
import { getOrder } from "@/lib/orders";
import {
  clearCustomerReviewFlag,
  createCustomerReviewFlag,
  type CustomerReviewReason,
} from "@/lib/customer-review";

const allowedReasons: CustomerReviewReason[] = [
  "complaint",
  "non_delivery",
  "refund",
  "product_issue",
  "payment_issue",
  "other",
];

export async function POST(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const order = await getOrder(params.id);
    if (!order) return NextResponse.json({ error: "Order not found" }, { status: 404 });

    const body = await req.json();
    const reason = body.reason as CustomerReviewReason;
    const note = typeof body.note === "string" ? body.note.trim() : "";

    if (!allowedReasons.includes(reason)) {
      return NextResponse.json({ error: "Please select a review reason" }, { status: 400 });
    }

    const flag = await createCustomerReviewFlag({ order, reason, note });
    return NextResponse.json({ ok: true, flag });
  } catch (error) {
    console.error("CUSTOMER REVIEW FLAG CREATE ERROR:", error);
    return NextResponse.json({ error: "Failed to create customer review flag" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const flagId = typeof body.flagId === "string" ? body.flagId.trim() : "";
    if (!flagId) return NextResponse.json({ error: "Flag id is required" }, { status: 400 });

    const flag = await clearCustomerReviewFlag(flagId);
    if (!flag) return NextResponse.json({ error: "Flag not found" }, { status: 404 });
    return NextResponse.json({ ok: true, flag });
  } catch (error) {
    console.error("CUSTOMER REVIEW FLAG CLEAR ERROR:", error);
    return NextResponse.json({ error: "Failed to clear customer review flag" }, { status: 500 });
  }
}
