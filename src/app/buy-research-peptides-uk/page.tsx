import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Buy Research Peptides UK | Laboratory Compounds for Scientific Study",
  description:
    "Browse research peptides available in the UK including antioxidant, regenerative, hydration, firming, and retatrutide-related laboratory compounds supplied strictly for scientific study.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/buy-research-peptides-uk",
  },
  openGraph: {
    title: "Buy Research Peptides UK | Laboratory Compounds for Scientific Study",
    description:
      "Browse research peptides available in the UK including antioxidant, regenerative, hydration, firming, and retatrutide-related laboratory compounds supplied strictly for scientific study.",
    url: "https://www.peptideproducts.co.uk/buy-research-peptides-uk",
    siteName: "Peptide Products",
    images: [
      {
        url: "https://www.peptideproducts.co.uk/products/meso-glutathione-main.jpg",
        width: 1200,
        height: 900,
        alt: "Buy research peptides UK laboratory compounds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Research Peptides UK | Laboratory Compounds for Scientific Study",
    description:
      "Browse research peptides available in the UK including antioxidant, regenerative, hydration, firming, and retatrutide-related laboratory compounds supplied strictly for scientific study.",
    images: ["https://www.peptideproducts.co.uk/products/meso-glutathione-main.jpg"],
  },
};

const faqItems = [
  {
    question: "Can research peptides be bought in the UK through this site?",
    answer:
      "Yes. The site provides a UK-facing catalogue structure for research peptide compounds and related laboratory product lines supplied strictly for scientific study.",
  },
  {
    question: "Which categories are available?",
    answer:
      "The site includes antioxidant, hydration, firming, regenerative, and selected metabolic research compound categories, along with related product pages and supporting research guides.",
  },
  {
    question: "Are these compounds supplied for human use?",
    answer:
      "No. All products listed on this site are supplied strictly for laboratory and scientific research use only.",
  },
] as const;

export default function Page() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Buy Research Peptides UK",
    url: "https://www.peptideproducts.co.uk/buy-research-peptides-uk",
    description:
      "Browse research peptides available in the UK including antioxidant, regenerative, hydration, firming, and retatrutide-related laboratory compounds supplied strictly for scientific study.",
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
        name: "Buy research peptides UK",
        item: "https://www.peptideproducts.co.uk/buy-research-peptides-uk",
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
                Buy research peptides UK
              </div>

              <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
                Buy research peptides UK
              </h1>

              <div className="mt-8 max-w-3xl overflow-hidden rounded-xl3 border border-line bg-panel p-4 shadow-soft">
                <div className="relative h-[360px] w-full bg-panel">
                  <Image
                    src="/products/meso-glutathione-main.jpg"
                    alt="Buy research peptides UK laboratory compounds"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-muted">
                Research peptides are laboratory compounds used in controlled
                scientific environments investigating molecular interaction,
                biochemical pathways, compound stability, and cellular response
                mechanisms. For UK buyers, this page acts as a commercial-intent
                guide that connects broad purchase-focused searches with the main
                research categories and supporting product pages across the site.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                These compounds may include antioxidant peptide blends,
                regeneration-focused compounds, hydration-related molecular
                systems, structure-focused peptide categories, and selected
                metabolic research compounds. The site is organised to help users
                move from buying-intent searches into category-level browsing,
                product comparison, and related research content.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                If you are looking to buy research peptides in the UK for
                laboratory study, the most useful route is often to begin with the{" "}
                <Link href="/research-peptides" className="font-semibold text-ink hover:text-accent">
                  research peptides
                </Link>{" "}
                overview, then move into pages such as{" "}
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
                .
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                Laboratories exploring newer metabolic research categories can also
                move into{" "}
                <Link href="/retatrutide-research-peptide" className="font-semibold text-ink hover:text-accent">
                  retatrutide research peptide
                </Link>
                ,{" "}
                <Link href="/buy-retatrutide-uk" className="font-semibold text-ink hover:text-accent">
                  Buy Retatrutide UK
                </Link>
                , and the{" "}
                <Link href="/product/retatrutide" className="font-semibold text-ink hover:text-accent">
                  Retatrutide product page
                </Link>
                .
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                Explore related research areas including{" "}
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
                , or browse supporting guides such as{" "}
                <Link href="/research-peptides-uk" className="font-semibold text-ink hover:text-accent">
                  research peptides UK
                </Link>
                ,{" "}
                <Link href="/research-peptide-supplier-uk" className="font-semibold text-ink hover:text-accent">
                  research peptide supplier UK
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
                  Browse research compounds
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
                    Featured buying pathway
                  </div>
                  <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
                    Retatrutide discovery within the UK research peptide cluster
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted md:text-base">
                    This buyer-focused page also supports users exploring
                    retatrutide-related content by linking into the{" "}
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
                    Supporting guide for retatrutide research context and internal topical relevance.
                  </p>
                </Link>

                <Link href="/product/retatrutide" className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">Retatrutide product page</div>
                  <p className="mt-2 text-sm text-muted">
                    Direct route into the Retatrutide 40mg product listing.
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
                Research peptide categories available in the UK
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Buyers searching for research peptides in the UK often need a
                clear overview of the main compound types available through a
                laboratory-focused catalogue. On this site, those categories are
                structured around antioxidant, hydration, firming,
                regenerative, and selected metabolic research lines so that users
                can move quickly from purchase intent into the most relevant area
                of scientific interest.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                This category structure also helps strengthen internal topic
                coverage by connecting buyer-focused pages with the main
                supporting research content, including{" "}
                <Link href="/research-peptides-uk" className="font-semibold text-ink hover:text-accent">
                  research peptides UK
                </Link>
                ,{" "}
                <Link
                  href="/research-peptide-supplier-uk"
                  className="font-semibold text-ink hover:text-accent"
                >
                  research peptide supplier UK
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

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                What buyers usually look for when buying research peptides
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                In practice, buyers looking to buy research peptides in the UK
                are usually comparing category coverage, product availability,
                product-page clarity, and access to supporting information such
                as pack size, imagery, and documentation. A strong buying page
                should help users move from broad search intent into category
                pages and then into the most relevant product lines without
                confusion.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                This page supports that process by linking directly to the
                broader site structure rather than treating buying intent as a
                standalone topic. That means users can explore antioxidant
                compounds such as glutathione and vitamin C, hydration-related
                products such as hyaluronic acid blends, regeneration-led
                lines including collagen and PDRN, and selected metabolic
                content such as{" "}
                <Link
                  href="/retatrutide-research-peptide"
                  className="font-semibold text-ink hover:text-accent"
                >
                  retatrutide research peptide
                </Link>{" "}
                through a connected research pathway.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                It also gives the site a stronger commercial-intent entry point
                for search while still maintaining the correct research-only
                scientific context throughout.
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
                All products listed on this site are supplied strictly for
                laboratory and scientific research use only. They are not
                intended for human consumption, medical treatment, veterinary
                use, or clinical application. This research-only positioning is
                central to the way products, category pages, and supporting
                informational pages are presented across the site.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                The content on this page is intended to support laboratory
                navigation, category discovery, and scientific study. It is not
                presented as consumer or clinical guidance. Users looking to buy
                research peptides in the UK should therefore interpret this page
                as a structured route into the research catalogue rather than a
                general retail page.
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

              <Link
                href="/research-peptide-supplier-uk"
                className="surface-card p-5"
              >
                <div className="font-extrabold text-ink">Research peptide supplier UK</div>
                <p className="mt-2 text-sm text-muted">
                  Overview of peptide compound supply and research products.
                </p>
              </Link>

              <Link href="/buy-research-peptides-uk" className="surface-card p-5">
                <div className="font-extrabold text-ink">Buy research peptides UK</div>
                <p className="mt-2 text-sm text-muted">
                  Commercial-intent guide linking into the main peptide categories and product lines.
                </p>
              </Link>

              <Link
                href="/laboratory-peptide-compounds"
                className="surface-card p-5"
              >
                <div className="font-extrabold text-ink">Laboratory peptide compounds</div>
                <p className="mt-2 text-sm text-muted">
                  Broader overview of peptide compound types used in scientific research environments.
                </p>
              </Link>

              <Link href="/retatrutide-research-peptide" className="surface-card p-5">
                <div className="font-extrabold text-ink">Retatrutide research peptide</div>
                <p className="mt-2 text-sm text-muted">
                  Supporting guide for retatrutide research context and internal topic relevance.
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
                  Direct route to the Retatrutide 40mg product listing.
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
                  Return to the main site hub for products, categories, and research pages.
                </p>
              </Link>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Common questions about buying research peptides in the UK
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