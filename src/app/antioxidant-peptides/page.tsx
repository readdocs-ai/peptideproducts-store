import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Antioxidant Peptides | Glutathione and Vitamin C Research Compounds",
  description:
    "Explore antioxidant peptide compounds including glutathione and vitamin C research products studied in laboratory environments investigating oxidative stress response and cellular protection mechanisms.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/antioxidant-peptides",
  },
  openGraph: {
    title: "Antioxidant Peptides | Glutathione and Vitamin C Research Compounds",
    description:
      "Explore antioxidant peptide compounds including glutathione and vitamin C research products studied in laboratory environments investigating oxidative stress response and cellular protection mechanisms.",
    url: "https://www.peptideproducts.co.uk/antioxidant-peptides",
    siteName: "Peptide Products",
    images: [
      {
        url: "https://www.peptideproducts.co.uk/products/meso-glutathione-main.jpg",
        width: 1200,
        height: 900,
        alt: "Antioxidant peptide compounds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Antioxidant Peptides | Glutathione and Vitamin C Research Compounds",
    description:
      "Explore antioxidant peptide compounds including glutathione and vitamin C laboratory research products.",
    images: ["https://www.peptideproducts.co.uk/products/meso-glutathione-main.jpg"],
  },
};

const productCards = [
  {
    title: "Meso Glutathione",
    copy: "Glutathione-based research compound studied in laboratory environments analysing antioxidant response and oxidative stress pathways.",
    href: "/product/meso-glutathione",
  },
  {
    title: "Meso Vitamin C",
    copy: "Vitamin C research compound examined in laboratory environments investigating antioxidant behaviour and molecular compatibility.",
    href: "/product/meso-vitamin-c",
  },
] as const;

const guideCards = [
  {
    title: "Glutathione research peptide",
    copy: "Learn more about glutathione research compounds and antioxidant peptide investigation.",
    href: "/glutathione-research-peptide",
  },
  {
    title: "Research peptides",
    copy: "Explore the broader peptide compound categories including antioxidant, hydration, firming, and regenerative product lines.",
    href: "/research-peptides",
  },
  {
    title: "Research peptides UK",
    copy: "UK-focused overview of peptide compounds supplied for laboratory and scientific study.",
    href: "/research-peptides-uk",
  },
] as const;

const faqItems = [
  {
    question: "What are antioxidant peptides?",
    answer:
      "Antioxidant peptides and related compounds are studied in laboratory environments investigating oxidative stress response, molecular defence behaviour, and cellular protection pathways.",
  },
  {
    question: "Which antioxidant compounds are included in this category?",
    answer:
      "This category includes antioxidant-focused compounds such as glutathione-based products and vitamin C research blends.",
  },
  {
    question: "Are antioxidant peptides intended for human use?",
    answer:
      "No. All products listed on this site are supplied strictly for laboratory and scientific research use only.",
  },
] as const;

export default function AntioxidantPeptidesPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Antioxidant Peptides",
    url: "https://www.peptideproducts.co.uk/antioxidant-peptides",
    description:
      "Antioxidant peptide compounds including glutathione and vitamin C research products.",
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
        name: "Antioxidant peptides",
        item: "https://www.peptideproducts.co.uk/antioxidant-peptides",
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
              Antioxidant peptides
            </h1>

            <div className="mt-8 max-w-3xl overflow-hidden rounded-xl3 border border-line shadow-soft bg-panel p-4">
              <div className="relative w-full h-[360px] bg-panel">
                <Image
                  src="/products/meso-glutathione-main.jpg"
                  alt="Antioxidant peptide compounds"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <p className="mt-6 max-w-3xl text-sm leading-7 text-muted">
              Antioxidant peptides and related laboratory compounds are studied in
              controlled environments investigating oxidative stress response,
              molecular defence pathways, and cellular protection mechanisms.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              Research laboratories frequently analyse antioxidant compounds such
              as glutathione and vitamin C blends when examining biochemical
              stability, molecular signalling behaviour, and antioxidant activity
              under experimental conditions.
            </p>

            <div className="mt-8">
              <Link
                href="/shop"
                className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white"
              >
                Browse antioxidant compounds →
              </Link>
            </div>
          </Container>
        </section>

        <section className="bg-white py-14">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Antioxidant compound research
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Antioxidant research compounds are commonly studied in laboratory
                environments examining oxidative stress mechanisms, molecular
                defence systems, and biochemical interaction within controlled
                experimental conditions.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                Compounds such as glutathione peptides and vitamin C blends may
                be analysed during formulation development, compatibility testing,
                and antioxidant response research workflows.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">
                  Antioxidant research products
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-muted">
                  Explore antioxidant-focused laboratory compounds currently
                  available within this category.
                </p>
              </div>

              <Link href="/shop" className="text-sm font-extrabold text-ink/80 hover:text-ink">
                View full catalogue →
              </Link>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {productCards.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="rounded-xl3 border border-line bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <div className="text-lg font-extrabold tracking-tight text-ink">
                    {item.title}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.copy}</p>
                  <div className="mt-4 text-sm font-extrabold text-ink">
                    View product →
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-white py-14">
          <Container>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Related research guides
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {guideCards.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="rounded-xl3 border border-line bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <div className="font-extrabold text-ink">{item.title}</div>
                  <p className="mt-2 text-sm text-muted">{item.copy}</p>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-12">
          <Container>
            <div className="rounded-xl3 border border-line bg-panel p-6">
              <h2 className="text-xl font-extrabold">Research peptide guides</h2>

              <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold">
                <Link href="/research-peptides">Research peptides</Link>
                <Link href="/research-peptides-uk">Research peptides UK</Link>
                <Link href="/research-peptide-supplier-uk">Research peptide supplier UK</Link>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Common questions about antioxidant peptides
              </h2>
            </div>

            <div className="mt-8 grid gap-5">
              {faqItems.map((item) => (
                <div
                  key={item.question}
                  className="rounded-xl3 border border-line bg-white p-6 shadow-soft"
                >
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