import Link from "next/link";
import { isKvConfigured, listOrders } from "@/lib/orders";
import {
  dailyRevenue,
  monthlyRevenue,
  netRevenue,
  paidOrders,
  productPerformance,
  returningCustomerCount,
  uniqueCustomerCount,
} from "@/lib/adminAnalytics";

export const dynamic = "force-dynamic";

function gbp(value: number) {
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(value);
}

function countryName(code: string) {
  const names: Record<string, string> = { GB: "United Kingdom", US: "United States", CA: "Canada", AU: "Australia", NZ: "New Zealand", IE: "Ireland", DE: "Germany", FR: "France", ES: "Spain", IT: "Italy", NL: "Netherlands", BE: "Belgium", SE: "Sweden", NO: "Norway", DK: "Denmark", CH: "Switzerland", AT: "Austria", PT: "Portugal", SA: "Saudi Arabia", AE: "United Arab Emirates" };
  return names[code] || code || "Unknown";
}

export default async function AdminAnalyticsPage() {
  const orders = isKvConfigured() ? await listOrders(2000) : [];
  const paid = paidOrders(orders);
  const daily = dailyRevenue(orders, 30);
  const monthly = monthlyRevenue(orders, 6);
  const products = productPerformance(orders).slice(0, 10);
  const maxDaily = Math.max(1, ...daily.map((row) => row.revenue));
  const maxMonthly = Math.max(1, ...monthly.map((row) => row.revenue));

  const countries = new Map<string, { orders: number; revenue: number }>();
  for (const order of paid) {
    const code = order.shippingAddress?.country || "";
    const current = countries.get(code) || { orders: 0, revenue: 0 };
    current.orders += 1;
    current.revenue += order.total;
    countries.set(code, current);
  }
  const countryRows = Array.from(countries.entries())
    .map(([code, stats]) => ({ code, ...stats }))
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, 10);

  const unique = uniqueCustomerCount(orders);
  const returning = returningCustomerCount(orders);
  const repeatRate = unique ? (returning / unique) * 100 : 0;

  return (
    <main className="mx-auto max-w-7xl px-4 py-7 sm:px-6 sm:py-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-purple-700">Business intelligence</div>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-ink">Sales Analytics</h1>
          <p className="mt-2 text-sm text-muted">Paid and shipped orders only. Designed to stay lightweight on Redis.</p>
        </div>
        <Link href="/admin" className="rounded-xl2 border border-line bg-white px-5 py-3 text-center text-sm font-extrabold text-ink shadow-soft">Back to dashboard</Link>
      </div>

      <section className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {[
          ["Net revenue", gbp(netRevenue(orders))],
          ["Paid orders", String(paid.length)],
          ["Unique customers", String(unique)],
          ["Repeat customer rate", `${repeatRate.toFixed(1)}%`],
        ].map(([label, value]) => (
          <div key={label} className="rounded-[1.4rem] border border-line bg-white p-4 shadow-soft sm:p-5">
            <div className="text-[11px] font-extrabold uppercase tracking-wide text-muted">{label}</div>
            <div className="mt-2 text-2xl font-black text-ink sm:text-3xl">{value}</div>
          </div>
        ))}
      </section>

      <section className="mt-7 grid gap-6 xl:grid-cols-2">
        <div className="rounded-[1.75rem] border border-line bg-white p-5 shadow-soft sm:p-6">
          <h2 className="text-xl font-extrabold text-ink">Last 30 days</h2>
          <div className="mt-6 flex h-56 items-end gap-1">
            {daily.map((row) => (
              <div key={row.key} className="flex min-w-0 flex-1 flex-col items-center justify-end gap-1">
                <div className="w-full rounded-t bg-accent/75" style={{ height: `${Math.max(row.revenue > 0 ? 5 : 1, (row.revenue / maxDaily) * 180)}px` }} title={`${row.label}: ${gbp(row.revenue)}`} />
              </div>
            ))}
          </div>
          <div className="mt-2 flex justify-between text-xs font-bold text-muted"><span>{daily[0]?.label}</span><span>{daily[daily.length - 1]?.label}</span></div>
        </div>

        <div className="rounded-[1.75rem] border border-line bg-white p-5 shadow-soft sm:p-6">
          <h2 className="text-xl font-extrabold text-ink">Six-month trend</h2>
          <div className="mt-6 flex h-56 items-end gap-4">
            {monthly.map((row) => (
              <div key={row.key} className="flex min-w-0 flex-1 flex-col items-center justify-end gap-2">
                <div className="text-[10px] font-bold text-muted">{gbp(row.revenue)}</div>
                <div className="w-full rounded-t-lg bg-purple-500/80" style={{ height: `${Math.max(row.revenue > 0 ? 8 : 2, (row.revenue / maxMonthly) * 160)}px` }} />
                <div className="text-[10px] font-bold text-muted">{row.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-7 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[1.75rem] border border-line bg-white p-5 shadow-soft sm:p-6">
          <h2 className="text-xl font-extrabold text-ink">Top products</h2>
          <div className="mt-4 space-y-3">
            {products.map((product, index) => (
              <div key={product.id} className="flex items-center justify-between gap-3 rounded-xl2 border border-line bg-panel p-4">
                <div><div className="text-xs font-extrabold text-muted">#{index + 1}</div><div className="font-extrabold text-ink">{product.name}</div><div className="text-xs text-muted">{product.units} units</div></div>
                <div className="font-extrabold text-emerald-700">{gbp(product.revenue)}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[1.75rem] border border-line bg-white p-5 shadow-soft sm:p-6">
          <h2 className="text-xl font-extrabold text-ink">Sales by country</h2>
          <div className="mt-4 space-y-3">
            {countryRows.map((row) => (
              <div key={row.code || "unknown"} className="flex items-center justify-between gap-3 rounded-xl2 border border-line bg-panel p-4">
                <div><div className="font-extrabold text-ink">{countryName(row.code)}</div><div className="text-xs text-muted">{row.orders} orders</div></div>
                <div className="font-extrabold text-ink">{gbp(row.revenue)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
