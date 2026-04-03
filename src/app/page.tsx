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
    "Shop research peptides and laboratory compounds in the UK. Explore Retatrutide, GHK-CU, BPC-157, NAD, glutathione, bacteriostatic water, and more at Peptide Products.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk",
  },
  openGraph: {
    title: "Research Peptides & Laboratory Compounds UK | Peptide Products",
    description:
      "Browse research peptides and laboratory compounds with clear product pages, UK ordering, and research-use-only positioning.",
    url: "https://www.peptideproducts.co.uk",
    siteName: "Peptide Products",
    images: [
      {
        url: "https://www.peptideproducts.co.uk/home/home-full-vial-set.webp",
        width: 1200,
        height: 900,
        alt: "Peptide Products research peptide and laboratory compound range",
      },
    ],
  },
};

const categoryCards = [
  {
    title: "Metabolic research peptides",
    copy: "Explore Retatrutide, Tirzepatide, Melanotan, Selank, ML-10, and NAD product lines.",
    image: "/products/retatrutide-40mg-uk.jpg",
    href: "/research-peptides",
  },
  {
    title: "Regenerative compounds",
    copy: "Browse BPC-157 and GHK-CU research compounds and related regeneration-focused products.",
    image: "/products/ghk-cu-100mg.webp",
    href: "/regenerative-peptides",
  },
  {
    title: "Hydration and support products",
    copy: "View bacteriostatic water and support liquids used in laboratory preparation workflows.",
    image: "/products/bac-water-10ml.webp",
    href: "/hydration-peptides",
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
      "Selected product lines can include COA and SDS documentation to support internal review and handling.",
  },
  {
    question: "Can I track an order after purchase?",
    answer:
      "Yes. The store includes an order status page along with email updates for active orders.",
  },
] as const;

function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export default function Home() {
  const featuredProducts = [
    getProduct("retatrutide"),
    getProduct("tirzepatide-tr40-40mg"),
    getProduct("ghk-cu-100mg"),
    getProduct("bpc-157-10mg"),
    getProduct("nad-1000mg"),
    getProduct("bac-water-10ml"),
  ].filter(Boolean) as typeof products;

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

        <section className="relative overflow-hidden pb-12 pt-8 lg:pb-16 lg:pt-12">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-[-120px] top-[-100px] h-[280px] w-[280px] rounded-full bg-accent/15 blur-3xl" />
            <div className="absolute right-[-120px] top-[40px] h-[240px] w-[240px] rounded-full bg-accent2/15 blur-3xl" />
          </div>

          <Container>
            <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/85 px-4 py-2 text-xs font-semibold text-muted shadow-soft backdrop-blur-sm">
                  Research use only • UK store • Secure checkout
                  <span className="h-2 w-2 rounded-full bg-accent2" />
                </div>

                <h1 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl lg:leading-[1.05]">
                  <span className="block text-accent">Research peptides</span>
                  <span className="block text-ink">and laboratory compounds</span>
                  <span className="block text-ink">for scientific study</span>
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg">
                  Shop the main product range, go straight to Retatrutide, and move into secure checkout with fewer clicks.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/shop"
                    className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-accent/90"
                  >
                    Shop products
                  </Link>

                  <Link
                    href="/product/retatrutide"
                    className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft transition hover:-translate-y-0.5 hover:bg-panel"
                  >
                    View Retatrutide
                  </Link>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl2 border border-line bg-white/85 p-4 text-sm font-semibold text-ink shadow-soft backdrop-blur-sm">
                    Secure Stripe checkout
                  </div>
                  <div className="rounded-xl2 border border-line bg-white/85 p-4 text-sm font-semibold text-ink shadow-soft backdrop-blur-sm">
                    UK dispatch available
                  </div>
                  <div className="rounded-xl2 border border-line bg-white/85 p-4 text-sm font-semibold text-ink shadow-soft backdrop-blur-sm">
                    Order tracking available
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="overflow-hidden rounded-xl3 border border-line bg-white shadow-lift">
                  <div className="relative h-[420px] w-full bg-[#f7f9fc] md:h-[520px]">
                    <Image
                      src="/home/home-full-vial-set.webp"
                      alt="Peptide Products full research compound range"
                      fill
                      priority
                      fetchPriority="high"
                      sizes="(min-width: 1024px) 46vw, 100vw"
                      className="object-contain object-center"
                    />
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
                <h2 className="section-title">Shop by category</h2>
                <p className="mt-2 max-w-2xl text-sm text-muted">
                  Start with the main product categories and go directly into the products that matter.
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
                  className="group overflow-hidden rounded-xl3 border border-line bg-white shadow-soft transition duration-200 hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <div className="relative h-[280px] w-full bg-panel md:h-[340px]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-contain p-4 transition duration-300 group-hover:scale-[1.02]"
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
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="section-title">Featured products</h2>
                <p className="mt-2 max-w-2xl text-sm text-muted">
                  These are the main products customers are landing on and buying from.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {featuredProducts.map((p) => (
                <ProductCard key={p.id} p={p} imageOverride={p.gallery?.[1] ?? p.image} />
              ))}
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div>
                  <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent">
                    Featured compound
                  </div>
                  <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
                    Buy Retatrutide UK
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-muted md:text-base">
                    Retatrutide 40mg is currently one of the strongest product routes on the site. Use the main product page for price, stock status, and checkout.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/product/retatrutide"
                      className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                    >
                      View Retatrutide 40mg
                    </Link>
                    <Link
                      href="/buy-retatrutide-uk"
                      className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                    >
                      Buy Retatrutide UK
                    </Link>
                  </div>
                </div>

                <div className="rounded-xl2 border border-line bg-panel p-5">
                  <div className="text-xs font-extrabold uppercase tracking-wide text-muted">Product snapshot</div>
                  <div className="mt-3 text-lg font-extrabold text-ink">Retatrutide 40mg</div>
                  <div className="mt-1 text-sm text-muted">1 pre-filled pen • secure checkout</div>
                  <div className="mt-4 inline-flex rounded-full px-3 py-1 text-[11px] font-extrabold border border-emerald-200 bg-emerald-50 text-emerald-700">
                    In stock
                  </div>
                  <div className="mt-5 text-2xl font-extrabold text-ink">£150.00</div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
              <div>
                <h2 className="section-title">Common questions</h2>
                <div className="mt-6 grid gap-5">
                  {faqItems.map((item) => (
                    <div key={item.question} className="rounded-xl2 border border-line bg-white p-5 shadow-soft">
                      <h3 className="text-base font-extrabold">{item.question}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl3 border border-line bg-panel p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight">Need a fast route?</h2>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Start with the products people are already searching for, or browse the full catalogue.
                </p>
                <div className="mt-6 grid gap-3">
                  <Link href="/product/retatrutide" className="rounded-xl2 bg-accent px-5 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90">
                    View Retatrutide
                  </Link>
                  <Link href="/shop" className="rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel">
                    Browse all products
                  </Link>
                  <Link href="/order-status" className="rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel">
                    Track an order
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
