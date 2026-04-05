import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Hydration Peptides | Hyaluronic Acid Research Compounds",
  description:
    "Explore hydration peptide compounds including hyaluronic acid laboratory products studied in controlled research environments investigating hydration behaviour, extracellular compatibility, and formulation stability.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/hydration-peptides",
  },
  openGraph: {
    title: "Hydration Peptides | Hyaluronic Acid Research Compounds",
    description:
      "Explore hydration peptide compounds including hyaluronic acid laboratory products studied in controlled research environments.",
    url: "https://www.peptideproducts.co.uk/hydration-peptides",
    siteName: "Peptide Products",
    images: [
      {
        url: "https://www.peptideproducts.co.uk/products/skinbooster-hyaluronic-acid-main.jpg",
        width: 1200,
        height: 900,
        alt: "Hydration peptide compounds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hydration Peptides | Hyaluronic Acid Research Compounds",
    description:
      "Explore hydration peptide compounds including hyaluronic acid laboratory research products.",
    images: ["https://www.peptideproducts.co.uk/products/skinbooster-hyaluronic-alt.jpg"],
  },
};

const productCards = [
  {
    title: "Skinbooster Hyaluronic Acid",
    copy: "Hyaluronic acid-based research compound studied in laboratory environments analysing hydration behaviour, extracellular compatibility, and formulation stability.",
    href: "/product/skinbooster-hyaluronic-acid",
  },
  {
    title: "Meso Lift & Firming",
    copy: "Firming-oriented peptide blend that can also support hydration-related formulation and compatibility research workflows.",
    href: "/product/meso-lift-firming",
  },
] as const;

const guideCards = [
  {
    title: "Hyaluronic acid peptide research",
    copy: "Learn more about hyaluronic acid laboratory research and hydration-focused compound investigation.",
    href: "/hyaluronic-acid-peptide-research",
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
    question: "What are hydration peptides?",
    answer:
      "Hydration peptides and related compounds are studied in laboratory environments investigating hydration behaviour, molecular compatibility, extracellular interaction, and formulation stability.",
  },
  {
    question: "Which compounds are included in this category?",
    answer:
      "This category includes hydration-focused compounds such as hyaluronic acid-based laboratory products and related supportive peptide blends.",
  },
  {
    question: "Are hydration peptide compounds intended for human use?",
    answer:
      "No. All products listed on this site are supplied strictly for laboratory and scientific research use only.",
  },
] as const;

export default function HydrationPeptidesPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Hydration Peptides",
    url: "https://www.peptideproducts.co.uk/hydration-peptides",
    description:
      "Hydration peptide compounds including hyaluronic acid laboratory research products.",
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
        name: "Hydration peptides",
        item: "https://www.peptideproducts.co.uk/hydration-peptides",
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
              Hydration peptides
            </h1>

            <div className="mt-8 max-w-3xl overflow-hidden rounded-xl3 border border-line bg-panel p-4 shadow-soft">
              <div className="relative h-[360px] w-full bg-panel">
                <Image
                  src="/products/skinbooster-hyaluronic-alt.jpg"
                  alt="Hydration peptide compounds"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <p className="mt-6 max-w-3xl text-sm leading-7 text-muted">
              Hydration peptides and related laboratory compounds are studied in
              controlled research environments investigating molecular hydration
              behaviour, extracellular interaction, and compatibility across
              formulation systems. Within scientific research settings, these
              compounds are often reviewed as part of broader studies focused on
              moisture retention, formulation structure, and peptide-system
              stability in controlled environments.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              Research laboratories frequently analyse hydration-focused
              compounds such as hyaluronic acid blends when examining stability,
              carrier behaviour, structural compatibility, and formulation
              performance under experimental conditions. This work often overlaps
              with wider{" "}
              <Link href="/research-peptides" className="font-semibold text-ink hover:text-accent">
                research peptides
              </Link>{" "}
              investigations, where hydration-related compounds are compared
              with structural, antioxidant, or regenerative lines.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              In laboratory use, hydration-focused compounds may be assessed for
              how they interact within support systems, how stable they remain
              under test conditions, and how effectively they fit within wider
              compatibility-focused research. This makes the category relevant to
              researchers exploring both standalone hydration studies and
              connected work involving{" "}
              <Link href="/firming-peptides" className="font-semibold text-ink hover:text-accent">
                firming peptides
              </Link>{" "}
              or{" "}
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
                Browse hydration compounds →
              </Link>
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Hydration compound research
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Hydration-related laboratory compounds are commonly examined in
                research environments investigating moisture retention systems,
                extracellular matrix compatibility, structural interaction, and
                compound stability. These research pathways may include
                controlled studies of hydration behaviour, support-system
                response, and peptide interaction under laboratory conditions.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                Hyaluronic acid-based products and related peptide blends may be
                analysed during formulation development, compatibility testing,
                and hydration-focused laboratory workflows. In many scientific
                settings, this work is connected with neighbouring categories
                such as{" "}
                <Link href="/antioxidant-peptides" className="font-semibold text-ink hover:text-accent">
                  antioxidant peptides
                </Link>{" "}
                and{" "}
                <Link href="/firming-peptides" className="font-semibold text-ink hover:text-accent">
                  firming peptides
                </Link>
                , especially where researchers are comparing behaviour across
                different compound types.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                Hydration-related peptide research can also involve analysis of
                texture support, formulation structure, and compound fit within
                wider study frameworks. These investigations are useful where
                laboratories need to understand how hydration-oriented compounds
                behave over time, under varied conditions, or alongside broader
                peptide systems used in scientific investigation.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Laboratory research applications of hydration peptides
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Laboratory research applications involving hydration peptides may
                include formulation behaviour testing, moisture-support studies,
                and controlled evaluation of extracellular compatibility across
                peptide systems. In these research settings, hydration-focused
                compounds are often reviewed for their interaction with support
                structures, carriers, and broader compatibility environments.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                A common area of investigation involves hyaluronic acid-based
                compounds such as{" "}
                <Link
                  href="/product/skinbooster-hyaluronic-acid"
                  className="font-semibold text-ink hover:text-accent"
                >
                  Skinbooster Hyaluronic Acid
                </Link>
                , where laboratories may examine hydration-related behaviour,
                matrix compatibility, and structural interaction within
                controlled studies. This type of work can also be reviewed
                alongside wider{" "}
                <Link
                  href="/laboratory-peptide-compounds"
                  className="font-semibold text-ink hover:text-accent"
                >
                  laboratory peptide compounds
                </Link>{" "}
                research to compare how hydration-supportive lines behave in
                relation to other compound classes.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                In many scientific workflows, hydration-focused compounds are
                not studied alone. Researchers may compare them with
                firming-oriented blends, structural peptide lines, or
                regeneration-focused compounds in order to understand how they
                behave across controlled formulation environments. This kind of
                comparison strengthens research quality and helps laboratories
                evaluate compound compatibility more effectively.
              </p>
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Peptide compatibility and formulation stability studies
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Peptide compatibility studies are central to hydration-related
                research. Laboratories may analyse how a hydration-focused blend
                behaves within different formulation systems, how stable it
                remains during controlled testing, and how it interacts with
                surrounding support matrices. This may involve reviewing
                moisture-related behaviour, formulation stability, and the
                consistency of compound performance under observation.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                Formulation stability work can also overlap with broader
                hydration-focused research topics explored through{" "}
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
<<<<<<< HEAD
                . Linking related pages in this way helps users move through relevant topic areas and compare closely related product categories more easily.
=======
                . Linking related pages in this way helps users move through
                relevant topic areas while strengthening site structure for
                search visibility.
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                In practical laboratory terms, stability research may involve
                assessing whether hydration-supportive compounds remain suitable
                for extended observation, whether their formulation systems stay
                consistent, and whether peptide behaviour remains compatible
                across different experimental set-ups. These are all important
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
                  Hydration research products
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-muted">
                  Explore hydration-focused laboratory compounds currently
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
                Hydration peptides form part of a broader peptide research
                structure that includes antioxidant, firming, and regenerative
                compound lines. For researchers comparing formulation
                behaviour, compatibility response, or controlled stability
                across multiple compound types, it is often useful to move
                between related categories rather than viewing hydration-focused
                lines alone. That is why this page also connects naturally to{" "}
                <Link href="/antioxidant-peptides" className="font-semibold text-ink hover:text-accent">
                  antioxidant peptides
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
                laboratory research areas quickly while supporting stronger site
                architecture for search engines. It reinforces that hydration
                compounds are part of a larger scientific catalogue including
                detailed product pages, category hubs, and broader informational
                guides focused on controlled investigation and research use.
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

              <Link href="/firming-peptides" className="surface-card p-5">
                <div className="font-extrabold text-ink">Firming peptides</div>
                <p className="mt-2 text-sm text-muted">
                  Review elasticity and structure-focused peptide compounds used
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
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Research use only and laboratory context
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                All hydration peptide compounds listed on this site are supplied
                strictly for laboratory and scientific research use only. They
                are not intended for human consumption, medical use, or personal
                application. This research-only positioning is central to the
                category and supports clear scientific context across the wider{" "}
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
<<<<<<< HEAD
                consumer use. This keeps the catalogue focused on
=======
                consumer use. This gives the site a clearer topical focus and
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
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
                Common questions about hydration peptides
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