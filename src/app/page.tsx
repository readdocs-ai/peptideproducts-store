import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { brand } from "@/theme/brand";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Retatrutide 40mg UK | Research Peptides & Lab Compounds",
  description:
    "Retatrutide 40mg Pen and research-use-only laboratory compounds. Clear pricing, secure card checkout, selected test reports and tracked UK dispatch.",
  alternates: { canonical: "https://www.peptideproducts.co.uk" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    title: "Retatrutide 40mg UK | Peptide Products",
    description:
      "Flagship Retatrutide 40mg research peptide pen with a wider laboratory research catalogue and tracked UK dispatch.",
    url: "https://www.peptideproducts.co.uk",
    siteName: "Peptide Products",
    images: [
      {
        url: "https://www.peptideproducts.co.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Peptide Products Retatrutide 40mg research catalogue",
      },
    ],
  },
};

function getProduct(id: string) {
  return products.find((product) => product.id === id);
}

const proofPoints = [
  ["40mg", "Total Retatrutide strength"],
  ["Card", "Secure Stripe checkout"],
  ["Tracked", "UK dispatch updates"],
  ["Selected", "Quality documentation"],
] as const;

const serviceCards = [
  {
    label: "01",
    title: "Clear product information",
    copy: "Pack size, pricing, stock and available documentation are shown before checkout.",
  },
  {
    label: "02",
    title: "Secure card payment",
    copy: "Card transactions are processed securely through Stripe with order confirmation by email.",
  },
  {
    label: "03",
    title: "Tracked dispatch",
    copy: "Paid orders are prepared for dispatch and tracking details are added when available.",
  },
] as const;

