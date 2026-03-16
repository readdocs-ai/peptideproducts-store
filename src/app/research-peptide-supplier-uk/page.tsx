import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Research Peptide Supplier UK | Laboratory Peptide Compounds for Scientific Study",
  description:
    "Peptide Products is a UK research peptide supplier offering antioxidant, hydration, firming, and regenerative laboratory compounds for scientific study.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/research-peptide-supplier-uk",
  },
  openGraph: {
    title: "Research Peptide Supplier UK | Laboratory Peptide Compounds for Scientific Study",
    description:
      "UK research peptide supplier page covering laboratory peptide compounds, research-use-only positioning, and direct links to core product lines.",
    url: "https://www.peptideproducts.co.uk/research-peptide-supplier-uk",
    siteName: "Peptide Products",
    images: [
      {
        url: "https://www.peptideproducts.co.uk/products/meso-collagen-main.jpg",
        width: 1200,
        height: 900,
        alt: "Research peptide supplier UK laboratory compounds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Peptide Supplier UK | Laboratory Peptide Compounds for Scientific Study",
    description:
      "UK research peptide supplier page covering laboratory peptide compounds and direct links to core product lines.",
    images: ["https://www.peptideproducts.co.uk/products/meso-collagen-main.jpg"],
  },
};

const productLinks = [
  {
    title: "Meso Glutathione",
    copy: "Antioxidant-focused research compound with glutathione and vitamin C positioning.",
    href: "/product/meso-glutathione",
  },
  {
    title: "Skinbooster Hyaluronic Acid",
    copy: "Hydration-focused carrier blend for formulation and laboratory review.",
    href: "/product/skinbooster-hyaluronic-acid",
  },
  {
    title: "Meso Lift & Firming",
    copy: "Firming-focused peptide blend for elasticity-related research workflows.",
    href: "/product/meso-lift-firming",
  },
  {
    title: "Meso Collagen Skin Booster",
    copy: "Collagen-oriented product line for regeneration and compatibility research.",
    href: "/product/meso-collagen",
  },
  {
    title: "Meso PDRN",
    copy: "PDRN-based compound for repair and regeneration-focused research environments.",
    href: "/product/meso-pdrn",
  },
  {
    title: "Meso Vitamin C",
    copy: "Vitamin C-led antioxidant research compound for analytical and formulation work.",
    href: "/product/meso-vitamin-c",
  },
] as const;

const faqItems = [
  {
    question: "What does a research peptide supplier do?",
    answer:
      "A research peptide supplier provides peptide-based or related laboratory compounds for scientific, analytical, and formulation-focused research environments.",
  },
  {
    question: "Do you supply products in the UK?",
    answer:
      "Yes. Peptide Products is positioned as a UK research peptide supplier with online catalogue browsing, checkout, and order tracking.",
  },
  {
    question: "Are these products for human use?",
    answer:
      "No. All products listed on this site are supplied strictly for laboratory and scientific research use only.",
  },
] as const;

export default function ResearchPeptideSupplierUKPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Research Peptide Supplier UK",
    url: "https://www.peptideproducts.co.uk/research-peptide-supplier-uk",
    description:
      "UK research peptide supplier page for laboratory peptide compounds and scientific study.",
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
        name: "Research peptide supplier UK",
        item: "https://www.peptideproducts.co.uk/research-peptide-supplier-uk",
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
        <section className="bg-hero py-14 lg:py-16">
          <Container>
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-xs font-semibold text-muted shadow-soft">
                UK research-use-only catalogue
                <span className="h-2 w-2 rounded-full bg-accent2" />
              </div>

              <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-5xl">
                Research peptide supplier UK
              </h1>

              <div className="mt-8 max-w-3xl overflow-hidden rounded-xl3 border border-line bg-panel p-4 shadow-soft">
                <div className="relative h-[360px] w-full bg-panel">
                  <Image
                    src="/products/meso-collagen-main.jpg"
                    alt="Research peptide supplier UK laboratory compounds"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted md:text-base">
                Peptide Products supplies research peptides and laboratory compounds in the UK,
                helping research buyers, laboratories, and procurement teams access product pages,
                pack details, and supporting information in one clear catalogue.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted md:text-base">
                The site is structured around antioxidant, hydration, firming, and regenerative
                product lines, with direct routes into individual products and a research-use-only
                positioning throughout. This page is designed to support supplier-intent searches
                while also guiding visitors toward the most relevant category and product pages.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted md:text-base">
  Explore the main research areas through{" "}
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
  , or browse wider guides such as{" "}
  <Link href="/research-peptides-uk" className="font-semibold text-ink hover:text-accent">
    research peptides UK
  </Link>
  ,{" "}
  <Link href="/buy-research-peptides-uk" className="font-semibold text-ink hover:text-accent">
    buy research peptides UK
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
                  href="/research-peptides"
                  className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                >
                  Read research peptides guide
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Core research peptide categories
              </h2>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                A strong UK research peptide supplier page should make it easy to understand the
                main compound categories available across the catalogue. These categories help
                buyers move quickly from broad supplier-intent searches into the most relevant
                scientific research sections of the site.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Choosing a UK research peptide supplier
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                When buyers search for a research peptide supplier in the UK, they are often
                looking for a clear product catalogue, transparent product pages, direct contact
                routes, and a straightforward way to compare laboratory compounds across different
                research areas. A well-structured supplier page should help users move from general
                supplier intent into detailed category pages and product pages without friction.
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">
                Peptide Products is designed to support that process by combining category-level
                browsing with individual product pages that surface pack size, pricing, imagery,
                and research-use positioning. This allows buyers to explore the catalogue through
                both broad and specific routes, whether they are comparing categories or looking
                for an individual compound.
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">
                It also supports stronger internal site structure by linking supplier-intent
                searches into the wider{" "}
                <Link href="/research-peptides-uk" className="font-semibold text-ink hover:text-accent">
                  research peptides UK
                </Link>{" "}
                and{" "}
                <Link href="/laboratory-peptide-compounds" className="font-semibold text-ink hover:text-accent">
                  laboratory peptide compounds
                </Link>{" "}
                pages, which helps both users and search engines understand the topic coverage of
                the site.
              </p>
            </div>
          </Container>
        </section>

        <section className="bg-white py-14">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">
                  Laboratory product lines
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-muted">
                  Explore key peptide and compound lines currently available through the catalogue.
                </p>
              </div>
              <Link href="/shop" className="text-sm font-extrabold text-ink/80 hover:text-ink">
                View full catalogue →
              </Link>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {productLinks.map((item) => (
                <Link key={item.title} href={item.href} className="surface-card p-6">
                  <h3 className="text-lg font-extrabold tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.copy}</p>
                  <div className="mt-4 text-sm font-extrabold text-ink">View product →</div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">
                  What buyers look for in a research peptide supplier
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted">
                  In practice, research buyers often need a supplier page that makes it easy to
                  understand catalogue depth, product types, and internal navigation. That means a
                  strong supplier page should explain the broad product areas while also linking
                  into the individual compounds that matter most.
                </p>
                <p className="mt-4 text-sm leading-7 text-muted">
                  This page supports that by connecting supplier-intent searches with category and
                  product-level routes such as glutathione, hyaluronic acid, PDRN, collagen,
                  vitamin C, and firming peptide blends. It also helps reinforce the broader topic
                  structure by linking to antioxidant, hydration, firming, and regenerative content.
                </p>
                <p className="mt-4 text-sm leading-7 text-muted">
                  For scientific buyers, clear internal navigation matters just as much as product
                  availability. A supplier page should not only present compounds, but also guide
                  users into the most relevant research context and related pages across the wider
                  site.
                </p>
              </div>

              <div className="rounded-xl3 border border-line bg-panel p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight">Research use only</h2>
                <p className="mt-4 text-sm leading-7 text-muted">
                  All products listed by Peptide Products are supplied strictly for laboratory and
                  scientific research purposes only.
                </p>
                <p className="mt-4 text-sm leading-7 text-muted">
                  They are not intended for human consumption, medical treatment, or clinical use.
                </p>

                <Link
                  href="/disclaimer"
                  className="mt-6 inline-flex text-sm font-extrabold text-ink hover:text-accent"
                >
                  Read disclaimer →
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="max-w-4xl">
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
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Common questions about UK research peptide supply
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