import Link from "next/link";
export const metadata = { title: "Temporary Ordering Suspension | Peptide Products", robots: { index: false, follow: true } };
export default function OrderingPaused() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-center">
      <div className="rounded-2xl border border-amber-300 bg-white px-6 py-14 shadow-lg">
        <p className="mb-4 text-sm font-bold uppercase tracking-widest text-amber-700">Peptide Products</p>
        <h1 className="mb-6 text-3xl font-bold text-slate-900">Temporary Ordering Suspension</h1>
        <p className="mx-auto mb-5 max-w-xl text-lg text-slate-700">We are carrying out essential system maintenance and are temporarily unable to accept new orders.</p>
        <p className="mx-auto mb-8 max-w-xl text-slate-600">You can continue browsing our website and viewing product information. For enquiries about existing orders, please contact our support team.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/shop" className="rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white">Browse products</Link>
          <Link href="/contact" className="rounded-lg border border-slate-400 px-6 py-3 font-semibold text-slate-900">Contact support</Link>
        </div>
        <p className="mt-8 text-sm text-slate-500">Thank you for your patience. — Peptide Products Team</p>
      </div>
    </main>
  );
}
