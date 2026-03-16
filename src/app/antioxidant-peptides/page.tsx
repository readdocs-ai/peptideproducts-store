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

            <div className="mt-8 max-w-3xl overflow-hidden rounded-xl3 border border-line bg-panel p-4 shadow-soft">
              <div className="relative h-[360px] w-full bg-panel">
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
              Antioxidant peptides and related laboratory compounds are studied
              in controlled environments investigating oxidative stress
              response, molecular defence pathways, and cellular protection
              mechanisms. Within scientific research settings, these compound
              categories are often reviewed in programmes focused on biochemical
              interaction, compatibility, and structured observation of
              antioxidant-related behaviour across controlled laboratory models.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              Research laboratories frequently analyse antioxidant compounds
              such as glutathione and vitamin C blends when examining
              biochemical stability, molecular signalling behaviour, and
              antioxidant activity under experimental conditions. This type of
              work commonly overlaps with broader{" "}
              <Link href="/research-peptides" className="font-semibold text-ink hover:text-accent">
                research peptides
              </Link>{" "}
              investigation, where antioxidant-focused compounds may be
              considered alongside hydration, firming, and regenerative lines.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              In laboratory use, antioxidant-focused compounds may be assessed
              for their behaviour in solution, their interaction with
              surrounding systems, and their fit within structured compatibility
              studies. This makes the category relevant to researchers
              investigating oxidative stress pathways, protective molecular
              behaviour, and the role of antioxidant compounds in wider
              peptide-based laboratory research.
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

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Antioxidant compound research
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Antioxidant research compounds are commonly studied in
                laboratory environments examining oxidative stress mechanisms,
                molecular defence systems, and biochemical interaction within
                controlled experimental conditions. These investigations may
                include monitoring how compounds behave under test conditions,
                how they interact with broader systems, and how they fit within
                antioxidant-related research frameworks.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                Compounds such as glutathione peptides and vitamin C blends may
                be analysed during formulation development, compatibility
                testing, and antioxidant response research workflows. In many
                settings, this work is connected to neighbouring categories
                such as{" "}
                <Link href="/hydration-peptides" className="font-semibold text-ink hover:text-accent">
                  hydration peptides
                </Link>{" "}
                and{" "}
                <Link href="/regenerative-peptides" className="font-semibold text-ink hover:text-accent">
                  regenerative peptides
                </Link>
                , especially where researchers are comparing compound behaviour
                across different lines.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                Antioxidant-focused peptide research can also involve reviewing
                compatibility, carrier support, stability in solution, and the
                performance of compounds within controlled biochemical models.
                These studies are useful where laboratories need to understand
                how antioxidant compounds behave over time, under varying test
                conditions, or within wider peptide-system investigations.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Laboratory research applications of antioxidant peptides
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Laboratory research applications involving antioxidant peptides
                may include oxidative stress pathway studies, controlled
                observation of molecular defence behaviour, and compatibility
                analysis across wider peptide systems. In these scientific
                settings, researchers are often interested in how antioxidant
                compounds behave under controlled conditions and how they fit
                within broader formulation and laboratory workflows.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                A common area of investigation involves compounds such as{" "}
                <Link
                  href="/product/meso-glutathione"
                  className="font-semibold text-ink hover:text-accent"
                >
                  Meso Glutathione
                </Link>{" "}
                and{" "}
                <Link
                  href="/product/meso-vitamin-c"
                  className="font-semibold text-ink hover:text-accent"
                >
                  Meso Vitamin C
                </Link>
                , where laboratories may examine antioxidant-related behaviour,
                response within controlled environments, and fit within
                compatibility-focused studies. This work may also be considered
                alongside wider{" "}
                <Link
                  href="/laboratory-peptide-compounds"
                  className="font-semibold text-ink hover:text-accent"
                >
                  laboratory peptide compounds
                </Link>{" "}
                research to compare how antioxidant lines perform relative to
                other categories.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                In many scientific workflows, antioxidant compounds are not
                treated in isolation. Researchers may compare them against
                hydration-focused, structural, or regeneration-related blends to
                understand how they differ across biochemical modelling,
                support-system interaction, and controlled laboratory
                investigation. This type of comparative work helps strengthen
                research quality and improves understanding of compound
                behaviour.
              </p>
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Compatibility, stability, and oxidative stress studies
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Compatibility studies are central to antioxidant-related
                research. Laboratories may examine how an antioxidant-focused
                compound behaves under different formulation conditions, how
                stable it remains during observation, and how it interacts with
                surrounding support systems. This type of research may include
                oxidative stress modelling, molecular response comparison, and
                review of solution behaviour under controlled test settings.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                Stability work can also overlap with broader antioxidant-related
                research topics explored through{" "}
                <Link
                  href="/glutathione-research-peptide"
                  className="font-semibold text-ink hover:text-accent"
                >
                  glutathione research peptide
                </Link>{" "}
                and{" "}
                <Link
                  href="/peptide-products"
                  className="font-semibold text-ink hover:text-accent"
                >
                  peptide products
                </Link>
                . Linking into these related pages helps users move through
                connected topic areas while also strengthening internal site
                structure for search visibility.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                In practical laboratory terms, antioxidant research may involve
                observing how compounds perform over time, whether they remain
                stable across controlled environments, and how their behaviour
                compares with related peptide lines. These are all important
                considerations in research-only environments focused on
                scientific investigation rather than human use.
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
                  className="surface-card p-5"
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

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Related research peptide categories
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Antioxidant peptides form part of a broader peptide research
                structure that includes hydration, firming, and regenerative
                compound lines. For researchers comparing oxidative stress
                response, compatibility behaviour, or laboratory performance
                across multiple compound types, it is often useful to move
                between related categories rather than viewing antioxidant lines
                alone. That is why this page also connects naturally to{" "}
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

              <p className="mt-4 text-sm leading-7 text-muted">
                This type of internal topic structure helps users find relevant
                laboratory research areas quickly while also supporting stronger
                site architecture for search engines. It reinforces that
                antioxidant compounds are part of a wider scientific catalogue
                including detailed product pages, category hubs, and broader
                informational guides focused on controlled investigation and
                research use.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {guideCards.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="surface-card p-5"
                >
                  <div className="font-extrabold text-ink">{item.title}</div>
                  <p className="mt-2 text-sm text-muted">{item.copy}</p>
                </Link>
              ))}

              <Link href="/hydration-peptides" className="surface-card p-5">
                <div className="font-extrabold text-ink">Hydration peptides</div>
                <p className="mt-2 text-sm text-muted">
                  Explore hydration-focused compounds including hyaluronic
                  acid-based laboratory research lines.
                </p>
              </Link>

              <Link href="/firming-peptides" className="surface-card p-5">
                <div className="font-extrabold text-ink">Firming peptides</div>
                <p className="mt-2 text-sm text-muted">
                  Review structure and elasticity-focused peptide compounds used
                  in compatibility and formulation studies.
                </p>
              </Link>

              <Link href="/regenerative-peptides" className="surface-card p-5">
                <div className="font-extrabold text-ink">Regenerative peptides</div>
                <p className="mt-2 text-sm text-muted">
                  Browse regeneration-focused lines including collagen and PDRN
                  laboratory research compounds.
                </p>
              </Link>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="rounded-xl3 border border-line bg-panel p-6">
              <h2 className="text-xl font-extrabold">Research peptide guides</h2>

              <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold">
                <Link href="/research-peptides">Research peptides</Link>
                <Link href="/research-peptides-uk">Research peptides UK</Link>
                <Link href="/research-peptide-supplier-uk">
                  Research peptide supplier UK
                </Link>
                <Link href="/laboratory-peptide-compounds">
                  Laboratory peptide compounds
                </Link>
                <Link href="/buy-research-peptides-uk">
                  Buy research peptides UK
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Research use only and laboratory context
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                All antioxidant peptide compounds listed on this site are
                supplied strictly for laboratory and scientific research use
                only. They are not intended for human consumption, medical use,
                or personal application. This research-only positioning is
                central to the category and supports clear scientific context
                across the wider{" "}
                <Link href="/research-peptides-uk" className="font-semibold text-ink hover:text-accent">
                  research peptides UK
                </Link>{" "}
                section of the site.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                Maintaining this laboratory context is important for both users
                and search structure. Product pages, guides, and category
                content are designed to support scientific review, controlled
                investigation, and research navigation rather than general
                consumer use. This gives the site a clearer topical focus and
                helps keep all content aligned with laboratory study and
                scientific investigation.
              </p>
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