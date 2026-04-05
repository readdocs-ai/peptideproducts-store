import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Research Peptides UK | Laboratory Peptide Compounds for Scientific Study",
  description:
    "Browse research peptides available in the UK including glutathione, PDRN, collagen, hyaluronic acid, and retatrutide-related research compounds supplied strictly for laboratory study.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/research-peptides-uk",
  },
  openGraph: {
    title: "Research Peptides UK | Laboratory Peptide Compounds for Scientific Study",
    description:
      "Browse research peptides available in the UK including glutathione, PDRN, collagen, hyaluronic acid, and retatrutide-related research compounds supplied strictly for laboratory study.",
    url: "https://www.peptideproducts.co.uk/research-peptides-uk",
    siteName: "Peptide Products",
    images: [
      {
        url: "https://www.peptideproducts.co.uk/products/meso-glutathione-main.jpg",
        width: 1200,
        height: 900,
        alt: "Research peptides UK laboratory compounds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Peptides UK | Laboratory Peptide Compounds for Scientific Study",
    description:
      "Browse research peptides available in the UK including glutathione, PDRN, collagen, hyaluronic acid, and retatrutide-related research compounds supplied strictly for laboratory study.",
    images: ["https://www.peptideproducts.co.uk/products/meso-glutathione-main.jpg"],
  },
};

const faqItems = [
  {
    question: "What does research peptides UK mean on this site?",
    answer:
      "Research peptides UK refers to laboratory peptide compounds supplied to UK-based research buyers for scientific, analytical, and formulation-focused study environments.",
  },
  {
    question: "Which compound categories are included?",
    answer:
      "The site includes antioxidant, hydration, firming, regenerative, and selected metabolic research compound categories, with related product pages and supporting research guides.",
  },
  {
    question: "Are these products supplied for human use?",
    answer:
      "No. All compounds listed on this site are supplied strictly for laboratory and scientific research use only.",
  },
] as const;

export default function ResearchPeptidesUK() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Research Peptides UK",
    url: "https://www.peptideproducts.co.uk/research-peptides-uk",
    description:
      "Browse research peptides available in the UK including glutathione, PDRN, collagen, hyaluronic acid, and retatrutide-related research compounds supplied strictly for laboratory study.",
    isPartOf: {
      "@type": "WebSite",
      name: "Peptide Products",
      url: "https://www.peptideproducts.co.uk",
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
        name: "Research peptides UK",
        item: "https://www.peptideproducts.co.uk/research-peptides-uk",
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
                Research peptides UK
              </div>

              <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
                Research peptides UK
              </h1>

              <div className="mt-8 max-w-3xl overflow-hidden rounded-xl3 border border-line bg-panel p-4 shadow-soft">
                <div className="relative h-[360px] w-full bg-panel">
                  <Image
                    src="/products/meso-glutathione-main.jpg"
                    alt="Research peptides UK laboratory compounds"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-muted">
                Research peptides are laboratory compounds studied in analytical,
                biochemical, and formulation-based research environments.
                Scientists use peptide compounds to examine cellular behaviour,
                compound stability, antioxidant activity, compatibility, and other
                controlled laboratory research pathways. For UK-based research buyers,
                this category acts as a broader overview of the main compound
                types available across the site.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                Common research areas include antioxidant compounds such as
                glutathione and vitamin C, hydration systems built around
                hyaluronic acid, regeneration-focused compounds like PDRN and
                collagen, peptide blends used in elasticity and structural
                research workflows, and selected metabolic research compounds such as{" "}
                <Link
                  href="/retatrutide-research-peptide"
                  className="font-semibold text-ink hover:text-accent"
                >
                  retatrutide research peptide
                </Link>
                . These category pathways connect into wider{" "}
                <Link href="/research-peptides" className="font-semibold text-ink hover:text-accent">
                  research peptides
                </Link>{" "}
                content and related product pages.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                This page is designed to help users in the UK move efficiently
                between core peptide categories, related guides, and laboratory
                compound pages. It supports both user navigation and stronger
                internal topic structure by linking into the most relevant
                scientific research sections across the site.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                Explore core laboratory categories including{" "}
                <Link href="/antioxidant-peptides" className="font-semibold text-ink hover:text-accent">
                  antioxidant peptides
                </Link>
                ,{" "}
                <Link href="/hydration-peptides" className="font-semibold text-ink hover:text-accent">
                  hydration peptides
                </Link>
                ,{" "}
                <Link href="/firming-peptides" className="font-semibold text-ink hover:text-accent">
                  firming peptides
                </Link>
                , and{" "}
                <Link href="/regenerative-peptides" className="font-semibold text-ink hover:text-accent">
                  regenerative peptides
                </Link>
                , or move into broader support pages such as{" "}
                <Link href="/research-peptide-supplier-uk" className="font-semibold text-ink hover:text-accent">
                  research peptide supplier UK
                </Link>
                ,{" "}
                <Link href="/buy-research-peptides-uk" className="font-semibold text-ink hover:text-accent">
                  buy research peptides UK
                </Link>
                , and{" "}
                <Link href="/laboratory-peptide-compounds" className="font-semibold text-ink hover:text-accent">
                  laboratory peptide compounds
                </Link>
                .
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/shop"
                  className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                >
                  Browse research products
                </Link>

                <Link
                  href="/buy-retatrutide-uk"
                  className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                >
                  Buy Retatrutide UK
                </Link>
              </div>
            </div>

            <section className="mt-10 rounded-xl3 border border-line bg-white p-6 shadow-soft lg:p-8">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-muted">
                    Featured UK research pathway
                  </div>
                  <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
                    Retatrutide research and product discovery in the UK
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted md:text-base">
                    This UK research hub also supports users exploring retatrutide-related
                    content by linking into the{" "}
                    <Link
                      href="/retatrutide-research-peptide"
                      className="font-semibold text-ink hover:text-accent"
                    >
                      retatrutide research peptide
                    </Link>{" "}
                    guide, the{" "}
                    <Link
                      href="/buy-retatrutide-uk"
                      className="font-semibold text-ink hover:text-accent"
                    >
                      Buy Retatrutide UK
                    </Link>{" "}
                    page, and the main{" "}
                    <Link
                      href="/product/retatrutide"
                      className="font-semibold text-ink hover:text-accent"
                    >
                      Retatrutide product page
                    </Link>
                    .
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/buy-retatrutide-uk"
                    className="rounded-xl2 bg-accent px-5 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                  >
                    Buy Retatrutide UK
                  </Link>
                  <Link
                    href="/retatrutide-research-peptide"
                    className="rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                  >
                    Retatrutide research peptide
                  </Link>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <Link href="/buy-retatrutide-uk" className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">Buy Retatrutide UK</div>
                  <p className="mt-2 text-sm text-muted">
                    UK-focused retatrutide landing page connecting research intent to product discovery.
                  </p>
                </Link>

                <Link href="/retatrutide-research-peptide" className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">Retatrutide research peptide</div>
                  <p className="mt-2 text-sm text-muted">
                    Supporting page for retatrutide research context and internal topical relevance.
                  </p>
                </Link>

                <Link href="/product/retatrutide" className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">Retatrutide product page</div>
                  <p className="mt-2 text-sm text-muted">
<<<<<<< HEAD
                    Open the Retatrutide 40mg product page.
=======
                    Direct route into the Retatrutide 40mg product listing.
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
                  </p>
                </Link>
              </div>
            </section>

            <section className="mt-10">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Core research peptide categories
              </h2>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <Link href="/antioxidant-peptides" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Antioxidant peptides</div>
                  <p className="mt-2 text-sm text-muted">
                    Glutathione and vitamin C research compounds studied for oxidative stress and antioxidant activity.
                  </p>
                </Link>

                <Link href="/hydration-peptides" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Hydration peptides</div>
                  <p className="mt-2 text-sm text-muted">
                    Hyaluronic acid based compounds used in hydration and extracellular matrix research.
                  </p>
                </Link>

                <Link href="/firming-peptides" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Firming peptides</div>
                  <p className="mt-2 text-sm text-muted">
                    Elasticity and structural peptide blends reviewed in firmness and compatibility research.
                  </p>
                </Link>

                <Link href="/regenerative-peptides" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Regenerative peptides</div>
                  <p className="mt-2 text-sm text-muted">
                    Collagen and PDRN based compounds studied in regeneration and repair research environments.
                  </p>
                </Link>
              </div>
            </section>
          </Container>
        </section>

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Types of research peptide compounds
            </h2>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="surface-card p-6">
                <h3 className="text-lg font-extrabold">Antioxidant peptides</h3>
                <p className="mt-3 text-sm text-muted">
                  Glutathione and vitamin C compounds are frequently studied in
                  oxidative stress, cellular protection, and antioxidant-related
                  research environments.
                </p>

                <Link
                  href="/antioxidant-peptides"
                  className="mt-4 inline-block font-extrabold text-ink hover:text-accent"
                >
                  View antioxidant peptide category →
                </Link>
              </div>

              <div className="surface-card p-6">
                <h3 className="text-lg font-extrabold">Hydration compounds</h3>
                <p className="mt-3 text-sm text-muted">
                  Hyaluronic acid-based compounds are often examined in
                  hydration-related laboratory studies and extracellular matrix
                  research.
                </p>

                <Link
                  href="/hydration-peptides"
                  className="mt-4 inline-block font-extrabold text-ink hover:text-accent"
                >
                  View hydration peptide category →
                </Link>
              </div>

              <div className="surface-card p-6">
                <h3 className="text-lg font-extrabold">Regenerative peptides</h3>
                <p className="mt-3 text-sm text-muted">
                  Compounds such as PDRN and collagen blends are reviewed in
                  regeneration-focused research environments and compatibility
                  studies.
                </p>

                <Link
                  href="/regenerative-peptides"
                  className="mt-4 inline-block font-extrabold text-ink hover:text-accent"
                >
                  View regenerative peptide category →
                </Link>
              </div>

              <div className="surface-card p-6">
                <h3 className="text-lg font-extrabold">Firming peptide blends</h3>
                <p className="mt-3 text-sm text-muted">
                  Firming peptide blends combine compounds studied in elasticity
                  research, structural protein analysis, and formulation
                  compatibility testing.
                </p>

                <Link
                  href="/firming-peptides"
                  className="mt-4 inline-block font-extrabold text-ink hover:text-accent"
                >
                  View firming peptide category →
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                How research peptides are studied
              </h2>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                Research peptides are examined in laboratory environments where
                scientists analyse molecular interactions, cellular responses,
                compound stability, and formulation compatibility. These studies
                often involve analytical testing, experimental modelling, and
                biochemical investigation across structured research conditions.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                Depending on the compound type, research may focus on
                antioxidant activity, hydration behaviour, regeneration-related
                compatibility, peptide interaction with structural proteins, or
                selected receptor-related pathway research. Many of these pathways
                connect naturally to supporting content such as{" "}
                <Link
                  href="/glutathione-research-peptide"
                  className="font-semibold text-ink hover:text-accent"
                >
                  glutathione research peptide
                </Link>
                ,{" "}
                <Link
                  href="/hyaluronic-acid-peptide-research"
                  className="font-semibold text-ink hover:text-accent"
                >
                  hyaluronic acid peptide research
                </Link>
                ,{" "}
                <Link
                  href="/pdrn-research-peptide"
                  className="font-semibold text-ink hover:text-accent"
                >
                  PDRN research peptide
                </Link>
                , and{" "}
                <Link
                  href="/retatrutide-research-peptide"
                  className="font-semibold text-ink hover:text-accent"
                >
                  retatrutide research peptide
                </Link>
                .
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                In practical terms, UK-based research buyers often need a clear
<<<<<<< HEAD
                way into both category pages and product-level content. That
                is why this page works as a central informational guide linking
                into related categories and product pages while keeping all content aligned with research-only scientific use. Buyers exploring
=======
                route into both category pages and product-level content. That
                is why this page works as a central informational guide linking
                into the broader site architecture while keeping all content
                aligned with research-only scientific use. Buyers exploring
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
                retatrutide can also move into{" "}
                <Link
                  href="/buy-retatrutide-uk"
                  className="font-semibold text-ink hover:text-accent"
                >
                  Buy Retatrutide UK
                </Link>{" "}
                and the{" "}
                <Link
                  href="/product/retatrutide"
                  className="font-semibold text-ink hover:text-accent"
                >
                  Retatrutide product page
                </Link>
                .
              </p>
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Research use disclaimer
              </h2>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                All compounds listed on this site are supplied strictly for
                laboratory research use. These products are not intended for
                human consumption, medical treatment, or veterinary use. This
                research-only positioning is important for maintaining clear
                scientific context across every category and product page on the
                site.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                The content on this page is intended to support laboratory
                navigation, scientific study, and broader understanding of the
                compound categories available to UK-based research buyers. It is
                not presented as consumer or clinical guidance.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/shop"
                  className="inline-block rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                >
                  Browse research products
                </Link>
                <Link
                  href="/buy-retatrutide-uk"
                  className="inline-block rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                >
                  Buy Retatrutide UK
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Related research guides
              </h2>

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <Link href="/research-peptides" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Research peptides</div>
                  <p className="mt-2 text-sm text-muted">
                    Overview of peptide compounds used in laboratory study.
                  </p>
                </Link>

                <Link href="/research-peptide-supplier-uk" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Research peptide supplier UK</div>
                  <p className="mt-2 text-sm text-muted">
                    Overview of peptide compound supply and research products.
                  </p>
                </Link>

                <Link href="/antioxidant-peptides" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Antioxidant peptides</div>
                  <p className="mt-2 text-sm text-muted">
                    Glutathione and vitamin C research compounds used in antioxidant laboratory study.
                  </p>
                </Link>

                <Link href="/hydration-peptides" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Hydration peptides</div>
                  <p className="mt-2 text-sm text-muted">
                    Hyaluronic acid and hydration-related compounds for formulation and compatibility research.
                  </p>
                </Link>

                <Link href="/firming-peptides" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Firming peptides</div>
                  <p className="mt-2 text-sm text-muted">
                    Elasticity and structure-focused peptide blends used in firming-related research.
                  </p>
                </Link>

                <Link href="/regenerative-peptides" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Regenerative peptides</div>
                  <p className="mt-2 text-sm text-muted">
                    PDRN and collagen-focused compounds studied in regeneration-related laboratory environments.
                  </p>
                </Link>

                <Link href="/buy-research-peptides-uk" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Buy research peptides UK</div>
                  <p className="mt-2 text-sm text-muted">
                    Buyer-focused page for research compounds available to UK laboratories and research teams.
                  </p>
                </Link>

                <Link href="/laboratory-peptide-compounds" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Laboratory peptide compounds</div>
                  <p className="mt-2 text-sm text-muted">
                    Broader overview of peptide compound types used in scientific research environments.
                  </p>
                </Link>

                <Link href="/retatrutide-research-peptide" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Retatrutide research peptide</div>
                  <p className="mt-2 text-sm text-muted">
                    Supporting guide for retatrutide research context and internal relevance.
                  </p>
                </Link>

                <Link href="/buy-retatrutide-uk" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Buy Retatrutide UK</div>
                  <p className="mt-2 text-sm text-muted">
                    UK-focused retatrutide landing page connecting research intent to product discovery.
                  </p>
                </Link>

                <Link href="/product/retatrutide" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Retatrutide product page</div>
                  <p className="mt-2 text-sm text-muted">
<<<<<<< HEAD
                    Open the Retatrutide 40mg product page.
=======
                    Direct route to the Retatrutide 40mg product listing.
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
                  </p>
                </Link>

                <Link href="/" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Homepage</div>
                  <p className="mt-2 text-sm text-muted">
<<<<<<< HEAD
                    Return to the main catalogue and research guides.
=======
                    Return to the main site hub for products, categories, and research pages.
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
                  </p>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Common questions about research peptides UK
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