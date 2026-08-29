import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

const pageUrl = "https://www.peptideproducts.co.uk/regenerative-peptides";

export const metadata: Metadata = {
  title: "Regenerative Peptides UK | BPC-157, TB-500 & GHK-CU",
  description:
    "Browse regenerative peptides in the UK including BPC-157, TB-500 and GHK-CU research-use-only laboratory compounds with quality and ordering information.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Regenerative Peptides UK | BPC-157, TB-500 & GHK-CU",
    description:
      "Browse regenerative peptides in the UK including BPC-157, TB-500 and GHK-CU research-use-only laboratory compounds with quality and ordering information.",
    url: pageUrl,
    siteName: "Peptide Products",
  },
};

const products = [
  {
    "name": "BPC-157 10mg",
    "href": "/product/bpc-157-10mg",
    "role": "Higher-strength BPC-157 product page.",
    "copy": "Open the BPC-157 10mg listing for pack details, price, stock status, and ordering information."
  },
  {
    "name": "BPC-157 5mg",
    "href": "/product/bpc-157-5mg",
    "role": "Alternative BPC-157 format for comparison.",
    "copy": "Review the BPC-157 5mg page for product size, quality documentation, and checkout details."
  },
  {
    "name": "BPC-157 UK guide",
    "href": "/bpc-157-uk",
    "role": "UK-focused informational support page.",
    "copy": "Read BPC-157 UK guidance and continue to the available product listings."
  },
  {
    "name": "GHK-CU 100mg",
    "href": "/product/ghk-cu-100mg",
    "role": "Copper peptide product page.",
    "copy": "View the GHK-CU 100mg product page for pack format, price, documentation, and ordering information."
  },
  {
    "name": "GHK-CU 50mg",
    "href": "/product/ghk-cu-50mg",
    "role": "Alternative GHK-CU size for comparison.",
    "copy": "Compare the GHK-CU 50mg page with the 100mg listing and related category information."
  },
  {
    "name": "TB-500 UK guide",
    "href": "/tb-500-uk",
    "role": "Supporting regenerative peptide guide page.",
    "copy": "Read TB-500 UK research-use-only information and related regenerative peptide context."
  }
] as const;

const guidanceCards = [
  {
    "title": "Better category depth",
    "copy": "The page now works as a true landing page with comparison content, product links, documentation context, and FAQs."
  },
  {
    "title": "Product comparison",
    "copy": "BPC-157 and GHK-CU size variations are linked directly so customers can compare pack information before ordering."
  },
  {
    "title": "Quality pathway",
    "copy": "The category sends users toward the quality page where available documentation and test reports can be reviewed."
  }
] as const;

const faqs = [
  {
    "q": "Which regenerative peptides are listed?",
    "a": "Peptide Products lists regenerative category pages and products including BPC-157, GHK-CU, TB-500 information, and related research-use-only product listings depending on stock."
  },
  {
    "q": "What is the difference between the BPC-157 product pages?",
    "a": "The BPC-157 pages separate product sizes, allowing customers to review pack format, price, documentation, and stock status for each listing."
  },
  {
    "q": "Can I review documentation before ordering?",
    "a": "Selected product pages and the quality information page include available reports or supporting documents where provided."
  },
  {
    "q": "Are regenerative peptides supplied for treatment use?",
    "a": "No. Products are supplied strictly for laboratory, analytical, and scientific research use only and are not supplied for treatment, diagnosis, or personal use."
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
        name: "Regenerative Peptides",
        item: pageUrl,
      },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Regenerative peptides UK",
    url: pageUrl,
    description:
      "UK regenerative peptide category page for BPC-157, TB-500, GHK-CU and related research-use-only product information.",
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
            <div className="eyebrow">Regenerative research category</div>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              Regenerative peptides UK
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-muted">
              Browse regenerative peptide pages for UK laboratory and analytical research customers. This category connects BPC-157, TB-500, GHK-CU, and supporting quality information in a clearer product hierarchy.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
              The content is written for research procurement and product comparison only. Products are supplied strictly for laboratory, analytical, and scientific research use and are not intended for personal, clinical, human, or veterinary use.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
              >
                Browse all products
              </Link>

              <Link
                href="/product/bpc-157-10mg"
                className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
              >
                View BPC-157 10mg
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
                Compare regenerative research peptide pages
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                Use this table to move from the broad regenerative category into the most relevant product or guide page, including BPC-157, TB-500 and GHK-CU information.
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
                Regenerative peptide research hub
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                These links support the regenerative peptide category with clear routes to product details, UK-focused guide pages, available documentation, and checkout information.
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
                Regenerative peptides FAQs
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
