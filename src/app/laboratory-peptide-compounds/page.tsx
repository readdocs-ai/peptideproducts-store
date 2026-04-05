import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Laboratory Peptide Compounds | Research Peptide Products for Scientific Study",
  description:
    "Explore laboratory peptide compounds including antioxidant, hydration, firming, regenerative, and retatrutide-related research compounds used in controlled scientific environments.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/laboratory-peptide-compounds",
  },
  openGraph: {
    title: "Laboratory Peptide Compounds | Research Peptide Products for Scientific Study",
    description:
      "Explore laboratory peptide compounds including antioxidant, hydration, firming, regenerative, and retatrutide-related research compounds used in controlled scientific environments.",
    url: "https://www.peptideproducts.co.uk/laboratory-peptide-compounds",
    siteName: "Peptide Products",
    images: [
      {
        url: "https://www.peptideproducts.co.uk/products/meso-collagen-main.jpg",
        width: 1200,
        height: 900,
        alt: "Laboratory peptide compounds for research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laboratory Peptide Compounds | Research Peptide Products for Scientific Study",
    description:
      "Explore laboratory peptide compounds including antioxidant, hydration, firming, regenerative, and retatrutide-related research compounds used in controlled scientific environments.",
    images: ["https://www.peptideproducts.co.uk/products/meso-collagen-main.jpg"],
  },
};

const faqItems = [
  {
    question: "What are laboratory peptide compounds?",
    answer:
      "Laboratory peptide compounds are research-use products studied in controlled scientific environments investigating molecular behaviour, compound compatibility, formulation stability, and biochemical interaction.",
  },
  {
    question: "Which types of laboratory peptide compounds are covered on this site?",
    answer:
      "The site covers antioxidant, hydration, firming, regenerative, and selected metabolic research compounds, with related product pages and supporting laboratory research guides.",
  },
  {
    question: "Are laboratory peptide compounds supplied for human use?",
    answer:
      "No. All products listed on this site are supplied strictly for laboratory and scientific research use only.",
  },
] as const;

export default function Page() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Laboratory Peptide Compounds",
    url: "https://www.peptideproducts.co.uk/laboratory-peptide-compounds",
    description:
      "Explore laboratory peptide compounds including antioxidant, hydration, firming, regenerative, and retatrutide-related research compounds used in controlled scientific environments.",
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
        name: "Laboratory peptide compounds",
        item: "https://www.peptideproducts.co.uk/laboratory-peptide-compounds",
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
                Laboratory peptide compounds
              </div>

              <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
                Laboratory peptide compounds
              </h1>

              <div className="mt-8 max-w-3xl overflow-hidden rounded-xl3 border border-line bg-panel p-4 shadow-soft">
                <div className="relative h-[360px] w-full bg-panel">
                  <Image
                    src="/products/meso-collagen-main.jpg"
                    alt="Laboratory peptide compounds for research"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-muted">
                Laboratory peptide compounds are studied in controlled environments
                where researchers analyse molecular signalling, compound
                compatibility, biochemical interaction, and formulation behaviour
                between peptides and related research systems. Within scientific
                settings, these compounds are often reviewed as part of wider
                programmes focused on formulation stability, support-system
                behaviour, receptor-related pathways, and compatibility across
                different categories of laboratory research.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                Research may involve antioxidant compounds such as glutathione,
                hydration systems such as hyaluronic acid, regenerative
                compounds including collagen and PDRN peptide blends, and selected
                metabolic research compounds such as{" "}
                <Link
                  href="/retatrutide-research-peptide"
                  className="font-semibold text-ink hover:text-accent"
                >
                  retatrutide research peptide
                </Link>
                . Structural and elasticity-related blends may also be reviewed
                through pages such as{" "}
                <Link href="/firming-peptides" className="font-semibold text-ink hover:text-accent">
                  firming peptides
                </Link>
                , helping users move between related categories more easily.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                This page acts as a broader supporting guide within the site’s{" "}
                <Link href="/research-peptides" className="font-semibold text-ink hover:text-accent">
                  research peptides
                </Link>{" "}
                structure, connecting users to the main compound categories,
                supporting informational pages, and related product-level content.
<<<<<<< HEAD
                It is designed to support both buyer navigation and easier movement between related compound categories and product pages.
=======
                It is designed to support both buyer navigation and stronger
                internal topic coverage for search visibility.
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                Explore connected site sections including{" "}
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
                , or move into broader guides such as{" "}
                <Link href="/research-peptides-uk" className="font-semibold text-ink hover:text-accent">
                  research peptides UK
                </Link>
                ,{" "}
                <Link href="/buy-research-peptides-uk" className="font-semibold text-ink hover:text-accent">
                  buy research peptides UK
                </Link>
                , and{" "}
                <Link href="/research-peptide-supplier-uk" className="font-semibold text-ink hover:text-accent">
                  research peptide supplier UK
                </Link>
                .
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/research-peptides"
                  className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                >
                  Explore research peptide categories
                </Link>
                <Link
                  href="/buy-retatrutide-uk"
                  className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                >
                  Buy Retatrutide UK
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <section className="pb-6">
          <Container>
            <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft lg:p-8">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-muted">
                    Featured laboratory pathway
                  </div>
                  <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
                    Retatrutide discovery within the laboratory peptide cluster
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted md:text-base">
                    This broader laboratory compounds page also supports users
                    exploring retatrutide-related content by linking into the{" "}
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
                    UK-focused landing page connecting research intent to retatrutide product discovery.
                  </p>
                </Link>

                <Link href="/retatrutide-research-peptide" className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">Retatrutide research peptide</div>
                  <p className="mt-2 text-sm text-muted">
                    Supporting guide for retatrutide research context and internal topic relevance.
                  </p>
                </Link>

                <Link href="/product/retatrutide" className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">Retatrutide product page</div>
                  <p className="mt-2 text-sm text-muted">
<<<<<<< HEAD
                    Open the Retatrutide 40mg product page.
=======
                    Direct route to the Retatrutide 40mg product listing.
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
                  </p>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Types of laboratory peptide compounds
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Laboratory peptide compounds can be grouped into several broad
                areas depending on the type of research being carried out. Some
                compounds are reviewed for antioxidant behaviour, some for
                hydration and matrix compatibility, others for structure and
                elasticity-related studies, others for regeneration-focused
                research pathways, and some for selected receptor-related or
                metabolic research pathways.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                On this site, these categories are organised into{" "}
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
                . This structure helps users compare compound types while also
                building a stronger topic cluster across the wider site.
              </p>

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
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                How laboratory peptide compounds are studied
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Laboratory peptide compounds are examined in research
                environments where scientists analyse molecular interactions,
                cellular responses, compound stability, and formulation
                compatibility. These studies often involve analytical testing,
                structured observation, biochemical modelling, and comparison
                across multiple compound classes.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                Depending on the compound type, research may focus on
                antioxidant activity, hydration behaviour, regeneration-related
                compatibility, peptide interaction with structural proteins, or
                selected receptor-related pathway investigation. Related
                informational pages such as{" "}
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
                </Link>{" "}
                help support this wider research structure.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                In practical laboratory terms, buyers and research teams often
                need a broad guide that helps them move from compound type to
                category to individual product pages. This page supports that
                process by acting as a central informational route within the
                site’s scientific topic cluster. Users exploring retatrutide can
                also move into{" "}
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
                Research use only and scientific context
              </h2>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                All compounds listed on this site are supplied strictly for
                laboratory research use. These products are not intended for
                human consumption, medical treatment, or veterinary use. This
                research-only positioning is important for maintaining clear
                scientific context across every category and product page.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                The content on this page is intended to support laboratory
                navigation, scientific study, and broader understanding of the
                compound categories available through the site. It is not
                presented as consumer or clinical guidance.
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

              <Link href="/peptide-products" className="surface-card p-5">
                <div className="font-extrabold text-ink">Peptide products</div>
                <p className="mt-2 text-sm text-muted">
                  Browse broader peptide product categories and connected research pages.
                </p>
              </Link>

              <Link href="/antioxidant-peptides" className="surface-card p-5">
                <div className="font-extrabold text-ink">Antioxidant peptides</div>
                <p className="mt-2 text-sm text-muted">
                  Antioxidant-led research compounds including glutathione and vitamin C.
                </p>
              </Link>

              <Link href="/hydration-peptides" className="surface-card p-5">
                <div className="font-extrabold text-ink">Hydration peptides</div>
                <p className="mt-2 text-sm text-muted">
                  Hydration and extracellular matrix-focused research compound pages.
                </p>
              </Link>

              <Link href="/regenerative-peptides" className="surface-card p-5">
                <div className="font-extrabold text-ink">Regenerative peptides</div>
                <p className="mt-2 text-sm text-muted">
                  Regeneration-related compound pages including collagen and PDRN content.
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
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Common questions about laboratory peptide compounds
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