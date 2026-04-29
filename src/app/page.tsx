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
  title: "Premium Research Peptides & Laboratory Compounds UK",
  description:
    "Research-use-only peptides and laboratory compounds supplied in the UK with secure checkout, tracked dispatch, with documentation available on selected product lines.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk",
  },
  openGraph: {
    title: "Premium Research Peptides UK | Peptide Products",
    description:
      "Research-use-only peptides supplied in the UK with secure checkout, tracked dispatch, and certificates of purity available on selected lines.",
    url: "https://www.peptideproducts.co.uk",
    siteName: "Peptide Products",
    images: [
      {
        url: "https://www.peptideproducts.co.uk/home/vial-set.png",
        width: 1400,
        height: 1080,
        alt: "Peptide Products research peptide range",
      },
    ],
  },
};

const categoryCards = [
  {
    title: "Metabolic research peptides",
    copy: "Explore Retatrutide, Tirzepatide, NAD, and related research-use-only product lines.",
    image: "/products/retatrutide-40mg-uk.jpg",
    href: "/research-peptides",
  },
  {
    title: "Regenerative compounds",
    copy: "Browse BPC-157, GHK-CU, and related lines used in regeneration-focused research settings.",
    image: "/products/ghk-cu-100mg.webp",
    href: "/regenerative-peptides",
  },
  {
    title: "Hydration & support products",
    copy: "Shop bacteriostatic water and support items used alongside laboratory preparation workflows.",
    image: "/products/bac-water-10ml.webp",
    href: "/hydration-peptides",
  },
] as const;

const trustCards = [
  {
    title: "Quality information available",
    copy: "Selected product pages include supporting documentation so you can review available quality information before ordering.",
  },
  {
    title: "Tracked UK delivery",
    copy: "Orders are prepared for UK dispatch and tracking details are provided once shipment is confirmed.",
  },
  {
    title: "Secure payment options",
    copy: "Pay securely by card through Stripe, with additional payment options available at checkout.",
  },
  {
    title: "Pre-order support",
    copy: "Questions before ordering? Contact support directly by email or phone for help with products, ordering, and delivery.",
  },
] as const;

const reviewCards = [
  {
    name: "James, UK",
    text: "Fast delivery and secure packaging. Very smooth ordering process.",
  },
  {
    name: "A. R., UK",
    text: "Order arrived quickly and everything was packed well.",
  },
  {
    name: "Michael, UK",
    text: "Clear communication, easy checkout, and a good overall experience.",
  },
] as const;

const helpLinks = [
  {
    title: "Browse all products",
    copy: "View the full catalogue and compare the current peptide and support product range.",
    href: "/shop",
  },
  {
    title: "Quality & documentation",
    copy: "Review the quality page and check which lines include supporting documentation.",
    href: "/quality-assurance",
  },
  {
    title: "Shipping information",
    copy: "See dispatch and delivery details before placing an order.",
    href: "/shipping",
  },
  {
    title: "Questions before ordering?",
    copy: "Contact support for product, payment, and delivery questions.",
    href: "/contact",
  },
] as const;

