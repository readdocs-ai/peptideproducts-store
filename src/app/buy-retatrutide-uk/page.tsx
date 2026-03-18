import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Buy Retatrutide UK | Retatrutide 40mg Research Peptide | Peptide Products",
  description:
    "Buy Retatrutide UK research peptide. Explore the Retatrutide 40mg product page, supporting laboratory research content, and related peptide research pages at Peptide Products.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/buy-retatrutide-uk",
  },
  openGraph: {
    title: "Buy Retatrutide UK | Retatrutide 40mg Research Peptide | Peptide Products",
    description:
      "Buy Retatrutide UK research peptide and explore the Retatrutide 40mg product page, laboratory context, and related peptide research content.",
    url: "https://www.peptideproducts.co.uk/buy-retatrutide-uk",
    siteName: "Peptide Products",
    images: [
      {
        url: "https://www.peptideproducts.co.uk/products/retatrutide-40mg-uk.jpg",
        width: 1200,
        height: 900,
        alt: "Buy Retatrutide UK 40mg research peptide pen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Retatrutide UK | Retatrutide 40mg Research Peptide | Peptide Products",
    description:
      "Buy Retatrutide UK research peptide and explore the Retatrutide 40mg product page with related laboratory research content.",
    images: ["https://www.peptideproducts.co.uk/products/retatrutide-40mg-uk.jpg"],
  },
};

export default function Page() {
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Buy Retatrutide UK",
    url: "https://www.peptideproducts.co.uk/buy-retatrutide-uk",
    description:
      "Buy Retatrutide UK research peptide. Explore the Retatrutide 40mg product page, related research content, and broader peptide research pages.",
    isPartOf: {
      "@type": "WebSite",
      name: "Peptide Products",
      url: "https://www.peptideproducts.co.uk",
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://www.peptideproducts.co.uk/products/retatrutide-40mg-uk.jpg",
    },
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
        name: "Buy Retatrutide UK",
        item: "https://www.peptideproducts.co.uk/buy-retatrutide-uk",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is this Buy Retatrutide UK page for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "This page connects users searching for Buy Retatrutide UK with the main product listing, supporting retatrutide research content, and related peptide research pages.",
        },
      },
      {
        "@type": "Question",
        name: "Is Retatrutide listed for laboratory research use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The product and related content are presented for laboratory and scientific research use only.",
        },
      },
      {
        "@type": "Question",
        name: "Where can I view the Retatrutide product page?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Users can visit the Retatrutide 40mg product listing directly from this page using the internal product links.",
        },
      },
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([webpageSchema, breadcrumbSchema, faqSchema]),
        }}
      />

      <Header />

      <main>
        <section className="py-14">
          <Container>
            <div className="max-w-5xl">
              <div className="text-sm text-muted">
                <Link href="/" className="font-semibold hover:text-ink">
                  Home
                </Link>
                <span className="mx-2">/</span>
                Buy Retatrutide UK
              </div>

              <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
                Buy Retatrutide UK
              </h1>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                Buy retatrutide UK research peptide with a direct route into the{" "}
                <Link
                  href="/product/retatrutide"
                  className="font-semibold text-ink hover:text-accent"
                >
                  Retatrutide 40mg product page
                </Link>
                . This page supports users looking for retatrutide UK availability and
                connects commercial-intent searches with the main product listing,
                supporting research content, and wider peptide research pages.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                This Retatrutide 40mg research peptide listing is presented for
                laboratory and scientific research use only, supporting analytical and
                investigational workflows involving GLP-1, GIP, and glucagon receptor
                pathway research context.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
                For broader scientific context, read our{" "}
                <Link
                  href="/retatrutide-research-peptide"
                  className="font-semibold text-ink hover:text-accent"
                >
                  retatrutide research peptide
                </Link>{" "}
                guide, explore the{" "}
                <Link
                  href="/research-peptides-uk"
                  className="font-semibold text-ink hover:text-accent"
                >
                  research peptides UK
                </Link>{" "}
                page, or go directly to the{" "}
                <Link
                  href="/product/retatrutide"
                  className="font-semibold text-ink hover:text-accent"
                >
                  retatrutide 40mg product listing
                </Link>
                .
              </p>

              <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                <div className="overflow-hidden rounded-xl3 border border-line bg-panel p-4 shadow-soft">
                  <div className="relative h-[360px] w-full">
                    <Image
                      src="/products/retatrutide-40mg-uk.jpg"
                      alt="Buy Retatrutide UK 40mg research peptide pen"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>

                <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                  <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-muted">
                    Retatrutide research page
                  </div>
                  <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ink">
                    Direct path to the main Retatrutide product page
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    Users searching to{" "}
                    <span className="font-semibold text-ink">buy retatrutide UK</span>{" "}
                    can move directly from this page to the product listing, then into
                    supporting scientific content and broader peptide research pages.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/product/retatrutide"
                      className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                    >
                      View Retatrutide 40mg →
                    </Link>

                    <Link
                      href="/retatrutide-research-peptide"
                      className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                    >
                      Read research guide →
                    </Link>
                  </div>

                  <div className="mt-6 grid gap-3">
                    <div className="rounded-xl2 border border-line bg-panel p-4 text-sm font-semibold text-ink">
                      Research-use-only listing
                    </div>
                    <div className="rounded-xl2 border border-line bg-panel p-4 text-sm font-semibold text-ink">
                      UK-focused internal linking page
                    </div>
                    <div className="rounded-xl2 border border-line bg-panel p-4 text-sm font-semibold text-ink">
                      Connects product intent with supporting research content
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/product/retatrutide"
                  className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                >
                  View Retatrutide 40mg →
                </Link>

                <Link
                  href="/retatrutide-research-peptide"
                  className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                >
                  Read research guide →
                </Link>

                <Link
                  href="/research-peptides"
                  className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                >
                  Explore research peptides →
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Retatrutide UK research peptide supply
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Retatrutide is positioned within this site as a research-use-only
                peptide compound supplied for laboratory and scientific
                investigation. The page is designed to support users searching to{" "}
                <Link
                  href="/buy-retatrutide-uk"
                  className="font-semibold text-ink hover:text-accent"
                >
                  buy retatrutide UK
                </Link>{" "}
                while also directing them to the most relevant internal product and
                research resources.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                The product is presented as part of a broader peptide research
                catalogue covering antioxidant, hydration, firming, regenerative,
                and selected specialist compound lines. This creates a clearer topical
                relationship between retatrutide research, commercial-intent search,
                and broader peptide category content.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                Users arriving on this page are typically searching for retatrutide
                UK availability, product access, or research peptide supply. This page
                connects that intent with the official{" "}
                <Link
                  href="/product/retatrutide"
                  className="font-semibold text-ink hover:text-accent"
                >
                  Retatrutide 40mg research peptide pen
                </Link>{" "}
                listing and the{" "}
                <Link
                  href="/retatrutide-research-peptide"
                  className="font-semibold text-ink hover:text-accent"
                >
                  retatrutide research peptide guide
                </Link>
                .
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                For broader internal context, you can also explore{" "}
                <Link
                  href="/research-peptides"
                  className="font-semibold text-ink hover:text-accent"
                >
                  research peptides
                </Link>
                ,{" "}
                <Link
                  href="/research-peptides-uk"
                  className="font-semibold text-ink hover:text-accent"
                >
                  research peptides UK
                </Link>
                , and{" "}
                <Link
                  href="/buy-research-peptides-uk"
                  className="font-semibold text-ink hover:text-accent"
                >
                  buy research peptides UK
                </Link>
                .
              </p>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="max-w-5xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Why this page supports Retatrutide discovery
              </h2>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    Product-first internal path
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    This page links directly to the main Retatrutide product listing
                    to strengthen the path between search intent and product discovery.
                  </p>
                </div>

                <div className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    Supporting research context
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Internal links to the retatrutide research page help support
                    topical relevance around the compound and its research context.
                  </p>
                </div>

                <div className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    Broader peptide cluster links
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Links into related research peptide pages help reinforce category
                    authority and improve crawl pathways across the site.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-14 bg-white">
          <Container>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Related research pages
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <Link href="/product/retatrutide" className="surface-card p-5">
                <div className="font-extrabold text-ink">Retatrutide product</div>
                <p className="mt-2 text-sm text-muted">
                  View the Retatrutide 40mg research peptide product page.
                </p>
              </Link>

              <Link href="/retatrutide-research-peptide" className="surface-card p-5">
                <div className="font-extrabold text-ink">
                  Retatrutide research guide
                </div>
                <p className="mt-2 text-sm text-muted">
                  Scientific and structural context for retatrutide research.
                </p>
              </Link>

              <Link href="/research-peptides" className="surface-card p-5">
                <div className="font-extrabold text-ink">Research peptides</div>
                <p className="mt-2 text-sm text-muted">
                  Overview of peptide categories and compound lines.
                </p>
              </Link>

              <Link href="/buy-research-peptides-uk" className="surface-card p-5">
                <div className="font-extrabold text-ink">
                  Buy research peptides UK
                </div>
                <p className="mt-2 text-sm text-muted">
                  Broader commercial peptide research page.
                </p>
              </Link>

              <Link href="/research-peptides-uk" className="surface-card p-5">
                <div className="font-extrabold text-ink">
                  Research peptides UK
                </div>
                <p className="mt-2 text-sm text-muted">
                  UK-focused peptide research content and category support.
                </p>
              </Link>

              <Link href="/laboratory-peptide-compounds" className="surface-card p-5">
                <div className="font-extrabold text-ink">
                  Laboratory peptide compounds
                </div>
                <p className="mt-2 text-sm text-muted">
                  Broader laboratory compound page supporting topical authority.
                </p>
              </Link>

              <Link href="/research-peptide-supplier-uk" className="surface-card p-5">
                <div className="font-extrabold text-ink">
                  Research peptide supplier UK
                </div>
                <p className="mt-2 text-sm text-muted">
                  Supplier-focused supporting page for UK peptide discovery.
                </p>
              </Link>

              <Link href="/" className="surface-card p-5">
                <div className="font-extrabold text-ink">Homepage</div>
                <p className="mt-2 text-sm text-muted">
                  Return to the main site hub for products, categories, and research pages.
                </p>
              </Link>
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="max-w-4xl rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Common questions
              </h2>

              <div className="mt-6 grid gap-5">
                <div>
                  <h3 className="text-base font-extrabold">
                    What does this Buy Retatrutide UK page do?
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    It connects users searching for{" "}
                    <Link
                      href="/buy-retatrutide-uk"
                      className="font-semibold text-ink hover:text-accent"
                    >
                      buy retatrutide UK
                    </Link>{" "}
                    with the official product listing, related research content, and
                    supporting peptide pages.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-extrabold">
                    Where can I view the Retatrutide product page?
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    You can go directly to the{" "}
                    <Link
                      href="/product/retatrutide"
                      className="font-semibold text-ink hover:text-accent"
                    >
                      Retatrutide 40mg product page
                    </Link>{" "}
                    from the buttons and internal links on this page.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-extrabold">
                    What related pages should I read?
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    The most relevant supporting pages are{" "}
                    <Link
                      href="/retatrutide-research-peptide"
                      className="font-semibold text-ink hover:text-accent"
                    >
                      retatrutide research peptide
                    </Link>
                    ,{" "}
                    <Link
                      href="/research-peptides-uk"
                      className="font-semibold text-ink hover:text-accent"
                    >
                      research peptides UK
                    </Link>
                    , and{" "}
                    <Link
                      href="/buy-research-peptides-uk"
                      className="font-semibold text-ink hover:text-accent"
                    >
                      buy research peptides UK
                    </Link>
                    .
                  </p>
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