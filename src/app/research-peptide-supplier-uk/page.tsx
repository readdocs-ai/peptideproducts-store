import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Research Peptide Supplier UK | Research-Use-Only Product Guide",
  description:
    "Learn more about Peptide Products as a UK research-use-only peptide supplier, browse key product categories, and move into product, quality, and support pages before ordering.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/research-peptide-supplier-uk",
  },
  openGraph: {
    title: "Research Peptide Supplier UK | Research-Use-Only Product Guide",
    description:
      "Learn more about Peptide Products as a UK research-use-only peptide supplier, browse key product categories, and move into product, quality, and support pages before ordering.",
    url: "https://www.peptideproducts.co.uk/research-peptide-supplier-uk",
    siteName: "Peptide Products",
    images: [
      {
        url: "https://www.peptideproducts.co.uk/products/meso-collagen-main.jpg",
        width: 1200,
        height: 900,
        alt: "Research peptide supplier UK product guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Peptide Supplier UK | Research-Use-Only Product Guide",
    description:
      "Learn more about Peptide Products as a UK research-use-only peptide supplier, browse key product categories, and move into product, quality, and support pages before ordering.",
    images: ["https://www.peptideproducts.co.uk/products/meso-collagen-main.jpg"],
  },
};

const productLinks = [
  {
    title: "Meso Glutathione",
    copy: "Antioxidant-focused product line with glutathione and vitamin C positioning.",
    href: "/product/meso-glutathione",
  },
  {
    title: "Skinbooster Hyaluronic Acid",
    copy: "Hydration-focused line for formulation review and laboratory comparison.",
    href: "/product/skinbooster-hyaluronic-acid",
  },
  {
    title: "Meso Lift & Firming",
    copy: "Firming-focused peptide blend for elasticity and compatibility-related review.",
    href: "/product/meso-lift-firming",
  },
  {
    title: "Meso Collagen Skin Booster",
    copy: "Collagen-focused line for regeneration and formulation-related research settings.",
    href: "/product/meso-collagen",
  },
  {
    title: "Meso PDRN",
    copy: "PDRN-based product line for repair and regeneration-focused research environments.",
    href: "/product/meso-pdrn",
  },
  {
    title: "Meso Vitamin C",
    copy: "Vitamin C-led antioxidant line for analytical and formulation-focused work.",
    href: "/product/meso-vitamin-c",
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

const faqItems = [
  {
    question: "What does a research peptide supplier do?",
    answer:
      "A research peptide supplier provides research-use-only peptide or related laboratory product lines for scientific, analytical, and formulation-focused environments.",
  },
  {
    question: "Do you supply products in the UK?",
    answer:
      "Yes. Peptide Products provides a UK-based online catalogue with product browsing, checkout, and order tracking.",
  },
  {
    question: "Are these products for human use?",
    answer:
      "No. All products listed on this site are supplied strictly for laboratory and scientific research use only.",
  },
] as const;

export default function ResearchPeptideSupplierUKPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Research Peptide Supplier UK",
    url: "https://www.peptideproducts.co.uk/research-peptide-supplier-uk",
    description:
      "Research-use-only supplier guide for UK visitors browsing peptide product categories, documentation, and support pages.",
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
        name: "Research peptide supplier UK",
        item: "https://www.peptideproducts.co.uk/research-peptide-supplier-uk",
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
        <section className="bg-hero py-14 lg:py-16">
          <Container>
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-xs font-semibold text-muted shadow-soft">
                UK research-use-only catalogue
                <span className="h-2 w-2 rounded-full bg-accent2" />
              </div>

              <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-5xl">
                Research peptide supplier UK
              </h1>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted md:text-base">
                This page is a simple guide for UK visitors comparing research-use-only peptide
                suppliers, product categories, and the most useful next steps before ordering.
              </p>

              <div className="mt-8 max-w-3xl overflow-hidden rounded-xl3 border border-line bg-panel p-4 shadow-soft">
                <div className="relative h-[360px] w-full bg-panel">
                  <Image
                    src="/products/meso-collagen-main.jpg"
                    alt="Research peptide supplier UK product guide"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              <div className="mt-6 max-w-3xl space-y-4 text-sm leading-7 text-muted md:text-base">
                <p>
                  Peptide Products provides a UK-based catalogue of research-use-only peptide and
                  related laboratory product lines, helping buyers move from category browsing into
                  detailed product pages, quality information, and support pages.
                </p>

                <p>
                  The site is organised around antioxidant, hydration, firming, regenerative, and
                  selected specialist product lines, making it easier to compare different categories
                  before choosing a specific product.
                </p>

                <p>
                  If you are looking for a supplier page, the most useful next step is usually to
                  browse the{" "}
                  <Link href="/shop" className="font-semibold text-ink hover:text-accent">
                    full catalogue
                  </Link>
                  , review{" "}
                  <Link href="/quality-assurance" className="font-semibold text-ink hover:text-accent">
                    quality and documentation
                  </Link>
                  , or contact support before placing an order.
                </p>
              </div>

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
                Choosing a UK research peptide supplier
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                Buyers looking for a research peptide supplier in the UK are usually comparing a few
                simple things: the product catalogue, the clarity of product pages, available
                documentation, contact options, and how easy it is to move from browsing to
                checkout.
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">
                Peptide Products is structured to support that process by combining category-level
                browsing with individual product pages that show pack size, pricing, imagery, stock
                status, and research-use-only positioning.
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">
                Visitors can also move into broader guides such as{" "}
                <Link href="/research-peptides-uk" className="font-semibold text-ink hover:text-accent">
                  research peptides UK
                </Link>{" "}
                and{" "}
                <Link href="/laboratory-peptide-compounds" className="font-semibold text-ink hover:text-accent">
                  laboratory peptide compounds
                </Link>{" "}
                if they want a wider overview before reviewing specific products.
              </p>
            </div>
          </Container>
        </section>

        <section className="bg-white py-14">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">
                  Featured product lines
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-muted">
                  Explore some of the current peptide and compound lines available through the catalogue.
                </p>
              </div>
              <Link href="/shop" className="text-sm font-extrabold text-ink/80 hover:text-ink">
                View full catalogue →
              </Link>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {productLinks.map((item) => (
                <Link key={item.title} href={item.href} className="surface-card p-6">
                  <h3 className="text-lg font-extrabold tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.copy}</p>
                  <div className="mt-4 text-sm font-extrabold text-ink">View product →</div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">
                  What buyers usually want to see
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted">
                  In practice, supplier pages work best when they make it easy to understand the
                  catalogue depth, the main product categories, and the most useful next pages for
                  product review and pre-order reassurance.
                </p>
                <p className="mt-4 text-sm leading-7 text-muted">
                  That means guiding visitors into product pages, category pages, and trust pages
                  rather than overwhelming them with too many overlapping guide pages.
                </p>
                <p className="mt-4 text-sm leading-7 text-muted">
                  Use this page as a starting point, then continue into the catalogue, quality page,
                  shipping page, or support pages depending on what you want to check next.
                </p>
              </div>

              <div className="rounded-xl3 border border-line bg-panel p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight">Research use only</h2>
                <p className="mt-4 text-sm leading-7 text-muted">
                  All products listed by Peptide Products are supplied strictly for laboratory and
                  scientific research purposes only.
                </p>
                <p className="mt-4 text-sm leading-7 text-muted">
                  They are not intended for human consumption, medical treatment, or clinical use.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/disclaimer"
                    className="inline-flex text-sm font-extrabold text-ink hover:text-accent"
                  >
                    Read disclaimer →
                  </Link>
                  <Link
                    href="/quality-assurance"
                    className="inline-flex text-sm font-extrabold text-ink hover:text-accent"
                  >
                    Quality & documentation →
                  </Link>
                </div>
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
                {helpfulLinks.map((item) => (
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
                Common questions about UK research peptide supply
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