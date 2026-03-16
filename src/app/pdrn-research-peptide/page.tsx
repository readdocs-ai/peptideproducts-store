import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import Image from "next/image";

export const metadata: Metadata = {
  title: "PDRN Research Peptide | Regenerative Laboratory Compound Study",
  description:
    "Overview of PDRN research peptide compounds including laboratory study areas, regeneration-focused compound research, and related peptide product lines.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/pdrn-research-peptide",
  },
  openGraph: {
    title: "PDRN Research Peptide | Regenerative Laboratory Compound Study",
    description:
      "Overview of PDRN research peptide compounds including laboratory study areas, regeneration-focused compound research, and related peptide product lines.",
    url: "https://www.peptideproducts.co.uk/pdrn-research-peptide",
    siteName: "Peptide Products",
    images: [
      {
        url: "https://www.peptideproducts.co.uk/products/meso-pdrn-main.jpg",
        width: 1200,
        height: 900,
        alt: "PDRN research peptide compound",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PDRN Research Peptide | Regenerative Laboratory Compound Study",
    description:
      "Overview of PDRN research peptide compounds including regeneration-focused laboratory study and related peptide product lines.",
    images: ["https://www.peptideproducts.co.uk/products/meso-pdrn-main.jpg"],
  },
};

const faqItems = [
  {
    question: "What is PDRN research peptide content focused on?",
    answer:
      "PDRN research peptide content focuses on laboratory investigation of regeneration-related pathways, compatibility studies, tissue-response modelling, and controlled biochemical research.",
  },
  {
    question: "Is PDRN supplied for human use?",
    answer:
      "No. All products listed on this site are supplied strictly for laboratory and scientific research use only.",
  },
  {
    question: "Which related compounds are commonly studied alongside PDRN?",
    answer:
      "PDRN-related research may also involve collagen-oriented compounds, regenerative peptide lines, and wider laboratory peptide compound categories used in controlled scientific study.",
  },
] as const;

export default function Page() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "PDRN Research Peptide",
    url: "https://www.peptideproducts.co.uk/pdrn-research-peptide",
    description:
      "Overview of PDRN research peptide compounds including laboratory study areas, regeneration-focused compound research, and related peptide product lines.",
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
        name: "PDRN research peptide",
        item: "https://www.peptideproducts.co.uk/pdrn-research-peptide",
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
              PDRN research peptide
            </h1>

            <div className="mt-8 max-w-3xl overflow-hidden rounded-xl3 border border-line bg-panel p-4 shadow-soft">
              <div className="relative h-[360px] w-full bg-panel">
                <Image
                  src="/products/meso-pdrn-main.jpg"
                  alt="PDRN research peptide compound"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              PDRN (Polydeoxyribonucleotide) is a compound studied in laboratory
              environments investigating cellular regeneration, tissue response,
              and molecular repair pathways.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              Research involving PDRN compounds often examines DNA fragment
              signalling behaviour, cellular regeneration responses, and
              extracellular matrix compatibility under controlled laboratory
              conditions.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              In broader peptide research, PDRN-related compounds are commonly
              grouped with regeneration-focused lines alongside collagen and
              other supportive laboratory compounds used in compatibility and
              formulation studies.
            </p>

            <div className="mt-8">
              <Link
                href="/product/meso-pdrn"
                className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white"
              >
                View PDRN research compound →
              </Link>
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                PDRN in laboratory research
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                PDRN compounds are examined in controlled research environments
                where scientists investigate regeneration-related responses,
                compound interaction, and biochemical behaviour under laboratory
                conditions.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                Depending on the study design, research may focus on molecular
                signalling, structural compatibility, tissue-response modelling,
                or the role of regeneration-oriented compounds alongside
                collagen and other peptide-related blends.
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
                <div className="text-sm font-extrabold text-ink">Research peptides</div>
                <p className="mt-2 text-sm text-muted">
                  Core overview of peptide and compound categories.
                </p>
              </Link>

              <Link href="/research-peptides-uk" className="surface-card p-5">
                <div className="text-sm font-extrabold text-ink">Research peptides UK</div>
                <p className="mt-2 text-sm text-muted">
                  UK-focused guide to research peptide compounds.
                </p>
              </Link>

              <Link href="/product/meso-pdrn" className="surface-card p-5">
                <div className="text-sm font-extrabold text-ink">Meso PDRN</div>
                <p className="mt-2 text-sm text-muted">
                  View the related PDRN research compound product page.
                </p>
              </Link>

              <Link href="/product/meso-collagen" className="surface-card p-5">
                <div className="text-sm font-extrabold text-ink">Meso Collagen</div>
                <p className="mt-2 text-sm text-muted">
                  Explore a related regenerative compound line.
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
              <div className="font-extrabold text-ink">Research peptide supplier UK</div>
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
              <div className="font-extrabold text-ink">Laboratory peptide compounds</div>
              <p className="mt-2 text-sm text-muted">
                Broader overview of peptide compound types used in scientific research environments.
              </p>
            </Link>

            <Link href="/peptide-products" className="surface-card p-5">
              <div className="font-extrabold text-ink">Peptide products</div>
              <p className="mt-2 text-sm text-muted">
                Browse broader peptide product categories and connected research pages.
              </p>
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-extrabold tracking-tight">
              Common questions about PDRN research peptide content
            </h2>
          </div>

          <div className="mt-8 grid gap-5">
            {faqItems.map((item) => (
              <div key={item.question} className="surface-card p-6">
                <h3 className="text-lg font-extrabold tracking-tight">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}