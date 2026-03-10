import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { brand } from "@/theme/brand";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Research Peptides & Laboratory Compounds UK | Peptide Products",
  description:
    "Shop research-grade peptides and laboratory compounds for scientific study. Browse documented product lines, compliance notes, and UK order tracking at Peptide Products.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk",
  },
  openGraph: {
    title: "Research Peptides & Laboratory Compounds UK | Peptide Products",
    description:
      "Research-grade peptides and laboratory compounds for scientific study, with clear product pages, compliance notes, and UK order tracking.",
    url: "https://www.peptideproducts.co.uk",
    siteName: "Peptide Products",
    images: [
      {
        url: "https://www.peptideproducts.co.uk/home/home-hero-meso-glutathione.jpg",
        width: 1200,
        height: 900,
        alt: "Peptide Products research-grade compounds homepage hero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Peptides & Laboratory Compounds UK | Peptide Products",
    description:
      "Research-grade peptides and laboratory compounds for scientific study, with clear product pages and compliance-first browsing.",
    images: ["https://www.peptideproducts.co.uk/home/home-hero-meso-glutathione.jpg"],
  },
};

const heroImage = "/home/home-hero-meso-glutathione.jpg";

const categoryCards = [
  {
    title: "Hydration research blends",
    copy: "Carrier and hydration-focused compounds for bench testing, formulation work, and analytical workflows.",
    image: "/home/home-feature-skinbooster-hyaluronic-acid.jpg",
    href: "/product/skinbooster-hyaluronic-acid",
  },
  {
    title: "Firming peptide blends",
    copy: "Elasticity and firmness-focused research lines for assay work and laboratory evaluation.",
    image: "/home/home-feature-meso-lift-firming.jpg",
    href: "/product/meso-lift-firming",
  },
  {
    title: "Repair and regenerative compounds",
    copy: "PDRN-led and regeneration-focused lines for research environments and method development.",
    image: "/products/meso-pdrn-main.jpg",
    href: "/product/meso-pdrn",
  },
] as const;

const trustCards = [
  {
    title: "Research use only",
    copy: "Products are supplied strictly for laboratory and scientific research purposes only.",
  },
  {
    title: "Documentation support",
    copy: "COA and SDS files can be surfaced on supported product lines to support procurement and review.",
  },
  {
    title: "UK checkout and tracking",
    copy: "Direct checkout flow, order status lookup, and email updates are already built into the storefront.",
  },
] as const;

const faqItems = [
  {
    question: "Are these products for human use?",
    answer:
      "No. All products are listed and supplied strictly for laboratory, analytical, and scientific research use only.",
  },
  {
    question: "Do you provide product documentation?",
    answer:
      "Supported lines can include COA and SDS documentation to assist with internal review, handling, and procurement workflows.",
  },
  {
    question: "Can I track an order after purchase?",
    answer:
      "Yes. The store includes an order status page along with email updates for active orders.",
  },
] as const;

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Peptide Products",
    url: "https://www.peptideproducts.co.uk",
    logo: "https://www.peptideproducts.co.uk/favicon.svg",
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: brand.supportEmail,
        telephone: brand.phone,
        contactType: "customer support",
        areaServed: "GB",
        availableLanguage: "en",
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Peptide Products",
    url: "https://www.peptideproducts.co.uk",
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
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema, faqSchema]),
          }}
        />

        <section className="relative overflow-hidden bg-hero pb-10 pt-8 lg:pb-16 lg:pt-12">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-xs font-semibold text-muted shadow-soft">
                  Research use only • UK store • Selected lines support COA / SDS
                  <span className="h-2 w-2 rounded-full bg-accent2" />
                </div>

                <h1 className="mt-5 max-w-2xl text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
                  Research peptides and laboratory compounds for scientific study.
                </h1>

                <p className="mt-4 max-w-2xl text-base text-muted md:text-lg">
                  Browse research-grade product lines with clear documentation cues, direct product
                  routes, and a cleaner path from discovery to checkout.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/shop"
                    className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                  >
                    Shop products
                  </Link>

                  <Link
                    href="/wholesale"
                    className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                  >
                    Wholesale enquiries
                  </Link>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl2 border border-line bg-white/85 p-4 text-sm font-semibold text-ink shadow-soft">
                    Research-use-only catalogue
                  </div>
                  <div className="rounded-xl2 border border-line bg-white/85 p-4 text-sm font-semibold text-ink shadow-soft">
                    Product documentation on supported lines
                  </div>
                  <div className="rounded-xl2 border border-line bg-white/85 p-4 text-sm font-semibold text-ink shadow-soft">
                    UK checkout, email updates, and order tracking
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl3 border border-line bg-white shadow-lift">
                <div className="relative aspect-[5/4] bg-panel">
                  <Image
                    src={heroImage}
                    alt="Meso Glutathione research compound by Peptide Products"
                    fill
                    priority
                    fetchPriority="high"
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="grid gap-4 border-t border-line p-5 sm:grid-cols-3">
                  <div>
                    <div className="text-xs font-extrabold uppercase tracking-wide text-muted">
                      Clear product pages
                    </div>
                    <p className="mt-2 text-sm text-muted">
                      Browse pack details, pricing, research notes, and direct routes to cart.
                    </p>
                  </div>
                  <div>
                    <div className="text-xs font-extrabold uppercase tracking-wide text-muted">
                      Compliance-first browsing
                    </div>
                    <p className="mt-2 text-sm text-muted">
                      Research-use-only positioning and supporting document cues are surfaced
                      throughout the storefront.
                    </p>
                  </div>
                  <div>
                    <div className="text-xs font-extrabold uppercase tracking-wide text-muted">
                      Support contact
                    </div>
                    <p className="mt-2 text-sm text-muted">
                      {brand.supportEmail}
                      <br />
                      {brand.phone}
                    </p>
                  </div>
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
                  Shop by research category
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-muted">
                  Explore hydration, firming, antioxidant, and regenerative compound lines with
                  direct product routes from the homepage.
                </p>
              </div>
              <Link href="/shop" className="text-sm font-extrabold text-ink/80 hover:text-ink">
                View full catalogue →
              </Link>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {categoryCards.map((card) => (
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
                      className="object-cover transition duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-lg font-extrabold tracking-tight">{card.title}</div>
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
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">
                  Featured peptide and compound lines
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-muted">
                  Selected research products with direct add-to-cart routes and detailed product
                  pages for faster browsing.
                </p>
              </div>
              <Link href="/shop" className="text-sm font-extrabold text-ink/80 hover:text-ink">
                Browse all products →
              </Link>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProducts.map((p) => (
                <ProductCard key={p.id} p={p} />
              ))}
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="grid gap-6 lg:grid-cols-3">
              {trustCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl3 border border-line bg-white p-6 shadow-soft"
                >
                  <h2 className="text-lg font-extrabold tracking-tight">{item.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.copy}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-white py-14">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">
                  Research peptides in a clearer buying environment
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Peptide Products is structured to help laboratories, procurement teams, and
                  research buyers move through product discovery more efficiently. Product pages are
                  designed to surface pack size, pricing, gallery images, and core research notes
                  while keeping compliance messaging visible throughout the experience.
                </p>
                <p className="mt-4 text-sm leading-7 text-muted">
                  The site also supports checkout, order status tracking, and direct contact routes
                  for wholesale or documentation-related enquiries, making it easier to manage
                  repeat purchasing and internal review.
                </p>
              </div>

              <div className="rounded-xl3 border border-line bg-panel p-6">
                <h2 className="text-2xl font-extrabold tracking-tight">Common questions</h2>
                <div className="mt-6 grid gap-5">
                  {faqItems.map((item) => (
                    <div key={item.question}>
                      <h3 className="text-base font-extrabold">{item.question}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted">{item.answer}</p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/faq"
                  className="mt-6 inline-flex text-sm font-extrabold text-ink hover:text-accent"
                >
                  View full FAQ →
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
