import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Laboratory Peptide Compounds UK | Research Catalogue Guide",
  description:
    "Explore laboratory peptide compounds for research-use-only review. Compare peptide categories, product documentation, quality information, dispatch details, and ordering support from Peptide Products UK.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/laboratory-peptide-compounds",
  },
  openGraph: {
    title: "Laboratory Peptide Compounds UK | Peptide Products",
    description:
      "A detailed research-use-only guide to laboratory peptide compounds, product categories, quality documentation, ordering support, and UK dispatch information.",
    url: "https://www.peptideproducts.co.uk/laboratory-peptide-compounds",
    siteName: "Peptide Products",
    images: [
      {
        url: "https://www.peptideproducts.co.uk/home/home-full-vial-set.webp",
        width: 1400,
        height: 1080,
        alt: "Laboratory peptide compounds research product range",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laboratory Peptide Compounds UK | Peptide Products",
    description:
      "Compare research-use-only peptide categories, quality information, product documentation, and ordering support from Peptide Products UK.",
    images: ["https://www.peptideproducts.co.uk/home/home-full-vial-set.webp"],
  },
};

const faqItems = [
  {
    question: "What are laboratory peptide compounds?",
    answer:
      "Laboratory peptide compounds are peptide and related research products supplied for analytical review, formulation study, laboratory comparison, and scientific purchasing. On Peptide Products, they are presented strictly for research-use-only purposes.",
  },
  {
    question: "Which laboratory peptide compound categories are available?",
    answer:
      "The catalogue includes selected research-use-only product categories such as metabolic research peptides, antioxidant-related compounds, copper peptide products, regenerative research products, nootropic research products, and laboratory support items.",
  },
  {
    question: "How should researchers compare products before ordering?",
    answer:
      "Research buyers should compare product name, stated strength, pack size, stock status, price, available quality information, documentation, delivery details, and whether checkout or availability confirmation is required.",
  },
  {
    question: "Are these products supplied for human use?",
    answer:
      "No. Products listed on Peptide Products are supplied strictly for laboratory research use only. They are not intended for human consumption, medical treatment, veterinary use, clinical application, diagnostic use, or personal use.",
  },
] as const;

const categoryCards = [
  {
    title: "Metabolic research peptides",
    copy: "Research-use-only peptide products such as Retatrutide and related catalogue pages where buyers can review strength, pack information, stock status, and ordering support.",
    href: "/product/retatrutide",
  },
  {
    title: "Antioxidant research compounds",
    copy: "Glutathione and related antioxidant-focused research product pages for laboratory review, documentation checks, and product comparison.",
    href: "/antioxidant-peptides",
  },
  {
    title: "Copper and structural peptides",
    copy: "GHK-CU and structure-focused peptide products used for analytical, formulation, compatibility, and laboratory product review.",
    href: "/firming-peptides",
  },
  {
    title: "Regenerative research products",
    copy: "Selected BPC, PDRN, collagen-related, and regenerative research product categories for laboratory-use-only comparison.",
    href: "/regenerative-peptides",
  },
] as const;

const productPathLinks = [
  {
    title: "Retatrutide 40mg research product",
    copy: "View the main Retatrutide product page for current pricing, pack information, stock status, quality information, and checkout options.",
    href: "/product/retatrutide",
  },
  {
    title: "GHK-CU products",
    copy: "Review copper peptide product pages, strength options, product information, and supporting documentation where available.",
    href: "/product/ghk-cu-100mg",
  },
  {
    title: "BPC-157 products",
    copy: "Compare BPC-157 research product information, pack size, price, and ordering details from the product page.",
    href: "/product/bpc-157-10mg",
  },
  {
    title: "NAD products",
    copy: "Open NAD product information pages for stock status, catalogue details, and research-use-only ordering support.",
    href: "/product/nad-500mg",
  },
] as const;

const helpfulLinks = [
  {
    title: "Browse full catalogue",
    copy: "Open the full shop catalogue to compare product names, strengths, prices, pack sizes, stock status, and ordering options.",
    href: "/shop",
  },
  {
    title: "Quality information",
    copy: "Review available product documentation, quality information, and test-report guidance before ordering.",
    href: "/quality-assurance",
  },
  {
    title: "Shipping information",
    copy: "Check UK dispatch, selected international delivery, delivery estimates, and order processing information.",
    href: "/shipping",
  },
  {
    title: "Contact support",
    copy: "Ask about product availability, documentation, checkout, order status, or delivery support before ordering.",
    href: "/contact",
  },
] as const;

export default function Page() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Laboratory Peptide Compounds UK",
    url: "https://www.peptideproducts.co.uk/laboratory-peptide-compounds",
    description:
      "A detailed research-use-only guide to laboratory peptide compounds, product categories, quality documentation, ordering support, and UK dispatch information from Peptide Products.",
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
            <div className="max-w-6xl">
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

              <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_430px] lg:items-center">
                <div>
                  <div className="eyebrow">Research-use-only catalogue guide</div>

                  <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
                    Laboratory peptide compounds UK
                  </h1>

                  <p className="mt-5 max-w-3xl text-base leading-8 text-muted">
                    Laboratory peptide compounds cover a broad range of research-use-only products
                    supplied for analytical review, laboratory comparison, formulation study, and
                    scientific purchasing. Peptide Products organises these compounds by category,
                    strength, pack size, stock status, documentation, and ordering route so
                    research buyers can compare products clearly before placing an order.
                  </p>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                    Every product referenced on this site is presented for laboratory research,
                    analytical review, and scientific-use-only purchasing. Products are not
                    supplied for human consumption, medical use, veterinary use, clinical use,
                    diagnostic use, treatment use, or personal use.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="trust-pill">Research-use-only</span>
                    <span className="trust-pill">UK dispatch information</span>
                    <span className="trust-pill">Quality documentation</span>
                    <span className="trust-pill">Product catalogue guide</span>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="/shop"
                      className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                    >
                      Browse product catalogue
                    </Link>
                    <Link
                      href="/quality-assurance"
                      className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                    >
                      Quality information
                    </Link>
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl3 border border-line bg-white p-4 shadow-soft">
                  <div className="relative h-[420px] w-full overflow-hidden rounded-xl2 bg-panel">
                    <Image
                      src="/home/home-full-vial-set.webp"
                      alt="Laboratory peptide compounds research product range"
                      fill
                      className="object-contain p-4"
                      priority
                    />
                  </div>
                </div>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <div className="rounded-xl2 border border-line bg-white p-5 shadow-soft">
                  <div className="text-sm font-extrabold text-ink">
                    Research compound categories
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    The catalogue includes selected peptide and related research compounds across
                    metabolic, antioxidant, copper peptide, regenerative, nootropic, and laboratory
                    support categories.
                  </p>
                </div>

                <div className="rounded-xl2 border border-line bg-white p-5 shadow-soft">
                  <div className="text-sm font-extrabold text-ink">
                    Strength, pack, and documentation
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Each product should be reviewed by compound name, stated strength, pack size,
                    stock status, price, available quality information, and any supporting
                    documentation shown on the product page.
                  </p>
                </div>

                <div className="rounded-xl2 border border-line bg-white p-5 shadow-soft">
                  <div className="text-sm font-extrabold text-ink">
                    Laboratory research use only
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Products are supplied strictly for laboratory research and analytical review.
                    They are not supplied for human consumption, medical use, veterinary use,
                    clinical use, diagnostic use, or treatment use.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft lg:p-8">
              <div className="max-w-4xl">
                <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-muted">
                  Main category path
                </div>

                <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
                  Compare laboratory peptide compound categories
                </h2>

                <p className="mt-4 text-sm leading-7 text-muted md:text-base">
                  Laboratory peptide compounds are usually compared by research category, stated
                  strength, purity or documentation availability, pack size, and intended laboratory
                  context. The categories below give buyers a clear route into the relevant product
                  group without mixing research-use-only catalogue information with clinical,
                  dosage, or consumer-use language.
                </p>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {categoryCards.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl2 border border-line bg-panel p-5 shadow-soft transition hover:bg-white"
                  >
                    <div className="text-sm font-extrabold text-ink">{item.title}</div>
                    <p className="mt-2 text-sm leading-6 text-muted">{item.copy}</p>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">
                  How laboratory peptide compounds are compared
                </h2>

                <p className="mt-4 text-sm leading-7 text-muted">
                  Research buyers normally compare laboratory peptide compounds by the exact
                  compound name, stated strength, pack size, price, stock status, quality
                  information, and delivery route. A product page should make those details clear
                  before an order is placed, especially where a product requires availability
                  confirmation or supporting documentation review.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <div className="surface-card p-6">
                    <h3 className="text-lg font-extrabold">Product identity</h3>
                    <p className="mt-3 text-sm leading-6 text-muted">
                      Check the exact product name, strength, pack size, and product page URL before
                      comparing prices or submitting an order.
                    </p>
                  </div>

                  <div className="surface-card p-6">
                    <h3 className="text-lg font-extrabold">Stock status</h3>
                    <p className="mt-3 text-sm leading-6 text-muted">
                      Review whether the product is available for checkout or requires support
                      confirmation before ordering.
                    </p>
                  </div>

                  <div className="surface-card p-6">
                    <h3 className="text-lg font-extrabold">Documentation</h3>
                    <p className="mt-3 text-sm leading-6 text-muted">
                      Open quality information and product documentation links where available,
                      especially for products that display a test-report notice.
                    </p>
                  </div>

                  <div className="surface-card p-6">
                    <h3 className="text-lg font-extrabold">Delivery and support</h3>
                    <p className="mt-3 text-sm leading-6 text-muted">
                      Check UK dispatch, selected international delivery information, order status,
                      and contact options before placing an order.
                    </p>
                  </div>
                </div>
              </div>

              <aside className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <div className="text-lg font-extrabold text-ink">
                  Useful next steps
                </div>

                <div className="mt-4 grid gap-3">
                  {helpfulLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-xl2 border border-line bg-panel p-4 transition hover:bg-white"
                    >
                      <div className="text-sm font-extrabold text-ink">{item.title}</div>
                      <p className="mt-1 text-sm leading-6 text-muted">{item.copy}</p>
                    </Link>
                  ))}
                </div>
              </aside>
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Popular laboratory peptide compound pages
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                The product pages below represent common research catalogue paths. Each page should
                be reviewed individually for current pricing, pack size, stock status, product
                information, documentation where available, delivery details, and whether checkout
                or availability confirmation is required.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {productPathLinks.map((item) => (
                <Link key={item.href} href={item.href} className="surface-card p-5">
                  <div className="font-extrabold text-ink">{item.title}</div>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.copy}</p>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Research-use-only position
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Peptide Products presents laboratory peptide compounds strictly for research,
                analytical, and scientific-use-only purchasing. The information provided across the
                catalogue is intended for product discovery, product comparison, documentation
                review, and ordering support. It is not consumer advice, clinical guidance, dosage
                guidance, treatment information, or usage instruction.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                Customers should compare catalogue information, review available quality
                documentation, confirm delivery details, and contact support when a product requires
                availability confirmation. Any product that is marked as requiring confirmation
                should be treated as enquiry-only until support confirms otherwise.
              </p>

              <div className="mt-8 rounded-xl3 border border-amber-200 bg-amber-50 p-6">
                <div className="text-lg font-extrabold text-amber-950">
                  Important research-use-only notice
                </div>
                <p className="mt-3 text-sm leading-7 text-amber-800">
                  Products are not supplied for human consumption, medical use, veterinary use,
                  clinical use, diagnostic use, treatment use, or personal use. Product pages,
                  category pages, and support pages should be read only in the context of laboratory
                  research supply and product documentation review.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft lg:p-8">
              <div className="max-w-4xl">
                <h2 className="text-2xl font-extrabold tracking-tight">
                  Common questions about laboratory peptide compounds
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  These answers explain how laboratory peptide compound information is presented
                  across the catalogue and how research buyers can compare product categories,
                  quality information, delivery details, and support options.
                </p>
              </div>

              <div className="mt-8 grid gap-5">
                {faqItems.map((item) => (
                  <div key={item.question} className="surface-card p-6">
                    <h3 className="text-lg font-extrabold tracking-tight">{item.question}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft lg:p-8">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center">
                <div>
                  <h2 className="text-2xl font-extrabold tracking-tight">
                    Continue into the catalogue
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-muted">
                    The full catalogue contains current product names, strengths, prices, stock
                    status, and ordering routes. The quality information page gives additional
                    guidance on documentation and test-report availability. For availability,
                    delivery, or payment questions, contact support before ordering.
                  </p>
                </div>

                <div className="grid gap-3">
                  <Link
                    href="/shop"
                    className="rounded-xl2 bg-accent px-6 py-3 text-center text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                  >
                    Browse all products
                  </Link>
                  <Link
                    href="/quality-assurance"
                    className="rounded-xl2 border border-line bg-white px-6 py-3 text-center text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                  >
                    Quality information
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-xl2 border border-line bg-white px-6 py-3 text-center text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                  >
                    Contact support
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}