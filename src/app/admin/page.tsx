import Link from "next/link";
import { isKvConfigured, listOrders } from "@/lib/orders";
import {
  dailyRevenue,
  grossRevenue,
  netRevenue,
  ordersSince,
  paidOrders,
  productPerformance,
  returningCustomerCount,
  startOfLocalDay,
  uniqueCustomerCount,
} from "@/lib/adminAnalytics";
import { products } from "@/data/products";

export const dynamic = "force-dynamic";

function formatGBP(value: number) {
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(value);
}

function formatDate(value: string | null | undefined) {
  if (!value) return "—";
  return new Date(value).toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" });
}

export default async function AdminDashboardPage() {
  const orders = isKvConfigured() ? await listOrders(1500) : [];
  const now = new Date();
  const todayStart = startOfLocalDay(now);
  const weekStart = startOfLocalDay(now);
  weekStart.setDate(weekStart.getDate() - 6);
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);

  const today = ordersSince(orders, todayStart);
  const week = ordersSince(orders, weekStart);
  const month = ordersSince(orders, monthStart);
  const paid = paidOrders(orders);
  const pending = orders.filter((order) => order.status === "pending");
  const awaitingDispatch = orders.filter((order) => order.status === "paid" && !order.trackingNumber);
  const shipped = orders.filter((order) => order.status === "shipped");
  const lowStock = products.filter((product) => product.stockStatus !== "in_stock");
  const daily = dailyRevenue(orders, 14);
  const maxDaily = Math.max(1, ...daily.map((row) => row.revenue));
  const topProducts = productPerformance(orders).slice(0, 5);
  const recentPaid = paid.slice(0, 8);

  return (
    <main className="mx-auto max-w-7xl px-4 py-7 sm:px-6 sm:py-10">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-700">PP Business Command Centre</div>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-ink sm:text-4xl">Admin Dashboard</h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">
            Sales, fulfilment, customers and finance in one place. Revenue figures use paid and shipped orders only.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
          <Link href="/admin/orders" className="rounded-xl2 bg-accent px-4 py-3 text-center text-sm font-extrabold text-white shadow-soft">Orders</Link>
          <Link href="/admin/customers" className="rounded-xl2 border border-line bg-white px-4 py-3 text-center text-sm font-extrabold text-ink shadow-soft">Customers</Link>
          <Link href="/admin/reports" className="rounded-xl2 border border-emerald-200 bg-emerald-50 px-4 py-3 text-center text-sm font-extrabold text-emerald-900 shadow-soft">Bank & accountant</Link>
          <Link href="/admin/analytics" className="rounded-xl2 border border-purple-200 bg-purple-50 px-4 py-3 text-center text-sm font-extrabold text-purple-900 shadow-soft">Analytics</Link>
        </div>
      </div>

      {!isKvConfigured() ? (
        <div className="mt-8 rounded-[1.75rem] border border-red-200 bg-red-50 p-6 text-red-900 shadow-soft">REDIS_URL is not configured.</div>
      ) : (
        <>
          <section className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {[
              ["Today", formatGBP(netRevenue(today)), `${paidOrders(today).length} paid orders`],
              ["Last 7 days", formatGBP(netRevenue(week)), `${paidOrders(week).length} paid orders`],
              ["This month", formatGBP(netRevenue(month)), `${paidOrders(month).length} paid orders`],
              ["All loaded revenue", formatGBP(netRevenue(orders)), `${paid.length} paid / shipped`],
              ["Pending", String(pending.length), "Awaiting payment"],
              ["Awaiting dispatch", String(awaitingDispatch.length), "Paid, not shipped"],
              ["Customers", String(uniqueCustomerCount(orders)), `${returningCustomerCount(orders)} returning`],
              ["Average order", formatGBP(paid.length ? grossRevenue(orders) / paid.length : 0), "Paid orders"],
            ].map(([label, value, note]) => (
              <div key={label} className="rounded-[1.4rem] border border-line bg-white p-4 shadow-soft sm:p-5">
                <div className="text-[11px] font-extrabold uppercase tracking-wide text-muted">{label}</div>
                <div className="mt-2 text-2xl font-black text-ink sm:text-3xl">{value}</div>
                <div className="mt-1 text-xs text-muted sm:text-sm">{note}</div>
              </div>
            ))}
          </section>

          <section className="mt-7 grid gap-6 xl:grid-cols-[1.4fr_0.6fr]">
            <div className="rounded-[1.75rem] border border-line bg-white p-5 shadow-soft sm:p-6">
              <div className="flex items-end justify-between gap-3">
                <div>
                  <h2 className="text-xl font-extrabold text-ink">14-day net sales</h2>
                  <p className="mt-1 text-sm text-muted">After refunds and recorded adjustments.</p>
                </div>
                <Link href="/admin/analytics" className="text-sm font-extrabold text-accent hover:underline">Full analytics</Link>
              </div>
              <div className="mt-6 flex h-52 items-end gap-1.5 sm:gap-2">
                {daily.map((row) => (
                  <div key={row.key} className="flex min-w-0 flex-1 flex-col items-center justify-end gap-2">
                    <div className="text-[9px] font-bold text-muted sm:text-[10px]">{row.revenue > 0 ? formatGBP(row.revenue) : ""}</div>
                    <div className="w-full rounded-t-lg bg-accent/80" style={{ height: `${Math.max(row.revenue > 0 ? 8 : 2, (row.revenue / maxDaily) * 150)}px` }} title={`${row.label}: ${formatGBP(row.revenue)}`} />
                    <div className="w-full truncate text-center text-[9px] font-bold text-muted sm:text-[10px]">{row.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-line bg-white p-5 shadow-soft sm:p-6">
              <h2 className="text-xl font-extrabold text-ink">Fulfilment</h2>
              <div className="mt-5 grid gap-3">
                <Link href="/admin/orders?status=awaiting-dispatch" className="rounded-xl2 border border-amber-200 bg-amber-50 p-4">
                  <div className="text-xs font-extrabold uppercase tracking-wide text-amber-800">Awaiting dispatch</div>
                  <div className="mt-1 text-3xl font-black text-amber-950">{awaitingDispatch.length}</div>
                </Link>
                <Link href="/admin/orders?status=shipped" className="rounded-xl2 border border-emerald-200 bg-emerald-50 p-4">
                  <div className="text-xs font-extrabold uppercase tracking-wide text-emerald-800">Shipped</div>
                  <div className="mt-1 text-3xl font-black text-emerald-950">{shipped.length}</div>
                </Link>
                <Link href="/admin/inventory" className="rounded-xl2 border border-blue-200 bg-blue-50 p-4">
                  <div className="text-xs font-extrabold uppercase tracking-wide text-blue-800">Unavailable products</div>
                  <div className="mt-1 text-3xl font-black text-blue-950">{lowStock.length}</div>
                </Link>
              </div>
            </div>
          </section>

          <section className="mt-7 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-line bg-white p-5 shadow-soft sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-xl font-extrabold text-ink">Recent paid orders</h2>
                <Link href="/admin/orders" className="text-sm font-extrabold text-accent hover:underline">View all</Link>
              </div>
              <div className="mt-4 space-y-3">
                {recentPaid.map((order) => (
                  <Link key={order.id} href={`/admin/orders?q=${encodeURIComponent(order.id)}`} className="block rounded-xl2 border border-line bg-panel p-4 hover:bg-white">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="font-extrabold text-ink">{order.id}</div>
                        <div className="mt-1 truncate text-sm text-muted">{order.name} · {formatDate(order.paidAt || order.createdAt)}</div>
                      </div>
                      <div className="shrink-0 font-extrabold text-ink">{formatGBP(order.total)}</div>
                    </div>
                  </Link>
                ))}
                {!recentPaid.length ? <div className="text-sm text-muted">No paid orders yet.</div> : null}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-line bg-white p-5 shadow-soft sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-xl font-extrabold text-ink">Top products</h2>
                <Link href="/admin/inventory" className="text-sm font-extrabold text-accent hover:underline">Inventory</Link>
              </div>
              <div className="mt-4 space-y-3">
                {topProducts.map((product, index) => (
                  <div key={product.id} className="rounded-xl2 border border-line bg-panel p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-xs font-extrabold uppercase tracking-wide text-muted">#{index + 1}</div>
                        <div className="mt-1 font-extrabold text-ink">{product.name}</div>
                        <div className="mt-1 text-xs text-muted">{product.units} units sold</div>
                      </div>
                      <div className="font-extrabold text-emerald-700">{formatGBP(product.revenue)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  );
}
