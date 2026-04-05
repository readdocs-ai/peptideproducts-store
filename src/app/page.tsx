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
<<<<<<< HEAD
  title: "Premium Research Peptides & Laboratory Compounds UK",
  description:
    "Research peptides and laboratory compounds supplied in the UK with secure checkout, tracked dispatch, and documentation available on selected product lines.",
=======
  title: "Research Peptides & Laboratory Compounds UK | Peptide Products",
  description:
    "Shop research peptides and laboratory compounds in the UK. Explore Retatrutide, GHK-CU, BPC-157, NAD, glutathione, bacteriostatic water, and more at Peptide Products.",
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
  alternates: {
    canonical: "https://www.peptideproducts.co.uk",
  },
  openGraph: {
<<<<<<< HEAD
    title: "Premium Research Peptides UK | Peptide Products",
    description:
      "Research peptides supplied in the UK with secure checkout, tracked dispatch, and certificate files available on selected lines.",
=======
    title: "Research Peptides & Laboratory Compounds UK | Peptide Products",
    description:
      "Browse research peptides and laboratory compounds with clear product pages, UK ordering, and research-use-only positioning.",
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
    url: "https://www.peptideproducts.co.uk",
    siteName: "Peptide Products",
    images: [
      {
<<<<<<< HEAD
        url: "https://www.peptideproducts.co.uk/home/vial-set.png",
        width: 1400,
        height: 1080,
        alt: "Peptide Products research peptide range",
=======
        url: "https://www.peptideproducts.co.uk/home/home-full-vial-set.webp",
        width: 1200,
        height: 900,
        alt: "Peptide Products research peptide and laboratory compound range",
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
      },
    ],
  },
};

const categoryCards = [
  {
    title: "Metabolic research peptides",
<<<<<<< HEAD
    copy: "Retatrutide, Tirzepatide, Selank, ML-10, NAD, and related laboratory product lines.",
=======
    copy: "Retatrutide, Tirzepatide, Melanotan, Selank, ML-10, and NAD product lines.",
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
    image: "/products/retatrutide-40mg-uk.jpg",
    href: "/research-peptides",
  },
  {
    title: "Regenerative compounds",
<<<<<<< HEAD
    copy: "BPC-157 and GHK-CU product lines for laboratories reviewing regeneration-focused compounds.",
=======
    copy: "BPC-157 and GHK-CU research compounds with regeneration-focused product lines.",
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
    image: "/products/ghk-cu-100mg.webp",
    href: "/regenerative-peptides",
  },
  {
<<<<<<< HEAD
    title: "Hydration & support products",
    copy: "Bacteriostatic water and support supplies used in laboratory preparation workflows.",
=======
    title: "Hydration and support products",
    copy: "Bacteriostatic water and support liquids used in laboratory preparation workflows.",
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
    image: "/products/bac-water-10ml.webp",
    href: "/hydration-peptides",
  },
] as const;

<<<<<<< HEAD
const trustCards = [
  {
    title: "High purity compounds",
    copy: "Products are supplied to high standards with selected documentation available where applicable.",
  },
  {
    title: "Tracked UK dispatch",
    copy: "Orders are prepared for UK dispatch with tracking updates provided after shipment.",
  },
  {
    title: "Secure checkout",
    copy: "Stripe card checkout and alternative payment options are available through the cart.",
  },
  {
    title: "Direct support",
    copy: "Email and phone contact details remain visible for pre-order questions and support.",
  },
] as const;

const guideLinks = [
  {
    title: "Research peptides",
    copy: "Browse the main category overview and move into the product groups most relevant to your laboratory work.",
    href: "/research-peptides",
  },
  {
    title: "Research peptides UK",
    copy: "UK-focused guide for buyers comparing product categories and supply options.",
    href: "/research-peptides-uk",
  },
  {
    title: "Buy Retatrutide UK",
    copy: "Direct guide for visitors specifically looking for the Retatrutide range.",
    href: "/buy-retatrutide-uk",
  },
  {
    title: "Research peptide supplier UK",
    copy: "Supplier-focused page for visitors comparing UK research peptide sources.",
    href: "/research-peptide-supplier-uk",
  },
] as const;

