import Image from "next/image";
import Link from "next/link";
import { blingSkincare, blingStockMessage } from "@/data/blingSkincare";
import { supportWhatsAppHref } from "@/lib/supportWhatsApp";

export function BlingSkincareSection() {
  return <section id="bling-skincare" aria-labelledby="bling-skincare-heading" className="col-span-full my-6 rounded-[2rem] border border-amber-200 bg-[#fffaf4] p-5 sm:p-8">
    <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-800">BLING BEAUTY · SKINCARE COLLECTIONS</p><h2 id="bling-skincare-heading" className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">A little everyday luxury.</h2><p className="mt-4 text-sm leading-7 text-slate-700">Discover six BLING skincare collections, from £125. Contact us on WhatsApp to check stock and collection details. These listings are for enquiries only and cannot be purchased online at present.</p><p className="mt-2 text-sm leading-7 text-slate-600">Cosmetic skincare collections, presented separately from our laboratory research range.</p></div>
    <div className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{blingSkincare.map(product => <article key={product.id} data-bling-collection={product.id} className="flex h-full flex-col overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm">
      <Link href={`/skincare/${product.id}`} className="relative block aspect-square bg-[#f5eee6]" aria-label={`View ${product.name}`}><Image src={product.image} alt={product.name} fill sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 90vw" className="object-contain" /></Link>
      <div className="flex flex-1 flex-col p-5"><h3 className="text-lg font-extrabold text-slate-950"><Link href={`/skincare/${product.id}`} className="hover:underline">{product.name}</Link></h3><p className="mt-2 text-sm font-semibold leading-6 text-slate-700">{product.subtitle}</p><p className="mt-3 text-sm leading-7 text-slate-600">{product.description}</p><p className="mt-4 text-xl font-extrabold text-slate-950">£{product.priceGBP.toFixed(2)}</p><p className="mb-5 mt-2 text-xs leading-6 text-slate-600">Please contact us to check stock.</p>
        <a className="mt-auto inline-flex min-h-12 items-center justify-center rounded-xl bg-emerald-800 px-4 py-3 text-center text-sm font-bold text-white hover:bg-emerald-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800" href={supportWhatsAppHref(blingStockMessage(product))} target="_blank" rel="noopener noreferrer" aria-label={`Check stock for ${product.name} on WhatsApp`}>Check stock on WhatsApp</a>
        <Link href={`/skincare/${product.id}`} className="mt-2 inline-flex min-h-11 items-center justify-center text-sm font-bold text-slate-700 underline">View collection details</Link>
      </div></article>)}</div>
  </section>;
}
