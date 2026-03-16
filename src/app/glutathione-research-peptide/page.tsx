import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Glutathione Research Peptide | Antioxidant Laboratory Compound Research",
  description:
    "Glutathione research peptide overview covering antioxidant laboratory compound research, oxidative stress investigation, compatibility studies, and related peptide product pages.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/glutathione-research-peptide",
  },
  openGraph: {
    title: "Glutathione Research Peptide | Antioxidant Laboratory Compound Research",
    description:
      "Glutathione research peptide overview covering antioxidant laboratory compound research and related peptide product pages.",
    url: "https://www.peptideproducts.co.uk/glutathione-research-peptide",
    siteName: "Peptide Products",
    images: [
      {
        url: "https://www.peptideproducts.co.uk/products/meso-glutathione-main.jpg",
        width: 1200,
        height: 900,
        alt: "Glutathione research peptide compound",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glutathione Research Peptide | Antioxidant Laboratory Compound Research",
    description:
      "Glutathione research peptide overview covering antioxidant laboratory compound research and oxidative stress investigation.",
    images: ["https://www.peptideproducts.co.uk/products/meso-glutathione-main.jpg"],
  },
};

const faqItems = [
  {
    question: "What is glutathione research peptide content focused on?",
    answer:
      "Glutathione research peptide content focuses on laboratory investigation of antioxidant behaviour, oxidative stress pathways, compound compatibility, and controlled biochemical study.",
  },
  {
    question: "Is glutathione supplied for human use?",
    answer:
      "No. All products listed on this site are supplied strictly for laboratory and scientific research use only.",
  },
  {
    question: "Which related compounds are commonly studied alongside glutathione?",
    answer:
      "Glutathione-related research may also involve vitamin C, antioxidant peptide lines, and wider laboratory peptide compound categories used in controlled scientific study.",
  },
] as const;

export default function Page() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Glutathione Research Peptide",
    url: "https://www.peptideproducts.co.uk/glutathione-research-peptide",
    description:
      "Glutathione research peptide overview covering antioxidant laboratory compound research, oxidative stress investigation, and related peptide product pages.",
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
        name: "Glutathione research peptide",
        item: "https://www.peptideproducts.co.uk/glutathione-research-peptide",
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
              Glutathione research peptide
            </h1>

            <div className="mt-8 max-w-3xl overflow-hidden rounded-xl3 border border-line bg-panel p-4 shadow-soft">
              <div className="relative h-[360px] w-full bg-panel">
                <Image
                  src="/products/meso-glutathione-main.jpg"
                  alt="Glutathione research peptide compound"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              Glutathione compounds are studied in laboratory environments
              investigating antioxidant behaviour, oxidative stress responses,
              and cellular protection mechanisms. Within controlled scientific
              settings, these compounds may be analysed as part of broader work
              focused on molecular defence pathways, compatibility behaviour,
              and biochemical response under observation.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              Researchers analyse glutathione peptide compounds to better
              understand molecular defence pathways and biochemical stability in
              controlled experimental settings. This type of research may also
              overlap with wider{" "}
              <Link href="/antioxidant-peptides" className="font-semibold text-ink hover:text-accent">
                antioxidant peptides
              </Link>{" "}
              investigation, especially where laboratories are comparing
              antioxidant-related lines across structured environments.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              In peptide research environments, glutathione compounds are often
              evaluated alongside vitamin C and other antioxidant-related
              laboratory compounds used to investigate oxidative balance and
              cellular response pathways. This makes glutathione a useful topic
              within the wider{" "}
              <Link href="/research-peptides" className="font-semibold text-ink hover:text-accent">
                research peptides
              </Link>{" "}
              structure of the site.
            </p>

            <div className="mt-8">
              <Link
                href="/product/meso-glutathione"
                className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white"
              >
                View glutathione research compound →
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
                Antioxidant peptide compounds are frequently examined in
                laboratory research focusing on oxidative stress behaviour,
                molecular stability, and biochemical defence mechanisms. In
                controlled settings, this may involve observing how compounds
                behave within structured test systems and how they fit within
                broader antioxidant-related research models.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                Glutathione research may involve analysing compound interaction
                within cellular environments, antioxidant signalling pathways,
                and compatibility alongside other antioxidant compounds such as
                vitamin C. Researchers may also compare glutathione against
                compounds found in adjacent categories including{" "}
                <Link href="/hydration-peptides" className="font-semibold text-ink hover:text-accent">
                  hydration peptides
                </Link>{" "}
                and{" "}
                <Link href="/regenerative-peptides" className="font-semibold text-ink hover:text-accent">
                  regenerative peptides
                </Link>
                .
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                This type of laboratory investigation helps establish a broader
                understanding of compound behaviour, compatibility, and
                stability. It also supports stronger topical coverage for the
                site by connecting glutathione-related content with wider
                peptide-system research and scientific study.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Laboratory research applications of glutathione compounds
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Laboratory research applications involving glutathione compounds
                may include oxidative stress pathway studies, antioxidant
                compatibility analysis, and controlled observation of molecular
                defence behaviour. These scientific settings often focus on how
                a compound responds under test conditions and how it behaves in
                relation to wider biochemical or peptide-based systems.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                A common area of interest involves research surrounding{" "}
                <Link
                  href="/product/meso-glutathione"
                  className="font-semibold text-ink hover:text-accent"
                >
                  Meso Glutathione
                </Link>{" "}
                and its relationship to other antioxidant-related compounds such
                as{" "}
                <Link
                  href="/product/meso-vitamin-c"
                  className="font-semibold text-ink hover:text-accent"
                >
                  Meso Vitamin C
                </Link>
                . These linked product pages help users move directly from
                informational content into the related laboratory product
                catalogue.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                In many scientific workflows, glutathione-related research is
                not isolated from the rest of the laboratory environment.
                Instead, it is commonly reviewed as part of broader{" "}
                <Link
                  href="/laboratory-peptide-compounds"
                  className="font-semibold text-ink hover:text-accent"
                >
                  laboratory peptide compounds
                </Link>{" "}
                investigation, where antioxidant lines are compared with other
                compound classes under controlled research conditions.
              </p>
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Related antioxidant and peptide research areas
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Glutathione research sits within a broader antioxidant and
                peptide research structure. Researchers often move between pages
                covering antioxidant compounds, wider peptide categories, and
                product-level information in order to compare compound context,
                research relevance, and compatibility across multiple lines.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                For that reason, this page naturally connects to{" "}
                <Link href="/antioxidant-peptides" className="font-semibold text-ink hover:text-accent">
                  antioxidant peptides
                </Link>
                ,{" "}
                <Link href="/research-peptides-uk" className="font-semibold text-ink hover:text-accent">
                  research peptides UK
                </Link>
                , and{" "}
                <Link href="/peptide-products" className="font-semibold text-ink hover:text-accent">
                  peptide products
                </Link>
                . This improves user navigation while also strengthening
                internal site structure for search engines.
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
                <div className="text-sm font-extrabold text-ink">
                  Research peptides
                </div>
                <p className="mt-2 text-sm text-muted">
                  Core overview of peptide and compound research categories.
                </p>
              </Link>

              <Link href="/research-peptides-uk" className="surface-card p-5">
                <div className="text-sm font-extrabold text-ink">
                  Research peptides UK
                </div>
                <p className="mt-2 text-sm text-muted">
                  UK-focused overview of peptide compounds and laboratory study.
                </p>
              </Link>

              <Link href="/product/meso-glutathione" className="surface-card p-5">
                <div className="text-sm font-extrabold text-ink">
                  Meso Glutathione
                </div>
                <p className="mt-2 text-sm text-muted">
                  View the related glutathione research compound product page.
                </p>
              </Link>

              <Link href="/product/meso-vitamin-c" className="surface-card p-5">
                <div className="text-sm font-extrabold text-ink">
                  Meso Vitamin C
                </div>
                <p className="mt-2 text-sm text-muted">
                  Explore a related antioxidant compound line.
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
                Buyer-intent overview page linking into the main peptide categories.
              </p>
            </Link>

            <Link href="/laboratory-peptide-compounds" className="surface-card p-5">
              <div className="font-extrabold text-ink">Laboratory peptide compounds</div>
              <p className="mt-2 text-sm text-muted">
                Explore compound types used in controlled scientific and formulation study.
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
              Common questions about glutathione research peptide content
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