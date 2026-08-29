import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

const pageUrl = "https://www.peptideproducts.co.uk/nootropic-peptides";

export const metadata: Metadata = {
  title: "Nootropic Peptides UK | Semax & Selank",
  description:
    "Browse nootropic peptides in the UK including Semax and Selank research-use-only laboratory products with product, quality and ordering information.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nootropic Peptides UK | Semax & Selank",
    description:
      "Browse nootropic peptides in the UK including Semax and Selank research-use-only laboratory products with product, quality and ordering information.",
    url: pageUrl,
    siteName: "Peptide Products",
  },
};

const products = [
  {
    "name": "Semax UK guide",
    "href": "/semax-uk",
    "role": "Main Semax informational support page.",
    "copy": "Read Semax UK research-use-only information and follow links to relevant product details."
  },
  {
    "name": "Selank UK guide",
    "href": "/selank-uk",
    "role": "Main Selank informational support page.",
    "copy": "Open the Selank UK guide for product context, ordering support, and research-use-only wording."
  },
  {
    "name": "Selank SK10 10mg",
    "href": "/product/selank-sk10-10mg",
    "role": "Selank product page with 10mg format.",
    "copy": "View Selank SK10 10mg product information, price, stock status, and available documentation."
  },
  {
    "name": "Selank SK5 5mg",
    "href": "/product/selank-sk5-5mg",
    "role": "Selank product page with 5mg format.",
    "copy": "Compare Selank SK5 5mg pack details, price, product image, and checkout information."
  }
] as const;

const guidanceCards = [
  {
    "title": "Distinct guide pages",
    "copy": "Semax and Selank guide pages are separated from product pages so the site can target both informational and product intent."
  },
  {
    "title": "Cleaner internal links",
    "copy": "The category links users into the most relevant guide, product, quality, and shop pages without repeating the same content."
  },
  {
    "title": "Research-only language",
    "copy": "The content avoids personal-use claims and keeps every nootropic peptide reference within laboratory research wording."
  }
] as const;

const faqs = [
  {
    "q": "Which nootropic peptides are available?",
    "a": "Peptide Products lists Semax and Selank related research pages, plus Selank product formats where stock and documentation are available."
  },
  {
    "q": "Are Semax and Selank pages product pages or guide pages?",
    "a": "The Semax UK and Selank UK pages are guide pages. Individual product URLs provide product-specific details such as pack size, price, and stock status."
  },
  {
    "q": "Are nootropic peptides supplied for personal use?",
    "a": "No. They are supplied strictly for laboratory, analytical, and scientific research use only."
  },
  {
    "q": "Where can I check documentation?",
    "a": "Use the product page first, then review the quality and documentation page for available reports and supporting files."
  }
] as const;

export default function Page() {
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
        name: "Nootropic Peptides",
        item: pageUrl,
      },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Nootropic peptides UK",
    url: pageUrl,
    description:
      "UK nootropic peptide category page for Semax, Selank and related research-use-only product information.",
    isPartOf: {
      "@type": "WebSite",
      name: "Peptide Products",
      url: "https://www.peptideproducts.co.uk",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: products.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: `https://www.peptideproducts.co.uk${item.href}`,
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, collectionSchema, faqSchema]) }}
      />

      <Header />

      <main className="py-14">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="eyebrow">Nootropic research category</div>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              Nootropic peptides UK
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-muted">
              Browse nootropic peptide pages for UK laboratory and analytical research customers. This category connects Semax and Selank product pages with guide content, documentation pathways, and ordering support.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
              All wording is limited to research-use-only product information and catalogue guidance. Products are not supplied for human use, veterinary use, clinical use, treatment, diagnosis, cure, or prevention of disease.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
              >
                Browse all products
              </Link>

              <Link
                href="/selank-uk"
                className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
              >
                View Selank guide
              </Link>

              <Link
                href="/quality-assurance"
                className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
              >
                Quality & documentation
              </Link>
            </div>

            <section className="mt-12 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Compare nootropic research peptide pages
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                Semax and Selank have their own guide and product pathways so customers can review the correct product listing, pack size, availability, and supporting information before ordering.
              </p>
              <div className="mt-6 overflow-hidden rounded-xl2 border border-line">
                <table className="w-full text-left text-sm">
                  <thead className="bg-panel text-ink">
                    <tr>
                      <th className="px-4 py-3 font-extrabold">Product or guide</th>
                      <th className="px-4 py-3 font-extrabold">Research category role</th>
                      <th className="px-4 py-3 font-extrabold">Open</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line bg-white text-muted">
                    {products.map((item) => (
                      <tr key={item.href}>
                        <td className="px-4 py-3 font-bold text-ink">{item.name}</td>
                        <td className="px-4 py-3">{item.role}</td>
                        <td className="px-4 py-3">
                          <Link href={item.href} className="font-extrabold text-accent hover:text-ink">
                            View →
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mt-8 grid gap-5 md:grid-cols-3">
              {guidanceCards.map((item) => (
                <div key={item.title} className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                  <h2 className="text-xl font-extrabold text-ink">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.copy}</p>
                </div>
              ))}
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Nootropic peptide research hub
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                This hub strengthens the nootropic category by linking guide pages, product pages, documentation, and ordering support from one search-focused landing page.
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {products.map((item) => (
                  <Link key={item.href} href={item.href} className="surface-card p-5">
                    <div className="font-extrabold text-ink">{item.name}</div>
                    <p className="mt-2 text-sm leading-6 text-muted">{item.copy}</p>
                    <div className="mt-4 text-sm font-extrabold text-ink">Open page →</div>
                  </Link>
                ))}
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Nootropic peptides FAQs
              </h2>
              <div className="mt-5 grid gap-4">
                {faqs.map((item) => (
                  <div key={item.q} className="rounded-xl2 border border-line bg-panel p-4">
                    <h3 className="text-sm font-extrabold text-ink">{item.q}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
