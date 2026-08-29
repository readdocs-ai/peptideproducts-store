import { NextResponse } from "next/server";
import { listOrders } from "@/lib/orders";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type RangeKey = "today" | "yesterday" | "last7" | "last30" | "thisMonth" | "lastMonth" | "all";

function startOfDay(date: Date) { const copy = new Date(date); copy.setHours(0, 0, 0, 0); return copy; }
function endOfDay(date: Date) { const copy = new Date(date); copy.setHours(23, 59, 59, 999); return copy; }

function getRange(range: RangeKey) {
  const now = new Date();
  if (range === "today") return { start: startOfDay(now), end: endOfDay(now) };
  if (range === "yesterday") { const date = new Date(now); date.setDate(date.getDate() - 1); return { start: startOfDay(date), end: endOfDay(date) }; }
  if (range === "last7") { const start = startOfDay(now); start.setDate(start.getDate() - 6); return { start, end: endOfDay(now) }; }
  if (range === "last30") { const start = startOfDay(now); start.setDate(start.getDate() - 29); return { start, end: endOfDay(now) }; }
  if (range === "thisMonth") return { start: new Date(now.getFullYear(), now.getMonth(), 1), end: endOfDay(now) };
  if (range === "lastMonth") return { start: new Date(now.getFullYear(), now.getMonth() - 1, 1), end: new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59, 999) };
  return null;
}

function csvCell(value: unknown) {
  const text = String(value ?? "");
  return `"${text.replace(/"/g, '""')}"`;
}

function isoDate(value: string | null | undefined) {
  if (!value) return "";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date.toISOString();
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const rawRange = url.searchParams.get("range") || "last30";
  const allowedRanges: RangeKey[] = ["today", "yesterday", "last7", "last30", "thisMonth", "lastMonth", "all"];
  const range = allowedRanges.includes(rawRange as RangeKey) ? (rawRange as RangeKey) : "last30";
  const selectedRange = getRange(range);
  const orders = await listOrders(5000);

  const genuineSales = orders
    .filter((order) => order.status === "paid" || order.status === "shipped")
    .filter((order) => {
      if (!selectedRange) return true;
      const date = new Date(order.paidAt || order.createdAt);
      return date >= selectedRange.start && date <= selectedRange.end;
    })
    .sort((a, b) => new Date(a.paidAt || a.createdAt).getTime() - new Date(b.paidAt || b.createdAt).getTime());

  const headers = [
    "Order number", "Order created", "Paid date", "Status", "Payment method", "Customer name",
    "Customer email", "Customer phone", "Shipping region", "Shipping name", "Address line 1",
    "Address line 2", "City", "County / state", "Postcode", "Country", "Products", "Total quantity",
    "Subtotal GBP", "Shipping GBP", "Order total GBP", "Refunded GBP", "Adjusted total GBP",
    "Net recorded GBP", "Stripe session reference", "Royal Mail status", "Royal Mail order ID",
    "Tracking number", "Shipped date", "Admin note"
  ];

  const rows = genuineSales.map((order) => {
    const products = order.items.map((item) => `${item.name} | Qty ${item.qty} | Unit £${item.priceGBP.toFixed(2)}`).join(" || ");
    const quantity = order.items.reduce((sum, item) => sum + item.qty, 0);
    const netRecorded = order.adjustedTotal !== null ? order.adjustedTotal : Math.max(0, order.total - order.refundedAmount);
    return [
      order.id, isoDate(order.createdAt), isoDate(order.paidAt), order.status, order.paymentMethod,
      order.name, order.email, order.phone, order.shippingRegion, order.shippingAddress?.name || "",
      order.shippingAddress?.line1 || "", order.shippingAddress?.line2 || "", order.shippingAddress?.city || "",
      order.shippingAddress?.state || "", order.shippingAddress?.postalCode || "", order.shippingAddress?.country || "",
      products, quantity, order.subtotal.toFixed(2), order.shipping.toFixed(2), order.total.toFixed(2),
      order.refundedAmount.toFixed(2), order.adjustedTotal === null ? "" : order.adjustedTotal.toFixed(2),
      netRecorded.toFixed(2), order.stripeSessionId || "", order.royalMailStatus || "",
      order.royalMailOrderIdentifier ?? "", order.trackingNumber || "", isoDate(order.shippedAt), order.adminNote || ""
    ];
  });

  const csv = [headers.map(csvCell).join(","), ...rows.map((row) => row.map(csvCell).join(","))].join("\r\n");
  const dateStamp = new Date().toISOString().slice(0, 10);
  const filename = `peptide-products-bank-orders-${range}-${dateStamp}.csv`;

  return new NextResponse(`\uFEFF${csv}`, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "no-store",
    },
  });
}
