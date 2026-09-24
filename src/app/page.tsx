import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { brand } from "@/theme/brand";
import { products } from "@/data/products";

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

const categoryLinks = [
  {
    title: "Metabolic research",
    copy: "Retatrutide, Tirzepatide and related research compounds.",
    href: "/metabolic-research-compounds",
  },
  {
    title: "Regenerative peptides",
    copy: "BPC-157, TB-500, GHK-Cu and combination research formats.",
    href: "/regenerative-peptides",
  },
  {
    title: "Antioxidant peptides",
    copy: "Glutathione and antioxidant-focused research products.",
    href: "/antioxidant-peptides",
  },
  {
    title: "Peptide pens UK",
    copy: "Pre-filled research pen presentations from current catalogue lines.",
    href: "/peptide-pens-uk",
  },
] as const;

export default function Home() {
  const retatrutide = getProduct("retatrutide");
  const synexaGlow = getProduct("synexa-glow-ghk-cu-70mg-pen");
  const synexaReta = getProduct("synexa-retatrutide-40mg");

  const newProducts = [
    "synexa-glow-ghk-cu-70mg-pen",
    "alloya-glutathione-500mg-pen",
    "alluvi-nad-1000mg-pen-set",
    "alloya-mots-c-40mg-pen",
    "alloya-tesamorelin-20mg-pen",
  ]
    .map(getProduct)
    .filter(Boolean) as typeof products;

  const organizationSchema = {
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
    <div className="bg-white">
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        <section className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_12%_12%,rgba(37,99,235,0.13),transparent_28%),radial-gradient(circle_at_92%_78%,rgba(45,212,191,0.15),transparent_26%),linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)]">
          <div className="absolute inset-0 opacity-[0.22] [background-image:linear-gradient(rgba(37,99,235,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />
          <Container>
            <div className="relative grid gap-8 py-8 sm:py-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-12 lg:py-12">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-blue-800 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Premium UK research peptide catalogue
                </div>

                <h1 className="mt-5 max-w-3xl text-[2.75rem] font-black leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-[4rem]">
                  Research peptides,
                  <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    pens and vials.
                  </span>
                </h1>

                <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
                  Explore the flagship Retatrutide 40mg pen alongside a growing research-use-only catalogue with clear UK pricing, current stock information, selected independent test reports and secure card checkout.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/shop"
                    className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-blue-700 px-6 py-3.5 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-800"
                  >
                    Browse all products →
                  </Link>
                  <Link
                    href="/quality-assurance"
                    className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-black text-slate-950 shadow-sm transition hover:border-blue-300 hover:text-blue-700"
                  >
                    View quality assurance
                  </Link>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    ["Research", "Use only"],
                    ["Free UK", "Delivery"],
                    ["Secure", "Card checkout"],
                    ["Selected", "Test reports"],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm">
                      <div className="text-sm font-black text-slate-950">{value}</div>
                      <div className="mt-1 text-xs leading-5 text-slate-500">{label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 rounded-[2rem] border border-blue-100 bg-white/90 p-4 shadow-[0_30px_80px_rgba(37,99,235,0.14)] backdrop-blur sm:p-5">
                <div className="grid gap-4 md:grid-cols-[1.35fr_0.85fr]">
                  {retatrutide && (
                    <Link
                      href="/product/retatrutide"
                      className="group relative min-h-[360px] overflow-hidden rounded-[1.5rem] border border-slate-200 bg-[linear-gradient(145deg,#eff6ff,#ffffff_48%,#eefcf8)] sm:min-h-[420px]"
                    >
                      <Image
                        src={retatrutide.image}
                        alt={retatrutide.imageAlt || "Alluvi Retatrutide 40mg research pen"}
                        fill
                        priority
                        sizes="(min-width: 1024px) 44vw, 100vw"
                        className="object-contain p-5 transition duration-700 group-hover:scale-[1.025]"
                      />
                      <div className="absolute left-4 top-4 rounded-full border border-white/90 bg-white/95 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-blue-700 shadow-sm">
                        Flagship Retatrutide
                      </div>
                      <div className="absolute inset-x-4 bottom-4 rounded-[1.25rem] border border-white/90 bg-white/95 p-4 shadow-xl backdrop-blur">
                        <div className="flex flex-wrap items-end justify-between gap-3">
                          <div>
                            <div className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">Alluvi presentation</div>
                            <div className="mt-1 text-xl font-black tracking-[-0.03em] text-slate-950">Retatrutide 40mg Pen</div>
                            <div className="mt-1 text-sm font-bold text-blue-700">£{retatrutide.priceGBP.toFixed(2)}</div>
                          </div>
                          <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-black text-emerald-700">In stock</span>
                        </div>
                      </div>
                    </Link>
                  )}

                  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
                    {synexaGlow && (
                      <Link
                        href="/product/synexa-glow-ghk-cu-70mg-pen"
                        className="group overflow-hidden rounded-[1.35rem] border border-pink-100 bg-[linear-gradient(145deg,#fff7fb,#ffffff)] shadow-sm transition hover:-translate-y-0.5"
                      >
                        <div className="relative aspect-[16/9] overflow-hidden bg-[#f8e8f0]">
                          <Image
                            src={synexaGlow.image}
                            alt={synexaGlow.imageAlt || synexaGlow.name}
                            fill
                            sizes="(min-width: 1024px) 22vw, 50vw"
                            className="object-cover transition duration-500 group-hover:scale-[1.03]"
                          />
                        </div>
                        <div className="p-4">
                          <div className="text-[10px] font-black uppercase tracking-[0.17em] text-pink-700">New · £130</div>
                          <div className="mt-1 text-base font-black leading-tight text-slate-950">Synexa Glow GHK-CU 70mg</div>
                          <div className="mt-2 text-xs text-slate-500">GHK-CU 50mg · BPC-157 10mg · TB-500 10mg</div>
                        </div>
                      </Link>
                    )}

                    {synexaReta && (
                      <Link
                        href="/product/synexa-retatrutide-40mg"
                        className="group overflow-hidden rounded-[1.35rem] border border-amber-100 bg-[linear-gradient(145deg,#fffaf0,#ffffff)] shadow-sm transition hover:-translate-y-0.5"
                      >
                        <div className="relative aspect-[16/9] overflow-hidden">
                          <Image
                            src={synexaReta.image}
                            alt={synexaReta.imageAlt || synexaReta.name}
                            fill
                            sizes="(min-width: 1024px) 22vw, 50vw"
                            className="object-cover transition duration-500 group-hover:scale-[1.03]"
                          />
                        </div>
                        <div className="p-4">
                          <div className="text-[10px] font-black uppercase tracking-[0.17em] text-blue-700">Restocked · £125</div>
                          <div className="mt-1 text-base font-black leading-tight text-slate-950">Synexa Retatrutide 40mg RapidPen®</div>
                        </div>
                      </Link>
                    )}
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {["alloya-mots-c-40mg-pen", "alloya-tesamorelin-20mg-pen", "bpc-157-5mg", "ghk-cu-100mg"].map((id) => {
                    const product = getProduct(id);
                    if (!product) return null;
                    return (
                      <Link
                        key={id}
                        href={`/product/${product.id}`}
                        className="group rounded-2xl border border-slate-200 bg-white p-2 shadow-sm transition hover:-translate-y-0.5"
                      >
                        <div className="relative aspect-square overflow-hidden rounded-xl bg-slate-50">
                          <Image
                            src={product.image}
                            alt={product.imageAlt || product.name}
                            fill
                            sizes="(min-width: 1024px) 12vw, 25vw"
                            className="object-contain p-2 transition duration-500 group-hover:scale-[1.04]"
                          />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-b border-slate-200 bg-white py-10 sm:py-12">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">Shop by research category</p>
                <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl">Explore the catalogue.</h2>
              </div>
              <Link href="/shop" className="text-sm font-black text-blue-700 hover:text-blue-900">View all products →</Link>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {categoryLinks.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-[1.35rem] border border-slate-200 bg-[linear-gradient(145deg,#ffffff,#f8fbff)] p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >
                  <div className="text-[11px] font-black uppercase tracking-[0.18em] text-blue-600">0{index + 1}</div>
                  <h3 className="mt-3 text-xl font-black tracking-[-0.03em] text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.copy}</p>
                  <div className="mt-4 text-sm font-black text-blue-700">Explore →</div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-[#f6faff] py-10 sm:py-14 lg:py-16">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">New and current stock</p>
                <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl">Latest research products.</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">A mix of new pre-filled pens and current research formats, with live pricing and stock status taken directly from the catalogue.</p>
              </div>
              <Link href="/shop" className="text-sm font-black text-blue-700 hover:text-blue-900">Browse the full shop →</Link>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {newProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="group overflow-hidden rounded-[1.35rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
                    <Image
                      src={product.image}
                      alt={product.imageAlt || product.name}
                      fill
                      sizes="(min-width: 1024px) 18vw, (min-width: 640px) 45vw, 95vw"
                      className="object-contain p-3 transition duration-500 group-hover:scale-[1.035]"
                    />
                    <div className="absolute left-3 top-3 rounded-full bg-blue-700 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.15em] text-white">{product.badge || "New"}</div>
                  </div>
                  <div className="p-4">
                    <div className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">{product.brandName || "Peptide Products"}</div>
                    <h3 className="mt-2 min-h-[44px] text-base font-black leading-tight text-slate-950">{product.name}</h3>
                    <div className="mt-3 flex items-center justify-between gap-3">
                      <span className="text-lg font-black text-slate-950">£{product.priceGBP.toFixed(2)}</span>
                      <span className="text-[11px] font-black text-emerald-700">In stock</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-10 sm:py-14 lg:py-16">
          <Container>
            <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-[0_28px_80px_rgba(15,23,42,0.18)] lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[360px] overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.45),transparent_38%),linear-gradient(135deg,#07101f,#0d2346)] p-7 text-white sm:p-9 lg:min-h-[420px] lg:p-12">
                <div className="relative z-10 max-w-lg">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">Quality & transparency</p>
                  <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] sm:text-5xl">Independent test reports, where available.</h2>
                  <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                    Selected product pages include independent laboratory reports and supporting quality documentation. Review the matching report, product details and batch information before ordering.
                  </p>
                  <Link href="/quality-assurance" className="mt-6 inline-flex rounded-2xl bg-white px-6 py-3.5 text-sm font-black text-slate-950 transition hover:-translate-y-0.5">View quality assurance →</Link>
                </div>
              </div>

              <div className="relative min-h-[360px] bg-[linear-gradient(145deg,#f8fbff,#ffffff)] p-6 sm:p-8 lg:min-h-[420px]">
                <div className="grid h-full gap-5 sm:grid-cols-[1fr_0.8fr] sm:items-center">
                  <div className="relative aspect-[0.72/1] max-h-[330px] overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white shadow-xl">
                    <Image
                      src="/docs/coa/alluvi-retatrutide-40mg-janoshik-163216.png"
                      alt="Janoshik test report for Alluvi Retatrutide 40mg, test 163216"
                      fill
                      sizes="(min-width: 1024px) 28vw, 50vw"
                      className="object-contain p-2"
                    />
                  </div>
                  <div>
                    <div className="rounded-[1.25rem] border border-emerald-200 bg-emerald-50 p-5">
                      <div className="text-[11px] font-black uppercase tracking-[0.18em] text-emerald-700">Verified example</div>
                      <div className="mt-2 text-xl font-black text-slate-950">Alluvi Retatrutide 40mg</div>
                      <div className="mt-2 text-sm leading-6 text-slate-600">Janoshik Test #163216 · Batch AR1739JAT</div>
                      <a
                        href="https://verify.janoshik.com/tests/163216-ALLUVI_RETATRUTIDE_40MG_KIT_TU3SQLQB9ZDQ"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex text-sm font-black text-blue-700 hover:text-blue-900"
                      >
                        Verify on Janoshik →
                      </a>
                    </div>
                    <p className="mt-4 text-xs leading-6 text-slate-500">Report availability varies by product. The quality page lists the certificates currently published by Peptide Products.</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-y border-slate-200 bg-white py-10 sm:py-14">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">Research peptides UK</p>
                <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl">Clear product information before checkout.</h2>
              </div>
              <div className="grid gap-4 text-sm leading-7 text-slate-600 sm:grid-cols-2">
                <p>
                  Peptide Products lists research-use-only peptide pens, vials and laboratory compounds with current stock, pack information and UK pricing. Start with the <Link href="/product/retatrutide" className="font-black text-blue-700">Retatrutide 40mg product page</Link> or explore the wider <Link href="/research-peptides-uk" className="font-black text-blue-700">UK research peptide catalogue</Link>.
                </p>
                <p>
                  For product documentation, independent reports and ordering information, use the <Link href="/quality-assurance" className="font-black text-blue-700">quality assurance page</Link>, <Link href="/shipping" className="font-black text-blue-700">UK shipping information</Link> and <Link href="/contact" className="font-black text-blue-700">customer support</Link> before purchase.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[linear-gradient(90deg,#0b2a5d,#0a66d8)] py-8 text-white">
          <Container>
            <div className="flex flex-wrap items-center justify-between gap-5">
              <div>
                <div className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">Current catalogue</div>
                <div className="mt-1 text-2xl font-black tracking-[-0.03em]">Pens, vials and laboratory research compounds.</div>
              </div>
              <Link href="/shop" className="inline-flex rounded-2xl bg-white px-6 py-3.5 text-sm font-black text-blue-800 shadow-lg transition hover:-translate-y-0.5">Browse all products →</Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
