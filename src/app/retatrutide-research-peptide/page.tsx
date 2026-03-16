import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Retatrutide Research Peptide | GLP-1 GIP Glucagon Compound",
  description:
    "Retatrutide research peptide overview including GLP-1, GIP and glucagon receptor activity, laboratory research context, and the related 40mg research peptide pen.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/retatrutide-research-peptide",
  },
  openGraph: {
    title: "Retatrutide Research Peptide | GLP-1 GIP Glucagon Compound",
    description:
      "Retatrutide research peptide overview including GLP-1, GIP and glucagon receptor activity, laboratory research context, and the related 40mg research peptide pen.",
    url: "https://www.peptideproducts.co.uk/retatrutide-research-peptide",
    siteName: "Peptide Products",
    images: [
      {
        url: "https://www.peptideproducts.co.uk/products/retatrutide-main.jpg",
        width: 1200,
        height: 900,
        alt: "Retatrutide research peptide compound",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Retatrutide Research Peptide | GLP-1 GIP Glucagon Compound",
    description:
      "Retatrutide research peptide overview including laboratory research context and the related 40mg research peptide pen.",
    images: ["https://www.peptideproducts.co.uk/products/retatrutide-main.jpg"],
  },
};

const faqItems = [
  {
    question: "What is retatrutide research peptide content focused on?",
    answer:
      "Retatrutide research peptide content focuses on laboratory compound context, peptide research structure, receptor-related scientific discussion, and navigation toward the related product page.",
  },
  {
    question: "What is retatrutide commonly described as in research context?",
    answer:
      "In research context, retatrutide is commonly described as a peptide compound associated with GLP-1, GIP, and glucagon receptor activity within controlled scientific study discussion.",
  },
  {
    question: "Is retatrutide supplied for human use?",
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
      "Retatrutide research peptide overview including GLP-1, GIP and glucagon receptor activity, laboratory research context, and the related 40mg research peptide pen.",
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
            <h1 className="text-4xl font-extrabold tracking-tight">
              Retatrutide research peptide
            </h1>

            <div className="mt-8 max-w-3xl overflow-hidden rounded-xl3 border border-line bg-panel p-4 shadow-soft">
              <div className="relative h-[360px] w-full bg-panel">
                <Image
                  src="/products/retatrutide-main.jpg"
                  alt="Retatrutide 40mg research peptide pen"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              Retatrutide is presented here as a laboratory research peptide
              compound within a controlled scientific study framework. On this
              site, the page acts as a supporting information hub connected to
              the related product listing and broader peptide research content.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              In research discussion, retatrutide is commonly associated with
              GLP-1, GIP, and glucagon receptor activity. This page is designed
              to support topic coverage, internal linking, and laboratory
              navigation rather than consumer or treatment-led positioning.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              Explore connected research pages including{" "}
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
              ,{" "}
              <Link
                href="/research-peptide-supplier-uk"
                className="font-semibold text-ink hover:text-accent"
              >
                research peptide supplier UK
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
                href="/laboratory-peptide-compounds"
                className="font-semibold text-ink hover:text-accent"
              >
                laboratory peptide compounds
              </Link>
              .
            </p>

            <div className="mt-8">
              <Link
                href="/product/retatrutide"
                className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white"
              >
                View Retatrutide 40mg research peptide pen →
              </Link>
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
                Retatrutide-related content is positioned on this site within a
                research-only laboratory framework. The purpose of this page is
                to help users understand where the compound sits within the
                wider peptide research structure and how it connects to related
                informational and product-level pages.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                Topic interest around retatrutide frequently includes references
                to GLP-1, GIP, and glucagon receptor pathways in scientific
                discussion. Within this site structure, that topic relevance is
                used to support broader peptide authority and guide users toward
                the related product listing and supporting research pages.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                For wider context, users can also explore{" "}
                <Link
                  href="/peptide-compounds-research"
                  className="font-semibold text-ink hover:text-accent"
                >
                  peptide compounds research
                </Link>{" "}
                and{" "}
                <Link
                  href="/retatrutide-research-peptide"
                  className="font-semibold text-ink hover:text-accent"
                >
                  retatrutide research peptide
                </Link>{" "}
                as part of the broader research cluster supporting product and
                category visibility.
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
                <div className="text-sm font-extrabold text-ink">Retatrutide</div>
                <p className="mt-2 text-sm text-muted">
                  View the related Retatrutide 40mg product page.
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
                href="/peptide-compounds-research"
                className="surface-card p-5"
              >
                <div className="text-sm font-extrabold text-ink">
                  Peptide compounds research
                </div>
                <p className="mt-2 text-sm text-muted">
                  Broad research guide covering peptide compound categories and
                  related laboratory pages.
                </p>
              </Link>
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Product and guide structure
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                A strong research site structure connects topic-led pages with
                product pages, rather than relying on isolated listings. This
                page supports that structure by linking informational content
                with the related{" "}
                <Link
                  href="/product/retatrutide"
                  className="font-semibold text-ink hover:text-accent"
                >
                  Retatrutide 40mg research peptide pen
                </Link>
                .
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                This type of internal linking helps search engines understand
                the relationship between research content, commercial pages, and
                the wider site hierarchy. It also gives users a cleaner route
                from research-style browsing into the specific product they are
                looking for.
              </p>
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Related research guides
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <Link href="/research-peptides" className="surface-card p-5">
                <div className="font-extrabold text-ink">Research peptides</div>
                <p className="mt-2 text-sm text-muted">
                  Overview of peptide compounds used in laboratory study.
                </p>
              </Link>

              <Link href="/research-peptides-uk" className="surface-card p-5">
                <div className="font-extrabold text-ink">Research peptides UK</div>
                <p className="mt-2 text-sm text-muted">
                  Laboratory peptide compounds available to UK buyers.
                </p>
              </Link>

              <Link
                href="/research-peptide-supplier-uk"
                className="surface-card p-5"
              >
                <div className="font-extrabold text-ink">
                  Research peptide supplier UK
                </div>
                <p className="mt-2 text-sm text-muted">
                  Overview of peptide compound supply and research products.
                </p>
              </Link>

              <Link href="/buy-research-peptides-uk" className="surface-card p-5">
                <div className="font-extrabold text-ink">
                  Buy research peptides UK
                </div>
                <p className="mt-2 text-sm text-muted">
                  Commercial-intent guide linking into the main peptide
                  categories and product lines.
                </p>
              </Link>

              <Link
                href="/laboratory-peptide-compounds"
                className="surface-card p-5"
              >
                <div className="font-extrabold text-ink">
                  Laboratory peptide compounds
                </div>
                <p className="mt-2 text-sm text-muted">
                  Broader overview of peptide compound types used in scientific
                  research environments.
                </p>
              </Link>

              <Link
                href="/peptide-products"
                className="surface-card p-5"
              >
                <div className="font-extrabold text-ink">Peptide products</div>
                <p className="mt-2 text-sm text-muted">
                  Browse broader peptide product categories and connected
                  research pages.
                </p>
              </Link>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Common questions about Retatrutide research peptide content
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