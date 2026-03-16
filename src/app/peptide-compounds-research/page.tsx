import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Peptide Compounds Research | Laboratory Peptide Study Overview",
  description:
    "Explore peptide compounds research including antioxidant, hydration, firming, and regenerative laboratory compounds used in controlled scientific study environments.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/peptide-compounds-research",
  },
  openGraph: {
    title: "Peptide Compounds Research | Laboratory Peptide Study Overview",
    description:
      "Explore peptide compounds research including antioxidant, hydration, firming, and regenerative laboratory compounds used in controlled scientific study environments.",
    url: "https://www.peptideproducts.co.uk/peptide-compounds-research",
    siteName: "Peptide Products",
    images: [
      {
        url: "https://www.peptideproducts.co.uk/products/meso-glutathione-main.jpg",
        width: 1200,
        height: 900,
        alt: "Peptide compounds research laboratory overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peptide Compounds Research | Laboratory Peptide Study Overview",
    description:
      "Explore peptide compounds research including antioxidant, hydration, firming, and regenerative laboratory compounds used in controlled scientific study environments.",
    images: ["https://www.peptideproducts.co.uk/products/meso-glutathione-main.jpg"],
  },
};

const categoryCards = [
  {
    title: "Antioxidant peptides",
    copy: "Glutathione and vitamin C laboratory compounds studied in oxidative stress and antioxidant-focused research environments.",
    href: "/antioxidant-peptides",
  },
  {
    title: "Hydration peptides",
    copy: "Hyaluronic acid and hydration-related compounds used in extracellular matrix and compatibility-focused study.",
    href: "/hydration-peptides",
  },
  {
    title: "Firming peptides",
    copy: "Elasticity and structure-focused peptide blends reviewed in formulation, compatibility, and structural research.",
    href: "/firming-peptides",
  },
  {
    title: "Regenerative peptides",
    copy: "PDRN and collagen-focused compound lines studied in regeneration and repair-related laboratory workflows.",
    href: "/regenerative-peptides",
  },
] as const;

const faqItems = [
  {
    question: "What does peptide compounds research refer to?",
    answer:
      "Peptide compounds research refers to controlled laboratory study involving peptide-based or related compounds examined for molecular interaction, formulation behaviour, compatibility, and scientific investigation.",
  },
  {
    question: "Which categories are included in peptide compounds research?",
    answer:
      "This area includes antioxidant, hydration, firming, and regenerative research compound categories, along with related product pages and supporting guides.",
  },
  {
    question: "Are these peptide compounds supplied for human use?",
    answer:
      "No. All products listed on this site are supplied strictly for laboratory and scientific research use only.",
  },
] as const;

export default function Page() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Peptide Compounds Research",
    url: "https://www.peptideproducts.co.uk/peptide-compounds-research",
    description:
      "Explore peptide compounds research including antioxidant, hydration, firming, and regenerative laboratory compounds used in controlled scientific study environments.",
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
        name: "Peptide compounds research",
        item: "https://www.peptideproducts.co.uk/peptide-compounds-research",
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
              Peptide compounds research
            </h1>

            <div className="mt-8 max-w-3xl overflow-hidden rounded-xl3 border border-line bg-panel p-4 shadow-soft">
              <div className="relative h-[360px] w-full bg-panel">
                <Image
                  src="/products/meso-glutathione-main.jpg"
                  alt="Peptide compounds research laboratory overview"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <p className="mt-6 max-w-3xl text-sm leading-7 text-muted">
              Peptide compounds research covers a broad range of laboratory study
              areas where compounds are examined for molecular interaction,
              compatibility, formulation behaviour, and controlled biochemical
              response. In scientific environments, these compounds may be
              reviewed across multiple categories depending on the type of
              research being carried out.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              Common pathways within peptide compounds research include
              antioxidant-related investigation, hydration-focused matrix
              compatibility, firming and structure-oriented formulation work,
              and regeneration-led compound study. These topic areas connect
              closely with the wider{" "}
              <Link href="/research-peptides" className="font-semibold text-ink hover:text-accent">
                research peptides
              </Link>{" "}
              structure of the site.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              This page is designed to act as a broad informational guide that
              links users into the main research categories and related support
              pages, helping both laboratory buyers and search engines
              understand the wider topic cluster around peptide compounds.
            </p>

            <div className="mt-8">
              <Link
                href="/research-peptides"
                className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white"
              >
                Explore research peptide categories →
              </Link>
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Main categories in peptide compounds research
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Peptide compounds research is usually organised by the type of
                compound behaviour or laboratory objective being investigated.
                Some categories focus on oxidative stress and antioxidant
                pathways, some on hydration and extracellular compatibility,
                others on firmness and structure-related formulation studies,
                and others on regeneration-focused compound lines.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                On this site, these areas are structured into{" "}
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
                . This gives users a clearer route into the most relevant
                category before moving to individual product pages.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {categoryCards.map((item) => (
                <Link key={item.title} href={item.href} className="surface-card p-5">
                  <div className="font-extrabold text-ink">{item.title}</div>
                  <p className="mt-2 text-sm text-muted">{item.copy}</p>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                How peptide compounds are studied in laboratory environments
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                In laboratory settings, peptide compounds may be studied through
                compatibility testing, analytical modelling, biochemical
                comparison, and formulation review. Researchers may look at how
                compounds behave under controlled conditions, how they interact
                with support systems, and how different categories compare in
                terms of stability and response.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                Depending on the category, this can involve compound pages such
                as{" "}
                <Link href="/product/meso-glutathione" className="font-semibold text-ink hover:text-accent">
                  Meso Glutathione
                </Link>
                ,{" "}
                <Link
                  href="/product/skinbooster-hyaluronic-acid"
                  className="font-semibold text-ink hover:text-accent"
                >
                  Skinbooster Hyaluronic Acid
                </Link>
                ,{" "}
                <Link href="/product/meso-lift-firming" className="font-semibold text-ink hover:text-accent">
                  Meso Lift &amp; Firming
                </Link>
                , and{" "}
                <Link href="/product/meso-pdrn" className="font-semibold text-ink hover:text-accent">
                  Meso PDRN
                </Link>
                . Linking product and research content in this way helps
                strengthen both user navigation and topical authority.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                Related support pages such as{" "}
                <Link
                  href="/laboratory-peptide-compounds"
                  className="font-semibold text-ink hover:text-accent"
                >
                  laboratory peptide compounds
                </Link>
                ,{" "}
                <Link href="/research-peptides-uk" className="font-semibold text-ink hover:text-accent">
                  research peptides UK
                </Link>
                , and{" "}
                <Link
                  href="/research-peptide-supplier-uk"
                  className="font-semibold text-ink hover:text-accent"
                >
                  research peptide supplier UK
                </Link>{" "}
                also help place this page within the wider site structure.
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
                All peptide compounds listed on this site are supplied strictly
                for laboratory and scientific research use only. They are not
                intended for human consumption, medical treatment, veterinary
                use, or clinical application.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                The content on this page is intended to support laboratory
                navigation, category discovery, and scientific study. It is not
                presented as consumer or clinical guidance, and should be read
                in the context of controlled research environments only.
              </p>

              <Link
                href="/shop"
                className="mt-6 inline-block rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white"
              >
                Browse research products
              </Link>
            </div>
          </Container>
        </section>

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
                  Commercial-intent guide linking into the main peptide categories and product lines.
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
                Common questions about peptide compounds research
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