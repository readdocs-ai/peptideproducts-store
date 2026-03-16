import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hyaluronic Acid Peptide Research | Hydration Laboratory Compound Study",
  description:
    "Hyaluronic acid peptide research overview including hydration compound analysis, extracellular matrix compatibility, and laboratory study environments.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/hyaluronic-acid-peptide-research",
  },
  openGraph: {
    title: "Hyaluronic Acid Peptide Research | Hydration Laboratory Compound Study",
    description:
      "Hyaluronic acid peptide research overview including hydration compound analysis, extracellular matrix compatibility, and laboratory study environments.",
    url: "https://www.peptideproducts.co.uk/hyaluronic-acid-peptide-research",
    siteName: "Peptide Products",
    images: [
      {
        url: "https://www.peptideproducts.co.uk/products/skinbooster-hyaluronic-acid-main.jpg",
        width: 1200,
        height: 900,
        alt: "Hyaluronic acid peptide research compound",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyaluronic Acid Peptide Research | Hydration Laboratory Compound Study",
    description:
      "Hyaluronic acid peptide research overview including hydration compound analysis and extracellular matrix laboratory study.",
    images: ["https://www.peptideproducts.co.uk/products/skinbooster-hyaluronic-acid-main.jpg"],
  },
};

const faqItems = [
  {
    question: "What is hyaluronic acid peptide research focused on?",
    answer:
      "Hyaluronic acid peptide research focuses on hydration-related laboratory study, extracellular matrix compatibility, formulation behaviour, and controlled investigation of compound interaction.",
  },
  {
    question: "Is hyaluronic acid supplied for human use?",
    answer:
      "No. All products listed on this site are supplied strictly for laboratory and scientific research use only.",
  },
  {
    question: "Which related compounds are commonly studied alongside hyaluronic acid?",
    answer:
      "Hyaluronic acid-related research may also involve hydration peptides, firming-focused blends, and wider laboratory peptide compound categories used in controlled scientific study.",
  },
] as const;

export default function Page() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Hyaluronic Acid Peptide Research",
    url: "https://www.peptideproducts.co.uk/hyaluronic-acid-peptide-research",
    description:
      "Hyaluronic acid peptide research overview including hydration compound analysis, extracellular matrix compatibility, and laboratory study environments.",
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
        name: "Hyaluronic acid peptide research",
        item: "https://www.peptideproducts.co.uk/hyaluronic-acid-peptide-research",
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
              Hyaluronic acid peptide research
            </h1>

            <div className="mt-8 max-w-3xl overflow-hidden rounded-xl3 border border-line bg-panel p-4 shadow-soft">
              <div className="relative h-[360px] w-full bg-panel">
                <Image
                  src="/products/skinbooster-hyaluronic-acid-main.jpg"
                  alt="Hyaluronic acid peptide research compound"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              Hyaluronic acid compounds are studied in laboratory environments
              examining hydration behaviour, extracellular matrix interaction,
              and structural compound compatibility. Within controlled research
              settings, these compounds may be reviewed as part of broader
              hydration-focused investigation involving formulation stability,
              support-system response, and compound behaviour across structured
              experimental models.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              Research involving hyaluronic acid peptide compounds can explore
              molecular binding properties, hydration stability, and compound
              interaction across controlled experimental frameworks. This type
              of work often overlaps with wider{" "}
              <Link href="/hydration-peptides" className="font-semibold text-ink hover:text-accent">
                hydration peptides
              </Link>{" "}
              research and related{" "}
              <Link href="/research-peptides" className="font-semibold text-ink hover:text-accent">
                research peptides
              </Link>{" "}
              content across the site.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              In practical laboratory terms, hyaluronic acid-related compounds
              are often considered alongside formulation and compatibility work,
              especially where hydration-focused compounds are being compared
              with structure-led or regeneration-oriented lines. This makes the
              topic relevant to wider laboratory peptide compound research as
              well as specific product-level investigation.
            </p>

            <div className="mt-8">
              <Link
                href="/product/skinbooster-hyaluronic-acid"
                className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white"
              >
                View hyaluronic acid compound →
              </Link>
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Hyaluronic acid in laboratory research
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Hyaluronic acid compounds are commonly examined in laboratory
                research environments where scientists investigate hydration
                systems, extracellular compatibility, and molecular behaviour
                under controlled conditions. Depending on the study design,
                research may focus on hydration response, support structure
                interaction, and compound stability over time.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                This research can also extend into broader formulation studies,
                where hydration-oriented compounds are compared against other
                categories such as{" "}
                <Link href="/firming-peptides" className="font-semibold text-ink hover:text-accent">
                  firming peptides
                </Link>{" "}
                and{" "}
                <Link href="/regenerative-peptides" className="font-semibold text-ink hover:text-accent">
                  regenerative peptides
                </Link>
                . Linking these related categories helps build a stronger topic
                structure while improving user navigation.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Related hydration and compatibility studies
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Hyaluronic acid peptide research is often associated with
                hydration behaviour, extracellular matrix compatibility, and
                compound interaction within support systems. In scientific
                settings, this can involve evaluating how a compound behaves in
                solution, how stable it remains during testing, and how it fits
                within broader formulation-led laboratory work.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                Related study areas may include investigations into hydration
                support, structural compatibility, and matrix interaction
                alongside broader{" "}
                <Link
                  href="/laboratory-peptide-compounds"
                  className="font-semibold text-ink hover:text-accent"
                >
                  laboratory peptide compounds
                </Link>{" "}
                research. This makes hyaluronic acid an important topic within
                the wider site structure, especially where category pages and
                product pages are being used together to support research-led
                navigation.
              </p>
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
              Common questions about hyaluronic acid peptide research
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