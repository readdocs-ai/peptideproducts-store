import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "What Is Retatrutide? | Retatrutide Research Peptide Guide",
  description:
    "Learn what Retatrutide is in laboratory research context, including its association with GLP-1, GIP and glucagon receptor pathways, and explore related Retatrutide product and research pages.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/what-is-retatrutide",
  },
  openGraph: {
    title: "What Is Retatrutide? | Retatrutide Research Peptide Guide",
    description:
      "Learn what Retatrutide is in laboratory research context, including its association with GLP-1, GIP and glucagon receptor pathways, and explore related Retatrutide product and research pages.",
    url: "https://www.peptideproducts.co.uk/what-is-retatrutide",
    siteName: "Peptide Products",
    images: [
      {
        url: "https://www.peptideproducts.co.uk/products/retatrutide-40mg-uk.jpg",
        width: 1200,
        height: 900,
        alt: "What is Retatrutide research peptide guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is Retatrutide? | Retatrutide Research Peptide Guide",
    description:
      "Learn what Retatrutide is in laboratory research context and explore related Retatrutide product and research pages.",
    images: ["https://www.peptideproducts.co.uk/products/retatrutide-40mg-uk.jpg"],
  },
};

const faqItems = [
  {
    question: "What is Retatrutide in research context?",
    answer:
      "Within research context, Retatrutide is described as a peptide compound associated with GLP-1, GIP, and glucagon receptor pathway discussion in controlled scientific and laboratory settings.",
  },
  {
    question: "What is this page designed to do?",
    answer:
      "This page is designed to explain what Retatrutide is in broad laboratory research terms and connect users to the main Retatrutide product page, supporting research content, and related UK-focused pages.",
  },
  {
    question: "Is Retatrutide listed here for human use?",
    answer:
      "No. All products and related content on this site are supplied and presented strictly for laboratory and scientific research use only.",
  },
] as const;

export default function WhatIsRetatrutidePage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "What Is Retatrutide?",
    url: "https://www.peptideproducts.co.uk/what-is-retatrutide",
    description:
      "Learn what Retatrutide is in laboratory research context, including its association with GLP-1, GIP and glucagon receptor pathways, and explore related Retatrutide product and research pages.",
    isPartOf: {
      "@type": "WebSite",
      name: "Peptide Products",
      url: "https://www.peptideproducts.co.uk",
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://www.peptideproducts.co.uk/products/retatrutide-40mg-uk.jpg",
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
        name: "What is Retatrutide?",
        item: "https://www.peptideproducts.co.uk/what-is-retatrutide",
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
                <Link
                  href="/research-peptides"
                  className="font-semibold hover:text-ink"
                >
                  Research peptides
                </Link>
                <span className="mx-2">/</span>
                What is Retatrutide?
              </div>

              <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
                What is Retatrutide?
              </h1>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                Retatrutide is presented on this site as a laboratory research peptide
                compound discussed within a controlled scientific study framework.
                In research-led discussion, it is commonly associated with GLP-1, GIP,
                and glucagon receptor pathway context and is used here as part of a
                broader research-only peptide content structure.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                This page is designed to help users understand what Retatrutide is in
                broad laboratory research terms while also connecting them to the{" "}
                <Link
                  href="/retatrutide-research-peptide"
                  className="font-semibold text-ink hover:text-accent"
                >
                  retatrutide research peptide
                </Link>{" "}
                guide, the{" "}
                <Link
                  href="/buy-retatrutide-uk"
                  className="font-semibold text-ink hover:text-accent"
                >
                  Buy Retatrutide UK
                </Link>{" "}
                page, and the main{" "}
                <Link
                  href="/product/retatrutide"
                  className="font-semibold text-ink hover:text-accent"
                >
                  Retatrutide product page
                </Link>
                .
              </p>

              <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                <div className="max-w-3xl overflow-hidden rounded-xl3 border border-line bg-panel p-4 shadow-soft">
                  <div className="relative h-[360px] w-full bg-panel">
                    <Image
                      src="/products/retatrutide-40mg-uk.jpg"
                      alt="What is Retatrutide research peptide guide"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>

                <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                  <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-muted">
                    Retatrutide content pathway
                  </div>
                  <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ink">
                    Move from topic discovery into product and research pages
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    Users starting with broad searches like what Retatrutide is can
                    move from this page into the main{" "}
                    <Link
                      href="/retatrutide-research-peptide"
                      className="font-semibold text-ink hover:text-accent"
                    >
                      retatrutide research peptide
                    </Link>{" "}
                    guide, the{" "}
                    <Link
                      href="/buy-retatrutide-uk"
                      className="font-semibold text-ink hover:text-accent"
                    >
                      Buy Retatrutide UK
                    </Link>{" "}
                    landing page, and the{" "}
                    <Link
                      href="/product/retatrutide"
                      className="font-semibold text-ink hover:text-accent"
                    >
                      Retatrutide product page
                    </Link>
                    .
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/retatrutide-research-peptide"
                      className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                    >
                      Retatrutide research peptide
                    </Link>

                    <Link
                      href="/buy-retatrutide-uk"
                      className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                    >
                      Buy Retatrutide UK
                    </Link>
                  </div>

                  <div className="mt-6 grid gap-3">
                    <div className="rounded-xl2 border border-line bg-panel p-4 text-sm font-semibold text-ink">
                      Supports retatrutide topic discovery
                    </div>
                    <div className="rounded-xl2 border border-line bg-panel p-4 text-sm font-semibold text-ink">
                      Links into product and supporting research content
                    </div>
                    <div className="rounded-xl2 border border-line bg-panel p-4 text-sm font-semibold text-ink">
                      Strengthens internal cluster relevance
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/product/retatrutide"
                  className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                >
                  View Retatrutide product
                </Link>

                <Link
                  href="/buy-retatrutide-uk"
                  className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                >
                  Buy Retatrutide UK
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Retatrutide in laboratory research context
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Within laboratory research discussion, Retatrutide is commonly
                described as a peptide compound associated with GLP-1, GIP, and
                glucagon receptor pathway context. On this site, that topic
                association is used to support research-led informational pages and
                related product discovery rather than consumer or treatment-led
                positioning.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                This means the page is not intended to make clinical claims or present
                consumer advice. Instead, it works as a supporting research page that
                helps users understand where Retatrutide sits within the wider{" "}
                <Link
                  href="/research-peptides"
                  className="font-semibold text-ink hover:text-accent"
                >
                  research peptides
                </Link>{" "}
                structure and how it connects to related internal content.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                Users wanting broader context can also explore{" "}
                <Link
                  href="/research-peptides-uk"
                  className="font-semibold text-ink hover:text-accent"
                >
                  research peptides UK
                </Link>
                ,{" "}
                <Link
                  href="/buy-research-peptides-uk"
                  className="font-semibold text-ink hover:text-accent"
                >
                  buy research peptides UK
                </Link>
                , and{" "}
                <Link
                  href="/research-peptide-supplier-uk"
                  className="font-semibold text-ink hover:text-accent"
                >
                  research peptide supplier UK
                </Link>
                .
              </p>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Why this page matters within your Retatrutide cluster
              </h2>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    Topic-support page
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    It gives you a fresh indexed page supporting the main Retatrutide
                    product and research pathway.
                  </p>
                </div>

                <div className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    Better internal linking
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    It pushes internal authority into the product page, research guide,
                    and UK-focused landing page.
                  </p>
                </div>

                <div className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    Cleaner topical coverage
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    It broadens the Retatrutide cluster beyond just one product page
                    and one money page.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white py-14">
          <Container>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Related Retatrutide and research pages
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <Link href="/product/retatrutide" className="surface-card p-5">
                <div className="font-extrabold text-ink">Retatrutide product page</div>
                <p className="mt-2 text-sm text-muted">
                  View the Retatrutide 40mg product listing.
                </p>
              </Link>

              <Link href="/buy-retatrutide-uk" className="surface-card p-5">
                <div className="font-extrabold text-ink">Buy Retatrutide UK</div>
                <p className="mt-2 text-sm text-muted">
                  Main UK-focused landing page supporting retatrutide discovery.
                </p>
              </Link>

              <Link href="/retatrutide-research-peptide" className="surface-card p-5">
                <div className="font-extrabold text-ink">Retatrutide research peptide</div>
                <p className="mt-2 text-sm text-muted">
                  Supporting research page covering retatrutide context and internal relevance.
                </p>
              </Link>

              <Link href="/research-peptides" className="surface-card p-5">
                <div className="font-extrabold text-ink">Research peptides</div>
                <p className="mt-2 text-sm text-muted">
                  Core hub page for category and product discovery.
                </p>
              </Link>

              <Link href="/research-peptides-uk" className="surface-card p-5">
                <div className="font-extrabold text-ink">Research peptides UK</div>
                <p className="mt-2 text-sm text-muted">
                  UK-focused guide to research compound categories and product paths.
                </p>
              </Link>

              <Link href="/buy-research-peptides-uk" className="surface-card p-5">
                <div className="font-extrabold text-ink">Buy research peptides UK</div>
                <p className="mt-2 text-sm text-muted">
                  Buyer-focused page supporting research compound discovery in the UK.
                </p>
              </Link>

              <Link href="/laboratory-peptide-compounds" className="surface-card p-5">
                <div className="font-extrabold text-ink">Laboratory peptide compounds</div>
                <p className="mt-2 text-sm text-muted">
                  Broader laboratory compound guide supporting your site structure.
                </p>
              </Link>

              <Link href="/" className="surface-card p-5">
                <div className="font-extrabold text-ink">Homepage</div>
                <p className="mt-2 text-sm text-muted">
                  Return to the main site hub for products, categories, and research pages.
                </p>
              </Link>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Common questions about What is Retatrutide?
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
