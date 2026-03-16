import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Research Peptides | Laboratory Compounds for Scientific Study",
  description:
    "Explore research peptides and laboratory compounds for scientific study. Browse antioxidant, hydration, firming, and regenerative product lines at Peptide Products.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/research-peptides",
  },
  openGraph: {
    title: "Research Peptides | Laboratory Compounds for Scientific Study",
    description:
      "Research peptides and laboratory compounds for laboratory and scientific study, including antioxidant, hydration, firming, and regenerative product lines.",
    url: "https://www.peptideproducts.co.uk/research-peptides",
    siteName: "Peptide Products",
    images: [
      {
        url: "https://www.peptideproducts.co.uk/products/meso-vitamin-c-main.jpg",
        width: 1200,
        height: 900,
        alt: "Research peptides and laboratory compounds by Peptide Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Peptides | Laboratory Compounds for Scientific Study",
    description:
      "Research peptides and laboratory compounds for scientific study, including antioxidant, hydration, firming, and regenerative product lines.",
    images: ["https://www.peptideproducts.co.uk/products/meso-vitamin-c-benefits.jpg"],
  },
};

const featureCards = [
  {
    title: "Antioxidant research lines",
    copy: "Glutathione and vitamin C compounds are widely studied in antioxidant, oxidative stress, and formulation-focused laboratory work.",
    image: "/products/meso-glutathione-alt.jpg",
    href: "/antioxidant-peptides",
  },
  {
    title: "Hydration and carrier blends",
    copy: "Hyaluronic acid-based blends are commonly reviewed in hydration, carrier compatibility, and formulation research environments.",
    image: "/products/skinbooster-hyaluronic-alt.jpg",
    href: "/hydration-peptides",
  },
  {
    title: "Firming peptide compounds",
    copy: "Firming and elasticity-focused peptide blends are used in analytical, structural, and formulation-led laboratory research.",
    image: "/products/meso-lift-firming-alt.jpg",
    href: "/firming-peptides",
  },
] as const;

const spotlightCards = [
  {
    title: "Regenerative product lines",
    copy: "PDRN-based compounds are often studied in repair, regeneration, and compatibility-focused research workflows.",
    image: "/products/meso-pdrn-alt.jpg",
    href: "/regenerative-peptides",
  },
  {
    title: "Collagen-led booster blends",
    copy: "Collagen-oriented compounds can be reviewed in regeneration, protein compatibility, and supportive formulation studies.",
    image: "/products/meso-collagen-alt.jpg",
    href: "/product/meso-collagen",
  },
  {
    title: "Vitamin C compound lines",
    copy: "Vitamin C-focused compounds are commonly included in antioxidant, brightening, and formulation-related laboratory research.",
    image: "/products/meso-vitamin-c-benefits.jpg",
    href: "/product/meso-vitamin-c",
  },
] as const;

const faqItems = [
  {
    question: "What are research peptides?",
    answer:
      "Research peptides are peptide-based or related laboratory compounds supplied for analytical, investigative, and scientific study settings.",
  },
  {
    question: "Are these products intended for human use?",
    answer:
      "No. Products listed by Peptide Products are supplied strictly for laboratory and scientific research use only.",
  },
  {
    question: "Which types of compounds are included on this page?",
    answer:
      "This page covers antioxidant, hydration, firming, regenerative, collagen-led, PDRN-based, and vitamin C-focused research compounds.",
  },
] as const;

export default function ResearchPeptidesPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Research Peptides",
    url: "https://www.peptideproducts.co.uk/research-peptides",
    description:
      "Research peptides and laboratory compounds for scientific study from Peptide Products.",
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
        <section className="relative overflow-hidden bg-hero pb-12 pt-10 lg:pb-16 lg:pt-14">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-xs font-semibold text-muted shadow-soft">
                  Research use only
                  <span className="h-2 w-2 rounded-full bg-accent2" />
                </div>

                <h1 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
                  Research peptides for laboratory and scientific study
                </h1>

                <p className="mt-4 max-w-2xl text-base text-muted md:text-lg">
                  Research peptides cover a broad range of laboratory compounds including
                  antioxidant-focused blends, hydration systems, firming peptide products, and
                  regenerative lines such as collagen and PDRN-based compounds.
                </p>

                <p className="mt-4 max-w-2xl text-base text-muted md:text-lg">
                  These compounds are commonly reviewed in analytical workflows, formulation
                  research, compatibility testing, and other laboratory study environments.
                </p>

                <p className="mt-4 max-w-2xl text-base text-muted md:text-lg">
  Explore related laboratory categories including{" "}
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
  . You can also browse broader guides such as{" "}
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

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/shop"
                    className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                  >
                    Browse products
                  </Link>

                  <Link
                    href="/contact"
                    className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                  >
                    Contact the team
                  </Link>
                </div>
              </div>

              <div className="max-w-3xl overflow-hidden rounded-xl3 border border-line bg-panel p-4 shadow-soft">
                <div className="relative h-[360px] w-full bg-panel">
                  <Image
                    src="/products/meso-vitamin-c-benefits.jpg"
                    alt="Research peptides and laboratory compounds"
                    fill
                    priority
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Core research peptide categories
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted">
                The research peptide category includes compounds studied for antioxidant activity,
                hydration support, elasticity and firmness research, and regeneration-focused
                workflows. Different compounds serve different laboratory interests, so category
                browsing can help narrow down which products are most relevant to a specific line
                of study.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {featureCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group overflow-hidden rounded-xl3 border border-line bg-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <div className="relative h-[420px] w-full bg-panel">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover object-top transition duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-extrabold tracking-tight">{card.title}</h3>
                    <p className="mt-2 text-sm text-muted">{card.copy}</p>
                    <div className="mt-4 text-sm font-extrabold text-ink">View category →</div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">
                  About research peptides
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Research peptides are supplied for controlled scientific and laboratory settings
                  where compounds are examined for analytical, biochemical, structural, or
                  formulation-related purposes. Depending on the compound, research may focus on
                  antioxidant activity, hydration behaviour, elasticity and firmness, or
                  regeneration-related compatibility.
                </p>
                <p className="mt-4 text-sm leading-7 text-muted">
                  In practical terms, that means one research line may focus on glutathione or
                  vitamin C, while another may focus on hyaluronic acid, collagen, PDRN, or
                  peptide-blend formulations. Each compound type brings a different laboratory
                  interest and should be reviewed through its individual product details.
                </p>
                <p className="mt-4 text-sm leading-7 text-muted">
                  Buyers looking for research peptides often compare categories first, then move
                  into specific products once the relevant compound type has been identified.
                </p>
              </div>

              <div className="rounded-xl3 border border-line bg-panel p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight">Research use only</h2>
                <p className="mt-3 text-sm leading-7 text-muted">
                  All products listed by Peptide Products are supplied strictly for laboratory and
                  scientific research purposes only.
                </p>
                <p className="mt-4 text-sm leading-7 text-muted">
                  They are not intended for human consumption, medical treatment, or clinical use.
                  Product handling, review, and use should remain within appropriate laboratory
                  environments.
                </p>

                <div className="mt-6">
                  <Link
                    href="/shop"
                    className="inline-flex rounded-xl2 bg-accent px-5 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                  >
                    Shop research products
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">
                  Additional peptide and compound lines
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-muted">
                  Explore regenerative and antioxidant-focused compounds alongside collagen, PDRN,
                  and vitamin C research products.
                </p>
              </div>
              <Link href="/shop" className="text-sm font-extrabold text-ink/80 hover:text-ink">
                View all products →
              </Link>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {spotlightCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group overflow-hidden rounded-xl3 border border-line bg-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <div className="relative h-[420px] w-full bg-panel">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover object-top transition duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-extrabold tracking-tight">{card.title}</h3>
                    <p className="mt-2 text-sm text-muted">{card.copy}</p>
                    <div className="mt-4 text-sm font-extrabold text-ink">View product →</div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Related research guides
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Common questions about research peptides
              </h2>
            </div>

            <div className="mt-8 grid gap-5">
              {faqItems.map((item) => (
                <div key={item.question} className="surface-card p-6">
                  <h3 className="text-lg font-extrabold tracking-tight">{item.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.answer}</p>
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