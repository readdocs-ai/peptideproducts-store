import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Research Peptides UK | Laboratory Compounds for Scientific Study",
  description:
    "Explore research peptides and laboratory compounds for scientific study. Browse antioxidant, hydration, firming, and regenerative product lines at Peptide Products.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/research-peptides",
  },
  openGraph: {
    title: "Research Peptides UK | Laboratory Compounds for Scientific Study",
    description:
      "Research peptides and laboratory compounds for laboratory and scientific study, with direct links into core product lines.",
    url: "https://www.peptideproducts.co.uk/research-peptides",
    siteName: "Peptide Products",
    images: [
      {
        url: "https://www.peptideproducts.co.uk/products/meso-vitamin-c-alt.jpg",
        width: 1200,
        height: 900,
        alt: "Research peptides and laboratory compounds by Peptide Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Peptides UK | Laboratory Compounds for Scientific Study",
    description:
      "Research peptides and laboratory compounds for scientific study, with direct product routes and research-use-only positioning.",
    images: ["https://www.peptideproducts.co.uk/products/meso-vitamin-c-alt.jpg"],
  },
};

const featureCards = [
  {
    title: "Antioxidant research lines",
    copy: "Explore glutathione-led and vitamin C-led product lines used in analytical, formulation, and method-development workflows.",
    image: "/products/meso-glutathione-alt-cropped.jpg",
    href: "/product/meso-glutathione",
  },
  {
    title: "Hydration and carrier blends",
    copy: "Review hydration-focused and carrier-oriented compounds presented with clearer product imagery and supporting product details.",
    image: "/products/skinbooster-hyaluronic-acid-alt.jpg",
    href: "/product/skinbooster-hyaluronic-acid",
  },
  {
    title: "Firming peptide compounds",
    copy: "Browse firmness and elasticity-focused research blends with direct product routes for faster review.",
    image: "/products/meso-lift-firming-alt.jpg",
    href: "/product/meso-lift-firming",
  },
] as const;

const spotlightCards = [
  {
    title: "Regenerative product lines",
    copy: "PDRN and collagen-oriented compounds support regeneration-focused research workflows and evaluation.",
    image: "/products/meso-pdrn-alt.jpg",
    href: "/product/meso-pdrn",
  },
  {
    title: "Collagen-led booster blends",
    copy: "Collagen-focused product lines can support compatibility review, formulation work, and related lab testing.",
    image: "/products/meso-collagen-alt.jpg",
    href: "/product/meso-collagen",
  },
  {
    title: "Vitamin C compound lines",
    copy: "Vitamin C-focused product lines help broaden antioxidant coverage across the catalogue.",
    image: "/products/meso-vitamin-c-alt.jpg",
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
    question: "Can I move from this page into individual products?",
    answer:
      "Yes. This page is designed to connect broader research-peptide search intent with individual product pages and product-specific information.",
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

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([webPageSchema, faqSchema]) }}
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
                  This page provides a clearer overview of the research peptide and compound lines
                  available through Peptide Products, while linking directly into individual product
                  pages for more detailed review.
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

              <div className="overflow-hidden rounded-xl3 border border-line bg-white shadow-lift">
                <div className="relative aspect-[16/9] bg-panel">
                  <Image
                    src="/products/meso-vitamin-c-alt.jpg"
                    alt="Research peptides and laboratory compounds"
                    fill
                    priority
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className="object-cover object-top"
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
                Explore the main research areas across the catalogue
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted">
                Peptide Products groups its catalogue around key areas including antioxidant-focused
                compounds, hydration-oriented blends, firming peptide lines, and regenerative
                product categories. This makes it easier for research buyers and laboratories to
                move from broader search intent into specific product pages.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {featureCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group overflow-hidden rounded-xl3 border border-line bg-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <div className="relative aspect-[4/3] bg-panel">
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

        <section className="bg-white py-14">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">
                  About research peptides
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Research peptides are laboratory compounds supplied for analytical, investigative,
                  and formulation-related environments. A page like this helps connect broader
                  keyword intent such as “research peptides UK” with the deeper product-level pages
                  that hold pricing, pack details, documentation cues, and additional imagery.
                </p>
                <p className="mt-4 text-sm leading-7 text-muted">
                  For users, this acts as a clearer starting point before moving into individual
                  lines like glutathione, hyaluronic acid, lift and firming blends, collagen
                  boosters, PDRN compounds, and vitamin C products.
                </p>
                <p className="mt-4 text-sm leading-7 text-muted">
                  For search visibility, this type of page strengthens topical relevance while
                  improving internal linking across the catalogue.
                </p>
              </div>

              <div className="rounded-xl3 border border-line bg-panel p-6">
                <h2 className="text-2xl font-extrabold tracking-tight">Research use only</h2>
                <p className="mt-3 text-sm leading-7 text-muted">
                  All products listed by Peptide Products are supplied strictly for laboratory and
                  scientific research purposes only.
                </p>
                <p className="mt-4 text-sm leading-7 text-muted">
                  They are not intended for human consumption, medical treatment, or clinical use.
                  Buyers should review product pages and supporting documents where available before
                  ordering.
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
                  Additional product lines
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-muted">
                  Explore more regenerative and antioxidant-focused products within the catalogue.
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
                  <div className="relative aspect-[4/3] bg-panel">
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

        <section className="bg-white py-14">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Common questions about research peptides
              </h2>
            </div>

            <div className="mt-8 grid gap-5">
              {faqItems.map((item) => (
                <div
                  key={item.question}
                  className="rounded-xl3 border border-line bg-white p-6 shadow-soft"
                >
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