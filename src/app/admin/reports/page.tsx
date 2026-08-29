import Link from "next/link";
import { isKvConfigured, listOrders } from "@/lib/orders";

export const dynamic = "force-dynamic";

type RangeKey =
  | "today"
  | "yesterday"
  | "last7"
  | "last30"
  | "thisMonth"
  | "lastMonth"
  | "all";

function formatGBP(value: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(value);
}

function formatDate(value: string | null | undefined) {
  if (!value) return "—";
  return new Date(value).toLocaleString("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function startOfDay(date: Date) {
  const copy = new Date(date);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

function endOfDay(date: Date) {
  const copy = new Date(date);
  copy.setHours(23, 59, 59, 999);
  return copy;
}

function getRange(range: RangeKey) {
  const now = new Date();

  if (range === "today") return { start: startOfDay(now), end: endOfDay(now) };

  if (range === "yesterday") {
    const date = new Date(now);
    date.setDate(date.getDate() - 1);
    return { start: startOfDay(date), end: endOfDay(date) };
  }

  if (range === "last7") {
    const start = startOfDay(now);
    start.setDate(start.getDate() - 6);
    return { start, end: endOfDay(now) };
  }

  if (range === "last30") {
    const start = startOfDay(now);
    start.setDate(start.getDate() - 29);
    return { start, end: endOfDay(now) };
  }

  if (range === "thisMonth") {
    return {
      start: new Date(now.getFullYear(), now.getMonth(), 1),
      end: endOfDay(now),
    };
  }

  if (range === "lastMonth") {
    return {
      start: new Date(now.getFullYear(), now.getMonth() - 1, 1),
      end: new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59, 999),
    };
  }

  return null;
}

function isGenuineSale(order: Awaited<ReturnType<typeof listOrders>>[number]) {
  return order.status === "paid" || order.status === "shipped";
}

export default async function AdminReportsPage({
  searchParams,
}: {
  searchParams?: { range?: string };
}) {
  const rawRange = searchParams?.range || "last30";
  const allowedRanges: RangeKey[] = [
    "today",
    "yesterday",
    "last7",
    "last30",
    "thisMonth",
    "lastMonth",
    "all",
  ];
  const range = allowedRanges.includes(rawRange as RangeKey)
    ? (rawRange as RangeKey)
    : "last30";

  const allOrders = isKvConfigured() ? await listOrders(5000) : [];
  const selectedRange = getRange(range);

  const filteredOrders = selectedRange
    ? allOrders.filter((order) => {
        const date = new Date(order.paidAt || order.createdAt);
        return date >= selectedRange.start && date <= selectedRange.end;
      })
    : allOrders;

  const genuineSales = filteredOrders.filter(isGenuineSale);
  const pendingOrders = filteredOrders.filter((order) => order.status === "pending");
  const cancelledOrders = filteredOrders.filter((order) => order.status === "cancelled");
  const grossSales = genuineSales.reduce((sum, order) => sum + order.total, 0);
  const refunded = genuineSales.reduce((sum, order) => sum + order.refundedAmount, 0);
  const netSales = genuineSales.reduce((sum, order) => {
    if (order.adjustedTotal !== null) return sum + order.adjustedTotal;
    return sum + Math.max(0, order.total - order.refundedAmount);
  }, 0);
  const shippingIncome = genuineSales.reduce((sum, order) => sum + order.shipping, 0);
  const averageOrderValue = genuineSales.length ? grossSales / genuineSales.length : 0;

  const uniqueCustomers = new Set(
    genuineSales.map((order) => order.email.trim().toLowerCase()).filter(Boolean),
  ).size;

  const customerCounts = new Map<string, number>();
  for (const order of genuineSales) {
    const email = order.email.trim().toLowerCase();
    if (!email) continue;
    customerCounts.set(email, (customerCounts.get(email) || 0) + 1);
  }
  const returningCustomers = Array.from(customerCounts.values()).filter((count) => count > 1).length;

  const productStats = new Map<string, { name: string; units: number; revenue: number }>();
  for (const order of genuineSales) {
    for (const item of order.items) {
      const current = productStats.get(item.id) || { name: item.name, units: 0, revenue: 0 };
      current.units += item.qty;
      current.revenue += item.priceGBP * item.qty;
      productStats.set(item.id, current);
    }
  }
  const topProducts = Array.from(productStats.values())
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, 8);

  const rangeOptions: Array<[RangeKey, string]> = [
    ["today", "Today"],
    ["yesterday", "Yesterday"],
    ["last7", "Last 7 days"],
    ["last30", "Last 30 days"],
    ["thisMonth", "This month"],
    ["lastMonth", "Last month"],
    ["all", "All time"],
  ];

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-emerald-700">PP 8.2 Finance</div>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-ink">Bank & Accountant Centre</h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">
            Review genuine paid sales, refunds, shipping income, customer activity, top products and Stripe references. Cancelled and unpaid orders are excluded from genuine-sales totals.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href="/admin" className="rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel">
            Dashboard
          </Link>
          <Link href="/admin/orders" className="rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel">
            Back to orders
          </Link>
          <Link href={`/admin/reports/export?range=${range}`} className="rounded-xl2 bg-emerald-600 px-5 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-emerald-700">
            Download bank-ready CSV
          </Link>
        </div>
      </div>

      {!isKvConfigured() ? (
        <div className="rounded-[1.75rem] border border-line bg-white p-6 shadow-soft">
          <div className="text-lg font-extrabold text-ink">Redis is not configured</div>
          <div className="mt-2 text-sm text-muted">Add REDIS_URL to view reports.</div>
        </div>
      ) : (
        <>
          <div className="mb-6 flex flex-wrap gap-2">
            {rangeOptions.map(([value, label]) => (
              <Link key={value} href={`/admin/reports?range=${value}`} className={
                "rounded-full border px-4 py-2 text-sm font-extrabold shadow-soft " +
                (range === value ? "border-emerald-600 bg-emerald-600 text-white" : "border-line bg-white text-ink hover:bg-panel")
              }>
                {label}
              </Link>
            ))}
          </div>

          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              ["Gross paid sales", formatGBP(grossSales), `${genuineSales.length} genuine paid order${genuineSales.length === 1 ? "" : "s"}`],
              ["Net sales", formatGBP(netSales), "After refunds and manual adjustments"],
              ["Refunds recorded", formatGBP(refunded), "Recorded against paid or shipped orders"],
              ["Average order value", formatGBP(averageOrderValue), "Across genuine paid orders"],
              ["Shipping income", formatGBP(shippingIncome), "Paid delivery charges"],
              ["Unique customers", String(uniqueCustomers), `${returningCustomers} returning customer${returningCustomers === 1 ? "" : "s"}`],
              ["Pending checkouts", String(pendingOrders.length), "Not included in bank totals"],
              ["Cancelled orders", String(cancelledOrders.length), "Not included in bank totals"],
            ].map(([label, value, note]) => (
              <div key={label} className="rounded-[1.5rem] border border-line bg-white p-5 shadow-soft">
                <div className="text-xs font-extrabold uppercase tracking-wide text-muted">{label}</div>
                <div className="mt-2 text-3xl font-black text-ink">{value}</div>
                <div className="mt-1 text-sm text-muted">{note}</div>
              </div>
            ))}
          </section>

          <section className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[1.75rem] border border-line bg-white p-6 shadow-soft">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl font-extrabold text-ink">Genuine paid orders</h2>
                  <p className="mt-1 text-sm text-muted">Paid and shipped orders only.</p>
                </div>
                <div className="text-sm font-extrabold text-emerald-700">{formatGBP(grossSales)}</div>
              </div>

              <div className="mt-5 overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-line text-xs font-extrabold uppercase tracking-wide text-muted">
                      <th className="px-3 py-3">Order</th>
                      <th className="px-3 py-3">Paid</th>
                      <th className="px-3 py-3">Customer</th>
                      <th className="px-3 py-3">Status</th>
                      <th className="px-3 py-3 text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {genuineSales.slice(0, 50).map((order) => (
                      <tr key={order.id} className="border-b border-line/70">
                        <td className="px-3 py-3 font-extrabold text-ink">{order.id}</td>
                        <td className="px-3 py-3 text-muted">{formatDate(order.paidAt || order.createdAt)}</td>
                        <td className="px-3 py-3">
                          <div className="font-semibold text-ink">{order.name}</div>
                          <div className="text-xs text-muted">{order.email}</div>
                        </td>
                        <td className="px-3 py-3 capitalize text-muted">{order.status}</td>
                        <td className="px-3 py-3 text-right font-extrabold text-ink">{formatGBP(order.total)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {genuineSales.length === 0 ? (
                  <div className="py-10 text-center text-sm text-muted">No genuine paid orders in this period.</div>
                ) : null}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[1.75rem] border border-line bg-white p-6 shadow-soft">
                <h2 className="text-xl font-extrabold text-ink">Top products</h2>
                <p className="mt-1 text-sm text-muted">Ranked by paid-order revenue.</p>
                <div className="mt-5 space-y-3">
                  {topProducts.map((product, index) => (
                    <div key={`${product.name}-${index}`} className="rounded-xl2 border border-line bg-panel p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-sm font-extrabold text-ink">{product.name}</div>
                          <div className="mt-1 text-xs text-muted">{product.units} unit{product.units === 1 ? "" : "s"}</div>
                        </div>
                        <div className="text-sm font-extrabold text-emerald-700">{formatGBP(product.revenue)}</div>
                      </div>
                    </div>
                  ))}
                  {topProducts.length === 0 ? <div className="text-sm text-muted">No product data yet.</div> : null}
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-blue-200 bg-blue-50 p-6 shadow-soft">
                <div className="text-xs font-extrabold uppercase tracking-wide text-blue-800">Bank report rules</div>
                <div className="mt-3 space-y-2 text-sm leading-6 text-blue-950">
                  <p>Includes only orders marked Paid or Shipped.</p>
                  <p>Excludes Pending, Cancelled and abandoned checkouts.</p>
                  <p>Includes Stripe Session ID for payment reconciliation.</p>
                  <p>Includes refunds, adjustments, Royal Mail and tracking data.</p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  );
}
