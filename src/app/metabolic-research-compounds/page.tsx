import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

const pageUrl = "https://www.peptideproducts.co.uk/metabolic-research-compounds";

export const metadata: Metadata = {
  title: "Metabolic Research Compounds UK",
  description:
    "Browse metabolic research compounds in the UK, including Retatrutide, Tirzepatide, NAD and related laboratory research-use-only products.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Metabolic Research Compounds UK",
    description:
      "Browse metabolic research compounds in the UK, including Retatrutide, Tirzepatide, NAD and related laboratory research-use-only products.",
    url: pageUrl,
    siteName: "Peptide Products",
  },
};

const products = [
  {
    "name": "Retatrutide 40mg",
    "href": "/product/retatrutide",
    "role": "Primary metabolic research product and main commercial page.",
    "copy": "Open the main Retatrutide product page for current price, stock, product image, test report, and checkout."
  },
  {
    "name": "Retatrutide information hub",
    "href": "/retatrutide",
    "role": "Main informational support page for Retatrutide searches.",
    "copy": "Read the main Retatrutide hub covering UK information, product links, price guidance, and research-use wording."
  },
  {
    "name": "Tirzepatide TR10 10mg",
    "href": "/product/tirzepatide-tr10-10mg",
    "role": "Current 10mg Tirzepatide research vial.",
    "copy": "Review Tirzepatide TR10 product details, pack format, price, availability, and ordering information."
  },
  {
    "name": "Tirzepatide TR15 15mg",
    "href": "/product/tirzepatide-tr15-15mg",
    "role": "Current 15mg Tirzepatide research vial.",
    "copy": "Compare the Tirzepatide TR15 listing with TR10 and other metabolic research products."
  },
  {
    "name": "NAD 500mg",
    "href": "/product/nad-500mg",
    "role": "Metabolic support research product listing.",
    "copy": "View NAD 500mg product information, pack details, quality documentation, and checkout options."
  },
  {
    "name": "Melanotan MT-2 10mg",
    "href": "/product/melanotan-mt2-10mg",
    "role": "Additional metabolic category product page.",
    "copy": "Open Melanotan MT-2 product details, availability, ordering information, and research-use-only notes."
  }
] as const;

const guidanceCards = [
  {
    "title": "Retatrutide priority",
    "copy": "Retatrutide is kept as the leading internal-link target from this category, with supporting content that sends users toward the main product page."
  },
  {
    "title": "Clear product roles",
    "copy": "Each page in this category has a separate purpose: product, price, information, supplier guidance, or category comparison."
  },
  {
    "title": "Research-use-only supply",
    "copy": "All content is written for laboratory and analytical research procurement, avoiding clinical, personal-use, or treatment claims."
  }
] as const;

const faqs = [
  {
    "q": "Which metabolic product is the main Peptide Products listing?",
    "a": "Retatrutide 40mg is the priority metabolic research product page and should be used to check current product details, price, stock status, and documentation."
  },
  {
    "q": "Why are there multiple Retatrutide pages?",
    "a": "The Retatrutide pages are designed for different search intents, including the product listing, general information, price guidance, supplier guidance, and research-use context."
  },
  {
    "q": "Are metabolic research compounds supplied for human use?",
    "a": "No. Products are supplied strictly for laboratory, analytical, and scientific research use only and are not intended for human or veterinary use."
  },
  {
    "q": "Can customers compare Retatrutide with Tirzepatide products?",
    "a": "Yes. The category page links to Retatrutide, Tirzepatide TR10, Tirzepatide TR15, NAD, and related pages so customers can compare catalogue information before ordering."
  },
  {
    "q": "Where should Retatrutide buyers go first?",
    "a": "Customers looking for the current Retatrutide listing should start with the Retatrutide 40mg product page, then review price, quality, delivery, and FAQ pages if needed."
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
        name: "Metabolic Research Compounds",
        item: pageUrl,
      },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Metabolic research compounds UK",
    url: pageUrl,
    description:
      "UK metabolic research compounds hub for Retatrutide, Tirzepatide, NAD, Melanotan MT-2 and related research-use-only products.",
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
            <div className="eyebrow">Metabolic research category</div>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              Metabolic research compounds UK
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-muted">
              Explore metabolic research compounds supplied for laboratory, analytical, and scientific research-use-only environments in the UK. This category gives Retatrutide clear priority while also connecting related metabolic product pages such as Tirzepatide, NAD, Melanotan MT-2, and ML-10.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
              Every listing is positioned for research procurement, documentation review, product comparison, stock checking, and ordering support. Products are not supplied for human use, veterinary use, diagnosis, treatment, cure, or prevention of disease.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
              >
                Browse all products
              </Link>

              <Link
                href="/product/retatrutide"
                className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
              >
                View Retatrutide 40mg
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
                Compare metabolic research product pages
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                This comparison table helps customers and search engines understand the role of each metabolic product page. Retatrutide remains the primary commercial product, with supporting pages built around related research-use-only catalogue items.
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
                Metabolic research product hub
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                Use this hub to move from broad metabolic research intent into specific product pages, Retatrutide guidance, quality information, and ordering support. This gives Retatrutide a strong internal link path without making every page repeat the same wording.
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
                Metabolic research compounds FAQs
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
