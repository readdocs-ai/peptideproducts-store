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
        name: "Regenerative peptides",
        item: "https://www.peptideproducts.co.uk/regenerative-peptides",
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
              Regenerative peptides
            </h1>

            <div className="mt-8 max-w-3xl overflow-hidden rounded-xl3 border border-line bg-panel p-4 shadow-soft">
              <div className="relative h-[360px] w-full bg-panel">
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
              Regenerative peptides and related laboratory compounds are studied
              in controlled scientific environments investigating repair
              pathways, cellular response models, extracellular compatibility,
              and regeneration-related biochemical behaviour. Within scientific
              research settings, these compounds may be reviewed as part of
              broader programmes focused on recovery models, structural support,
              and compatibility within controlled formulation systems.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              Within this category, compounds such as PDRN and collagen-focused
              blends are often reviewed in formulation research, stability
              analysis, and regeneration-oriented laboratory workflows. This
              work may overlap with wider{" "}
              <Link href="/research-peptides" className="font-semibold text-ink hover:text-accent">
                research peptides
              </Link>{" "}
              investigation, where regenerative compounds are compared with
              antioxidant, hydration, and structural lines across controlled
              research environments.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              In laboratory use, regenerative-focused compounds may be assessed
              for their behaviour within support systems, their compatibility
              across formulation models, and their role in regeneration-related
              observation under controlled conditions. This makes the category
              relevant to researchers exploring not only regeneration pathways
              but also how compound classes behave in relation to{" "}
              <Link href="/hydration-peptides" className="font-semibold text-ink hover:text-accent">
                hydration peptides
              </Link>{" "}
              and{" "}
              <Link href="/firming-peptides" className="font-semibold text-ink hover:text-accent">
                firming peptides
              </Link>
              .
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

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Regeneration-focused laboratory compounds
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Regeneration-focused compounds are commonly examined in
                laboratory environments where researchers investigate molecular
                response, structural compatibility, tissue-related modelling,
                and formulation behaviour under controlled experimental
                conditions. These studies may include observation of compound
                response within support systems, how stable compounds remain in
                solution, and how they behave as part of broader peptide-system
                research.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                Depending on the compound type, research may focus on
                PDRN-related pathways, collagen-associated compatibility,
                supportive carrier systems, and interactions relevant to repair
                and regeneration studies. In many laboratory settings, this work
                is connected to neighbouring categories such as{" "}
                <Link href="/antioxidant-peptides" className="font-semibold text-ink hover:text-accent">
                  antioxidant peptides
                </Link>{" "}
                and{" "}
                <Link href="/hydration-peptides" className="font-semibold text-ink hover:text-accent">
                  hydration peptides
                </Link>
                , particularly where researchers compare performance across
                multiple compound classes.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                Regeneration-related peptide research can also involve analysing
                support structure behaviour, formulation compatibility, and the
                fit of compounds within controlled laboratory models. These
                investigations are useful where scientific teams need to
                understand how regenerative compounds behave over time, under
                varied test conditions, or in relation to wider peptide-system
                research.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Laboratory research applications of regenerative peptides
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Laboratory research applications involving regenerative peptides
                may include repair-pathway studies, compatibility analysis
                across peptide systems, and controlled observation of
                regeneration-related behaviour within formulation models. In
                these settings, researchers are often interested in how
                regeneration-focused compounds behave within support structures
                and how they compare with adjacent peptide categories under
                laboratory conditions.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                A common area of investigation involves compounds such as{" "}
                <Link
                  href="/product/meso-pdrn"
                  className="font-semibold text-ink hover:text-accent"
                >
                  Meso PDRN
                </Link>{" "}
                and{" "}
                <Link
                  href="/product/meso-collagen"
                  className="font-semibold text-ink hover:text-accent"
                >
                  Meso Collagen Skin Booster
                </Link>
                , where laboratories may examine regeneration-related behaviour,
                compatibility across support systems, and fit within structured
                formulation studies. This work may also be considered alongside
                broader{" "}
                <Link
                  href="/laboratory-peptide-compounds"
                  className="font-semibold text-ink hover:text-accent"
                >
                  laboratory peptide compounds
                </Link>{" "}
                research to compare how regenerative lines behave relative to
                other compound types.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                In many scientific workflows, regeneration-focused compounds are
                not studied in isolation. Researchers may compare them with
                hydration-supportive, structural, or antioxidant lines to
                understand how behaviour differs across biochemical modelling,
                formulation compatibility, and controlled observation. This
                comparison-led approach helps improve research quality and
                supports stronger understanding of compound performance.
              </p>
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Compatibility, formulation, and regeneration pathway studies
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Compatibility studies are central to regenerative peptide
                research. Laboratories may assess how regeneration-focused
                compounds behave under different formulation conditions, how
                stable they remain during observation, and how they interact
                with surrounding support systems. This type of work may include
                pathway comparison, controlled formulation analysis, and review
                of compound stability within structured research environments.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                Formulation and compatibility work can also overlap with broader
                regenerative topics explored through{" "}
                <Link
                  href="/pdrn-research-peptide"
                  className="font-semibold text-ink hover:text-accent"
                >
                  PDRN research peptide
                </Link>{" "}
                and{" "}
                <Link
                  href="/peptide-products"
                  className="font-semibold text-ink hover:text-accent"
                >
                  peptide products
                </Link>
                . Linking to related pages in this way helps users move through
                connected topic areas and compare related regenerative product categories more easily.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                In practical laboratory terms, regenerative research may involve
                monitoring whether compounds remain stable over time, whether
                their support systems stay consistent, and how their behaviour
                compares across different experimental settings. These are all
                useful considerations in research-only environments focused on
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
                  Related regenerative products
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-muted">
                  Explore regeneration-focused laboratory compounds currently
                  listed in this category.
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
                Regenerative peptides form part of a broader peptide research
                structure that includes antioxidant, hydration, and firming
                compound lines. For researchers comparing regeneration-related
                behaviour, compatibility response, or laboratory performance
                across multiple compound types, it is often useful to move
                between related categories rather than viewing regenerative
                lines alone. That is why this page also connects naturally to{" "}
                <Link href="/antioxidant-peptides" className="font-semibold text-ink hover:text-accent">
                  antioxidant peptides
                </Link>
                ,{" "}
                <Link href="/hydration-peptides" className="font-semibold text-ink hover:text-accent">
                  hydration peptides
                </Link>
                , and{" "}
                <Link href="/firming-peptides" className="font-semibold text-ink hover:text-accent">
                  firming peptides
                </Link>
                .
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                This type of internal topic structure helps users find relevant
                laboratory research areas more quickly while also supporting
                stronger the wider peptide and laboratory compound catalogue. It reinforces
                that regenerative compounds are part of a larger scientific
                catalogue that includes detailed product pages, category hubs,
                and wider informational guides focused on controlled
                investigation and research use.
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

              <Link href="/antioxidant-peptides" className="surface-card p-5">
                <div className="font-extrabold text-ink">Antioxidant peptides</div>
                <p className="mt-2 text-sm text-muted">
                  Explore glutathione and vitamin C laboratory compounds studied
                  in antioxidant-related research environments.
                </p>
              </Link>

              <Link href="/hydration-peptides" className="surface-card p-5">
                <div className="font-extrabold text-ink">Hydration peptides</div>
                <p className="mt-2 text-sm text-muted">
                  Review hydration-focused compounds including hyaluronic
                  acid-based laboratory research lines.
                </p>
              </Link>

              <Link href="/firming-peptides" className="surface-card p-5">
                <div className="font-extrabold text-ink">Firming peptides</div>
                <p className="mt-2 text-sm text-muted">
                  Explore elasticity and structure-focused peptide compounds
                  used in compatibility and formulation studies.
                </p>
              </Link>
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
                All regenerative peptide compounds listed on this site are
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
                consumer use. This keeps the catalogue focused on
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
                Common questions about regenerative peptides
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