const faqItems = [
  {
    question: "Are these products listed for human use?",
    answer:
      "No. All products are listed and supplied strictly for laboratory, analytical, and scientific research use only.",
  },
  {
    question: "Can I review documentation before ordering?",
    answer:
      "Yes. Selected product pages include certificate files directly on the page where documentation is available.",
  },
  {
    question: "Do you offer secure checkout?",
    answer:
      "Yes. Card payment uses Stripe from the cart, and alternative bank transfer or cryptocurrency options are also available.",
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

  return (
    <div>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        <section className="relative overflow-hidden py-12 lg:py-18">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-hero opacity-90" />
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
              <div>
                <div className="eyebrow">
                  UK research-use-only peptide store
                  <span className="h-2 w-2 rounded-full bg-accent2" />
                </div>

                <h1 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl lg:leading-[1.05]">
                  Research-use-only peptides for UK laboratories.
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-7 text-muted md:text-lg">
                  Browse research-use-only peptide products with secure checkout, tracked UK dispatch,
                  and documentation available on selected lines.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/shop"
                    className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-accent/90"
                  >
                    Shop products
                  </Link>

                  <Link
                    href="/quality-assurance"
                    className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft transition hover:-translate-y-0.5 hover:bg-panel"
                  >
                    Quality & documentation
                  </Link>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="trust-pill">Research use only</span>
                  <span className="trust-pill">Documentation available on selected lines</span>
                  <span className="trust-pill">Tracked UK dispatch</span>
                  <span className="trust-pill">Secure checkout</span>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl3 border border-line bg-white shadow-soft">
                <div className="relative h-[320px] md:h-[460px]">
                  <Image
                    src="/home/vial-set.png"
                    alt="Research peptide product display"
                    fill
                    priority
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className="object-contain p-4 md:p-6"
                  />
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
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-10 backdrop-blur-sm lg:py-14">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <div className="eyebrow">Customer reviews</div>
                <h2 className="mt-4 section-title">What customers are saying.</h2>
                <p className="mt-2 max-w-2xl text-sm text-muted">
                  Feedback from customers who have already ordered from Peptide Products.
                </p>
              </div>

              <Link href="/reviews" className="text-sm font-extrabold text-ink/80 hover:text-ink">
                View all reviews →
              </Link>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {reviewCards.map((review) => (
                <div
                  key={review.name}
                  className="rounded-xl3 border border-line bg-white p-5 shadow-soft"
                >
                  <div className="text-lg font-extrabold text-ink">★★★★★</div>
                  <p className="mt-3 text-sm leading-7 text-muted">{review.text}</p>
                  <div className="mt-4 text-sm font-extrabold text-ink">{review.name}</div>
                </div>
              ))}
            </div>
          </Container>
        </section>
        <section className="bg-white/80 py-10 backdrop-blur-sm lg:py-14">
  <Container>
    <div className="flex flex-wrap items-end justify-between gap-6">
      <div>
        <div className="eyebrow">Research categories</div>
        <h2 className="mt-4 section-title">
          Popular research compounds in the UK.
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Explore key research-use-only pages covering peptides, metabolic
          research compounds, and laboratory supply information for UK customers.
        </p>
      </div>
    </div>

    <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <Link href="/retatrutide-uk" className="surface-card p-5">
        <div className="text-lg font-extrabold text-ink">Retatrutide UK</div>
        <p className="mt-2 text-sm leading-7 text-muted">
          View Retatrutide availability, product access, and ordering information.
        </p>
        <div className="mt-4 text-sm font-extrabold text-ink">Open page →</div>
      </Link>

      <Link href="/tirzepatide-uk" className="surface-card p-5">
        <div className="text-lg font-extrabold text-ink">Tirzepatide UK</div>
        <p className="mt-2 text-sm leading-7 text-muted">
          Review Tirzepatide product information, availability, and related pages.
        </p>
        <div className="mt-4 text-sm font-extrabold text-ink">Open page →</div>
      </Link>

      <Link href="/buy-peptides-uk" className="surface-card p-5">
        <div className="text-lg font-extrabold text-ink">Buy peptides UK</div>
        <p className="mt-2 text-sm leading-7 text-muted">
          Browse peptide product pages and laboratory research supply information.
        </p>
        <div className="mt-4 text-sm font-extrabold text-ink">Open page →</div>
      </Link>

      <Link href="/metabolic-research-compounds" className="surface-card p-5">
        <div className="text-lg font-extrabold text-ink">
          Metabolic research compounds
        </div>
        <p className="mt-2 text-sm leading-7 text-muted">
          Explore metabolic pathway research materials and related product pages.
        </p>
        <div className="mt-4 text-sm font-extrabold text-ink">Open page →</div>
      </Link>
    </div>
  </Container>
</section>

        <section className="py-10 lg:py-14">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="section-title">Best sellers</h2>
                <p className="mt-2 max-w-2xl text-sm text-muted">
                  Explore some of the most popular products in the current range.
                </p>
              </div>

              <Link href="/shop" className="text-sm font-extrabold text-ink/80 hover:text-ink">
                Browse all products →
              </Link>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {featuredProducts.map((p) => (
                <ProductCard key={p.id} p={p} imageOverride={p.gallery?.[1] ?? p.image} />
              ))}
            </div>
          </Container>
        </section>

        <section className="py-10 lg:py-14">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="section-title">Shop by category</h2>
                <p className="mt-2 max-w-2xl text-sm text-muted">
                  Move quickly into the part of the catalogue most relevant to your research needs.
                </p>
              </div>

              <Link href="/shop" className="text-sm font-extrabold text-ink/80 hover:text-ink">
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
                    <h3 className="text-lg font-extrabold tracking-tight text-ink">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-muted">{card.copy}</p>
                    <div className="mt-4 text-sm font-extrabold text-ink">View category →</div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-10 backdrop-blur-sm lg:py-14">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <div className="eyebrow">Helpful links</div>
                <h2 className="mt-4 section-title">Everything you need before placing an order.</h2>
                <p className="mt-2 max-w-2xl text-sm text-muted">
                  Use these pages to browse products, review quality information, and check
                  delivery details before ordering.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {helpLinks.map((item) => (
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
                <div className="mt-6 grid gap-5">
                  {faqItems.map((item) => (
                    <div
                      key={item.question}
                      className="rounded-xl2 border border-line bg-white p-5 shadow-soft"
                    >
                      <h3 className="text-base font-extrabold text-ink">{item.question}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                  Questions before you place an order?
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Review the catalogue, check available quality information, track an existing
                  order, or contact support before purchasing.
                </p>

                <div className="mt-6 grid gap-3">
                  <Link
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
                  <Link
                    href="/order-status"
                    className="rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                  >
                    Track an order
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                  >
                    Contact support
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