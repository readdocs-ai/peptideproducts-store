import Link from "next/link";
import { products } from "@/data/products";
import { isKvConfigured, listOrders } from "@/lib/orders";
import { productPerformance } from "@/lib/adminAnalytics";

export const dynamic = "force-dynamic";

function gbp(value: number) {
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(value);
}

export default async function AdminInventoryPage() {
  const orders = isKvConfigured() ? await listOrders(1500) : [];
  const performance = new Map(productPerformance(orders).map((row) => [row.id, row]));
  const inStock = products.filter((product) => product.stockStatus === "in_stock").length;
  const soldOut = products.length - inStock;

  return (
    <main className="mx-auto max-w-7xl px-4 py-7 sm:px-6 sm:py-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-700">Catalogue control</div>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-ink">Inventory Overview</h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">Live catalogue status plus sales performance. Stock status is still controlled in src/data/products.ts.</p>
        </div>
        <Link href="/admin" className="rounded-xl2 border border-line bg-white px-5 py-3 text-center text-sm font-extrabold text-ink shadow-soft">Back to dashboard</Link>
      </div>

      <section className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
        <div className="rounded-[1.4rem] border border-line bg-white p-5 shadow-soft"><div className="text-xs font-extrabold uppercase text-muted">Products</div><div className="mt-2 text-3xl font-black text-ink">{products.length}</div></div>
        <div className="rounded-[1.4rem] border border-emerald-200 bg-emerald-50 p-5 shadow-soft"><div className="text-xs font-extrabold uppercase text-emerald-800">In stock</div><div className="mt-2 text-3xl font-black text-emerald-950">{inStock}</div></div>
        <div className="rounded-[1.4rem] border border-red-200 bg-red-50 p-5 shadow-soft"><div className="text-xs font-extrabold uppercase text-red-800">Sold out</div><div className="mt-2 text-3xl font-black text-red-950">{soldOut}</div></div>
      </section>

      <div className="mt-7 overflow-x-auto rounded-[1.75rem] border border-line bg-white shadow-soft">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-panel text-xs font-extrabold uppercase tracking-wide text-muted">
            <tr><th className="px-5 py-4">Product</th><th className="px-5 py-4">Status</th><th className="px-5 py-4">Price</th><th className="px-5 py-4">Units sold</th><th className="px-5 py-4">Paid revenue</th></tr>
          </thead>
          <tbody>
            {products.map((product) => {
              const stats = performance.get(product.id);
              return (
                <tr key={product.id} className="border-t border-line">
                  <td className="px-5 py-4"><div className="font-extrabold text-ink">{product.name}</div><div className="mt-1 text-xs text-muted">{product.id}</div></td>
                  <td className="px-5 py-4"><span className={"rounded-full px-3 py-1 text-xs font-extrabold " + (product.stockStatus === "in_stock" ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800")}>{product.stockStatus === "in_stock" ? "In stock" : "Sold out"}</span></td>
                  <td className="px-5 py-4 font-extrabold text-ink">{gbp(product.priceGBP)}</td>
                  <td className="px-5 py-4 text-ink">{stats?.units || 0}</td>
                  <td className="px-5 py-4 font-extrabold text-ink">{gbp(stats?.revenue || 0)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}
