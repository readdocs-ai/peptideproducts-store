import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Laboratory Peptide Compounds | Research-Use-Only Product Guide",
  description:
    "Explore research-use-only peptide categories, compare product types, and move into trusted product, quality, and support pages at Peptide Products.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/laboratory-peptide-compounds",
  },
  openGraph: {
    title: "Laboratory Peptide Compounds | Research-Use-Only Product Guide",
    description:
      "Explore research-use-only peptide categories, compare product types, and move into trusted product, quality, and support pages at Peptide Products.",
    url: "https://www.peptideproducts.co.uk/laboratory-peptide-compounds",
    siteName: "Peptide Products",
    images: [
      {
        url: "https://www.peptideproducts.co.uk/products/meso-collagen-main.jpg",
        width: 1200,
        height: 900,
        alt: "Laboratory peptide compounds product guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laboratory Peptide Compounds | Research-Use-Only Product Guide",
    description:
      "Explore research-use-only peptide categories, compare product types, and move into trusted product, quality, and support pages at Peptide Products.",
    images: ["https://www.peptideproducts.co.uk/products/meso-collagen-main.jpg"],
  },
};

const faqItems = [
  {
    question: "What are laboratory peptide compounds?",
    answer:
      "On this site, laboratory peptide compounds refers to research-use-only peptide and related product lines presented for laboratory, analytical, and scientific review.",
  },
  {
    question: "Which types of laboratory peptide compounds are covered on this site?",
    answer:
      "The site covers antioxidant, hydration, firming, regenerative, and selected metabolic product categories, along with supporting quality and information pages.",
  },
  {
    question: "Are laboratory peptide compounds supplied for human use?",
    answer:
      "No. All products listed on this site are supplied strictly for laboratory and scientific research use only.",
  },
] as const;

const categoryCards = [
  {
    title: "Antioxidant peptides",
    copy: "Glutathione and vitamin C related lines used in antioxidant-focused research settings.",
    href: "/antioxidant-peptides",
  },
  {
    title: "Hydration peptides",
    copy: "Hydration-focused products including hyaluronic acid related lines and support items.",
    href: "/hydration-peptides",
  },
  {
    title: "Firming peptides",
    copy: "Structure and elasticity-focused blends used in formulation and compatibility review.",
    href: "/firming-peptides",
  },
  {
    title: "Regenerative peptides",
    copy: "PDRN, collagen-related lines, and regeneration-focused research products.",
    href: "/regenerative-peptides",
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

export default function Page() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Laboratory Peptide Compounds",
    url: "https://www.peptideproducts.co.uk/laboratory-peptide-compounds",
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
      {
        "@type": "ListItem",
        position: 3,
        name: "Laboratory peptide compounds",
        item: "https://www.peptideproducts.co.uk/laboratory-peptide-compounds",
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
        <section className="py-14">
          <Container>
            <div className="max-w-5xl">
              <div className="text-sm text-muted">
                <Link href="/" className="font-semibold hover:text-ink">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <Link href="/research-peptides" className="font-semibold hover:text-ink">
                  Research peptides
                </Link>
                <span className="mx-2">/</span>
                Laboratory peptide compounds
              </div>

              <div className="mt-6 max-w-4xl">
                <div className="eyebrow">Research-use-only product guide</div>
                <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
                  Laboratory peptide compounds
                </h1>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-muted md:text-base">
                  This page is a simple guide to the main research-use-only peptide categories
                  available across the site, helping visitors compare product types and move into
                  the most useful next step before ordering.
                </p>
              </div>

              <div className="mt-8 max-w-3xl overflow-hidden rounded-xl3 border border-line bg-panel p-4 shadow-soft">
                <div className="relative h-[360px] w-full bg-panel">
                  <Image
                    src="/products/meso-collagen-main.jpg"
                    alt="Laboratory peptide compounds product guide"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              <div className="mt-8 max-w-3xl space-y-4 text-sm leading-7 text-muted">
                <p>
                  Visitors landing on this page are usually looking for a broader overview before
                  choosing a specific category or product. This guide is designed to make that
                  process easier by pointing toward the main product groups and the key pages that
                  support pre-order review.
                </p>

                <p>
                  The catalogue includes antioxidant, hydration-focused, structural, regenerative,
                  and selected metabolic product lines. Rather than forcing visitors through several
                  overlapping pages, this guide helps direct them toward the category or support
                  page that is most relevant to what they want to check next.
                </p>

                <p>
                  You can start with the{" "}
                  <Link href="/shop" className="font-semibold text-ink hover:text-accent">
                    full catalogue
                  </Link>
                  , move into broader{" "}
                  <Link href="/research-peptides" className="font-semibold text-ink hover:text-accent">
                    research peptide categories
                  </Link>
                  , or review{" "}
                  <Link href="/quality-assurance" className="font-semibold text-ink hover:text-accent">
                    quality and documentation
                  </Link>{" "}
                  before placing an order.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/research-peptides"
                  className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                >
                  Explore research peptide categories
                </Link>
                <Link
                  href="/quality-assurance"
                  className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                >
                  Quality & documentation
                </Link>
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
                    Explore the main product categories
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted md:text-base">
                    Use the category pages below to move into the part of the catalogue most
                    relevant to your product search, then open product pages for pricing, stock
                    status, pack details, and available documentation.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/research-peptides"
                    className="rounded-xl2 bg-accent px-5 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                  >
                    Research peptide categories
                  </Link>
                  <Link
                    href="/shop"
                    className="rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                  >
                    Open full catalogue
                  </Link>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {categoryCards.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl2 border border-line bg-panel p-4"
                  >
                    <div className="text-sm font-extrabold text-ink">{item.title}</div>
                    <p className="mt-2 text-sm text-muted">{item.copy}</p>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                What this page helps you compare
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Buyers using a page like this are usually comparing category coverage, the types of
                products available, and how easily they can move from a broad overview into
                specific product pages.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                That means the page works best when it helps visitors understand the main product
                groups first, then guides them toward the catalogue, the relevant category page, or
                the quality page depending on what they want to review next.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                This is why the most useful next step is usually to continue into the{" "}
                <Link href="/shop" className="font-semibold text-ink hover:text-accent">
                  shop
                </Link>
                ,{" "}
                <Link href="/quality-assurance" className="font-semibold text-ink hover:text-accent">
                  quality page
                </Link>
                , or one of the category pages below.
              </p>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="surface-card p-6">
                <h3 className="text-lg font-extrabold">Antioxidant peptides</h3>
                <p className="mt-3 text-sm text-muted">
                  Includes glutathione and vitamin C related lines used in antioxidant-focused
                  research settings.
                </p>

                <Link
                  href="/antioxidant-peptides"
                  className="mt-4 inline-block font-extrabold text-ink hover:text-accent"
                >
                  View antioxidant category →
                </Link>
              </div>

              <div className="surface-card p-6">
                <h3 className="text-lg font-extrabold">Hydration products</h3>
                <p className="mt-3 text-sm text-muted">
                  Includes hyaluronic acid related lines and support products used in
                  hydration-focused laboratory work.
                </p>

                <Link
                  href="/hydration-peptides"
                  className="mt-4 inline-block font-extrabold text-ink hover:text-accent"
                >
                  View hydration category →
                </Link>
              </div>

              <div className="surface-card p-6">
                <h3 className="text-lg font-extrabold">Regenerative compounds</h3>
                <p className="mt-3 text-sm text-muted">
                  Includes PDRN, collagen-related lines, and other regeneration-focused product
                  groups.
                </p>

                <Link
                  href="/regenerative-peptides"
                  className="mt-4 inline-block font-extrabold text-ink hover:text-accent"
                >
                  View regenerative category →
                </Link>
              </div>

              <div className="surface-card p-6">
                <h3 className="text-lg font-extrabold">Firming peptide blends</h3>
                <p className="mt-3 text-sm text-muted">
                  Includes structure and elasticity-focused blends used in formulation and
                  compatibility review.
                </p>

                <Link
                  href="/firming-peptides"
                  className="mt-4 inline-block font-extrabold text-ink hover:text-accent"
                >
                  View firming category →
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Research use only and scientific context
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                All products listed on this site are supplied strictly for laboratory and
                scientific research use only. They are not intended for human consumption, medical
                treatment, veterinary use, or clinical application.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                This page is intended to support product discovery, category navigation, and
                pre-order research. It is not presented as consumer or clinical guidance.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/shop"
                  className="inline-block rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                >
                  Browse all products
                </Link>
                <Link
                  href="/quality-assurance"
                  className="inline-block rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                >
                  Quality & documentation
                </Link>
              </div>
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

        <section className="py-14">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Common questions about laboratory peptide compounds
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