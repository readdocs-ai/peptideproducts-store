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
    "Retatrutide 40mg Pen, pre-filled research pens and laboratory peptide compounds for research use only. Clear UK pricing, secure card checkout, selected test reports and tracked UK dispatch.",
  alternates: { canonical: "https://www.peptideproducts.co.uk" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    title: "Retatrutide 40mg UK | Peptide Products",
    description:
      "Flagship Retatrutide 40mg research peptide pen with a wider UK catalogue of research pens, vials and laboratory compounds.",
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

const trustPoints = [
  ["Research use only", "Laboratory and analytical supply"],
  ["Free UK delivery", "Tracked UK dispatch"],
  ["Secure checkout", "Card payments processed securely"],
  ["Quality information", "Selected independent test reports"],
] as const;

const categoryCards = [
  {
    title: "Metabolic research",
    copy: "Retatrutide, Tirzepatide and related investigational compounds.",
    href: "/metabolic-research-compounds",
    image: "/products/alluvi-retatrutide-40mg-hero.webp",
    alt: "Retatrutide metabolic research peptide presentation",
    accent: "from-blue-50 to-cyan-50",
  },
  {
    title: "Regenerative peptides",
    copy: "BPC-157, GHK-CU, TB-500 and combination research formats.",
    href: "/regenerative-peptides",
    image: "/products/bpc-157-10mg.webp",
    alt: "BPC-157 regenerative research peptide vial",
    accent: "from-emerald-50 to-teal-50",
  },
  {
    title: "Antioxidant research",
    copy: "Glutathione and antioxidant-focused laboratory compounds.",
    href: "/antioxidant-peptides",
    image: "/products/alloya-glutathione-500mg-pen.jpg",
    alt: "Glutathione antioxidant research pen presentation",
    accent: "from-amber-50 to-yellow-50",
  },
  {
    title: "Nootropic peptides",
    copy: "Selank, Semax and related peptide research information.",
    href: "/nootropic-peptides",
    image: "/products/selank-sk10-10mg.webp",
    alt: "Selank nootropic research peptide vial",
    accent: "from-violet-50 to-purple-50",
  },
  {
    title: "All research products",
    copy: "Browse the complete Peptide Products catalogue in one place.",
    href: "/shop",
    image: "/products/synexa-glow-ghk-cu-70mg-hero.webp",
    alt: "Synexa Glow GHK-CU research product packaging",
    accent: "from-pink-50 to-rose-50",
  },
] as const;

const supportLinks = [
  ["Retatrutide research hub", "Explore supporting Retatrutide information and UK research pages.", "/retatrutide"],
  ["Research peptides UK", "Browse research-use-only peptide information and catalogue pathways.", "/research-peptides-uk"],
  ["Customer reviews", "Read customer feedback covering ordering, packaging and delivery.", "/reviews"],
  ["Delivery information", "Review current UK shipping, dispatch and tracking information.", "/shipping"],
  ["International orders", "See the current status of international delivery availability.", "/international-orders"],
  ["Customer support", "Contact the team before or after placing an order.", "/contact"],
] as const;

export default function Home() {
  const featured = [
    getProduct("retatrutide"),
    getProduct("synexa-glow-ghk-cu-70mg-pen"),
    getProduct("synexa-retatrutide-40mg"),
    getProduct("alloya-mots-c-40mg-pen"),
    getProduct("alloya-tesamorelin-20mg-pen"),
    getProduct("bpc-157-5mg"),
  ].filter(Boolean) as typeof products;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.peptideproducts.co.uk/#organization",
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
      },
      {
        "@type": "WebSite",
        "@id": "https://www.peptideproducts.co.uk/#website",
        url: "https://www.peptideproducts.co.uk",
        name: "Peptide Products",
        publisher: { "@id": "https://www.peptideproducts.co.uk/#organization" },
      },
      {
        "@type": "ItemList",
        name: "Featured Peptide Products research catalogue",
        itemListElement: featured.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `https://www.peptideproducts.co.uk/product/${product.id}`,
          name: product.name,
        })),
      },
    ],
  };

  return (
    <div className="bg-white">
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        <section className="relative isolate overflow-hidden border-b border-slate-200 bg-gradient-to-br from-[#eef7ff] via-white to-[#eefcff]">
          <div className="absolute -left-24 top-16 -z-10 h-72 w-72 rounded-full bg-blue-200/45 blur-3xl" />
          <div className="absolute -right-20 bottom-0 -z-10 h-96 w-96 rounded-full bg-cyan-200/45 blur-3xl" />
          <div className="absolute inset-0 -z-20 opacity-40 [background-image:linear-gradient(rgba(30,64,175,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(30,64,175,0.04)_1px,transparent_1px)] [background-size:44px_44px]" />

          <Container>
            <div className="grid gap-10 py-10 sm:py-14 lg:min-h-[690px] lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-12 lg:py-16">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-blue-800 shadow-sm backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Premium UK research peptide catalogue
                </div>

                <h1 className="mt-6 max-w-3xl text-[2.8rem] font-black leading-[0.95] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-[4.5rem]">
                  Retatrutide 40mg &amp; research peptides,
                  <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    presented with clarity.
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                  Explore research-use-only peptide pens, vials and laboratory compounds with clear UK pricing, current stock information, selected independent test reports and secure card checkout.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/shop"
                    className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-blue-700 px-6 py-3.5 text-sm font-black text-white shadow-[0_18px_45px_rgba(29,78,216,0.25)] transition hover:-translate-y-0.5 hover:bg-blue-800"
                  >
                    Browse all products →
                  </Link>
                  <Link
                    href="/quality-assurance"
                    className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-black text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300"
                  >
                    View quality assurance
                  </Link>
                </div>

                <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-4">
                  {trustPoints.map(([title, copy]) => (
                    <div key={title} className="rounded-2xl border border-white bg-white/85 p-4 shadow-[0_12px_35px_rgba(15,23,42,0.06)] backdrop-blur">
                      <div className="text-sm font-black text-slate-950">{title}</div>
                      <div className="mt-1 text-[11px] leading-5 text-slate-500">{copy}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[510px] lg:min-h-[590px]">
                <div className="absolute inset-4 rounded-[3rem] border border-blue-100 bg-white/65 shadow-[0_35px_100px_rgba(37,99,235,0.14)] backdrop-blur" />
                <div className="absolute left-[7%] top-[11%] h-[62%] w-[53%] overflow-hidden rounded-[2.3rem] border border-white bg-white shadow-2xl">
                  <Image
                    src="/products/alluvi-retatrutide-40mg-hero.webp"
                    alt="Alluvi Retatrutide 40mg research peptide pen presentation"
                    fill
                    priority
                    sizes="(min-width: 1024px) 34vw, 70vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-lg backdrop-blur">
                    <div className="text-[10px] font-black uppercase tracking-[0.18em] text-blue-700">Flagship research line</div>
                    <div className="mt-1 text-xl font-black tracking-[-0.03em] text-slate-950">Retatrutide 40mg Pen</div>
                  </div>
                </div>

                <Link href="/product/synexa-glow-ghk-cu-70mg-pen" className="group absolute right-[2%] top-[4%] h-[35%] w-[39%] overflow-hidden rounded-[2rem] border border-pink-100 bg-pink-50 shadow-xl transition hover:-translate-y-1">
                  <Image
                    src="/products/synexa-glow-ghk-cu-70mg-hero.webp"
                    alt="Synexa Glow GHK-CU 70mg research pen packaging"
                    fill
                    sizes="(min-width: 1024px) 25vw, 42vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-3 bottom-3 rounded-xl bg-white/95 px-3 py-2 text-xs font-black text-slate-950 shadow-md backdrop-blur">
                    New · Synexa Glow 70mg
                  </div>
                </Link>

                <Link href="/product/alloya-mots-c-40mg-pen" className="group absolute bottom-[7%] left-[18%] h-[29%] w-[27%] overflow-hidden rounded-[1.8rem] border border-cyan-100 bg-white shadow-xl transition hover:-translate-y-1">
                  <Image
                    src="/products/alloya-mots-c-40mg-pen.jpg"
                    alt="Alloya MOTS-C 40mg pre-filled research pen"
                    fill
                    sizes="(min-width: 1024px) 18vw, 34vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </Link>

                <Link href="/product/alloya-tesamorelin-20mg-pen" className="group absolute bottom-[4%] right-[22%] h-[30%] w-[26%] overflow-hidden rounded-[1.8rem] border border-amber-100 bg-white shadow-xl transition hover:-translate-y-1">
                  <Image
                    src="/products/alloya-tesamorelin-20mg-pen.jpg"
                    alt="Alloya Tesamorelin 20mg pre-filled research pen"
                    fill
                    sizes="(min-width: 1024px) 18vw, 34vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </Link>

                <Link href="/product/bpc-157-5mg" className="group absolute bottom-[11%] right-[2%] h-[24%] w-[20%] overflow-hidden rounded-[1.6rem] border border-emerald-100 bg-white shadow-xl transition hover:-translate-y-1">
                  <Image
                    src="/products/bpc-157-5mg.webp"
                    alt="BPC-157 5mg research peptide vial"
                    fill
                    sizes="(min-width: 1024px) 14vw, 28vw"
                    className="object-contain p-4 transition duration-500 group-hover:scale-105"
                  />
                </Link>

                <div className="absolute right-[9%] top-[42%] rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-black text-emerald-700 shadow-lg">
                  Pens + vials in stock
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-b border-slate-200 bg-white py-8">
          <Container>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Free UK delivery", "Tracked UK dispatch on current orders"],
                ["Secure card checkout", "Clear pricing before payment"],
                ["Independent testing", "Selected product reports available"],
                ["Customer support", "Help before and after ordering"],
              ].map(([title, copy]) => (
                <div key={title} className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-sm font-black text-white">✓</div>
                  <div>
                    <div className="text-sm font-black text-slate-950">{title}</div>
                    <div className="mt-1 text-xs leading-5 text-slate-500">{copy}</div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-12 sm:py-16 lg:py-20">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-700">Shop by research category</p>
                <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-slate-950 md:text-5xl">Explore the catalogue your way.</h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                  Find peptide pens, research vials and laboratory compounds by research category, or browse the full catalogue.
                </p>
              </div>
              <Link href="/shop" className="text-sm font-black text-blue-700 hover:text-slate-950">View all products →</Link>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {categoryCards.map((card) => (
                <Link key={card.title} href={card.href} className="group overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-xl">
                  <div className={`relative h-40 bg-gradient-to-br ${card.accent}`}>
                    <Image src={card.image} alt={card.alt} fill sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw" className="object-contain p-4 transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-black tracking-[-0.03em] text-slate-950 group-hover:text-blue-700">{card.title}</h3>
                    <p className="mt-2 text-xs leading-6 text-slate-500">{card.copy}</p>
                    <div className="mt-4 text-sm font-black text-blue-700">Explore →</div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-y border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-12 sm:py-16 lg:py-20">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-700">Featured &amp; newly added</p>
                <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-slate-950 md:text-5xl">Research pens and vials in focus.</h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                  Start with the flagship Retatrutide 40mg pen, discover the new Synexa Glow GHK-CU 70mg pen, or compare additional in-stock research presentations.
                </p>
              </div>
              <Link href="/shop" className="rounded-2xl border border-blue-200 bg-white px-5 py-3 text-sm font-black text-blue-700 shadow-sm hover:border-blue-400">Browse full shop →</Link>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {featured.map((product) => (
                <ProductCard key={product.id} p={product} />
              ))}
            </div>
          </Container>
        </section>

        <section className="py-12 sm:py-16 lg:py-20">
          <Container>
            <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-[#061b3a] shadow-[0_30px_90px_rgba(6,27,58,0.18)]">
              <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                <div className="relative min-h-[420px] overflow-hidden bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.65),transparent_35%),linear-gradient(145deg,#071b3e,#0b2f66)] p-8 text-white sm:p-10 lg:p-12">
                  <div className="relative z-10 max-w-xl">
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">Quality &amp; transparency</p>
                    <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] md:text-5xl">Independent test reports, clearly presented.</h2>
                    <p className="mt-5 text-base leading-8 text-white/70">
                      Selected products include independent laboratory documentation. Review available Janoshik reports, product-specific information and quality notes before ordering.
                    </p>
                    <div className="mt-7 flex flex-wrap gap-3">
                      <Link href="/quality-assurance" className="rounded-2xl bg-white px-5 py-3 text-sm font-black text-slate-950 shadow-lg">View quality assurance</Link>
                      <Link href="/research-peptide-documentation" className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-black text-white backdrop-blur">Research documentation</Link>
                    </div>
                  </div>
                  <div className="absolute -bottom-20 -right-16 h-72 w-72 rounded-full border-[42px] border-cyan-300/10" />
                </div>

                <div className="grid gap-5 bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
                  <Link href="/quality-assurance" className="group relative min-h-[390px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
                    <Image
                      src="/docs/coa/alluvi-retatrutide-40mg-janoshik-163216.png"
                      alt="Janoshik test report for Alluvi Retatrutide 40mg"
                      fill
                      sizes="(min-width: 1024px) 35vw, 90vw"
                      className="object-contain p-5 transition duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-lg backdrop-blur">
                      <div className="text-[10px] font-black uppercase tracking-[0.18em] text-emerald-700">Janoshik Analytical</div>
                      <div className="mt-1 text-sm font-black text-slate-950">Retatrutide 40mg · Test #163216</div>
                    </div>
                  </Link>

                  <div className="grid gap-4">
                    {[
                      ["Alluvi Retatrutide 40mg", "Test #163216"],
                      ["Alluvi Tirzepatide 40mg", "Test #147174"],
                      ["Alluvi Glow 70mg", "Test #163217"],
                      ["Alluvi BPC157 + TB500 40mg", "Test #163218"],
                    ].map(([title, test]) => (
                      <Link key={test} href="/quality-assurance" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg">
                        <div className="text-sm font-black text-slate-950">{title}</div>
                        <div className="mt-1 text-xs font-bold text-blue-700">{test} · View report →</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-y border-slate-200 bg-slate-50 py-12 sm:py-16 lg:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-700">Research peptides in the UK</p>
                <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-slate-950 md:text-5xl">A clearer route from research to checkout.</h2>
                <p className="mt-5 text-base leading-8 text-slate-600">
                  Peptide Products brings together research peptide pens, lyophilised vials and laboratory compounds with product specifications, stock status, pricing and available documentation in one UK catalogue.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  Retatrutide 40mg remains our flagship research line, supported by dedicated Retatrutide information pages and a wider catalogue spanning metabolic, regenerative, antioxidant and nootropic research interests.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/research-peptides-uk" className="rounded-2xl bg-blue-700 px-5 py-3 text-sm font-black text-white">Research peptides UK</Link>
                  <Link href="/retatrutide" className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-black text-slate-950">Retatrutide research hub</Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {supportLinks.map(([title, copy, href]) => (
                  <Link key={href} href={href} className="group rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                    <div className="text-lg font-black tracking-[-0.03em] text-slate-950 group-hover:text-blue-700">{title}</div>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{copy}</p>
                    <div className="mt-5 text-sm font-black text-blue-700">Open page →</div>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="py-12 sm:py-16 lg:py-20">
          <Container>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-[#041b3d] via-[#0a3470] to-[#0a6aa6] px-8 py-10 text-white shadow-[0_30px_90px_rgba(5,32,72,0.22)] sm:px-10 lg:px-12">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[46px] border-cyan-200/10" />
              <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">Vials &amp; pre-filled research pens</p>
                  <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-[-0.05em] md:text-5xl">Explore the complete research catalogue.</h2>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-white/70">Compare current stock, pack formats, prices and available documentation before checkout.</p>
                </div>
                <Link href="/shop" className="rounded-2xl bg-white px-6 py-3.5 text-center text-sm font-black text-slate-950 shadow-xl">Browse all products →</Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
