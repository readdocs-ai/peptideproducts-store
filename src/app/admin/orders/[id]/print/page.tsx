import Link from "next/link";
import { getOrder } from "@/lib/orders";

export const dynamic = "force-dynamic";

function gbp(value: number) {
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(value);
}

export default async function PrintableOrderPage({ params }: { params: { id: string } }) {
  const order = await getOrder(decodeURIComponent(params.id));

  if (!order) {
    return <main className="mx-auto max-w-3xl p-8"><h1 className="text-2xl font-black">Order not found</h1><Link href="/admin/orders" className="mt-4 inline-block font-bold text-accent">Back to orders</Link></main>;
  }

  const address = order.shippingAddress;

  return (
    <main className="mx-auto max-w-3xl bg-white p-5 text-ink sm:p-10 print:max-w-none print:p-0">
      <div className="mb-6 flex items-center justify-between gap-4 print:hidden">
        <Link href={`/admin/orders?q=${encodeURIComponent(order.id)}`} className="rounded-xl2 border border-line px-4 py-2 text-sm font-extrabold">Back</Link>
        <div className="text-sm font-semibold text-muted">Use your browser Print command to print or save as PDF.</div>
      </div>
      <div className="border-b-2 border-ink pb-5">
        <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-muted">Peptide Products</div>
        <h1 className="mt-2 text-3xl font-black">Packing Slip / Order Record</h1>
        <div className="mt-2 font-extrabold">{order.id}</div>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <section><h2 className="font-extrabold">Customer</h2><div className="mt-2 text-sm leading-6">{order.name}<br />{order.email}<br />{order.phone || "No phone"}</div></section>
        <section><h2 className="font-extrabold">Delivery address</h2><div className="mt-2 text-sm leading-6">{address.name ? <>{address.name}<br /></> : null}{address.line1}<br />{address.line2 ? <>{address.line2}<br /></> : null}{address.city}{address.state ? `, ${address.state}` : ""}<br />{address.postalCode}<br />{address.country}</div></section>
      </div>

      <section className="mt-8">
        <h2 className="font-extrabold">Items</h2>
        <table className="mt-3 w-full border-collapse text-sm">
          <thead><tr className="border-b border-ink text-left"><th className="py-2">Product</th><th className="py-2 text-right">Qty</th><th className="py-2 text-right">Value</th></tr></thead>
          <tbody>{order.items.map((item) => <tr key={item.id} className="border-b border-line"><td className="py-3">{item.name}</td><td className="py-3 text-right">{item.qty}</td><td className="py-3 text-right">{gbp(item.priceGBP * item.qty)}</td></tr>)}</tbody>
        </table>
      </section>

      <div className="mt-6 ml-auto max-w-xs space-y-2 text-sm">
        <div className="flex justify-between"><span>Subtotal</span><strong>{gbp(order.subtotal)}</strong></div>
        <div className="flex justify-between"><span>Shipping</span><strong>{gbp(order.shipping)}</strong></div>
        <div className="flex justify-between border-t border-ink pt-2 text-base"><span>Total</span><strong>{gbp(order.total)}</strong></div>
      </div>

      <div className="mt-8 grid gap-3 text-sm sm:grid-cols-2">
        <div><strong>Status:</strong> {order.status}</div>
        <div><strong>Payment:</strong> {order.paymentMethod}</div>
        <div><strong>Tracking:</strong> {order.trackingNumber || "Not yet assigned"}</div>
        <div><strong>Stripe:</strong> {order.stripeSessionId || "—"}</div>
      </div>
      {order.adminNote ? <div className="mt-6 rounded-lg border border-line p-4 text-sm"><strong>Internal note:</strong> {order.adminNote}</div> : null}
    </main>
  );
}
