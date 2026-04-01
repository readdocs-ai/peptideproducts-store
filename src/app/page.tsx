import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { brand } from "@/theme/brand";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Research Peptides & Laboratory Compounds UK | Peptide Products",
  description:
    "Shop research peptides and laboratory compounds in the UK. Explore Retatrutide, GHK-CU, BPC-157, NAD, glutathione, bacteriostatic water, and more at Peptide Products.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk",
  },
  openGraph: {
    title: "Research Peptides & Laboratory Compounds UK | Peptide Products",
    description:
      "Browse research peptides and laboratory compounds with clear product pages, UK ordering, and research-use-only positioning.",
    url: "https://www.peptideproducts.co.uk",
    siteName: "Peptide Products",
    images: [
      {
        url: "https://www.peptideproducts.co.uk/home/home-full-vial-set.webp",
        width: 1200,
        height: 900,
        alt: "Peptide Products research peptide and laboratory compound range",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Peptides & Laboratory Compounds UK | Peptide Products",
    description:
      "Browse research peptides and laboratory compounds with clear product pages and UK ordering.",
    images: ["https://www.peptideproducts.co.uk/home/home-full-vial-set.webp"],
  },
};

const categoryCards = [
  {
    title: "Metabolic research peptides",
    copy: "Explore Retatrutide, Tirzepatide, Melanotan, Selank, ML-10, and NAD research product lines.",
    image: "/products/retatrutide-40mg-uk.jpg",
    href: "/research-peptides",
  },
  {
    title: "Regenerative peptide compounds",
    copy: "Browse regenerative research compounds including BPC-157 and GHK-CU laboratory product lines.",
    image: "/products/ghk-cu-100mg.webp",
    href: "/regenerative-peptides",
  },
  {
    title: "Hydration and support liquids",
    copy: "View bacteriostatic water support products used in laboratory preparation and reconstitution workflows.",
    image: "/products/bac-water-10ml.webp",
    href: "/hydration-peptides",
  },
] as const;

const faqItems = [
  {
    question: "Are these products for human use?",
    answer:
      "No. All products are listed and supplied strictly for laboratory, analytical, and scientific research use only.",
  },
  {
    question: "Do you provide product documentation?",
    answer:
      "Selected product lines can include COA and SDS documentation to support internal review and handling.",
  },
  {
    question: "Can I track an order after purchase?",
    answer:
      "Yes. The store includes an order status page along with email updates for active orders.",
  },
] as const;

function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export default function Home() {
  const featuredProducts = [
    getProduct("retatrutide"),
    getProduct("tirzepatide-tr40-40mg"),
    getProduct("ghk-cu-100mg"),
    getProduct("bpc-157-10mg"),
    getProduct("nad-1000mg"),
    getProduct("glutathione-1500mg"),
    getProduct("bac-water-10ml"),
    getProduct("melanotan-mt2-10mg"),
    getProduct("selank-sk10-10mg"),
  ].filter(Boolean) as typeof products;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Peptide Products",
    url: "https://www.peptideproducts.co.uk",
    logo: "https://www.peptideproducts.co.uk/favicon.svg",
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: brand.supportEmail,
        telephone: brand.phone,
        contactType: "customer support",
        areaServed: "GB",
        availableLanguage: "en",
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Peptide Products",
    url: "https://www.peptideproducts.co.uk",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.peptideproducts.co.uk",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Research peptides",
        item: "https://www.peptideproducts.co.uk/research-peptides",
      },
    ],
  };

  return (
    <div>
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              organizationSchema,
              websiteSchema,
              faqSchema,
              breadcrumbSchema,
            ]),
          }}
        />

        <section className="relative overflow-hidden pb-12 pt-8 lg:pb-20 lg:pt-14">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-[-120px] top-[-100px] h-[280px] w-[280px] rounded-full bg-accent/15 blur-3xl" />
            <div className="absolute right-[-120px] top-[40px] h-[240px] w-[240px] rounded-full bg-accent2/15 blur-3xl" />
            <div className="absolute bottom-[-80px] left-1/3 h-[220px] w-[220px] rounded-full bg-accent/10 blur-3xl" />
          </div>

          <Container>
            <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/85 px-4 py-2 text-xs font-semibold text-muted shadow-soft backdrop-blur-sm">
                  Research use only • UK store • Order tracking available
                  <span className="h-2 w-2 rounded-full bg-accent2" />
                </div>

                <div className="mt-4 inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-extrabold text-white shadow-soft">
                  Free next day UK delivery
                </div>

                <h1 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl lg:leading-[1.05]">
                  <span className="block text-accent">Research peptides</span>
                  <span className="block text-ink">and laboratory compounds</span>
                  <span className="block text-ink">for scientific study.</span>
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg">
                  Browse research peptides and laboratory compounds across antioxidant,
                  hydration, regenerative, firming, and metabolic product lines.
                </p>

                <p className="mt-4 max-w-2xl text-base leading-8 text-muted md:text-lg">
                  Explore the full{" "}
                  <Link
                    href="/shop"
                    className="font-semibold text-ink hover:text-accent"
                  >
                    product catalogue
                  </Link>
                  , the main{" "}
                  <Link
                    href="/research-peptides"
                    className="font-semibold text-ink hover:text-accent"
                  >
                    research peptides
                  </Link>{" "}
                  hub, UK-focused guides such as{" "}
                  <Link
                    href="/research-peptides-uk"
                    className="font-semibold text-ink hover:text-accent"
                  >
                    research peptides UK
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/buy-research-peptides-uk"
                    className="font-semibold text-ink hover:text-accent"
                  >
                    buy research peptides UK
                  </Link>
                  , and leading product pathways including{" "}
                  <Link
                    href="/buy-retatrutide-uk"
                    className="font-semibold text-ink hover:text-accent"
                  >
                    buy retatrutide UK
                  </Link>
                  .
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/shop"
                    className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-accent/90"
                  >
                    Shop products
                  </Link>

                  <Link
                    href="/buy-retatrutide-uk"
                    className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft transition hover:-translate-y-0.5 hover:bg-panel"
                  >
                    Buy Retatrutide UK
                  </Link>

                  <Link
                    href="/research-peptides"
                    className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft transition hover:-translate-y-0.5 hover:bg-panel"
                  >
                    Explore research hub
                  </Link>

                  <Link
                    href="/wholesale"
                    className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft transition hover:-translate-y-0.5 hover:bg-panel"
                  >
                    Wholesale enquiries
                  </Link>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl2 border border-line bg-white/85 p-4 text-sm font-semibold text-ink shadow-soft backdrop-blur-sm">
                    Research-use-only catalogue
                  </div>
                  <div className="rounded-xl2 border border-line bg-white/85 p-4 text-sm font-semibold text-ink shadow-soft backdrop-blur-sm">
                    Documentation on selected lines
                  </div>
                  <div className="rounded-xl2 border border-line bg-white/85 p-4 text-sm font-semibold text-ink shadow-soft backdrop-blur-sm">
                    UK checkout, email updates, and order tracking
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="overflow-hidden rounded-xl3 border border-line bg-white shadow-lift">
                  <div className="relative h-[560px] w-full bg-[#f7f9fc]">
                    <Image
                      src="/home/home-full-vial-set.webp"
                      alt="Peptide Products full research compound range"
                      fill
                      priority
                      fetchPriority="high"
                      sizes="(min-width: 1024px) 46vw, 100vw"
                      className="object-contain object-center"
                    />
                  </div>

                  <div className="grid gap-4 border-t border-line p-5 sm:grid-cols-3">
                    <div>
                      <div className="text-xs font-extrabold uppercase tracking-wide text-muted">
                        Complete product range
                      </div>
                      <p className="mt-2 text-sm text-muted">
                        View a broader peptide and laboratory compound range in one premium catalogue image.
                      </p>
                    </div>
                    <div>
                      <div className="text-xs font-extrabold uppercase tracking-wide text-muted">
                        Research categories
                      </div>
                      <p className="mt-2 text-sm text-muted">
                        Explore hydration, firming, antioxidant, regenerative, and metabolic research lines.
                      </p>
                    </div>
                    <div>
                      <div className="text-xs font-extrabold uppercase tracking-wide text-muted">
                        Support contact
                      </div>
                      <p className="mt-2 text-sm text-muted">
                        {brand.supportEmail}
                        <br />
                        {brand.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="section-title">Shop by research category</h2>
                <p className="mt-2 max-w-2xl text-sm text-muted">
                  Explore the main research areas across antioxidant, hydration, firming, and regenerative compound lines.
                </p>
              </div>
              <Link
                href="/shop"
                className="text-sm font-extrabold text-ink/80 hover:text-ink"
              >
                View full catalogue →
              </Link>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {categoryCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group overflow-hidden rounded-xl3 border border-line bg-white shadow-soft transition duration-200 hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <div className="relative h-[420px] w-full bg-panel">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-extrabold tracking-tight">{card.title}</h3>
                    <p className="mt-2 text-sm text-muted">{card.copy}</p>
                    <div className="mt-4 text-sm font-extrabold text-ink">View category →</div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="section-title">Featured research compounds</h2>
                <p className="mt-2 max-w-2xl text-sm text-muted">
                  Explore leading product lines across regenerative, metabolic, antioxidant, and support categories.
                </p>
              </div>
              <Link
                href="/shop"
                className="text-sm font-extrabold text-ink/80 hover:text-ink"
              >
                Browse all products →
              </Link>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {featuredProducts.map((p) => (
                <Link
                  key={p.id}
                  href={`/product/${p.id}`}
                  className="group overflow-hidden rounded-xl3 border border-line bg-white shadow-soft transition duration-200 hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <div className="relative h-[420px] w-full bg-panel">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-300 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="p-5">
                    <div className="text-xs font-extrabold uppercase tracking-wide text-muted">
                      {p.category}
                    </div>
                    <div
                      className={
                        "inline-flex rounded-full px-3 py-1 text-[11px] font-extrabold mb-2 " +
                        (p.stockStatus === "in_stock"
                          ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
                          : "border border-red-200 bg-red-50 text-red-700")
                      }
                    >
                      {p.stockStatus === "in_stock" ? "In stock" : "Sold out"}
                    </div>
                    <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-ink">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{p.subtitle}</p>

                    <div className="mt-5 flex items-end justify-between gap-4">
                      <div>
                        <div className="text-sm font-semibold text-muted">{p.pack}</div>
                        <div className="mt-1 text-xl font-extrabold text-ink">
                          £{p.priceGBP.toFixed(2)}
                        </div>
                      </div>

                      <div className="text-sm font-extrabold text-ink">View product →</div>
                    </div>
                  </div>
                </Link>
              ))}

              <Link
                href="/product/ghk-cu-100mg"
                className="group overflow-hidden rounded-xl3 border-2 border-accent bg-white shadow-soft transition duration-200 hover:-translate-y-0.5 hover:shadow-lift"
              >
                <div className="relative h-[420px] w-full bg-panel">
                  <Image
                    src="/products/ghk-cu-100mg-feature.webp"
                    alt="GHK-CU 100mg research peptide vial"
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain object-center p-6"
                  />
                </div>

                <div className="p-5">
                  <div className="text-xs font-extrabold uppercase tracking-wide text-accent">
                    Regenerative • Featured
                  </div>

                  <div className="inline-flex rounded-full px-3 py-1 text-[11px] font-extrabold mb-2 border border-emerald-200 bg-emerald-50 text-emerald-700">
                    In stock
                  </div>

                  <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-ink">
                    GHK-CU 100mg
                  </h3>

                  <p className="mt-2 text-sm text-muted">
                    Copper peptide research compound
                  </p>

                  <div className="mt-5 flex items-end justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold text-muted">
                        1 vial x 100mg lyophilised powder
                      </div>
                      <div className="mt-1 text-xl font-extrabold text-ink">
                        £89.00
                      </div>
                    </div>

                    <div className="text-sm font-extrabold text-ink">
                      View product →
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="mt-10 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div>
                  <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent">
                    Featured compound
                  </div>
                  

                  <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
                    Buy Retatrutide UK
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-muted md:text-base">
                    Premium Retatrutide 40mg research peptide supplied for laboratory and scientific research use only.
                  </p>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-muted md:text-base">
                    View the{" "}
                    <Link
                      href="/product/retatrutide"
                      className="font-semibold text-ink hover:text-accent"
                    >
                      product page
                    </Link>
                    , read the{" "}
                    <Link
                      href="/retatrutide-research-peptide"
                      className="font-semibold text-ink hover:text-accent"
                    >
                      research guide
                    </Link>
                    , or move directly into the dedicated{" "}
                    <Link
                      href="/buy-retatrutide-uk"
                      className="font-semibold text-ink hover:text-accent"
                    >
                      buy retatrutide UK
                    </Link>{" "}
                    page.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/product/retatrutide"
                      className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                    >
                      View Retatrutide 40mg
                    </Link>

                    <Link
                      href="/retatrutide-research-peptide"
                      className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                    >
                      Read research guide
                    </Link>

                    <Link
                      href="/buy-retatrutide-uk"
                      className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                    >
                      Buy Retatrutide UK
                    </Link>
                  </div>
                  {/* RETATRUTIDE SEO CLUSTER BOOST */}
<div className="mt-12 rounded-xl3 border border-line bg-white p-6 shadow-soft">
  <h3 className="text-2xl font-extrabold tracking-tight text-ink">
    Retatrutide UK research and buying guides
  </h3>

  <p className="mt-3 max-w-2xl text-sm text-muted">
    Explore Retatrutide research, pricing, availability, and UK supply routes.
    These pages are designed to help users move from research into product access.
  </p>

  <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
    <Link href="/buy-retatrutide-uk" className="surface-card p-5">
      <div className="font-extrabold text-ink">Buy Retatrutide UK</div>
      <p className="mt-2 text-sm text-muted">
        Direct purchase-intent page linking to product and supply routes.
      </p>
    </Link>

    <Link href="/retatrutide-price-uk" className="surface-card p-5">
      <div className="font-extrabold text-ink">Retatrutide price UK</div>
      <p className="mt-2 text-sm text-muted">
        Explore pricing, availability, and product access.
      </p>
    </Link>

    <Link href="/where-to-buy-retatrutide-uk" className="surface-card p-5">
      <div className="font-extrabold text-ink">Where to buy Retatrutide UK</div>
      <p className="mt-2 text-sm text-muted">
        Navigate supply routes and trusted product pages.
      </p>
    </Link>

    <Link href="/retatrutide-vs-semaglutide" className="surface-card p-5">
      <div className="font-extrabold text-ink">Retatrutide vs Semaglutide</div>
      <p className="mt-2 text-sm text-muted">
        Comparison page supporting research and discovery intent.
      </p>
    </Link>
  </div>
</div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-xl2 border border-line bg-panel px-4 py-3 text-sm font-semibold text-ink">
                      Research use only
                    </div>
                    <div className="rounded-xl2 border border-line bg-panel px-4 py-3 text-sm font-semibold text-ink">
                      UK supply route
                    </div>
                    <div className="rounded-xl2 border border-line bg-panel px-4 py-3 text-sm font-semibold text-ink">
                      Direct product access
                    </div>
                  </div>
                </div>

                <div className="rounded-xl2 border border-line bg-panel p-5">
                  <div className="text-xs font-extrabold uppercase tracking-wide text-muted">
                    Product snapshot
                  </div>

                  <div className="mt-3 text-lg font-extrabold text-ink">
                    Retatrutide 40mg
                  </div>

                  <div className="mt-1 text-sm text-muted">
                    1 pre-filled pen • laboratory supply
                  </div>

                  <div className="mt-4 inline-flex rounded-full px-3 py-1 text-[11px] font-extrabold border border-emerald-200 bg-emerald-50 text-emerald-700">
                    In stock
                  </div>

                  <div className="mt-5 text-2xl font-extrabold text-ink">
                    £150.00
                  </div>

                  <div className="mt-2 text-sm text-muted">
                    Research-use-only product listing
                  </div>

                  <Link
                    href="/product/retatrutide"
                    className="mt-5 inline-block w-full text-center rounded-xl2 bg-accent px-5 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                  >
                    View product →
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="section-title">Research guides</h2>
                <p className="mt-2 max-w-2xl text-sm text-muted">
                  Explore the main research pages supporting peptide categories, product discovery, and UK-focused searches.
                </p>
              </div>

              <Link
                href="/research-peptides"
                className="text-sm font-extrabold text-ink/80 hover:text-ink"
              >
                View research hub →
              </Link>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
  <Link href="/research-peptides" className="surface-card p-5">
    <div className="text-sm font-extrabold text-ink">Research peptides</div>
    <p className="mt-2 text-sm text-muted">
      Overview of metabolic, regenerative, antioxidant, and support compound lines.
    </p>
  </Link>

  <Link href="/antioxidant-peptides" className="surface-card p-5">
    <div className="text-sm font-extrabold text-ink">Antioxidant peptides</div>
    <p className="mt-2 text-sm text-muted">
      Glutathione research compounds used in antioxidant laboratory study.
    </p>
  </Link>

  <Link href="/hydration-peptides" className="surface-card p-5">
    <div className="text-sm font-extrabold text-ink">Hydration peptides</div>
    <p className="mt-2 text-sm text-muted">
      Bacteriostatic water and related support liquids for laboratory preparation.
    </p>
  </Link>

  <Link href="/regenerative-peptides" className="surface-card p-5">
    <div className="text-sm font-extrabold text-ink">Regenerative peptides</div>
    <p className="mt-2 text-sm text-muted">
      BPC-157 and GHK-CU compounds studied in regeneration-related laboratory environments.
    </p>
  </Link>

  <Link href="/retatrutide-research-peptide" className="surface-card p-5">
    <div className="text-sm font-extrabold text-ink">Retatrutide research peptide</div>
    <p className="mt-2 text-sm text-muted">
      Research overview covering Retatrutide and related product pathways.
    </p>
  </Link>

  <Link href="/what-is-retatrutide" className="surface-card p-5">
    <div className="text-sm font-extrabold text-ink">What is Retatrutide?</div>
    <p className="mt-2 text-sm text-muted">
      Introductory Retatrutide page for laboratory-focused readers.
    </p>
  </Link>

  <Link href="/retatrutide-price-uk" className="surface-card p-5">
    <div className="text-sm font-extrabold text-ink">Retatrutide price UK</div>
    <p className="mt-2 text-sm text-muted">
      Explore pricing, availability, and linked product access.
    </p>
  </Link>

  <Link href="/where-to-buy-retatrutide-uk" className="surface-card p-5">
    <div className="text-sm font-extrabold text-ink">Where to buy Retatrutide UK</div>
    <p className="mt-2 text-sm text-muted">
      Direct route into the main Retatrutide product and related UK pages.
    </p>
  </Link>
</div>
          </Container>
        </section>

        <section className="py-14 bg-white">
          <Container>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Retatrutide and product pathways
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <Link href="/retatrutide-research-peptide" className="rounded-xl3 border border-line p-5 shadow-soft">
                <div className="font-extrabold">Retatrutide research peptide</div>
                <p className="mt-2 text-sm text-muted">
                  Overview of the retatrutide peptide compound and broader research context.
                </p>
              </Link>

              <Link href="/buy-retatrutide-uk" className="rounded-xl3 border border-line p-5 shadow-soft">
                <div className="font-extrabold">Buy Retatrutide UK</div>
                <p className="mt-2 text-sm text-muted">
                  UK-focused landing page for retatrutide product discovery and supply intent.
                </p>
              </Link>

              <Link href="/what-is-retatrutide" className="rounded-xl3 border border-line p-5 shadow-soft">
                <div className="font-extrabold">What is Retatrutide?</div>
                <p className="mt-2 text-sm text-muted">
                  Introductory page explaining retatrutide in a laboratory research setting.
                </p>
              </Link>

              <Link href="/product/retatrutide" className="rounded-xl3 border border-line p-5 shadow-soft">
                <div className="font-extrabold">Retatrutide product page</div>
                <p className="mt-2 text-sm text-muted">
                  Direct route to the retatrutide product listing for research buyers.
                </p>
              </Link>
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
              <div>
                <h2 className="section-title">Research compounds for laboratory investigation</h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  Peptide compounds are studied in laboratory environments for molecular interaction, antioxidant behaviour, formulation compatibility, structural response, and broader analytical review.
                </p>

                <p className="mt-4 text-sm leading-7 text-muted">
  Common areas of investigation include glutathione antioxidant research, bacteriostatic support liquids, BPC-157, GHK-CU, NAD, Retatrutide, Tirzepatide, and related metabolic peptide compounds.
</p>

                <p className="mt-4 text-sm leading-7 text-muted">
                  If you are specifically exploring{" "}
                  <Link
                    href="/buy-retatrutide-uk"
                    className="font-semibold text-ink hover:text-accent"
                  >
                    buy retatrutide UK
                  </Link>
                  , you can also move through the{" "}
                  <Link
                    href="/retatrutide-research-peptide"
                    className="font-semibold text-ink hover:text-accent"
                  >
                    retatrutide research peptide
                  </Link>{" "}
                  guide, the{" "}
                  <Link
                    href="/what-is-retatrutide"
                    className="font-semibold text-ink hover:text-accent"
                  >
                    what is retatrutide
                  </Link>{" "}
                  page, and the{" "}
                  <Link
                    href="/product/retatrutide"
                    className="font-semibold text-ink hover:text-accent"
                  >
                    retatrutide product page
                  </Link>
                  .
                </p>

                <Link
                  href="/research-peptides"
                  className="mt-6 inline-flex text-sm font-extrabold text-ink hover:text-accent"
                >
                  Explore research peptide compounds →
                </Link>
              </div>

              <div className="rounded-xl3 border border-line bg-panel p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight">Common questions</h2>
                <div className="mt-6 grid gap-5">
                  {faqItems.map((item) => (
                    <div key={item.question}>
                      <h3 className="text-base font-extrabold">{item.question}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted">{item.answer}</p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/faq"
                  className="mt-6 inline-flex text-sm font-extrabold text-ink hover:text-accent"
                >
                  View full FAQ →
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