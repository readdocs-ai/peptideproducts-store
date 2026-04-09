import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Research Peptides UK | Research-Use-Only Product Guide",
  description:
    "Browse research-use-only peptide categories available in the UK, review product types, and move into trusted product, quality, and support pages at Peptide Products.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/research-peptides-uk",
  },
  openGraph: {
    title: "Research Peptides UK | Research-Use-Only Product Guide",
    description:
      "Browse research-use-only peptide categories available in the UK, review product types, and move into trusted product, quality, and support pages at Peptide Products.",
    url: "https://www.peptideproducts.co.uk/research-peptides-uk",
    siteName: "Peptide Products",
    images: [
      {
        url: "https://www.peptideproducts.co.uk/products/meso-glutathione-main.jpg",
        width: 1200,
        height: 900,
        alt: "Research peptide categories and products available in the UK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Peptides UK | Research-Use-Only Product Guide",
    description:
      "Browse research-use-only peptide categories available in the UK, review product types, and move into trusted product, quality, and support pages at Peptide Products.",
    images: ["https://www.peptideproducts.co.uk/products/meso-glutathione-main.jpg"],
  },
};

const faqItems = [
  {
    question: "What does research peptides UK mean on this site?",
    answer:
      "On this site, research peptides UK refers to research-use-only peptide and compound categories available to UK-based buyers looking for laboratory and analytical product information.",
  },
  {
    question: "Which product categories are included?",
    answer:
      "The catalogue includes antioxidant, hydration, firming, regenerative, and selected metabolic product categories, along with supporting quality and information pages.",
  },
  {
    question: "Are these products supplied for human use?",
    answer:
      "No. All products listed on this site are supplied strictly for laboratory, analytical, and scientific research use only.",
  },
] as const;

const categoryCards = [
  {
    title: "Antioxidant peptides",
    copy: "Glutathione and vitamin C related compounds used in antioxidant-focused research settings.",
    href: "/antioxidant-peptides",
  },
  {
    title: "Hydration peptides",
    copy: "Hyaluronic acid related products and hydration-focused compounds for laboratory review.",
    href: "/hydration-peptides",
  },
  {
    title: "Firming peptides",
    copy: "Structure and elasticity-focused peptide blends used in formulation and compatibility research.",
    href: "/firming-peptides",
  },
  {
    title: "Regenerative peptides",
    copy: "BPC-157, PDRN, collagen-related lines, and other regeneration-focused research products.",
    href: "/regenerative-peptides",
  },
] as const;

const guideCards = [
  {
    title: "Browse all products",
    copy: "Open the full catalogue and compare pack sizes, prices, stock status, and product details.",
    href: "/shop",
  },
  {
    title: "Quality & documentation",
    copy: "Review available certificates, supporting files, and general pre-order guidance.",
    href: "/quality-assurance",
  },
  {
    title: "Shipping information",
    copy: "Check dispatch and delivery information before placing an order.",
    href: "/shipping",
  },
  {
    title: "Contact support",
    copy: "Get help with product, documentation, ordering, or delivery questions.",
    href: "/contact",
  },
] as const;

export default function ResearchPeptidesUK() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Research Peptides UK",
    url: "https://www.peptideproducts.co.uk/research-peptides-uk",
    description:
      "Browse research-use-only peptide categories available in the UK, review product types, and move into trusted product, quality, and support pages at Peptide Products.",
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
        name: "Research peptides UK",
        item: "https://www.peptideproducts.co.uk/research-peptides-uk",
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
                Research peptides UK
              </div>

              <div className="mt-6 max-w-4xl">
                <div className="eyebrow">UK research-use-only product guide</div>
                <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
                  Research peptides UK
                </h1>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-muted md:text-base">
                  This page acts as a simple UK guide to the main research-use-only peptide
                  categories available across the site, with quick paths into products, quality
                  information, and support pages before ordering.
                </p>
              </div>

              <div className="mt-8 max-w-3xl overflow-hidden rounded-xl3 border border-line bg-panel p-4 shadow-soft">
                <div className="relative h-[360px] w-full bg-panel">
                  <Image
                    src="/products/meso-glutathione-main.jpg"
                    alt="Research peptide categories and products available in the UK"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              <div className="mt-8 max-w-3xl space-y-4 text-sm leading-7 text-muted">
                <p>
                  Research peptides are studied in laboratory, analytical, and formulation-focused
                  environments where buyers may need a clear path into product categories, supporting
                  documents, and product detail pages. This guide is designed to make that journey
                  easier for UK visitors.
                </p>

                <p>
                  The catalogue includes a range of product types, including antioxidant,
                  hydration-focused, structural, regenerative, and selected metabolic lines. Rather
                  than forcing visitors through multiple overlapping pages, this guide is meant to
                  point you toward the most useful next step based on what you are trying to review.
                </p>

                <p>
                  You can start with the main{" "}
                  <Link href="/shop" className="font-semibold text-ink hover:text-accent">
                    shop
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
                  href="/shop"
                  className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                >
                  Browse all products
                </Link>

                <Link
                  href="/quality-assurance"
                  className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                >
                  Quality & documentation
                </Link>
              </div>
            </div>

            <section className="mt-10 rounded-xl3 border border-line bg-white p-6 shadow-soft lg:p-8">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-muted">
                    Featured category path
                  </div>
                  <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
                    Explore core research peptide categories
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted md:text-base">
                    Use the category pages below to move into the part of the catalogue most
                    relevant to your product search, then open individual product pages for pricing,
                    stock status, pack details, and available documentation.
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
                  <Link key={item.href} href={item.href} className="rounded-xl2 border border-line bg-panel p-4">
                    <div className="text-sm font-extrabold text-ink">{item.title}</div>
                    <p className="mt-2 text-sm text-muted">{item.copy}</p>
                  </Link>
                ))}
              </div>
            </section>
          </Container>
        </section>

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Types of research peptide products
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                The site includes a mix of product categories for buyers comparing different
                research-use-only lines. These pages are designed to help visitors narrow down the
                right category before moving into individual product pages.
              </p>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="surface-card p-6">
                <h3 className="text-lg font-extrabold">Antioxidant peptides</h3>
                <p className="mt-3 text-sm text-muted">
                  Includes glutathione and related compounds used in antioxidant and oxidative
                  stress-focused research settings.
                </p>

                <Link
                  href="/antioxidant-peptides"
                  className="mt-4 inline-block font-extrabold text-ink hover:text-accent"
                >
                  View antioxidant peptide category →
                </Link>
              </div>

              <div className="surface-card p-6">
                <h3 className="text-lg font-extrabold">Hydration products</h3>
                <p className="mt-3 text-sm text-muted">
                  Includes hyaluronic acid-related lines and support products used in
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
                  Includes products such as BPC-157, PDRN, and related lines used in
                  regeneration-focused research environments.
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
                How buyers typically use this page
              </h2>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                Visitors usually land here when they want a broad UK overview before choosing a
                specific category or product. From here, the most useful next step is normally to
                move into the main catalogue, a category page, or the quality page depending on
                whether the priority is product discovery or pre-order reassurance.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                Buyers comparing specific lines can also move into more detailed pages such as{" "}
                <Link
                  href="/glutathione-research-peptide"
                  className="font-semibold text-ink hover:text-accent"
                >
                  glutathione research peptide
                </Link>
                ,{" "}
                <Link
                  href="/hyaluronic-acid-peptide-research"
                  className="font-semibold text-ink hover:text-accent"
                >
                  hyaluronic acid peptide research
                </Link>
                ,{" "}
                <Link
                  href="/pdrn-research-peptide"
                  className="font-semibold text-ink hover:text-accent"
                >
                  PDRN research peptide
                </Link>
                , and{" "}
                <Link
                  href="/retatrutide-research-peptide"
                  className="font-semibold text-ink hover:text-accent"
                >
                  retatrutide research peptide
                </Link>
                .
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                For the strongest buying path, use this page as a starting point and then continue
                into the{" "}
                <Link href="/shop" className="font-semibold text-ink hover:text-accent">
                  shop
                </Link>
                ,{" "}
                <Link href="/quality-assurance" className="font-semibold text-ink hover:text-accent">
                  quality & documentation
                </Link>
                , or{" "}
                <Link href="/contact" className="font-semibold text-ink hover:text-accent">
                  contact
                </Link>{" "}
                pages.
              </p>
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Research use disclaimer
              </h2>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                All products listed on this site are supplied strictly for laboratory research use.
                They are not intended for human consumption, medical treatment, or veterinary use.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                This page is intended to help visitors understand the main product categories and
                find the most relevant next page for product review, documentation, ordering, and
                support.
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
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Helpful next pages
              </h2>

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {guideCards.map((item) => (
                  <Link key={item.href} href={item.href} className="surface-card p-5">
                    <div className="font-extrabold text-ink">{item.title}</div>
                    <p className="mt-2 text-sm text-muted">{item.copy}</p>
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
                Common questions about research peptides UK
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