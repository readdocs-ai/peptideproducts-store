import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Buy Retatrutide UK | Retatrutide 40mg Research Peptide | Peptide Products",
  description:
    "Buy Retatrutide UK research peptide. View the Retatrutide 40mg product page, explore supporting research content, and browse related peptide pages at Peptide Products.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/buy-retatrutide-uk",
  },
  openGraph: {
    title: "Buy Retatrutide UK | Retatrutide 40mg Research Peptide | Peptide Products",
    description:
      "Buy Retatrutide UK research peptide and explore the Retatrutide 40mg product page with related laboratory research content.",
    url: "https://www.peptideproducts.co.uk/buy-retatrutide-uk",
    siteName: "Peptide Products",
    images: [
      {
        url: "https://www.peptideproducts.co.uk/products/retatrutide-40mg-uk.jpg",
        width: 1200,
        height: 900,
        alt: "Buy Retatrutide UK 40mg research peptide pen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Retatrutide UK | Retatrutide 40mg Research Peptide | Peptide Products",
    description:
      "Buy Retatrutide UK research peptide and explore the Retatrutide 40mg product page with related laboratory research content.",
    images: ["https://www.peptideproducts.co.uk/products/retatrutide-40mg-uk.jpg"],
  },
};

export default function Page() {
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Buy Retatrutide UK",
    url: "https://www.peptideproducts.co.uk/buy-retatrutide-uk",
    description:
      "Buy Retatrutide UK research peptide. View the Retatrutide 40mg product page, explore supporting research content, and browse related peptide pages.",
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
        name: "Buy Retatrutide UK",
        item: "https://www.peptideproducts.co.uk/buy-retatrutide-uk",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I view the Retatrutide product page from here?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. This page links directly to the Retatrutide 40mg product page along with related research content.",
        },
      },
      {
        "@type": "Question",
        name: "Is Retatrutide listed for laboratory research use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The product and related content are presented for laboratory and scientific research use only.",
        },
      },
      {
        "@type": "Question",
        name: "What related pages should I read next?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The most relevant related pages are the Retatrutide research peptide guide, the Research Peptides UK page, and the Retatrutide 40mg product listing.",
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

      <main>
        <section className="py-14">
          <Container>
            <div className="max-w-5xl">
              <div className="text-sm text-muted">
                <Link href="/" className="font-semibold hover:text-ink">
                  Home
                </Link>
                <span className="mx-2">/</span>
                Buy Retatrutide UK
              </div>

              <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
                Buy Retatrutide UK
              </h1>

              <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
                Buy Retatrutide 40mg research peptide with a direct route to the{" "}
                <Link
                  href="/product/retatrutide"
                  className="font-semibold text-ink hover:text-accent"
                >
                  Retatrutide product page
                </Link>
                , supporting research content, and related peptide pages.
              </p>

              <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
                This product is presented for laboratory and scientific research use
                only. You can also explore the{" "}
                <Link
                  href="/retatrutide-research-peptide"
                  className="font-semibold text-ink hover:text-accent"
                >
                  retatrutide research peptide
                </Link>{" "}
                guide and the wider{" "}
                <Link
                  href="/research-peptides"
                  className="font-semibold text-ink hover:text-accent"
                >
                  research peptides
                </Link>{" "}
                catalogue.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/product/retatrutide"
                  className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                >
                  View Retatrutide 40mg →
                </Link>

                <Link
                  href="/retatrutide-research-peptide"
                  className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                >
                  Read research guide →
                </Link>

                <Link
                  href="/research-peptides-uk"
                  className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                >
                  Research peptides UK →
                </Link>
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                <div className="overflow-hidden rounded-xl3 border border-line bg-panel p-4 shadow-soft">
                  <div className="relative h-[360px] w-full">
                    <Image
                      src="/products/retatrutide-40mg-uk.jpg"
                      alt="Buy Retatrutide UK 40mg research peptide pen"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>

                <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                  <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent">
                    Featured product
                  </div>

                  <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ink">
                    Retatrutide 40mg
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    Premium research peptide listing for laboratory and scientific
                    research use only.
                  </p>

                  <div className="mt-4 inline-flex rounded-full px-3 py-1 text-[11px] font-extrabold border border-emerald-200 bg-emerald-50 text-emerald-700">
                    In stock
                  </div>

                  <div className="mt-5 text-2xl font-extrabold text-ink">
                    £150.00
                  </div>

                  <div className="mt-2 text-sm text-muted">
                    1 pre-filled pen • research-use-only listing
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/product/retatrutide"
                      className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                    >
                      View product →
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
                      Research use only
                    </div>
                    <div className="rounded-xl2 border border-line bg-panel p-4 text-sm font-semibold text-ink">
                      UK supply route
                    </div>
                    <div className="rounded-xl2 border border-line bg-panel p-4 text-sm font-semibold text-ink">
                      Direct product access
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Retatrutide research peptide overview
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Retatrutide is listed on this site as a research-use-only peptide
                product supplied for laboratory and scientific investigation. This
                page gives users a direct route into the main product listing while
                supporting broader retatrutide-related searches in the UK.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                If you are specifically looking to{" "}
                <Link
                  href="/buy-retatrutide-uk"
                  className="font-semibold text-ink hover:text-accent"
                >
                  buy retatrutide UK
                </Link>
                , the most direct path is to view the{" "}
                <Link
                  href="/product/retatrutide"
                  className="font-semibold text-ink hover:text-accent"
                >
                  Retatrutide 40mg product listing
                </Link>
                , then continue into the{" "}
                <Link
                  href="/retatrutide-research-peptide"
                  className="font-semibold text-ink hover:text-accent"
                >
                  research guide
                </Link>{" "}
                for additional context.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                You can also browse the wider peptide category structure through{" "}
                <Link
                  href="/research-peptides"
                  className="font-semibold text-ink hover:text-accent"
                >
                  research peptides
                </Link>
                ,{" "}
                <Link
                  href="/research-peptides-uk"
                  className="font-semibold text-ink hover:text-accent"
                >
                  research peptides UK
                </Link>
                , and{" "}
                <Link
                  href="/buy-research-peptides-uk"
                  className="font-semibold text-ink hover:text-accent"
                >
                  buy research peptides UK
                </Link>
                .
              </p>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="max-w-5xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Why users land on this page
              </h2>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="surface-card p-5">
                  <div className="font-extrabold text-ink">Direct product route</div>
                  <p className="mt-2 text-sm text-muted">
                    This page links directly to the Retatrutide 40mg product listing
                    for faster product discovery.
                  </p>
                </div>

                <div className="surface-card p-5">
                  <div className="font-extrabold text-ink">Supporting research guide</div>
                  <p className="mt-2 text-sm text-muted">
                    Internal links to the retatrutide research page add useful context
                    without distracting from the product route.
                  </p>
                </div>

                <div className="surface-card p-5">
                  <div className="font-extrabold text-ink">Wider peptide catalogue</div>
                  <p className="mt-2 text-sm text-muted">
                    Users can also continue into broader peptide categories and UK-focused research pages.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-14 bg-white">
          <Container>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Related pages
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <Link href="/product/retatrutide" className="surface-card p-5">
                <div className="font-extrabold text-ink">Retatrutide product</div>
                <p className="mt-2 text-sm text-muted">
                  View the Retatrutide 40mg research peptide product page.
                </p>
              </Link>

              <Link href="/retatrutide-research-peptide" className="surface-card p-5">
                <div className="font-extrabold text-ink">Retatrutide research guide</div>
                <p className="mt-2 text-sm text-muted">
                  Supporting guide covering retatrutide research context and product relevance.
                </p>
              </Link>

              <Link href="/research-peptides-uk" className="surface-card p-5">
                <div className="font-extrabold text-ink">Research peptides UK</div>
                <p className="mt-2 text-sm text-muted">
                  UK-focused peptide research content and category support.
                </p>
              </Link>

              <Link href="/buy-research-peptides-uk" className="surface-card p-5">
                <div className="font-extrabold text-ink">Buy research peptides UK</div>
                <p className="mt-2 text-sm text-muted">
                  Broader purchase-intent page supporting peptide product discovery.
                </p>
              </Link>

              <Link href="/research-peptides" className="surface-card p-5">
                <div className="font-extrabold text-ink">Research peptides</div>
                <p className="mt-2 text-sm text-muted">
                  Overview of peptide categories and related research product lines.
                </p>
              </Link>

              <Link href="/laboratory-peptide-compounds" className="surface-card p-5">
                <div className="font-extrabold text-ink">Laboratory peptide compounds</div>
                <p className="mt-2 text-sm text-muted">
                  Broader laboratory compound page supporting research topic coverage.
                </p>
              </Link>

              <Link href="/research-peptide-supplier-uk" className="surface-card p-5">
                <div className="font-extrabold text-ink">Research peptide supplier UK</div>
                <p className="mt-2 text-sm text-muted">
                  Supplier-focused supporting page for UK peptide discovery.
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

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="max-w-4xl rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Common questions
              </h2>

              <div className="mt-6 grid gap-5">
                <div>
                  <h3 className="text-base font-extrabold">
                    Can I view the Retatrutide product page from here?
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Yes. This page links directly to the{" "}
                    <Link
                      href="/product/retatrutide"
                      className="font-semibold text-ink hover:text-accent"
                    >
                      Retatrutide 40mg product page
                    </Link>
                    .
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-extrabold">
                    Is Retatrutide listed for laboratory research use?
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Yes. The product and related content on this site are presented
                    for laboratory and scientific research use only.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-extrabold">
                    What should I read next?
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    The most relevant pages are the{" "}
                    <Link
                      href="/retatrutide-research-peptide"
                      className="font-semibold text-ink hover:text-accent"
                    >
                      retatrutide research peptide
                    </Link>{" "}
                    guide,{" "}
                    <Link
                      href="/research-peptides-uk"
                      className="font-semibold text-ink hover:text-accent"
                    >
                      research peptides UK
                    </Link>
                    , and the{" "}
                    <Link
                      href="/product/retatrutide"
                      className="font-semibold text-ink hover:text-accent"
                    >
                      Retatrutide 40mg product page
                    </Link>
                    .
                  </p>
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