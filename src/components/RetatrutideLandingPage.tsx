import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { RetatrutideRelatedLinks } from "@/components/RetatrutideRelatedLinks";
import type { RetatrutideSeoPage } from "@/data/retatrutideSeoPages";

type RetatrutideLandingPageProps = {
  page: RetatrutideSeoPage;
};

const productImage = "/products/reta single box.png";
const productImageAlt = "Retatrutide 40mg research peptide product packaging";

export function RetatrutideLandingPage({ page }: RetatrutideLandingPageProps) {
  const url = `https://www.peptideproducts.co.uk${page.path}`;

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.h1,
    url,
    description: page.description,
    isPartOf: {
      "@type": "WebSite",
      name: "Peptide Products",
      url: "https://www.peptideproducts.co.uk",
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://www.peptideproducts.co.uk/products/reta%20single%20box.png",
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
        name: page.h1,
        item: url,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([webpageSchema, breadcrumbSchema, faqSchema]),
        }}
      />

      <Header />

      <main>
        <section className="py-14">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <div className="text-sm text-muted">
                  <Link href="/" className="font-semibold hover:text-ink">
                    Home
                  </Link>
                  <span className="mx-2">/</span>
                  {page.h1}
                </div>

                <div className="mt-5 inline-flex rounded-full border border-premium/30 bg-premium/10 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.18em] text-premium">
                  {page.eyebrow}
                </div>

                <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
                  {page.h1}
                </h1>

                <p className="mt-5 max-w-3xl text-base leading-8 text-muted">
                  {page.intro}
                </p>

                <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
                  {page.supportCopy}
                </p>

                <div className="mt-6 rounded-xl2 border border-accent/20 bg-accent/5 p-4 text-sm font-bold leading-7 text-ink">
                  SEO purpose: {page.intentLabel}.
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={page.primaryCta.href}
                    className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                  >
                    {page.primaryCta.label} →
                  </Link>

                  <Link
                    href={page.secondaryCta.href}
                    className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                  >
                    {page.secondaryCta.label} →
                  </Link>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {page.quickFacts.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl2 border border-line bg-white p-4 text-sm font-semibold text-ink shadow-soft"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <aside className="rounded-xl3 border border-line bg-white p-4 shadow-soft">
                <div className="relative h-[380px] overflow-hidden rounded-xl2 bg-panel">
                  <Image
                    src={productImage}
                    alt={productImageAlt}
                    fill
                    priority
                    className="object-contain p-4"
                  />
                </div>

                <div className="mt-5 rounded-xl2 border border-line bg-panel p-5">
                  <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-accent">
                    Retatrutide 40mg pathway
                  </div>
                  <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ink">
                    Main product destination
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    For live price, stock status, product image, pack format,
                    and checkout details, use the Retatrutide 40mg product page.
                  </p>
                  <Link
                    href="/product/retatrutide"
                    className="mt-5 inline-flex rounded-xl2 bg-ink px-5 py-3 text-sm font-extrabold text-white hover:bg-ink/90"
                  >
                    Open Retatrutide product →
                  </Link>
                </div>
              </aside>
            </div>
          </Container>
        </section>

        <section className="pb-14">
          <Container>
            <div className="grid gap-6 lg:grid-cols-3">
              {page.sections.map((section) => (
                <article key={section.heading} className="surface-card p-6">
                  <h2 className="text-2xl font-extrabold tracking-tight">
                    {section.heading}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {section.body}
                  </p>
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
                    {section.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <section className="mt-12 rounded-xl3 border border-line bg-panel p-6 shadow-soft">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-extrabold tracking-tight">
                  Retatrutide page roles
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Retatrutide is the priority product, so the website uses a
                  cluster rather than one isolated page. These links keep each
                  page focused and help users move to the correct next step.
                </p>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <Link href="/product/retatrutide" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Product page</div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Live Retatrutide 40mg product details, price, stock, and checkout.
                  </p>
                </Link>
                <Link href="/retatrutide-price-uk" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Price guide</div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Cost, pack, and value-checking information before ordering.
                  </p>
                </Link>
                <Link href="/where-to-buy-retatrutide-uk" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Supplier guide</div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Trust checks, documentation, reviews, support, and UK delivery route.
                  </p>
                </Link>
                <Link href="/retatrutide-research-peptide" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Research guide</div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Laboratory-context information and research-use-only positioning.
                  </p>
                </Link>
              </div>
            </section>

            <section className="mt-12 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                {page.h1} FAQs
              </h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {page.faq.map((item) => (
                  <article key={item.question} className="rounded-xl2 border border-line bg-panel p-5">
                    <h3 className="font-extrabold text-ink">{item.question}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{item.answer}</p>
                  </article>
                ))}
              </div>
            </section>

            <RetatrutideRelatedLinks currentPath={page.path} />
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
