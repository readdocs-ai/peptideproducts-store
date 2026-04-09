import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Research Peptides | Research-Use-Only Product Guide",
  description:
    "Explore research-use-only peptide categories, compare product types, and move into trusted product, quality, and support pages at Peptide Products.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/research-peptides",
  },
  openGraph: {
    title: "Research Peptides | Research-Use-Only Product Guide",
    description:
      "Explore research-use-only peptide categories, compare product types, and move into trusted product, quality, and support pages at Peptide Products.",
    url: "https://www.peptideproducts.co.uk/research-peptides",
    siteName: "Peptide Products",
    images: [
      {
        url: "https://www.peptideproducts.co.uk/products/meso-vitamin-c-main.jpg",
        width: 1200,
        height: 900,
        alt: "Research peptides product guide by Peptide Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Peptides | Research-Use-Only Product Guide",
    description:
      "Explore research-use-only peptide categories, compare product types, and move into trusted product, quality, and support pages at Peptide Products.",
    images: ["https://www.peptideproducts.co.uk/products/meso-vitamin-c-benefits.jpg"],
  },
};

const featureCards = [
  {
    title: "Antioxidant research lines",
    copy: "Glutathione and vitamin C related lines used in antioxidant-focused research settings.",
    image: "/products/meso-glutathione-alt.jpg",
    href: "/antioxidant-peptides",
  },
  {
    title: "Hydration and support products",
    copy: "Hyaluronic acid related lines and support products used in hydration-focused laboratory work.",
    image: "/products/skinbooster-hyaluronic-alt.jpg",
    href: "/hydration-peptides",
  },
  {
    title: "Firming peptide blends",
    copy: "Structure and elasticity-focused blends used in formulation and compatibility review.",
    image: "/products/meso-lift-firming-alt.jpg",
    href: "/firming-peptides",
  },
] as const;

const spotlightCards = [
  {
    title: "Regenerative product lines",
    copy: "PDRN-based compounds and related regeneration-focused products for laboratory review.",
    image: "/products/meso-pdrn-alt.jpg",
    href: "/regenerative-peptides",
  },
  {
    title: "Collagen-led booster blends",
    copy: "Collagen-focused compounds used in regeneration and formulation-related research settings.",
    image: "/products/meso-collagen-alt.jpg",
    href: "/product/meso-collagen",
  },
  {
    title: "Vitamin C compound lines",
    copy: "Vitamin C-related compounds used in antioxidant and formulation-focused laboratory work.",
    image: "/products/meso-vitamin-c-benefits.jpg",
    href: "/product/meso-vitamin-c",
  },
] as const;

const helpfulLinks = [
  {
    title: "Browse all products",
    copy: "Open the full catalogue and compare prices, pack sizes, stock status, and product details.",
    href: "/shop",
  },
  {
    title: "Quality & documentation",
    copy: "Review available supporting files and pre-order information before purchase.",
    href: "/quality-assurance",
  },
  {
    title: "Shipping information",
    copy: "Check dispatch and delivery details before placing an order.",
    href: "/shipping",
  },
  {
    title: "Contact support",
    copy: "Get help with products, documentation, ordering, or delivery questions.",
    href: "/contact",
  },
] as const;

const faqItems = [
  {
    question: "What are research peptides?",
    answer:
      "On this site, research peptides refers to research-use-only peptide and related laboratory product lines presented for analytical, investigative, and scientific review.",
  },
  {
    question: "Are these products intended for human use?",
    answer:
      "No. Products listed by Peptide Products are supplied strictly for laboratory and scientific research use only.",
  },
  {
    question: "Which types of products are included on this page?",
    answer:
      "This page covers antioxidant, hydration, firming, regenerative, collagen-focused, PDRN-based, vitamin C-related, and selected metabolic research categories.",
  },
] as const;

export default function ResearchPeptidesPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Research Peptides",
    url: "https://www.peptideproducts.co.uk/research-peptides",
    description:
      "Explore research-use-only peptide categories, compare product types, and move into trusted product, quality, and support pages at Peptide Products.",
    isPartOf: {
      "@type": "WebSite",
      name: "Peptide Products",
      url: "https://www.peptideproducts.co.uk",
    },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([webPageSchema, faqSchema, breadcrumbSchema]),
        }}
      />

      <Header />

      <main>
        <section className="relative overflow-hidden bg-hero pb-12 pt-10 lg:pb-16 lg:pt-14">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-xs font-semibold text-muted shadow-soft">
                  Research use only
                  <span className="h-2 w-2 rounded-full bg-accent2" />
                </div>

                <h1 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
                  Research peptides
                </h1>

                <p className="mt-4 max-w-2xl text-base text-muted md:text-lg">
                  This page acts as a central guide to the main research-use-only peptide categories
                  available across the site, helping visitors compare product types and move into
                  the most useful next step before ordering.
                </p>

                <p className="mt-4 max-w-2xl text-base text-muted md:text-lg">
                  The catalogue includes antioxidant, hydration-focused, structural, regenerative,
                  and selected metabolic product lines. Rather than forcing visitors through too
                  many overlapping pages, this hub points toward the key category, product, and
                  support pages most relevant to what you want to review.
                </p>

                <p className="mt-4 max-w-2xl text-base text-muted md:text-lg">
                  You can start with the{" "}
                  <Link href="/shop" className="font-semibold text-ink hover:text-accent">
                    full catalogue
                  </Link>
                  , move into core categories such as{" "}
                  <Link href="/antioxidant-peptides" className="font-semibold text-ink hover:text-accent">
                    antioxidant peptides
                  </Link>
                  ,{" "}
                  <Link href="/hydration-peptides" className="font-semibold text-ink hover:text-accent">
                    hydration peptides
                  </Link>
                  ,{" "}
                  <Link href="/firming-peptides" className="font-semibold text-ink hover:text-accent">
                    firming peptides
                  </Link>
                  , and{" "}
                  <Link href="/regenerative-peptides" className="font-semibold text-ink hover:text-accent">
                    regenerative peptides
                  </Link>
                  , or review{" "}
                  <Link href="/quality-assurance" className="font-semibold text-ink hover:text-accent">
                    quality and documentation
                  </Link>{" "}
                  before placing an order.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/shop"
                    className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                  >
                    Browse products
                  </Link>

                  <Link
                    href="/quality-assurance"
                    className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                  >
                    Quality & documentation
                  </Link>

                  <Link
                    href="/contact"
                    className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                  >
                    Contact support
                  </Link>
                </div>
              </div>

              <div className="max-w-3xl overflow-hidden rounded-xl3 border border-line bg-panel p-4 shadow-soft">
                <div className="relative h-[360px] w-full bg-panel">
                  <Image
                    src="/products/meso-vitamin-c-benefits.jpg"
                    alt="Research peptides product guide"
                    fill
                    priority
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="pb-6">
          <Container>
            <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft lg:p-8">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-muted">
                    Core category path
                  </div>
                  <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
                    Explore the main research peptide categories
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted md:text-base">
                    Use the category pages below to move into the part of the catalogue most
                    relevant to your product search, then open product pages for pricing, stock
                    status, pack details, and available documentation.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/shop"
                    className="rounded-xl2 bg-accent px-5 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                  >
                    Open full catalogue
                  </Link>
                  <Link
                    href="/quality-assurance"
                    className="rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                  >
                    Review documentation
                  </Link>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {featureCards.map((card) => (
                  <Link href={card.href} key={card.title} className="rounded-xl2 border border-line bg-panel p-4">
                    <div className="text-sm font-extrabold text-ink">{card.title}</div>
                    <p className="mt-2 text-sm text-muted">{card.copy}</p>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Core research peptide categories
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted">
                The research peptide catalogue includes compounds studied for antioxidant activity,
                hydration-focused work, elasticity and firmness review, regeneration-focused
                workflows, and selected metabolic research pathways. Category browsing helps narrow
                down which products are most relevant to a specific line of study.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {featureCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group overflow-hidden rounded-xl3 border border-line bg-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <div className="relative h-[420px] w-full bg-panel">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover object-top transition duration-300 group-hover:scale-[1.02]"
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
            <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">
                  About research peptides
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Buyers using this page are usually looking for a broad overview before choosing a
                  specific category or product. This hub is designed to make that process easier by
                  pointing toward the main product groups and the key pages that support pre-order
                  review.
                </p>
                <p className="mt-4 text-sm leading-7 text-muted">
                  The catalogue includes a mix of antioxidant, hydration-focused, structural,
                  regenerative, and selected metabolic product lines. Each category leads into more
                  detailed product pages where visitors can review price, stock status, imagery,
                  pack details, and available documentation.
                </p>
                <p className="mt-4 text-sm leading-7 text-muted">
                  In practical terms, this means the page works best as a central hub leading into
                  the{" "}
                  <Link href="/shop" className="font-semibold text-ink hover:text-accent">
                    shop
                  </Link>
                  ,{" "}
                  <Link href="/quality-assurance" className="font-semibold text-ink hover:text-accent">
                    quality page
                  </Link>
                  , and key category pages rather than trying to act as every guide at once.
                </p>
              </div>

              <div className="rounded-xl3 border border-line bg-panel p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight">Research use only</h2>
                <p className="mt-3 text-sm leading-7 text-muted">
                  All products listed by Peptide Products are supplied strictly for laboratory and
                  scientific research purposes only.
                </p>
                <p className="mt-4 text-sm leading-7 text-muted">
                  They are not intended for human consumption, medical treatment, or clinical use.
                  Product handling, review, and use should remain within appropriate laboratory
                  environments.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/shop"
                    className="inline-flex rounded-xl2 bg-accent px-5 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                  >
                    Shop research products
                  </Link>
                  <Link
                    href="/quality-assurance"
                    className="inline-flex rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                  >
                    Quality & documentation
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
                <h2 className="text-2xl font-extrabold tracking-tight">
                  Additional peptide and compound lines
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-muted">
                  Explore regenerative and antioxidant-focused compounds alongside collagen, PDRN,
                  vitamin C, and broader supporting product lines.
                </p>
              </div>
              <Link href="/shop" className="text-sm font-extrabold text-ink/80 hover:text-ink">
                View all products →
              </Link>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {spotlightCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group overflow-hidden rounded-xl3 border border-line bg-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <div className="relative h-[420px] w-full bg-panel">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover object-top transition duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-extrabold tracking-tight">{card.title}</h3>
                    <p className="mt-2 text-sm text-muted">{card.copy}</p>
                    <div className="mt-4 text-sm font-extrabold text-ink">View product →</div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <h2 className="text-2xl font-extrabold tracking-tight">Helpful next pages</h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {helpfulLinks.map((item) => (
                <Link key={item.href} href={item.href} className="surface-card p-5">
                  <div className="font-extrabold text-ink">{item.title}</div>
                  <p className="mt-2 text-sm text-muted">{item.copy}</p>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Common questions about research peptides
              </h2>
            </div>

            <div className="mt-8 grid gap-5">
              {faqItems.map((item) => (
                <div key={item.question} className="surface-card p-6">
                  <h3 className="text-lg font-extrabold tracking-tight">{item.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.answer}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}