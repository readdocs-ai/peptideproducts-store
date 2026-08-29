import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Research Peptides UK | Research-Use-Only Peptides",
  description:
    "Research peptides UK information from Peptide Products. Browse research-use-only peptides including Retatrutide, Tirzepatide, Melanotan MT-2, Selank, BPC-157, GHK-CU, NAD, and Glutathione.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/research-peptides",
  },
  openGraph: {
    title: "Research Peptides UK | Research-Use-Only Peptides",
    description:
      "Browse research-use-only peptides including Retatrutide, Tirzepatide, Melanotan MT-2, Selank, BPC-157, GHK-CU, NAD, and Glutathione.",
    url: "https://www.peptideproducts.co.uk/research-peptides",
    siteName: "Peptide Products",
    images: [
      {
        url: "https://www.peptideproducts.co.uk/products/retatrutide-40mg-uk.jpg",
        width: 1200,
        height: 900,
        alt: "Research peptides UK product range",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Peptides UK | Research-Use-Only Peptides",
    description:
      "Research-use-only peptide information and product links for UK research customers.",
    images: ["https://www.peptideproducts.co.uk/products/retatrutide-40mg-uk.jpg"],
  },
};

const categoryCards = [
  {
    title: "Metabolic research peptides",
    copy:
      "Browse Retatrutide, Tirzepatide, Melanotan MT-2, Selank, NAD, and related research-use-only product lines.",
    image: "/products/reta single box.png",
    href: "/shop",
  },
  {
    title: "Regenerative research peptides",
    copy:
      "Review BPC-157, GHK-CU, and related regenerative research compounds available from Peptide Products.",
    image: "/products/ghk-cu-100mg.webp",
    href: "/regenerative-peptides",
  },
  {
    title: "Antioxidant research compounds",
    copy:
      "View Glutathione and antioxidant-focused research-use-only compounds with current product information.",
    image: "/products/glutathione-1500mg.webp",
    href: "/antioxidant-peptides",
  },
] as const;

const featuredProducts = [
  {
    title: "Retatrutide 40mg",
    copy:
      "Retatrutide 40mg research peptide pen with product image, stock status, price, ordering information, and test report.",
    image: "/products/reta single box.png",
    href: "/product/retatrutide",
    label: "Best seller",
  },
  {
    title: "Tirzepatide TR15 15mg",
    copy:
      "Tirzepatide TR15 15mg research peptide vial with current availability and ordering information.",
    image: "/products/tirzepatide-tr15-15mg.webp",
    href: "/product/tirzepatide-tr15-15mg",
    label: "Metabolic",
  },
  {
    title: "Melanotan MT-2 10mg",
    copy:
      "Melanotan MT-2 10mg research peptide vial for laboratory, analytical, and scientific research use only.",
    image: "/products/melanotan-mt2-10mg.webp",
    href: "/product/melanotan-mt2-10mg",
    label: "Research peptide",
  },
  {
    title: "BPC-157 10mg",
    copy:
      "BPC-157 10mg research peptide vial with product details, pack information, and ordering support.",
    image: "/products/bpc-157-10mg.webp",
    href: "/product/bpc-157-10mg",
    label: "Regenerative",
  },
  {
    title: "GHK-CU 100mg",
    copy:
      "GHK-CU 100mg copper peptide research product with current product details and test report availability.",
    image: "/products/ghk-cu-100mg.webp",
    href: "/product/ghk-cu-100mg",
    label: "Copper peptide",
  },
  {
    title: "NAD 500mg",
    copy:
      "NAD 500mg research compound with product image, pack details, price information, and ordering support.",
    image: "/products/nad-500mg.webp",
    href: "/product/nad-500mg",
    label: "Metabolic",
  },
] as const;

const retatrutideLinks = [
  {
    title: "Buy Retatrutide UK",
    copy: "View Retatrutide 40mg buying information, stock, price, and ordering options.",
    href: "/buy-retatrutide-uk",
  },
  {
    title: "Retatrutide price UK",
    copy: "Check Retatrutide price guidance and what to review before ordering.",
    href: "/retatrutide-price-uk",
  },
  {
    title: "What is Retatrutide?",
    copy: "Read a research-use overview of Retatrutide and receptor pathway context.",
    href: "/what-is-retatrutide",
  },
  {
    title: "Retatrutide research peptide",
    copy: "Review Retatrutide research peptide information and research-use restrictions.",
    href: "/retatrutide-research-peptide",
  },
] as const;

const helpfulLinks = [
  {
    title: "Browse all products",
    copy: "Open the full catalogue and compare current product pages, prices, stock status, and pack details.",
    href: "/shop",
  },
  {
    title: "Quality information",
    copy: "Review available test reports and product quality information before ordering.",
    href: "/quality-assurance",
  },
  {
    title: "Shipping information",
    copy: "Check UK dispatch, selected international delivery, and delivery guidance before checkout.",
    href: "/shipping",
  },
  {
    title: "Contact support",
    copy: "Ask about products, stock, ordering, payment, or delivery before placing an order.",
    href: "/contact",
  },
] as const;

const faqItems = [
  {
    question: "What are research peptides?",
    answer:
      "On Peptide Products, research peptides are listed for laboratory, analytical, and scientific research use only. They are not supplied for human use, veterinary use, diagnosis, treatment, cure, or prevention of disease.",
  },
  {
    question: "Which research peptides are available?",
    answer:
      "Current product lines include Retatrutide, Tirzepatide, Melanotan MT-2, Selank, BPC-157, GHK-CU, NAD, Glutathione, and related research-use-only compounds.",
  },
  {
    question: "Can I view test reports before ordering?",
    answer:
      "Yes. Selected product pages include test reports or supporting quality files where available. The quality information page also brings available test reports together in one place.",
  },
  {
    question: "Are these products intended for human use?",
    answer:
      "No. Products listed by Peptide Products are supplied strictly for laboratory, analytical, and scientific research use only.",
  },
] as const;

export default function ResearchPeptidesPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Research Peptides UK",
    url: "https://www.peptideproducts.co.uk/research-peptides",
    description:
      "Research peptides UK product guide covering current research-use-only product lines, quality information, test reports, stock checks, and ordering support.",
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
                  Research Peptides UK
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg">
                  Browse current research-use-only peptide products from Peptide
                  Products, including Retatrutide, Tirzepatide, Melanotan MT-2,
                  Selank, BPC-157, GHK-CU, NAD, Glutathione, and related
                  laboratory research compounds.
                </p>

                <p className="mt-4 max-w-2xl text-base leading-8 text-muted md:text-lg">
                  Product pages show current stock status, price, pack details,
                  product images, ordering options, and test report availability
                  where applicable.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/shop"
                    className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                  >
                    Browse all products
                  </Link>

                  <Link
                    href="/product/retatrutide"
                    className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                  >
                    View Retatrutide
                  </Link>

                  <Link
                    href="/quality-assurance"
                    className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                  >
                    Quality information
                  </Link>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="trust-pill">Research use only</span>
                  <span className="trust-pill">Test reports on selected lines</span>
                  <span className="trust-pill">Tracked UK dispatch</span>
                  <span className="trust-pill">Secure checkout</span>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl3 border border-line bg-white p-4 shadow-soft md:p-5">
                <div className="grid h-[330px] grid-cols-2 gap-3 md:h-[470px] md:grid-cols-3">
                  {featuredProducts.map((product) => {
                    const featured = product.title === "Retatrutide 40mg";

                    return (
                      <Link
                        key={product.title}
                        href={product.href}
                        className={
                          "group relative overflow-hidden rounded-xl2 border bg-panel transition duration-300 hover:-translate-y-0.5 hover:shadow-soft " +
                          (featured
                            ? "border-accent/40 ring-2 ring-accent/10"
                            : "border-line")
                        }
                      >
                        <div
                          className={
                            "absolute left-3 top-3 z-10 rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] shadow-soft " +
                            (featured ? "bg-accent text-white" : "bg-white/95 text-ink")
                          }
                        >
                          {product.label}
                        </div>

                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          priority={featured}
                          sizes="(min-width: 1024px) 15vw, 50vw"
                          className={
                            "object-contain transition duration-300 group-hover:scale-[1.04] " +
                            (featured ? "p-3 md:p-4" : "p-5")
                          }
                        />

                        <div className="absolute inset-x-0 bottom-0 border-t border-line bg-white/92 px-3 py-2 text-center text-xs font-extrabold text-ink backdrop-blur">
                          {product.title}
                        </div>
                      </Link>
                    );
                  })}
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
                    Product categories
                  </div>

                  <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
                    Explore current research-use-only product lines
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-muted md:text-base">
                    Use these category links to move into the most relevant part
                    of the current catalogue. Each product page includes the latest
                    available product details, price, stock status, and ordering
                    information.
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
                    View test reports
                  </Link>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {categoryCards.map((card) => (
                  <Link
                    href={card.href}
                    key={card.title}
                    className="rounded-xl2 border border-line bg-panel p-4 transition hover:bg-white"
                  >
                    <div className="text-sm font-extrabold text-ink">
                      {card.title}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {card.copy}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="max-w-3xl">
              <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent">
                Current range
              </div>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
                Featured research peptide products
              </h2>

              <p className="mt-3 text-sm leading-7 text-muted">
                These are current research-use-only product lines available from
                Peptide Products. Open each product page to review product images,
                pack details, current stock status, price, test report availability
                where applicable, and checkout options.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredProducts.map((product) => (
                <Link
                  key={product.title}
                  href={product.href}
                  className="group overflow-hidden rounded-xl3 border border-line bg-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <div className="relative h-[330px] w-full bg-panel">
                    <div className="absolute left-4 top-4 z-10 rounded-full bg-white/95 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink shadow-soft">
                      {product.label}
                    </div>

                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-contain p-6 transition duration-300 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-extrabold tracking-tight">
                      {product.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      {product.copy}
                    </p>
                    <div className="mt-4 text-sm font-extrabold text-ink">
                      View product →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-y border-line bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
              <div>
                <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent">
                  Research peptide information
                </div>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
                  What to check before ordering research peptides
                </h2>

                <p className="mt-4 text-sm leading-7 text-muted">
                  Before ordering, customers should review the product name, pack
                  size, format, stock status, current price, product images,
                  delivery information, payment options, and research-use-only
                  wording.
                </p>

                <p className="mt-4 text-sm leading-7 text-muted">
                  Selected product lines include test reports or supporting quality
                  files. If a report is available, it can be opened from the product
                  page or from the quality information page.
                </p>

                <p className="mt-4 text-sm leading-7 text-muted">
                  This page is designed as a central research peptide hub. It links
                  visitors into the active product range, quality information, and
                  support pages without showing removed product lines.
                </p>
              </div>

              <div className="rounded-xl3 border border-line bg-panel p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight">
                  Research use only
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  Products listed by Peptide Products are supplied strictly for
                  laboratory, analytical, and scientific research use only.
                </p>

                <p className="mt-4 text-sm leading-7 text-muted">
                  They are not supplied for human use, veterinary use, diagnosis,
                  treatment, cure, or prevention of disease.
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
                    Quality information
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
                <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent">
                  Retatrutide hub
                </div>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
                  Retatrutide research information
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">
                  Retatrutide is the main product line in the current research
                  peptide range. These pages help customers review availability,
                  price, product information, and research-use context.
                </p>
              </div>

              <Link
                href="/product/retatrutide"
                className="rounded-xl2 bg-accent px-5 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
              >
                View Retatrutide product →
              </Link>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {retatrutideLinks.map((item) => (
                <Link key={item.href} href={item.href} className="surface-card p-5">
                  <div className="font-extrabold text-ink">{item.title}</div>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.copy}</p>
                  <div className="mt-4 text-sm font-extrabold text-ink">
                    Open page →
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Helpful next pages
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {helpfulLinks.map((item) => (
                <Link key={item.href} href={item.href} className="surface-card p-5">
                  <div className="font-extrabold text-ink">{item.title}</div>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.copy}</p>
                  <div className="mt-4 text-sm font-extrabold text-ink">
                    Open page →
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Common questions about research peptides
              </h2>
            </div>

            <div className="mt-8 grid gap-5">
              {faqItems.map((item) => (
                <div key={item.question} className="surface-card p-6">
                  <h3 className="text-lg font-extrabold tracking-tight">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {item.answer}
                  </p>
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