import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Retatrutide Research Peptide | Laboratory Compound Study",
  description:
    "Retatrutide research peptide overview including laboratory compound context, controlled scientific study positioning, and related research pages.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/retatrutide-research-peptide",
  },
  openGraph: {
    title: "Retatrutide Research Peptide | Laboratory Compound Study",
    description:
      "Retatrutide research peptide overview including laboratory compound context, controlled scientific study positioning, and related research pages.",
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
    title: "Retatrutide Research Peptide | Laboratory Compound Study",
    description:
      "Retatrutide research peptide overview including laboratory compound context and related research pages.",
    images: ["https://www.peptideproducts.co.uk/products/retatrutide-main.jpg"],
  },
};

const faqItems = [
  {
    question: "What is retatrutide research peptide content focused on?",
    answer:
      "Retatrutide research peptide content focuses on laboratory compound context, controlled scientific study positioning, and related peptide research navigation.",
  },
  {
    question: "Is retatrutide supplied for human use?",
    answer:
      "No. All products listed on this site are supplied strictly for laboratory and scientific research use only.",
  },
  {
    question: "Which related pages connect to retatrutide research content?",
    answer:
      "Retatrutide research content can connect to broader research peptides pages, laboratory peptide compound guides, and the related Retatrutide product page.",
  },
] as const;

export default function Page() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Retatrutide Research Peptide",
    url: "https://www.peptideproducts.co.uk/retatrutide-research-peptide",
    description:
      "Retatrutide research peptide overview including laboratory compound context, controlled scientific study positioning, and related research pages.",
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
                  alt="Retatrutide research peptide compound"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              Retatrutide is presented here as a laboratory research compound
              supplied for controlled scientific study environments. Within the
              site structure, this page acts as a research-support page linked to
              the related product listing and broader peptide research guides.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              This research page is designed to support internal topic coverage,
              product discovery, and scientific navigation rather than consumer
              treatment positioning. It sits within the wider{" "}
              <Link
                href="/research-peptides"
                className="font-semibold text-ink hover:text-accent"
              >
                research peptides
              </Link>{" "}
              structure alongside other laboratory compound pages.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              Explore connected guides including{" "}
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
                View Retatrutide research compound →
              </Link>
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Retatrutide in laboratory research
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Retatrutide-related content on this site is positioned within a
                research-only framework. The purpose of this page is to support
                scientific navigation, product-to-guide linking, and broader
                topical authority around laboratory peptide compounds.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                Where relevant, users can move from this page into the product
                listing, broader site guides, and other laboratory compound pages
                to understand how the site structure connects informational and
                product-level content.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Related research pages
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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

              <Link href="/product/retatrutide" className="surface-card p-5">
                <div className="text-sm font-extrabold text-ink">
                  Retatrutide
                </div>
                <p className="mt-2 text-sm text-muted">
                  View the related Retatrutide research compound product page.
                </p>
              </Link>

              <Link href="/laboratory-peptide-compounds" className="surface-card p-5">
                <div className="text-sm font-extrabold text-ink">
                  Laboratory peptide compounds
                </div>
                <p className="mt-2 text-sm text-muted">
                  Explore the wider scientific research structure across the site.
                </p>
              </Link>
            </div>
          </Container>
        </section>
      </main>

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

            <Link href="/research-peptide-supplier-uk" className="surface-card p-5">
              <div className="font-extrabold text-ink">
                Research peptide supplier UK
              </div>
              <p className="mt-2 text-sm text-muted">
                Overview of peptide compound supply and research products.
              </p>
            </Link>

            <Link href="/buy-research-peptides-uk" className="surface-card p-5">
              <div className="font-extrabold text-ink">Buy research peptides UK</div>
              <p className="mt-2 text-sm text-muted">
                Buyer-focused guide linking into the main peptide categories and product lines.
              </p>
            </Link>

            <Link href="/laboratory-peptide-compounds" className="surface-card p-5">
              <div className="font-extrabold text-ink">
                Laboratory peptide compounds
              </div>
              <p className="mt-2 text-sm text-muted">
                Broader overview of peptide compound types used in scientific research environments.
              </p>
            </Link>

            <Link href="/peptide-compounds-research" className="surface-card p-5">
              <div className="font-extrabold text-ink">
                Peptide compounds research
              </div>
              <p className="mt-2 text-sm text-muted">
                Broad research guide covering peptide compound categories and related laboratory pages.
              </p>
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-extrabold tracking-tight">
              Common questions about retatrutide research peptide content
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

      <Footer />
    </div>
  );
}