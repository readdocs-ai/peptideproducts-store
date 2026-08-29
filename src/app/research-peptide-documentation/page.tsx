import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { brand } from "@/theme/brand";

export const metadata: Metadata = {
  title: "Research Peptide Documentation",
  description:
    "Learn how to review research-use-only peptide product pages, test reports, quality information, shipping details, and support links from Peptide Products UK.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/research-peptide-documentation",
  },
  openGraph: {
    title: "Research Peptide Documentation",
    description:
      "A research-use-only guide to product pages, test reports, documentation, dispatch information, and support pathways from Peptide Products UK.",
    url: "https://www.peptideproducts.co.uk/research-peptide-documentation",
    siteName: "Peptide Products",
  },
};

const checks = [
  {
    title: "Confirm the product page",
    copy: "Review the product name, pack size, price, stock status, category, product image, and checkout information before ordering.",
  },
  {
    title: "Review available documentation",
    copy: "Where a test report or supporting quality file is available, use the quality page or linked product resources to review it before purchase.",
  },
  {
    title: "Check research-use-only wording",
    copy: "Peptide Products supplies products strictly for laboratory, analytical, and scientific research use only, not for human or veterinary use.",
  },
  {
    title: "Check dispatch and support",
    copy: "Review shipping information, payment confirmation steps, order-status tools, and contact details before placing an order.",
  },
] as const;

const faqs = [
  {
    q: "What documentation should customers review before ordering?",
    a: "Customers should review the product page, available test reports where provided, quality information, shipping details, FAQ, and research-use-only disclaimer before placing an order.",
  },
  {
    q: "Are all product lines supplied with test reports?",
    a: "Test report availability varies by product line. Where a report is available, Peptide Products links it from the quality information page or relevant product pathways.",
  },
  {
    q: "What is the main Retatrutide product pathway?",
    a: "The Retatrutide product page is the main product destination, supported by the Retatrutide research hub, UK guide, price guide, and supplier-checklist pages.",
  },
  {
    q: "Are Peptide Products items supplied for medical use?",
    a: "No. Products are supplied strictly for laboratory, analytical, and scientific research use only and are not supplied for human consumption, medical use, clinical use, veterinary use, or treatment purposes.",
  },
] as const;

const pathways = [
  { href: "/product/retatrutide", title: "Retatrutide product", copy: "Main product page for the lead Retatrutide line." },
  { href: "/retatrutide", title: "Retatrutide hub", copy: "Central research-use-only Retatrutide information page." },
  { href: "/quality-assurance", title: "Quality information", copy: "Available test reports and quality support links." },
  { href: "/shipping", title: "Shipping information", copy: "Dispatch, delivery, tracking, and order timing details." },
  { href: "/faq", title: "FAQ", copy: "Ordering, payment, documentation, and support questions." },
  { href: "/disclaimer", title: "Research-use disclaimer", copy: "Important research-use-only restrictions and product-use wording." },
] as const;

export default function ResearchPeptideDocumentationPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Research Peptide Documentation Guide",
      url: "https://www.peptideproducts.co.uk/research-peptide-documentation",
      description:
        "Research-use-only guide to product pages, available test reports, documentation, shipping information, and support pathways from Peptide Products UK.",
      publisher: {
        "@type": "Organization",
        name: brand.name,
        url: "https://www.peptideproducts.co.uk",
      },
      about: [
        "research peptide documentation",
        "peptide test reports",
        "research-use-only peptides",
        "Retatrutide research product information",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.peptideproducts.co.uk" },
        { "@type": "ListItem", position: 2, name: "Research peptide documentation", item: "https://www.peptideproducts.co.uk/research-peptide-documentation" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />

      <main className="py-10 lg:py-12">
        <Container>
          <section className="rounded-xl3 border border-line bg-white p-6 shadow-soft lg:p-8">
            <div className="eyebrow">Documentation guide</div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
              Research peptide documentation, test reports, and product checks.
            </h1>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-muted md:text-base">
              This guide explains how Peptide Products organises product pages, available test reports, shipping details, support links, and research-use-only information so customers can review key details before ordering.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted md:text-base">
              Products are supplied strictly for laboratory, analytical, and scientific research use only. They are not supplied for human consumption, medical use, veterinary use, clinical use, or treatment purposes.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="trust-pill">Research use only</span>
              <span className="trust-pill">Available test reports</span>
              <span className="trust-pill">Retatrutide pathway</span>
              <span className="trust-pill">UK support</span>
            </div>
          </section>

          <section className="mt-8 grid gap-4 md:grid-cols-2">
            {checks.map((item) => (
              <div key={item.title} className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <h2 className="text-lg font-extrabold tracking-tight text-ink">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{item.copy}</p>
              </div>
            ))}
          </section>

          <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
            <h2 className="text-2xl font-extrabold tracking-tight text-ink">Key product and documentation pathways</h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              These pages give AI search systems, search engines, and customers a clearer view of the Peptide Products catalogue, documentation, and research-use-only positioning.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {pathways.map((item) => (
                <Link key={item.href} href={item.href} className="surface-card p-5">
                  <div className="font-extrabold text-ink">{item.title}</div>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.copy}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
            <h2 className="text-2xl font-extrabold tracking-tight text-ink">Documentation FAQs</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {faqs.map((item) => (
                <div key={item.q} className="rounded-xl2 border border-line bg-panel p-4">
                  <h3 className="text-sm font-extrabold text-ink">{item.q}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
