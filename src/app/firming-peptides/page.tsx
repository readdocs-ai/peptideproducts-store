import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Firming Peptides | Elasticity and Structural Research Compounds",
  description:
    "Explore firming peptide compounds including elasticity-focused laboratory products studied in controlled research environments investigating structural compatibility, peptide interaction, and formulation stability.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/firming-peptides",
  },
  openGraph: {
    title: "Firming Peptides | Elasticity and Structural Research Compounds",
    description:
      "Explore firming peptide compounds including elasticity-focused laboratory products studied in controlled research environments.",
    url: "https://www.peptideproducts.co.uk/firming-peptides",
    siteName: "Peptide Products",
    images: [
      {
        url: "https://www.peptideproducts.co.uk/products/meso-lift-firming-main.jpg",
        width: 1200,
        height: 900,
        alt: "Firming peptide compounds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Firming Peptides | Elasticity and Structural Research Compounds",
    description:
      "Explore firming peptide compounds including elasticity-focused laboratory research products.",
    images: ["https://www.peptideproducts.co.uk/products/meso-lift-firming-alt.jpg"],
  },
};

const productCards = [
  {
    title: "Meso Lift & Firming",
    copy: "Firming-focused peptide blend studied in laboratory environments analysing elasticity behaviour, structural compatibility, and formulation stability.",
    href: "/product/meso-lift-firming",
  },
  {
    title: "Skinbooster Hyaluronic Acid",
    copy: "Hydration-supportive compound that can also relate to formulation and compatibility studies alongside firming-focused peptide blends.",
    href: "/product/skinbooster-hyaluronic-acid",
  },
] as const;

const guideCards = [
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
  {
    title: "Peptide products",
    copy: "Browse broader peptide product categories and related laboratory research pages.",
    href: "/peptide-products",
  },
] as const;

const faqItems = [
  {
    question: "What are firming peptides?",
    answer:
      "Firming peptides and related compounds are studied in laboratory environments investigating structural compatibility, elasticity-related behaviour, peptide interaction, and formulation stability.",
  },
  {
    question: "Which products are included in this category?",
    answer:
      "This category includes firming-focused peptide blends and related supportive compounds that may be examined alongside structural or hydration-oriented laboratory research.",
  },
  {
    question: "Are firming peptide compounds intended for human use?",
    answer:
      "No. All products listed on this site are supplied strictly for laboratory and scientific research use only.",
  },
] as const;

export default function FirmingPeptidesPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Firming Peptides",
    url: "https://www.peptideproducts.co.uk/firming-peptides",
    description:
      "Firming peptide compounds including elasticity-focused laboratory research products.",
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

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([webPageSchema, faqSchema]) }}
      />

      <Header />

      <main>
        <section className="py-14">
          <Container>
            <h1 className="text-4xl font-extrabold tracking-tight">
              Firming peptides
            </h1>

            <div className="mt-8 max-w-3xl overflow-hidden rounded-xl3 border border-line shadow-soft bg-panel p-4">
              <div className="relative w-full h-[360px] bg-panel">
                <Image
                  src="/products/meso-lift-firming-alt.jpg"
                  alt="Firming peptide compounds"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <p className="mt-6 max-w-3xl text-sm leading-7 text-muted">
              Firming peptides and related laboratory compounds are studied in
              controlled research environments investigating structural
              interaction, elasticity-related behaviour, molecular compatibility,
              and formulation stability.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              Research laboratories may analyse firming-focused peptide blends
              when examining structural protein interaction, supportive carrier
              systems, compound compatibility, and formulation performance under
              experimental conditions.
            </p>

            <div className="mt-8">
              <Link
                href="/shop"
                className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white"
              >
                Browse firming compounds →
              </Link>
            </div>
          </Container>
        </section>

        <section className="bg-white py-14">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Firming compound research
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Firming-related laboratory compounds are commonly examined in
                research environments investigating elasticity behaviour,
                structural interaction, peptide compatibility, and formulation
                support systems.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                Firming-focused peptide blends may be analysed during structural
                research, compatibility testing, formulation development, and
                peptide interaction studies under controlled experimental
                conditions.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">
                  Firming research products
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-muted">
                  Explore firming-focused laboratory compounds currently
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

        <section className="py-14">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Common questions about firming peptides
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