export default function Home() {
  const featured = [
    getProduct("retatrutide"),
    getProduct("tirzepatide-tr15-15mg"),
    getProduct("ghk-cu-100mg"),
    getProduct("bpc-157-10mg"),
  ].filter(Boolean) as typeof products;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brand.name,
    url: "https://www.peptideproducts.co.uk",
    logo: "https://www.peptideproducts.co.uk/favicon.svg",
    contactPoint: {
      "@type": "ContactPoint",
      email: brand.supportEmail,
      telephone: brand.phone,
      contactType: "customer support",
      areaServed: "GB",
    },
  };

  return (
    <div>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        <section className="relative isolate overflow-hidden bg-[#07101f] text-white">
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_14%_18%,rgba(37,99,235,0.42),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(184,146,74,0.30),transparent_28%),linear-gradient(135deg,#07101f_0%,#101a2c_52%,#07101f_100%)]" />
          <div className="absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:52px_52px]" />

          <Container>
            <div className="grid gap-8 py-8 sm:py-12 lg:min-h-[720px] lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-10 lg:py-20">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-white/75 backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Research-use-only flagship
                </div>

                <h1 className="mt-5 max-w-3xl text-[2.7rem] font-black leading-[0.96] tracking-[-0.055em] sm:mt-6 sm:text-6xl lg:text-7xl">
                  Retatrutide 40mg,
                  <span className="block bg-gradient-to-r from-white via-[#f7e4ae] to-[#d9b761] bg-clip-text text-transparent">
                    presented with precision.
                  </span>
                </h1>

                <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/72 sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
                  Our main Retatrutide research peptide pen, supplied in the Alluvi presentation with clear pricing, secure card checkout and tracked UK dispatch.
                </p>

                <div className="mt-7 grid gap-3 sm:mt-8 sm:flex sm:flex-wrap">
                  <Link
                    href="/product/retatrutide"
                    className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-sm font-black text-slate-950 shadow-2xl transition hover:-translate-y-0.5"
                  >
                    View Retatrutide 40mg
                  </Link>
                  <Link
                    href="/shop"
                    className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-black text-white backdrop-blur transition hover:bg-white/15"
                  >
                    Explore research catalogue
                  </Link>
                </div>

                <div className="mt-8 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:mt-10 sm:grid-cols-4">
                  {proofPoints.map(([value, label]) => (
                    <div key={label} className="bg-[#0b1526]/85 p-4">
                      <div className="text-lg font-black text-white">{value}</div>
                      <div className="mt-1 text-[11px] leading-5 text-white/50">{label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/product/retatrutide"
                className="group relative block min-h-[360px] overflow-hidden rounded-[1.75rem] border border-white/15 sm:min-h-[460px] sm:rounded-[2.5rem] lg:min-h-[520px] bg-[radial-gradient(circle_at_50%_25%,#fff8e7_0%,#f3dda0_34%,#d9b969_68%,#8f681e_100%)] shadow-[0_40px_120px_rgba(0,0,0,0.42)]"
              >
                <div className="absolute left-4 top-4 z-10 rounded-full sm:left-6 sm:top-6 border border-white/60 bg-white/100 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 backdrop-blur">
                  Alluvi presentation
                </div>
                <Image
                  src="/products/alluvi-retatrutide-40mg-hero.webp"
                  alt="Retatrutide 40mg Alluvi presentation"
                  fill
                  priority
                  sizes="(min-width: 1024px) 54vw, 100vw"
                  className="object-cover object-center transition duration-700 group-hover:scale-[1.025]"
                />
                <div className="absolute inset-x-4 bottom-4 z-10 rounded-[1.25rem] sm:inset-x-6 sm:bottom-6 sm:rounded-[1.5rem] border border-white/55 bg-white/105 p-5 text-slate-950 shadow-2xl backdrop-blur">
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                        Flagship line
                      </div>
                      <div className="mt-1 text-2xl font-black tracking-[-0.04em]">
                        Retatrutide 40mg Pen
                      </div>
                    </div>
                    <div className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-black text-emerald-700">
                      In stock
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </Container>
        </section>

        <section className="relative z-10 -mt-1 border-b border-slate-200 bg-white">
          <Container>
            <div className="grid gap-px bg-slate-200 md:grid-cols-3">
              {serviceCards.map((card) => (
                <div key={card.label} className="bg-white px-6 py-8 md:px-8">
                  <div className="text-xs font-black tracking-[0.2em] text-blue-700">{card.label}</div>
                  <h2 className="mt-3 text-xl font-black tracking-[-0.03em] text-slate-950">
                    {card.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{card.copy}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-10 sm:py-14 lg:py-20">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-700">
                  Curated research catalogue
                </p>
                <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-slate-950 md:text-5xl">
                  Begin with Retatrutide.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                  Our flagship line leads a wider catalogue of metabolic, regenerative and laboratory research products.
                </p>
              </div>
              <Link href="/shop" className="text-sm font-black text-blue-700 hover:text-slate-950">
                Browse all products →
              </Link>
            </div>

            <div className="mt-7 grid gap-5 sm:mt-9 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
              {featured.map((product) => (
                <ProductCard key={product.id} p={product} />
              ))}
            </div>
          </Container>
        </section>

        <section className="border-y border-slate-200 bg-white py-10 sm:py-14 lg:py-20">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-700">
                  A clearer way to procure
                </p>
                <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-slate-950 md:text-5xl">
                  Premium presentation. Practical information.
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-600">
                  The storefront is designed to make research purchasing easier: compare specifications, review available quality information, confirm delivery and complete payment securely.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/quality-assurance" className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white">
                    Quality information
                  </Link>
                  <Link href="/shipping" className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-950">
                    Delivery information
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Retatrutide research hub", "Dedicated UK information and supporting research pages.", "/retatrutide"],
                  ["Customer reviews", "Read ordering, packaging and delivery feedback.", "/reviews"],
                  ["International orders", "Selected international delivery and ordering guidance.", "/international-orders"],
                  ["Order support", "Contact support before or after checkout.", "/contact"],
                ].map(([title, copy, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="group rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                  >
                    <div className="text-lg font-black tracking-[-0.03em] text-slate-950 group-hover:text-blue-700">
                      {title}
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{copy}</p>
                    <div className="mt-5 text-sm font-black text-slate-950">Open page →</div>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="py-10 sm:py-14 lg:py-20">
          <Container>
            <div className="overflow-hidden rounded-[2.5rem] bg-[#0b1220] text-white shadow-[0_30px_100px_rgba(11,18,32,0.2)]">
              <div className="grid gap-8 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-300">
                    Flagship research line
                  </p>
                  <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] md:text-5xl">
                    Retatrutide 40mg is ready to view.
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-white/65">
                    Review presentation, pack details, pricing, stock and checkout information on the main product page.
                  </p>
                </div>
                <Link
                  href="/product/retatrutide"
                  className="rounded-2xl bg-white px-6 py-3.5 text-center text-sm font-black text-slate-950 shadow-xl"
                >
                  Open Retatrutide product
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
