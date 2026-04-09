import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Buy Research Peptides UK | Research-Use-Only Product Guide",
  description:
    "Browse research-use-only peptide categories available in the UK, compare product types, and move into trusted product, quality, and support pages before ordering.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/buy-research-peptides-uk",
  },
  openGraph: {
    title: "Buy Research Peptides UK | Research-Use-Only Product Guide",
    description:
      "Browse research-use-only peptide categories available in the UK, compare product types, and move into trusted product, quality, and support pages before ordering.",
    url: "https://www.peptideproducts.co.uk/buy-research-peptides-uk",
    siteName: "Peptide Products",
    images: [
      {
        url: "https://www.peptideproducts.co.uk/products/meso-glutathione-main.jpg",
        width: 1200,
        height: 900,
        alt: "Buy research peptides UK product guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Research Peptides UK | Research-Use-Only Product Guide",
    description:
      "Browse research-use-only peptide categories available in the UK, compare product types, and move into trusted product, quality, and support pages before ordering.",
    images: ["https://www.peptideproducts.co.uk/products/meso-glutathione-main.jpg"],
  },
};

const faqItems = [
  {
    question: "Can research peptides be bought in the UK through this site?",
    answer:
      "Yes. This site provides a UK-facing catalogue for research-use-only peptide and related laboratory product lines.",
  },
  {
    question: "Which categories are available?",
    answer:
      "The catalogue includes antioxidant, hydration, firming, regenerative, and selected metabolic product categories, along with supporting quality and information pages.",
  },
  {
    question: "Are these compounds supplied for human use?",
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
    name: "Buy Research Peptides UK",
    url: "https://www.peptideproducts.co.uk/buy-research-peptides-uk",
    description:
      "Browse research-use-only peptide categories available in the UK, compare product types, and move into trusted product, quality, and support pages before ordering.",
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
        name: "Buy research peptides UK",
        item: "https://www.peptideproducts.co.uk/buy-research-peptides-uk",
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
                Buy research peptides UK
              </div>

              <div className="mt-6 max-w-4xl">
                <div className="eyebrow">UK research-use-only buying guide</div>
                <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
                  Buy research peptides UK
                </h1>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-muted md:text-base">
                  This page is a simple guide for UK visitors looking to compare research-use-only
                  peptide categories, review product types, and move into the most useful next step
                  before ordering.
                </p>
              </div>

              <div className="mt-8 max-w-3xl overflow-hidden rounded-xl3 border border-line bg-panel p-4 shadow-soft">
                <div className="relative h-[360px] w-full bg-panel">
                  <Image
                    src="/products/meso-glutathione-main.jpg"
                    alt="Buy research peptides UK product guide"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              <div className="mt-8 max-w-3xl space-y-4 text-sm leading-7 text-muted">
                <p>
                  Buyers searching for research peptides in the UK are usually looking for a clear
                  catalogue, helpful category pages, and enough information to compare products
                  before checkout. This guide is designed to make that process easier.
                </p>

                <p>
                  The site includes a range of antioxidant, hydration-focused, structural,
                  regenerative, and selected metabolic product lines. Rather than sending visitors
                  through too many overlapping pages, this guide points you toward the most useful
                  next page based on what you want to review.
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
                  <Link key={item.href} href={item.href} className="rounded-xl2 border border-line bg-panel p-4">
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
                What buyers usually want to check
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                In practice, buyers comparing research peptides in the UK are usually looking at a
                few simple things: category coverage, product availability, clear product pages, and
                access to supporting information such as pack size, imagery, stock status, and
                documentation.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                A useful buying page should help visitors move from broad search intent into the
                right category, then into the most relevant product pages without confusion or too
                many repeated paths.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                That is why this page works best as a product-discovery guide leading into the{" "}
                <Link href="/shop" className="font-semibold text-ink hover:text-accent">
                  shop
                </Link>
                ,{" "}
                <Link href="/quality-assurance" className="font-semibold text-ink hover:text-accent">
                  quality page
                </Link>
                , and key category pages rather than acting as a standalone sales page.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Research use only and scientific context
              </h2>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                All products listed on this site are supplied strictly for laboratory and
                scientific research use only. They are not intended for human consumption, medical
                treatment, veterinary use, or clinical application.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
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
                Common questions about buying research peptides in the UK
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