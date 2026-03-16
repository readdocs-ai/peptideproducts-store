import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Hydration Peptides | Hyaluronic Acid Research Compounds",
  description:
    "Explore hydration peptide compounds including hyaluronic acid laboratory products studied in controlled research environments investigating hydration behaviour, extracellular compatibility, and formulation stability.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/hydration-peptides",
  },
  openGraph: {
    title: "Hydration Peptides | Hyaluronic Acid Research Compounds",
    description:
      "Explore hydration peptide compounds including hyaluronic acid laboratory products studied in controlled research environments.",
    url: "https://www.peptideproducts.co.uk/hydration-peptides",
    siteName: "Peptide Products",
    images: [
      {
        url: "https://www.peptideproducts.co.uk/products/skinbooster-hyaluronic-acid-main.jpg",
        width: 1200,
        height: 900,
        alt: "Hydration peptide compounds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hydration Peptides | Hyaluronic Acid Research Compounds",
    description:
      "Explore hydration peptide compounds including hyaluronic acid laboratory research products.",
    images: ["https://www.peptideproducts.co.uk/products/skinbooster-hyaluronic-alt.jpg"],
  },
};

const productCards = [
  {
    title: "Skinbooster Hyaluronic Acid",
    copy: "Hyaluronic acid-based research compound studied in laboratory environments analysing hydration behaviour, extracellular compatibility, and formulation stability.",
    href: "/product/skinbooster-hyaluronic-acid",
  },
  {
    title: "Meso Lift & Firming",
    copy: "Firming-oriented peptide blend that can also support hydration-related formulation and compatibility research workflows.",
    href: "/product/meso-lift-firming",
  },
] as const;

const guideCards = [
  {
    title: "Hyaluronic acid peptide research",
    copy: "Learn more about hyaluronic acid laboratory research and hydration-focused compound investigation.",
    href: "/hyaluronic-acid-peptide-research",
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
    question: "What are hydration peptides?",
    answer:
      "Hydration peptides and related compounds are studied in laboratory environments investigating hydration behaviour, molecular compatibility, extracellular interaction, and formulation stability.",
  },
  {
    question: "Which compounds are included in this category?",
    answer:
      "This category includes hydration-focused compounds such as hyaluronic acid-based laboratory products and related supportive peptide blends.",
  },
  {
    question: "Are hydration peptide compounds intended for human use?",
    answer:
      "No. All products listed on this site are supplied strictly for laboratory and scientific research use only.",
  },
] as const;

export default function HydrationPeptidesPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Hydration Peptides",
    url: "https://www.peptideproducts.co.uk/hydration-peptides",
    description:
      "Hydration peptide compounds including hyaluronic acid laboratory research products.",
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
        name: "Hydration peptides",
        item: "https://www.peptideproducts.co.uk/hydration-peptides",
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
              Hydration peptides
            </h1>

            <div className="mt-8 max-w-3xl overflow-hidden rounded-xl3 border border-line shadow-soft bg-panel p-4">
              <div className="relative w-full h-[360px] bg-panel">
                <Image
                  src="/products/skinbooster-hyaluronic-alt.jpg"
                  alt="Hydration peptide compounds"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <p className="mt-6 max-w-3xl text-sm leading-7 text-muted">
              Hydration peptides and related laboratory compounds are studied in
              controlled research environments investigating molecular hydration
              behaviour, extracellular interaction, and compatibility across
              formulation systems.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              Research laboratories frequently analyse hydration-focused
              compounds such as hyaluronic acid blends when examining stability,
              carrier behaviour, structural compatibility, and formulation
              performance under experimental conditions.
            </p>

            <div className="mt-8">
              <Link
                href="/shop"
                className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white"
              >
                Browse hydration compounds →
              </Link>
            </div>
          </Container>
        </section>

        <section className="bg-white py-14">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Hydration compound research
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Hydration-related laboratory compounds are commonly examined in
                research environments investigating moisture retention systems,
                extracellular matrix compatibility, structural interaction, and
                compound stability.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                Hyaluronic acid-based products and related peptide blends may be
                analysed during formulation development, compatibility testing,
                and hydration-focused laboratory workflows.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">
                  Hydration research products
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-muted">
                  Explore hydration-focused laboratory compounds currently
                  available within this category.
                </p>
              </div>

              <Link
                href="/shop"
                className="text-sm font-extrabold text-ink/80 hover:text-ink"
              >
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

        <section className="py-14">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Common questions about hydration peptides
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

      <section className="py-12">
        <Container>
          <div className="rounded-xl3 border border-line bg-panel p-6">
            <h2 className="text-xl font-extrabold">Research peptide guides</h2>

            <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold">
              <Link href="/research-peptides">Research peptides</Link>
              <Link href="/research-peptides-uk">Research peptides UK</Link>
              <Link href="/research-peptide-supplier-uk">
                Research peptide supplier UK
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}