import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { brand } from "@/theme/brand";
import { products } from "@/data/products";

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
    copy: "Explore hydration-focused peptide compounds and hyaluronic acid research lines used in formulation and compatibility studies.",
    image: "/home/home-feature-skinbooster-hyaluronic-acid.jpg",
    href: "/hydration-peptides",
  },
  {
    title: "Firming peptide blends",
    copy: "Browse elasticity and structure-focused peptide compounds studied in laboratory and formulation environments.",
    image: "/home/home-feature-meso-lift-firming.jpg",
    href: "/firming-peptides",
  },
  {
    title: "Repair and regenerative lines",
    copy: "View regeneration-focused compounds including collagen and PDRN laboratory product lines.",
    image: "/products/meso-pdrn-alt-cropped.jpg",
    href: "/regenerative-peptides",
  },
] as const;

const whyChooseCards = [
  {
    title: "Antioxidant and regeneration pathways",
    copy: "Research programmes may examine glutathione, vitamin C, PDRN, and collagen compounds when studying oxidative stress response, molecular repair, and compatibility behaviour.",
  },
  {
    title: "Hydration and carrier systems",
    copy: "Hydration-focused compounds such as hyaluronic acid blends are commonly reviewed in extracellular compatibility, formulation stability, and carrier-related laboratory work.",
  },
  {
    title: "Firming and structural research",
    copy: "Firming peptide blends may be examined in structural protein interaction, elasticity-related investigation, and broader formulation testing environments.",
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
    getProduct("meso-glutathione"),
    getProduct("skinbooster-hyaluronic-acid"),
    getProduct("meso-lift-firming"),
    getProduct("meso-collagen"),
    getProduct("meso-pdrn"),
    getProduct("meso-vitamin-c"),
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
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              organizationSchema,
              websiteSchema,
              faqSchema,
              breadcrumbSchema,
            ]),
          }}
        />

        <section className="relative overflow-hidden pb-12 pt-8 lg:pb-20 lg:pt-14">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-[-120px] top-[-100px] h-[280px] w-[280px] rounded-full bg-accent/15 blur-3xl" />
            <div className="absolute right-[-120px] top-[40px] h-[240px] w-[240px] rounded-full bg-accent2/15 blur-3xl" />
            <div className="absolute bottom-[-80px] left-1/3 h-[220px] w-[220px] rounded-full bg-accent/10 blur-3xl" />
          </div>

          <Container>
            <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/85 px-4 py-2 text-xs font-semibold text-muted shadow-soft backdrop-blur-sm">
                  Research use only • UK store • Order tracking available
                  <span className="h-2 w-2 rounded-full bg-accent2" />
                </div>

                <div className="mt-4 inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-extrabold text-white shadow-soft">
                  Free next day UK delivery
                </div>

                <h1 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl lg:leading-[1.05]">
                  <span className="block text-accent">Research peptides</span>
                  <span className="block text-ink">and laboratory compounds</span>
                  <span className="block text-ink">for scientific study.</span>
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg">
                  Browse antioxidant, hydration, firming, regenerative, and selected
                  specialist peptide compounds studied in laboratory environments
                  investigating molecular interaction, cellular response, compound
                  compatibility, and formulation behaviour.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/shop"
                    className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-accent/90"
                  >
                    Shop products
                  </Link>

                  <Link
                    href="/research-peptides"
                    className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft transition hover:-translate-y-0.5 hover:bg-panel"
                  >
                    Explore research hub
                  </Link>

                  <Link
                    href="/wholesale"
                    className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft transition hover:-translate-y-0.5 hover:bg-panel"
                  >
                    Wholesale enquiries
                  </Link>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl2 border border-line bg-white/85 p-4 text-sm font-semibold text-ink shadow-soft backdrop-blur-sm">
                    Research-use-only catalogue
                  </div>
                  <div className="rounded-xl2 border border-line bg-white/85 p-4 text-sm font-semibold text-ink shadow-soft backdrop-blur-sm">
                    Documentation on selected lines
                  </div>
                  <div className="rounded-xl2 border border-line bg-white/85 p-4 text-sm font-semibold text-ink shadow-soft backdrop-blur-sm">
                    UK checkout, email updates, and order tracking
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="overflow-hidden rounded-xl3 border border-line bg-white shadow-lift">
                  <div className="relative h-[460px] w-full bg-panel">
                    <Image
                      src={heroImage}
                      alt="Meso Glutathione research compound by Peptide Products"
                      fill
                      priority
                      fetchPriority="high"
                      sizes="(min-width: 1024px) 46vw, 100vw"
                      className="object-cover"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink/30 to-transparent" />
                  </div>

                  <div className="grid gap-4 border-t border-line p-5 sm:grid-cols-3">
                    <div>
                      <div className="text-xs font-extrabold uppercase tracking-wide text-muted">
                        Antioxidant-led line
                      </div>
                      <p className="mt-2 text-sm text-muted">
                        Glutathione-focused compounds are commonly reviewed in oxidative stress and antioxidant-related laboratory work.
                      </p>
                    </div>
                    <div>
                      <div className="text-xs font-extrabold uppercase tracking-wide text-muted">
                        Compound categories
                      </div>
                      <p className="mt-2 text-sm text-muted">
                        Explore hydration, firming, antioxidant, regenerative, and selected specialist research lines.
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
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="section-title">Shop by research category</h2>
                <p className="mt-2 max-w-2xl text-sm text-muted">
                  Explore the main research areas represented across antioxidant, hydration, firming, and regenerative compound lines.
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
                  <div className="relative h-[420px] w-full bg-panel">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition duration-300 group-hover:scale-[1.02]"
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
                <h2 className="section-title">Research peptide compounds</h2>
                <p className="mt-2 max-w-2xl text-sm text-muted">
                  Seven core compound lines shown with their primary pack imagery.
                </p>
              </div>
              <Link href="/shop" className="text-sm font-extrabold text-ink/80 hover:text-ink">
                Browse all products →
              </Link>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {featuredProducts.map((p) => (
                <Link
                  key={p.id}
                  href={`/product/${p.id}`}
                  className="group overflow-hidden rounded-xl3 border border-line bg-white shadow-soft transition duration-200 hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <div className="relative h-[420px] w-full bg-panel">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-300 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="p-5">
                    <div className="text-xs font-extrabold uppercase tracking-wide text-muted">
                      {p.category}
                    </div>
                    <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-ink">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{p.subtitle}</p>

                    <div className="mt-5 flex items-end justify-between gap-4">
                      <div>
                        <div className="text-sm font-semibold text-muted">{p.pack}</div>
                        <div className="mt-1 text-xl font-extrabold text-ink">
                          £{p.priceGBP.toFixed(2)}
                        </div>
                      </div>

                      <div className="text-sm font-extrabold text-ink">View product →</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="grid gap-6 lg:grid-cols-3">
              {whyChooseCards.map((item) => (
                <div key={item.title} className="surface-card p-6">
                  <h2 className="text-lg font-extrabold tracking-tight">{item.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.copy}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="section-title">Research guides</h2>
                <p className="mt-2 max-w-2xl text-sm text-muted">
                  Explore core research peptide topics and move into the most relevant compound
                  pages.
                </p>
              </div>

              <Link
                href="/research-peptides"
                className="text-sm font-extrabold text-ink/80 hover:text-ink"
              >
                View research hub →
              </Link>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <Link href="/research-peptides" className="surface-card p-5">
                <div className="text-sm font-extrabold text-ink">Research peptides</div>
                <p className="mt-2 text-sm text-muted">
                  Overview of antioxidant, hydration, firming, and regenerative compound lines.
                </p>
              </Link>

              <Link href="/antioxidant-peptides" className="surface-card p-5">
                <div className="text-sm font-extrabold text-ink">Antioxidant peptides</div>
                <p className="mt-2 text-sm text-muted">
                  Glutathione and vitamin C research compounds used in antioxidant laboratory study.
                </p>
              </Link>

              <Link href="/hydration-peptides" className="surface-card p-5">
                <div className="text-sm font-extrabold text-ink">Hydration peptides</div>
                <p className="mt-2 text-sm text-muted">
                  Hyaluronic acid and hydration-related compounds for formulation and compatibility research.
                </p>
              </Link>

              <Link href="/regenerative-peptides" className="surface-card p-5">
                <div className="text-sm font-extrabold text-ink">Regenerative peptides</div>
                <p className="mt-2 text-sm text-muted">
                  PDRN and collagen-focused compounds studied in regeneration-related laboratory environments.
                </p>
              </Link>

              <Link href="/firming-peptides" className="surface-card p-5">
                <div className="text-sm font-extrabold text-ink">Firming peptides</div>
                <p className="mt-2 text-sm text-muted">
                  Elasticity and structure-focused peptide blends used in firming-related research.
                </p>
              </Link>

              <Link href="/pdrn-research-peptide" className="surface-card p-5">
                <div className="text-sm font-extrabold text-ink">PDRN research peptide</div>
                <p className="mt-2 text-sm text-muted">
                  Regeneration-focused compound research and related product links.
                </p>
              </Link>

              <Link href="/glutathione-research-peptide" className="surface-card p-5">
                <div className="text-sm font-extrabold text-ink">Glutathione research peptide</div>
                <p className="mt-2 text-sm text-muted">
                  Antioxidant compound research, oxidative stress studies, and laboratory use.
                </p>
              </Link>

              <Link href="/hyaluronic-acid-peptide-research" className="surface-card p-5">
                <div className="text-sm font-extrabold text-ink">
                  Hyaluronic acid peptide research
                </div>
                <p className="mt-2 text-sm text-muted">
                  Hydration-related compound research and extracellular matrix study.
                </p>
              </Link>
            </div>
          </Container>
        </section>

        <section className="py-14 bg-white">
          <Container>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Research peptide guides
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <Link href="/research-peptides" className="rounded-xl3 border border-line p-5 shadow-soft">
                <div className="font-extrabold">Research peptides</div>
              </Link>

              <Link href="/research-peptides-uk" className="rounded-xl3 border border-line p-5 shadow-soft">
                <div className="font-extrabold">Research peptides UK</div>
              </Link>

              <Link href="/research-peptide-supplier-uk" className="rounded-xl3 border border-line p-5 shadow-soft">
                <div className="font-extrabold">Research peptide supplier UK</div>
              </Link>

              <Link href="/buy-research-peptides-uk" className="rounded-xl3 border border-line p-5 shadow-soft">
                <div className="font-extrabold">Buy research peptides UK</div>
              </Link>
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
              <div>
                <h2 className="section-title">Research compounds for laboratory investigation</h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  Research laboratories and analytical teams study peptide compounds to investigate
                  cellular behaviour, antioxidant activity, molecular signalling pathways, and
                  compound stability under controlled experimental conditions.
                </p>

                <p className="mt-4 text-sm leading-7 text-muted">
                  Common areas of investigation include glutathione antioxidant research,
                  hyaluronic acid hydration systems, PDRN regeneration compounds, collagen-focused
                  blends, and peptide formulations used in structural and compatibility studies.
                </p>

                <p className="mt-4 text-sm leading-7 text-muted">
                  These compound categories form the core of many laboratory peptide research
                  programmes and are widely analysed in biochemical, formulation, and experimental
                  research environments.
                </p>

                <Link
                  href="/research-peptides"
                  className="mt-6 inline-flex text-sm font-extrabold text-ink hover:text-accent"
                >
                  Explore research peptide compounds →
                </Link>
              </div>

              <div className="rounded-xl3 border border-line bg-panel p-6 shadow-soft">
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