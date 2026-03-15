import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Regenerative Peptides | PDRN and Collagen Research Compounds",
  description:
    "Explore regenerative peptide compounds including PDRN and collagen-focused laboratory products used in controlled scientific and formulation research environments.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/regenerative-peptides",
  },
  openGraph: {
    title: "Regenerative Peptides | PDRN and Collagen Research Compounds",
    description:
      "Explore regenerative peptide compounds including PDRN and collagen-focused laboratory products used in controlled scientific and formulation research environments.",
    url: "https://www.peptideproducts.co.uk/regenerative-peptides",
    siteName: "Peptide Products",
    images: [
      {
        url: "https://www.peptideproducts.co.uk/products/meso-pdrn-main.jpg",
        width: 1200,
        height: 900,
        alt: "Regenerative peptide compounds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Regenerative Peptides | PDRN and Collagen Research Compounds",
    description:
      "Explore regenerative peptide compounds including PDRN and collagen-focused laboratory products.",
    images: ["https://www.peptideproducts.co.uk/products/meso-pdrn-alt.jpg"],
  },
};

const productCards = [
  {
    title: "Meso PDRN",
    copy: "PDRN-based research compound for regeneration-focused laboratory workflows and compatibility studies.",
    href: "/product/meso-pdrn",
  },
  {
    title: "Meso Collagen Skin Booster",
    copy: "Collagen-oriented laboratory compound used in regeneration and protein-related formulation research.",
    href: "/product/meso-collagen",
  },
] as const;

const guideCards = [
  {
    title: "PDRN research peptide",
    copy: "Learn more about PDRN-related laboratory research, regeneration pathways, and compound context.",
    href: "/pdrn-research-peptide",
  },
  {
    title: "Research peptides",
    copy: "Explore the broader peptide compound categories including antioxidant, hydration, firming, and regenerative lines.",
    href: "/research-peptides",
  },
  {
    title: "Research peptides UK",
    copy: "UK-focused overview of research peptide compounds and laboratory study categories.",
    href: "/research-peptides-uk",
  },
] as const;

const faqItems = [
  {
    question: "What are regenerative peptides?",
    answer:
      "Regenerative peptides and related compounds are laboratory products studied in controlled environments investigating repair pathways, tissue-response models, and compatibility behaviour.",
  },
  {
    question: "Which compounds are included in this category?",
    answer:
      "This category includes regeneration-focused compounds such as PDRN-based products and collagen-oriented laboratory blends.",
  },
  {
    question: "Are regenerative peptide compounds supplied for human use?",
    answer:
      "No. All products listed on this site are supplied strictly for laboratory and scientific research use only.",
  },
] as const;

export default function RegenerativePeptidesPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Regenerative Peptides",
    url: "https://www.peptideproducts.co.uk/regenerative-peptides",
    description:
      "Regenerative peptide compounds including PDRN and collagen-focused laboratory products.",
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
              Regenerative peptides
            </h1>

            <div className="mt-8 max-w-3xl overflow-hidden rounded-xl3 border border-line shadow-soft bg-panel p-4">
              <div className="relative w-full h-[360px] bg-panel">
                <Image
                  src="/products/meso-pdrn-alt.jpg"
                  alt="Regenerative peptide compounds"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <p className="mt-6 max-w-3xl text-sm leading-7 text-muted">
              Regenerative peptides and related laboratory compounds are studied in controlled
              scientific environments investigating repair pathways, cellular response models,
              extracellular compatibility, and regeneration-related biochemical behaviour.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              Within this category, compounds such as PDRN and collagen-focused blends are often
              reviewed in formulation research, stability analysis, and regeneration-oriented
              laboratory workflows.
            </p>

            <div className="mt-8">
              <Link
                href="/shop"
                className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white"
              >
                Browse regenerative compounds →
              </Link>
            </div>
          </Container>
        </section>

        <section className="bg-white py-14">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Regeneration-focused laboratory compounds
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Regeneration-focused compounds are commonly examined in laboratory environments where
                researchers investigate molecular response, structural compatibility, tissue-related
                modelling, and formulation behaviour under controlled experimental conditions.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                Depending on the compound type, research may focus on PDRN-related pathways,
                collagen-associated compatibility, supportive carrier systems, and interactions
                relevant to repair and regeneration studies.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">
                  Related regenerative products
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-muted">
                  Explore regeneration-focused laboratory compounds currently listed in this
                  category.
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
                  <div className="text-lg font-extrabold tracking-tight text-ink">{item.title}</div>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.copy}</p>
                  <div className="mt-4 text-sm font-extrabold text-ink">View product →</div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-white py-14">
          <Container>
            <h2 className="text-2xl font-extrabold tracking-tight">Related research guides</h2>

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
                Common questions about regenerative peptides
              </h2>
            </div>

            <div className="mt-8 grid gap-5">
              {faqItems.map((item) => (
                <div
                  key={item.question}
                  className="rounded-xl3 border border-line bg-white p-6 shadow-soft"
                >
                  <h3 className="text-lg font-extrabold tracking-tight">{item.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.answer}</p>
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
        <Link href="/research-peptide-supplier-uk">Research peptide supplier UK</Link>

      </div>
    </div>
  </Container>
</section>

      <Footer />
    </div>
  );
}