const faqItems = [
  {
    question: "Are these products listed for human use?",
=======
const faqItems = [
  {
    question: "Are these products for human use?",
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
    answer:
      "No. All products are listed and supplied strictly for laboratory, analytical, and scientific research use only.",
  },
  {
<<<<<<< HEAD
    question: "Can I review documentation before ordering?",
    answer:
      "Yes. Selected product pages include certificate files directly on the page where documentation is available.",
  },
  {
    question: "Do you offer secure checkout?",
    answer:
      "Yes. Card payment uses Stripe from the cart, and alternative bank transfer or cryptocurrency options are also available.",
=======
    question: "Do you provide product documentation?",
    answer:
      "Selected product lines can include COA and SDS documentation to support internal review and handling.",
  },
  {
    question: "Can I track an order after purchase?",
    answer:
      "Yes. The store includes an order status page along with email updates for active orders.",
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
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
<<<<<<< HEAD
    getProduct("nad-500mg"),
    getProduct("bac-water-10ml"),
  ].filter(Boolean) as typeof products;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: brand.name,
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
    },
    {
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
    },
  ];
=======
    getProduct("nad-1000mg"),
    getProduct("bac-water-10ml"),
  ].filter(Boolean) as typeof products;

  const retatrutide = getProduct("retatrutide");

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
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f

  return (
    <div>
      <Header />
<<<<<<< HEAD
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        <section className="relative overflow-hidden py-14 lg:py-20">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-hero opacity-90" />
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
              <div className="max-w-3xl">
                <div className="eyebrow">
                  Premium UK research peptide supplier
                  <span className="h-2 w-2 rounded-full bg-accent2" />
                </div>

                <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl lg:leading-[1.02]">
                  Research peptides supplied in the UK with verified quality.
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-7 text-muted md:text-lg">
                  High purity research compounds with fast UK dispatch, secure checkout, and documentation available on selected product lines.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
=======

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema, faqSchema]),
          }}
        />

        <section className="relative overflow-hidden py-12 lg:py-16">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-[-120px] top-[-100px] h-[260px] w-[260px] rounded-full bg-accent/15 blur-3xl" />
            <div className="absolute right-[-120px] top-[40px] h-[220px] w-[220px] rounded-full bg-accent2/15 blur-3xl" />
          </div>

          <Container>
            <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/85 px-4 py-2 text-xs font-semibold text-muted shadow-soft backdrop-blur-sm">
                  Research use only • UK store • Secure checkout
                  <span className="h-2 w-2 rounded-full bg-accent2" />
                </div>

                <h1 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl lg:leading-[1.05]">
                  <span className="block text-accent">Research peptides</span>
                  <span className="block text-ink">and laboratory compounds</span>
                  <span className="block text-ink">for scientific study</span>
                </h1>

                <p className="mt-4 max-w-2xl text-base leading-7 text-muted md:text-lg">
                  Browse the full product range, move quickly into best sellers,
                  and use secure checkout with a clearer path from product to cart.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
                  <Link
                    href="/shop"
                    className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-accent/90"
                  >
                    Shop products
                  </Link>

                  <Link
<<<<<<< HEAD
                    href="/quality-assurance"
                    className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft transition hover:-translate-y-0.5 hover:bg-panel"
                  >
                    Quality & documentation
                  </Link>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="trust-pill">Research use only</span>
                  <span className="trust-pill">Tracked UK dispatch</span>
                  <span className="trust-pill">Secure checkout</span>
                </div>
              </div>

              <div className="relative">
  <div className="rounded-[28px] bg-white/70 p-3 shadow-soft md:p-4">
    <div className="relative h-[340px] md:h-[460px]">
      <Image
        src="/home/vial-set.png"
        alt="Research peptide product display"
        fill
        priority
        sizes="(min-width: 1024px) 46vw, 100vw"
        className="object-contain"
      />
    </div>
  </div>
