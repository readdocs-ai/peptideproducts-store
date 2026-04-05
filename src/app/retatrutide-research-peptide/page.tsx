import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Retatrutide Research Peptide | GLP-1 GIP Glucagon Compound",
  description:
    "Retatrutide research peptide overview including laboratory research context, related GLP-1, GIP and glucagon pathway discussion, and links to the Retatrutide 40mg product page and Buy Retatrutide UK page.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/retatrutide-research-peptide",
  },
  openGraph: {
    title: "Retatrutide Research Peptide | GLP-1 GIP Glucagon Compound",
    description:
      "Retatrutide research peptide overview including laboratory research context and links to the Retatrutide 40mg product page and Buy Retatrutide UK page.",
    url: "https://www.peptideproducts.co.uk/retatrutide-research-peptide",
    siteName: "Peptide Products",
    images: [
      {
        url: "https://www.peptideproducts.co.uk/products/retatrutide-40mg-uk.jpg",
        width: 1200,
        height: 900,
        alt: "Retatrutide 40mg UK research peptide pen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Retatrutide Research Peptide | GLP-1 GIP Glucagon Compound",
    description:
      "Retatrutide research peptide overview including laboratory research context and links to the Retatrutide 40mg product page and Buy Retatrutide UK page.",
    images: ["https://www.peptideproducts.co.uk/products/retatrutide-40mg-uk.jpg"],
  },
};

const faqItems = [
  {
    question: "What is Retatrutide research peptide content focused on?",
    answer:
      "This page gives a laboratory-focused overview of Retatrutide, related pathway discussion, and direct access to the product page and supporting site pages.",
  },
  {
    question: "How is Retatrutide commonly described in research context?",
    answer:
      "Retatrutide is commonly discussed as a peptide compound associated with GLP-1, GIP, and glucagon pathway research in controlled laboratory settings.",
  },
  {
    question: "Is Retatrutide supplied for human use?",
    answer:
      "No. All products listed on this site are supplied strictly for laboratory and scientific research use only.",
  },
] as const;

export default function Page() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Retatrutide Research Peptide",
    url: "https://www.peptideproducts.co.uk/retatrutide-research-peptide",
    description:
      "Retatrutide research peptide overview including laboratory research context and links to the Retatrutide 40mg product page and Buy Retatrutide UK page.",
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
        name: "Retatrutide research peptide",
        item: "https://www.peptideproducts.co.uk/retatrutide-research-peptide",
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
                Retatrutide research peptide
              </div>

              <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
                Retatrutide research peptide
              </h1>

              <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
                Retatrutide is presented on this site as a laboratory research
                peptide compound. This page gives a simple overview of the topic
                and connects directly to the{" "}
                <Link
                  href="/product/retatrutide"
                  className="font-semibold text-ink hover:text-accent"
                >
                  Retatrutide 40mg product page
                </Link>
                , the{" "}
                <Link
                  href="/buy-retatrutide-uk"
                  className="font-semibold text-ink hover:text-accent"
                >
                  Buy Retatrutide UK
                </Link>{" "}
                page, and broader peptide research content.
              </p>

              <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
                In research discussion, Retatrutide is commonly associated with
                GLP-1, GIP, and glucagon pathway activity. This page is intended
                to support laboratory-focused reading and make it easier to move
                into the most relevant product and category pages.
              </p>

              <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                <div className="max-w-3xl overflow-hidden rounded-xl3 border border-line bg-panel p-4 shadow-soft">
                  <div className="relative h-[360px] w-full bg-panel">
                    <Image
                      src="/products/retatrutide-40mg-uk.jpg"
                      alt="Retatrutide 40mg UK research peptide pen"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>

                <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                  <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent">
                    Related product path
                  </div>

                  <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ink">
                    Move from research overview to product page
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    Use this page to move directly into the{" "}
                    <Link
                      href="/product/retatrutide"
                      className="font-semibold text-ink hover:text-accent"
                    >
                      Retatrutide 40mg product page
                    </Link>{" "}
                    or the dedicated{" "}
                    <Link
                      href="/buy-retatrutide-uk"
                      className="font-semibold text-ink hover:text-accent"
                    >
                      Buy Retatrutide UK
                    </Link>{" "}
                    route.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/product/retatrutide"
                      className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                    >
                      View Retatrutide 40mg →
                    </Link>

                    <Link
                      href="/buy-retatrutide-uk"
                      className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                    >
                      Buy Retatrutide UK →
                    </Link>
                  </div>

                  <div className="mt-6 grid gap-3">
                    <div className="rounded-xl2 border border-line bg-panel p-4 text-sm font-semibold text-ink">
                      Research-use-only compound
                    </div>
                    <div className="rounded-xl2 border border-line bg-panel p-4 text-sm font-semibold text-ink">
                      Product page and UK route available
                    </div>
                    <div className="rounded-xl2 border border-line bg-panel p-4 text-sm font-semibold text-ink">
                      Part of the wider peptide research catalogue
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/product/retatrutide"
                  className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                >
                  View Retatrutide 40mg research peptide pen →
                </Link>

                <Link
                  href="/buy-retatrutide-uk"
                  className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                >
                  Buy Retatrutide UK →
                </Link>

                <Link
                  href="/research-peptides"
                  className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                >
                  Explore research peptides →
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
                Retatrutide-related content on this site sits within a
                research-only laboratory framework. The page helps users
                understand where the compound fits within the wider peptide
                structure and how it connects to product and category pages.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                Topic interest around Retatrutide often includes references to
                GLP-1, GIP, and glucagon pathway activity in scientific
<<<<<<< HEAD
                discussion. Here, that context supports a clearer path into the{" "}
=======
                discussion. Here, that context supports a clearer route into the{" "}
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
                <Link
                  href="/product/retatrutide"
                  className="font-semibold text-ink hover:text-accent"
                >
                  related product listing
                </Link>
                , the{" "}
                <Link
                  href="/buy-retatrutide-uk"
                  className="font-semibold text-ink hover:text-accent"
                >
                  Buy Retatrutide UK
                </Link>{" "}
                page, and supporting research pages.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                For broader context, you can also explore{" "}
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
                  href="/laboratory-peptide-compounds"
                  className="font-semibold text-ink hover:text-accent"
                >
                  laboratory peptide compounds
                </Link>
                .
              </p>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">
                  Related research pages
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-muted">
                  Move between the Retatrutide product page and connected
                  research guides across the site.
                </p>
              </div>

              <Link
                href="/shop"
                className="text-sm font-extrabold text-ink/80 hover:text-ink"
              >
                View full catalogue →
              </Link>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <Link href="/product/retatrutide" className="surface-card p-5">
                <div className="text-sm font-extrabold text-ink">Retatrutide product</div>
                <p className="mt-2 text-sm text-muted">
                  View the related Retatrutide 40mg product page.
                </p>
              </Link>

              <Link href="/buy-retatrutide-uk" className="surface-card p-5">
                <div className="text-sm font-extrabold text-ink">Buy Retatrutide UK</div>
                <p className="mt-2 text-sm text-muted">
                  Main UK-focused page supporting Retatrutide discovery.
                </p>
              </Link>

              <Link href="/research-peptides" className="surface-card p-5">
                <div className="text-sm font-extrabold text-ink">
                  Research peptides
                </div>
                <p className="mt-2 text-sm text-muted">
                  Core overview of peptide and compound categories.
                </p>
              </Link>

              <Link href="/research-peptides-uk" className="surface-card p-5">
                <div className="text-sm font-extrabold text-ink">
                  Research peptides UK
                </div>
                <p className="mt-2 text-sm text-muted">
                  UK-focused guide to research peptide compounds.
                </p>
              </Link>

              <Link
                href="/buy-research-peptides-uk"
                className="surface-card p-5"
              >
                <div className="text-sm font-extrabold text-ink">
                  Buy research peptides UK
                </div>
                <p className="mt-2 text-sm text-muted">
                  Broader purchase-intent page supporting peptide product discovery.
                </p>
              </Link>

              <Link
                href="/research-peptide-supplier-uk"
                className="surface-card p-5"
              >
                <div className="text-sm font-extrabold text-ink">
                  Research peptide supplier UK
                </div>
                <p className="mt-2 text-sm text-muted">
                  Supplier-focused supporting page for UK peptide discovery.
                </p>
              </Link>

              <Link
                href="/laboratory-peptide-compounds"
                className="surface-card p-5"
              >
                <div className="text-sm font-extrabold text-ink">
                  Laboratory peptide compounds
                </div>
                <p className="mt-2 text-sm text-muted">
                  Broader overview of peptide compound types used in scientific
                  research environments.
                </p>
              </Link>

              <Link href="/" className="surface-card p-5">
                <div className="text-sm font-extrabold text-ink">Homepage</div>
                <p className="mt-2 text-sm text-muted">
<<<<<<< HEAD
                  Return to the main catalogue and research guides.
=======
                  Return to the main site hub for products, categories, and research pages.
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
                </p>
              </Link>
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                How this page fits the product path
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                A strong research page structure connects topic-led reading with
                product pages rather than leaving product listings isolated. This
                page supports that structure by linking Retatrutide research
                context with the related{" "}
                <Link
                  href="/product/retatrutide"
                  className="font-semibold text-ink hover:text-accent"
                >
                  product page
                </Link>{" "}
                and the{" "}
                <Link
                  href="/buy-retatrutide-uk"
                  className="font-semibold text-ink hover:text-accent"
                >
                  Buy Retatrutide UK
                </Link>{" "}
                route.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
<<<<<<< HEAD
                It also gives users a clearer path from research reading
=======
                It also gives users a cleaner path from research-style browsing
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
                into the specific page or product they are looking for.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Common questions about Retatrutide research peptide
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