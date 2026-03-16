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
        name: "Firming peptides",
        item: "https://www.peptideproducts.co.uk/firming-peptides",
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
              Firming peptides
            </h1>

            <div className="mt-8 max-w-3xl overflow-hidden rounded-xl3 border border-line bg-panel p-4 shadow-soft">
              <div className="relative h-[360px] w-full bg-panel">
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
              and formulation stability. In scientific settings, these compound
              categories are commonly reviewed as part of wider research
              programmes exploring peptide performance, carrier-system behaviour,
              and compatibility across formulation models.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              Research laboratories may analyse firming-focused peptide blends
              when examining structural protein interaction, supportive carrier
              systems, compound compatibility, and formulation performance under
              experimental conditions. These studies may overlap with broader{" "}
              <Link href="/research-peptides" className="font-semibold text-ink hover:text-accent">
                research peptides
              </Link>{" "}
              work, where hydration, antioxidant, and regenerative compound
              classes are also reviewed for comparison.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              Within laboratory research, firming-related compounds are often
              considered in connection with texture, elasticity support,
              structural stability, and peptide interaction under controlled
              test conditions. This makes the category relevant not only for
              isolated peptide studies, but also for broader formulation and
              compatibility workflows involving related lines such as{" "}
              <Link href="/hydration-peptides" className="font-semibold text-ink hover:text-accent">
                hydration peptides
              </Link>{" "}
              and{" "}
              <Link href="/regenerative-peptides" className="font-semibold text-ink hover:text-accent">
                regenerative peptides
              </Link>
              .
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

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Firming compound research
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Firming-related laboratory compounds are commonly examined in
                research environments investigating elasticity behaviour,
                structural interaction, peptide compatibility, and formulation
                support systems. These research pathways may include controlled
                observation of how peptide blends behave across test matrices,
                carrier environments, and structural modelling scenarios.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                Firming-focused peptide blends may be analysed during structural
                research, compatibility testing, formulation development, and
                peptide interaction studies under controlled experimental
                conditions. In many laboratory workflows, this type of work is
                not treated in isolation but instead alongside supportive
                categories such as{" "}
                <Link href="/antioxidant-peptides" className="font-semibold text-ink hover:text-accent">
                  antioxidant peptides
                </Link>{" "}
                and{" "}
                <Link href="/hydration-peptides" className="font-semibold text-ink hover:text-accent">
                  hydration-focused compounds
                </Link>
                .
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                This category is especially relevant in laboratory settings where
                researchers are comparing peptide blends for structural support
                behaviour, stability in solution, and formulation fit within
                controlled test systems. Researchers may also examine how
                elasticity-oriented compounds interact with broader peptide
                systems used in compatibility analysis and product development
                modelling.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Laboratory research applications of firming peptides
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Laboratory research applications involving firming peptides may
                include structural interaction studies, formulation behaviour
                testing, and controlled review of compatibility across peptide
                systems. In these settings, researchers are often interested in
                how peptide blends perform within broader compound frameworks,
                particularly where elasticity-related behaviour or support
                structure modelling is part of the research objective.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                Another common research area involves observing how
                firming-focused compounds behave alongside hydration-supportive
                or regenerative lines. For example, a laboratory may compare the
                structural behaviour of a firming blend against the formulation
                characteristics of{" "}
                <Link
                  href="/product/skinbooster-hyaluronic-acid"
                  className="font-semibold text-ink hover:text-accent"
                >
                  Skinbooster Hyaluronic Acid
                </Link>{" "}
                or review the category in relation to wider{" "}
                <Link
                  href="/laboratory-peptide-compounds"
                  className="font-semibold text-ink hover:text-accent"
                >
                  laboratory peptide compounds
                </Link>{" "}
                research.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                In many scientific workflows, these compounds are also used in
                comparison-led studies where researchers examine how specific
                peptide classes may differ in texture support, carrier fit,
                mixing behaviour, or stability within controlled environments.
                This type of comparative structure helps laboratories build a
                clearer understanding of compatibility and peptide-system
                interaction over time.
              </p>
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Peptide compatibility and formulation studies
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Peptide compatibility studies are a major part of
                firming-compound research. In these investigations, laboratories
                may analyse how an elasticity-focused blend behaves under
                different formulation conditions, how it interacts with
                supporting systems, and how stable it remains during controlled
                observation. This may include evaluation of peptide interaction,
                formulation stability, and support-system response.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                Formulation research can also overlap with hydration and
                structure-focused work, making it useful to examine related
                compound classes through pages such as{" "}
                <Link
                  href="/hyaluronic-acid-peptide-research"
                  className="font-semibold text-ink hover:text-accent"
                >
                  hyaluronic acid peptide research
                </Link>{" "}
                and{" "}
                <Link
                  href="/peptide-products"
                  className="font-semibold text-ink hover:text-accent"
                >
                  peptide products
                </Link>
                . These supporting pages strengthen topic relevance while
                helping users move across closely related areas of laboratory
                study.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                In practical terms, compatibility research may involve assessing
                whether a blend appears suitable for broader structural testing,
                whether formulation systems remain stable, and whether peptide
                behaviour remains consistent across experimental set-ups. These
                are all useful considerations in research-only environments
                focused on laboratory study and scientific investigation rather
                than human use.
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
                Firming peptides sit within a broader peptide research structure
                that includes hydration, antioxidant, and regenerative compound
                lines. For researchers comparing formulation behaviour or
                compound compatibility, it is often useful to move between
                related categories rather than viewing any one compound class in
                isolation. That is why this page also connects naturally to{" "}
                <Link href="/antioxidant-peptides" className="font-semibold text-ink hover:text-accent">
                  antioxidant peptides
                </Link>
                ,{" "}
                <Link href="/hydration-peptides" className="font-semibold text-ink hover:text-accent">
                  hydration peptides
                </Link>
                , and{" "}
                <Link href="/regenerative-peptides" className="font-semibold text-ink hover:text-accent">
                  regenerative peptides
                </Link>
                .
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                This type of internal topic structure helps users find relevant
                research areas quickly while also supporting stronger site
                architecture for search engines. It reinforces that firming
                blends are one part of a larger laboratory research catalogue
                that also includes targeted compound pages, category hubs, and
                broader informational guides focused on scientific study.
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
                  Review hydration-focused peptide compounds and related
                  formulation compatibility studies.
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
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Research use only and laboratory context
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                All firming peptide compounds listed on this site are supplied
                strictly for laboratory and scientific research use only. They
                are not intended for human consumption, medical use, or personal
                application. This research-only positioning is central to the
                way the category is presented and supports clear scientific
                context across the wider{" "}
                <Link href="/research-peptides-uk" className="font-semibold text-ink hover:text-accent">
                  research peptides UK
                </Link>{" "}
                section of the site.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                Maintaining this laboratory context is important both for users
                and for the structure of the catalogue itself. Product pages,
                guides, and related category content are designed to support
                scientific review, controlled investigation, and research
                navigation rather than general retail use. This gives the site a
                clear topical focus and ensures that all content remains aligned
                with laboratory study and scientific investigation.
              </p>
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

      <Footer />
    </div>
  );
}