</div>
            </div>
          </Container>
        </section>

        <section className="py-10 lg:py-14">
          <Container>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {trustCards.map((card) => (
                <div key={card.title} className="feature-card">
                  <div className="text-lg font-extrabold tracking-tight text-ink">
                    {card.title}
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted">{card.copy}</p>
                </div>
              ))}
=======
                    href="/product/retatrutide"
                    className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft transition hover:-translate-y-0.5 hover:bg-panel"
                  >
                    View Retatrutide
                  </Link>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
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

              <div>
                {retatrutide ? (
                  <div className="overflow-hidden rounded-xl3 border border-line bg-white shadow-lift">
                    <div className="relative h-[300px] w-full bg-panel md:h-[360px]">
                      <Image
                        src={retatrutide.image}
                        alt={retatrutide.name}
                        fill
                        priority
                        sizes="(min-width: 1024px) 46vw, 100vw"
                        className="object-contain object-center p-6"
                      />

                      <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold text-ink shadow-soft">
                        Featured product
                      </div>

                      <div className="absolute right-4 top-4 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-extrabold text-emerald-700 shadow-soft">
                        In stock
                      </div>
                    </div>

                    <div className="border-t border-line p-5">
                      <div className="text-xs font-extrabold uppercase tracking-wide text-muted">
                        Most viewed route
                      </div>

                      <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ink">
                        Retatrutide 40mg
                      </h2>

                      <p className="mt-2 text-sm text-muted">
                        One of the most viewed products on the site with a direct path
                        into product detail, cart, and secure checkout.
                      </p>

                      <div className="mt-4 flex items-end justify-between gap-4">
                        <div>
                          <div className="text-sm font-semibold text-muted">
                            1 pre-filled pen
                          </div>
                          <div className="mt-1 text-2xl font-extrabold text-ink">
                            £{retatrutide.priceGBP.toFixed(2)}
                          </div>
                        </div>

                        <Link
                          href="/product/retatrutide"
                          className="rounded-xl2 bg-accent px-5 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                        >
                          View product
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
            </div>
          </Container>
        </section>

<<<<<<< HEAD
        <section className="py-10 lg:py-14">
=======
        <section className="bg-white/80 py-10 backdrop-blur-sm lg:py-14">
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="section-title">Best sellers</h2>
                <p className="mt-2 max-w-2xl text-sm text-muted">
<<<<<<< HEAD
                  Start with the most viewed products in the current range.
                </p>
              </div>

              <Link href="/shop" className="text-sm font-extrabold text-ink/80 hover:text-ink">
=======
                  Start with the products customers are already viewing most.
                </p>
              </div>

              <Link
                href="/shop"
                className="text-sm font-extrabold text-ink/80 hover:text-ink"
              >
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
                Browse all products →
              </Link>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {featuredProducts.map((p) => (
<<<<<<< HEAD
                <ProductCard key={p.id} p={p} imageOverride={p.gallery?.[1] ?? p.image} />
=======
                <ProductCard
                  key={p.id}
                  p={p}
                  imageOverride={p.gallery?.[1] ?? p.image}
                />
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
              ))}
            </div>
          </Container>
        </section>

        <section className="py-10 lg:py-14">
          <Container>
<<<<<<< HEAD
=======
            <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div>
                  <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent">
                    Featured route
                  </div>

                  <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
                    Buy Retatrutide UK
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-muted md:text-base">
                    Retatrutide 40mg is one of the strongest routes on the site.
                    Use the main product page for price, stock status, and checkout,
                    or go directly into the dedicated UK route.
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

                <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  <div className="rounded-xl2 border border-line bg-panel p-4 text-sm font-semibold text-ink">
                    Fast product access
                  </div>
                  <div className="rounded-xl2 border border-line bg-panel p-4 text-sm font-semibold text-ink">
                    Secure card checkout
                  </div>
                  <div className="rounded-xl2 border border-line bg-panel p-4 text-sm font-semibold text-ink">
                    Order tracking available
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-10 lg:py-14">
          <Container>
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="section-title">Shop by category</h2>
                <p className="mt-2 max-w-2xl text-sm text-muted">
<<<<<<< HEAD
                  Move quickly into the part of the catalogue most relevant to your research workflow.
                </p>
              </div>

              <Link href="/shop" className="text-sm font-extrabold text-ink/80 hover:text-ink">
=======
                  Start with the main product categories and go directly into the
                  products that matter.
                </p>
              </div>

              <Link
                href="/shop"
                className="text-sm font-extrabold text-ink/80 hover:text-ink"
              >
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
                View full catalogue →
              </Link>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              {categoryCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group overflow-hidden rounded-xl3 border border-line bg-white shadow-soft transition duration-200 hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <div className="relative h-[240px] w-full bg-panel md:h-[300px]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-contain p-4 transition duration-300 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="p-5">
<<<<<<< HEAD
                    <h3 className="text-lg font-extrabold tracking-tight text-ink">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-muted">{card.copy}</p>
                    <div className="mt-4 text-sm font-extrabold text-ink">View category →</div>
=======
                    <h3 className="text-lg font-extrabold tracking-tight">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{card.copy}</p>
                    <div className="mt-4 text-sm font-extrabold text-ink">
                      View category →
                    </div>
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-10 backdrop-blur-sm lg:py-14">
          <Container>
<<<<<<< HEAD
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <div className="eyebrow">Research guides</div>
                <h2 className="mt-4 section-title">
                  Explore the main research guides and category pages.
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-muted">
                  Use these pages to explore broader topics, compare categories, and move into
                  relevant product lines more quickly.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {guideLinks.map((item) => (
                <Link key={item.href} href={item.href} className="surface-card p-5">
                  <div className="text-lg font-extrabold text-ink">{item.title}</div>
                  <p className="mt-2 text-sm leading-7 text-muted">{item.copy}</p>
                  <div className="mt-4 text-sm font-extrabold text-ink">Open page →</div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-10 lg:py-14">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
              <div>
                <h2 className="section-title">Common questions</h2>
=======
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
              <div>
                <h2 className="section-title">Common questions</h2>

>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
                <div className="mt-6 grid gap-5">
                  {faqItems.map((item) => (
                    <div
                      key={item.question}
                      className="rounded-xl2 border border-line bg-white p-5 shadow-soft"
                    >
<<<<<<< HEAD
                      <h3 className="text-base font-extrabold text-ink">{item.question}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted">{item.answer}</p>
=======
                      <h3 className="text-base font-extrabold">{item.question}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted">
                        {item.answer}
                      </p>
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
                    </div>
                  ))}
                </div>
              </div>

<<<<<<< HEAD
              <div className="glass-card p-6">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                  Need help before ordering?
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Browse the catalogue, review quality information, track an existing order, or
                  contact support directly.
=======
              <div className="rounded-xl3 border border-line bg-panel p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight">
                  Need a fast route?
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  Start with the products people are already searching for, or
                  browse the full catalogue.
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
                </p>

                <div className="mt-6 grid gap-3">
                  <Link
<<<<<<< HEAD
                    href="/shop"
                    className="rounded-xl2 bg-accent px-5 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                  >
                    Browse all products
                  </Link>
                  <Link
                    href="/quality-assurance"
                    className="rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                  >
                    Quality & documentation
                  </Link>
=======
                    href="/product/retatrutide"
                    className="rounded-xl2 bg-accent px-5 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                  >
                    View Retatrutide
                  </Link>

                  <Link
                    href="/shop"
                    className="rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                  >
                    Browse all products
                  </Link>

>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
                  <Link
                    href="/order-status"
                    className="rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                  >
                    Track an order
                  </Link>
<<<<<<< HEAD
                  <Link
                    href="/contact"
                    className="rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                  >
                    Contact support
                  </Link>
=======
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
<<<<<<< HEAD
=======

>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
      <Footer />
    </div>
  );
}