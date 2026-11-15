import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Container } from "@/components/Container";
import { blingSkincare, blingStockMessage } from "@/data/blingSkincare";
import { supportWhatsAppHref } from "@/lib/supportWhatsApp";

type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = blingSkincare.find(p => p.id === slug);
  if (!product) return { title: "Collection not found" };
  return { title: product.name, description: `${product.subtitle}. Contact us on WhatsApp to check stock.`, alternates: { canonical: `https://www.peptideproducts.co.uk/skincare/${product.id}` }, openGraph: { title: product.name, description: product.subtitle, images: [{ url: product.image, alt: product.name }] } };
}
export default async function SkincareCollection({ params }: Props) {
  const { slug } = await params;
  const product = blingSkincare.find(p => p.id === slug);
  if (!product) notFound();
  return <><Header /><main id="main-content" className="py-8 sm:py-12"><Container>
    <Link href="/shop#bling-skincare" className="inline-flex min-h-11 items-center text-sm font-bold text-accent underline">← Back to BLING collections</Link>
    <article className="mt-5 overflow-hidden rounded-3xl border border-amber-200 bg-[#fffaf4] p-5 sm:p-8">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#f5eee6]"><Image src={product.image} alt={product.name} fill priority sizes="(min-width: 1024px) 45vw, 90vw" className="object-contain" /></div>
        <div><p className="text-xs font-bold uppercase tracking-widest text-amber-800">BLING BEAUTY · COSMETIC SKINCARE</p><h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">{product.name}</h1><p className="mt-5 text-lg font-semibold leading-8 text-slate-700">{product.subtitle}</p><p className="mt-5 text-sm leading-8 text-slate-700">{product.description}</p><p className="mt-6 text-3xl font-extrabold">£{product.priceGBP.toFixed(2)}</p>
          <p className="mt-5 rounded-xl border border-amber-200 bg-white p-4 text-sm leading-7 text-slate-700">Please contact us on WhatsApp to check stock and confirm collection details. This listing is for enquiries only. Online purchasing is not currently available.</p>
          <a href={supportWhatsAppHref(blingStockMessage(product))} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl bg-emerald-800 px-6 py-3 text-center font-bold text-white hover:bg-emerald-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800">Check stock on WhatsApp</a>
        </div>
      </div>
      <section className="mt-10 border-t border-amber-200 pt-7"><h2 className="text-xl font-extrabold text-slate-950">Collection details</h2><div className="relative mx-auto mt-5 aspect-square w-full max-w-2xl overflow-hidden rounded-2xl bg-[#f5eee6]"><Image src={product.detailImage} alt={`${product.name} packaging and collection detail`} fill sizes="(min-width: 768px) 640px, 90vw" className="object-contain" /></div></section>
    </article>
  </Container></main></>;
}
