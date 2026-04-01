import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "What is Retatrutide? | Research Peptide Overview UK",
  description:
    "What is Retatrutide? Learn about this research peptide compound, its laboratory research context, and related Retatrutide pages at Peptide Products.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/what-is-retatrutide",
  },
  openGraph: {
    title: "What is Retatrutide? | Research Peptide Overview UK",
    description:
      "Learn about Retatrutide, its laboratory research context, and related Retatrutide pages at Peptide Products.",
    url: "https://www.peptideproducts.co.uk/what-is-retatrutide",
    siteName: "Peptide Products",
    images: [
      {
        url: "https://www.peptideproducts.co.uk/products/retatrutide-40mg-uk.jpg",
        width: 1200,
        height: 900,
        alt: "What is Retatrutide research peptide overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What is Retatrutide? | Research Peptide Overview UK",
    description:
      "Learn about Retatrutide, its laboratory research context, and related Retatrutide pages at Peptide Products.",
    images: ["https://www.peptideproducts.co.uk/products/retatrutide-40mg-uk.jpg"],
  },
};

export default function Page() {
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "What is Retatrutide?",
    url: "https://www.peptideproducts.co.uk/what-is-retatrutide",
    description:
      "What is Retatrutide? Learn about this research peptide compound, its laboratory context, and related Retatrutide pages.",
    isPartOf: {
      "@type": "WebSite",
      name: "Peptide Products",
      url: "https://www.peptideproducts.co.uk",
    },
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
        name: "What is Retatrutide?",
        item: "https://www.peptideproducts.co.uk/what-is-retatrutide",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Retatrutide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Retatrutide is a research peptide compound studied in laboratory environments for its relationship to multiple metabolic receptor pathways.",
        },
      },
      {
        "@type": "Question",
        name: "Is Retatrutide listed for human use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Retatrutide on this site is presented for laboratory and scientific research use only.",
        },
      },
      {
        "@type": "Question",
        name: "Where can I view the Retatrutide product page?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can view the Retatrutide product page directly from the internal links on this page.",
        },
      },
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([webpageSchema, breadcrumbSchema, faqSchema]),
        }}
      />

      <Header />

      <main className="py-14">
        <Container>
          <div className="max-w-5xl">
            <div className="text-sm text-muted">
              <Link href="/" className="font-semibold hover:text-ink">
                Home
              </Link>
              <span className="mx-2">/</span>
              What is Retatrutide?
            </div>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              What is Retatrutide?
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
              Retatrutide is a research peptide compound studied in laboratory
              environments for its relationship to multiple metabolic receptor
              pathways. It is commonly discussed in connection with GLP-1, GIP,
              and glucagon pathway research.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
              On this site, Retatrutide is presented strictly for laboratory and
              scientific research use only. Users looking for product access can
              move directly to the{" "}
              <Link
                href="/product/retatrutide"
                className="font-semibold text-ink hover:text-accent"
              >
                Retatrutide 40mg product page
              </Link>{" "}
              or explore the dedicated{" "}
              <Link
                href="/buy-retatrutide-uk"
                className="font-semibold text-ink hover:text-accent"
              >
                buy retatrutide UK
              </Link>{" "}
              page.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/product/retatrutide"
                className="rounded-xl2 bg-accent px-5 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
              >
                View Retatrutide 40mg →
              </Link>

              <Link
                href="/buy-retatrutide-uk"
                className="rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
              >
                Buy Retatrutide UK →
              </Link>

              <Link
                href="/retatrutide-research-peptide"
                className="rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
              >
                Read research guide →
              </Link>
            </div>

            <section className="mt-12 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                Retatrutide in laboratory research
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                In research settings, Retatrutide may be discussed as part of
                broader metabolic pathway investigation. Areas of interest can
                include receptor interaction, compound behaviour, analytical
                modelling, and comparison against related peptide categories.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                This page is designed as a simple introduction for users who want
                to understand what Retatrutide is before moving into more detailed
                research content or the main product listing.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">
                    Research-use-only compound
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Listed for laboratory and scientific research use only.
                  </p>
                </div>

                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">
                    Product page available
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    View the Retatrutide 40mg listing directly from this page.
                  </p>
                </div>

                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">
                    Related research content
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Continue into the research guide and UK-focused peptide pages.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Related Retatrutide pages
              </h2>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <Link href="/product/retatrutide" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Retatrutide product</div>
                  <p className="mt-2 text-sm text-muted">
                    View the Retatrutide 40mg research peptide product page.
                  </p>
                </Link>

                <Link href="/buy-retatrutide-uk" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Buy Retatrutide UK</div>
                  <p className="mt-2 text-sm text-muted">
                    UK-focused page supporting Retatrutide product discovery.
                  </p>
                </Link>

                <Link href="/retatrutide-research-peptide" className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    Retatrutide research guide
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Supporting page covering broader Retatrutide research context.
                  </p>
                </Link>

                <Link href="/research-peptides-uk" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Research peptides UK</div>
                  <p className="mt-2 text-sm text-muted">
                    Explore related peptide research pages and product routes.
                  </p>
                </Link>
              </div>
            </section>

            <section className="mt-12 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Common questions
              </h2>

              <div className="mt-6 grid gap-5">
                <div>
                  <h3 className="text-base font-extrabold">
                    What is Retatrutide?
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Retatrutide is a research peptide compound studied in laboratory
                    environments for its relationship to multiple metabolic receptor
                    pathways.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-extrabold">
                    Is Retatrutide listed for human use?
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    No. Products and related content on this site are presented for
                    laboratory and scientific research use only.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-extrabold">
                    Where can I go next?
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    The most useful next steps are the{" "}
                    <Link
                      href="/product/retatrutide"
                      className="font-semibold text-ink hover:text-accent"
                    >
                      Retatrutide product page
                    </Link>
                    , the{" "}
                    <Link
                      href="/buy-retatrutide-uk"
                      className="font-semibold text-ink hover:text-accent"
                    >
                      buy retatrutide UK
                    </Link>{" "}
                    page, and the{" "}
                    <Link
                      href="/retatrutide-research-peptide"
                      className="font-semibold text-ink hover:text-accent"
                    >
                      research guide
                    </Link>
                    .
                  </p>
                </div>
              </div>

              <p className="mt-6 max-w-3xl text-xs text-muted">
                Research use only. Not for human or veterinary use.
              </p>
            </section>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}