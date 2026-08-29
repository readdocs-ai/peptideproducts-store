import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { brand } from "@/theme/brand";

export const metadata: Metadata = {
  title: "About Us | Peptide Products UK",
  description:
    "Peptide Products is a UK-based supplier of laboratory research compounds for analytical and scientific research use only. Learn about our ordering process, support, documentation, and research-use-only policy.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/about",
  },
};

const trustPoints = [
  {
    title: "UK-based supply",
    copy: "Peptide Products supports UK customers with clear product pages, tracked dispatch where available, and direct support before and after ordering.",
  },
  {
    title: "Research-use-only positioning",
    copy: "Products are supplied strictly for laboratory, analytical, and scientific research use only. They are not supplied for human or veterinary use.",
  },
  {
    title: "Clear ordering process",
    copy: "Customers can review product details, prices, stock status, payment options, shipping information, and order status pages before and after checkout.",
  },
  {
    title: "Support and documentation",
    copy: "Selected product lines include documentation where available, and customers can contact support before ordering if they need help reviewing information.",
  },
] as const;

export default function AboutPage() {
  const aboutSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: brand.name,
      url: "https://www.peptideproducts.co.uk",
      email: brand.supportEmail,
      telephone: brand.phone,
      sameAs: [],
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
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.peptideproducts.co.uk" },
        { "@type": "ListItem", position: 2, name: "About", item: "https://www.peptideproducts.co.uk/about" },
      ],
    },
  ];

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <Header />

      <main className="py-10 lg:py-12">
        <Container>
          <div className="mx-auto max-w-5xl">
            <section className="rounded-xl3 border border-line bg-white p-6 shadow-soft lg:p-8">
              <div className="eyebrow">About Peptide Products</div>

              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
                UK-based supplier of laboratory research compounds.
              </h1>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-muted md:text-base">
                Peptide Products is a UK-based supplier of laboratory research compounds and reference materials for analytical and scientific research use only, with Retatrutide as the lead product line in the current catalogue.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted md:text-base">
                Our focus is on clear product information, reliable ordering,
                secure checkout, available documentation where provided, and
                direct customer support before and after purchase.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="trust-pill">UK-based supplier</span>
                <span className="trust-pill">Research use only</span>
                <span className="trust-pill">Secure checkout</span>
                <span className="trust-pill">Tracked dispatch available</span>
                <span className="trust-pill">Support before ordering</span>
              </div>
            </section>

            <section className="mt-8 grid gap-4 md:grid-cols-2">
              {trustPoints.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl3 border border-line bg-white p-6 shadow-soft"
                >
                  <h2 className="text-lg font-extrabold tracking-tight text-ink">
                    {item.title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {item.copy}
                  </p>
                </div>
              ))}
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                What we supply
              </h2>

              <p className="mt-3 text-sm leading-7 text-muted">
                The catalogue includes laboratory research compounds, peptide research products, and related support supplies, with dedicated pages for Retatrutide, Tirzepatide, BPC-157, GHK-CU, NAD, Glutathione, Selank, Melanotan MT-2, and support products. Product pages are
                designed to show pack size, price, stock status, product images,
                quick facts, and available documentation where provided.
              </p>

              <p className="mt-3 text-sm leading-7 text-muted">
                Customers can browse the shop, review product-specific pages, read
                shipping information, and contact support before placing an order.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/shop"
                  className="rounded-xl2 bg-accent px-5 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                >
                  Browse products
                </Link>

                <Link
                  href="/quality-assurance"
                  className="rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                >
                  Quality & documentation
                </Link>
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                Key catalogue pathways
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted">
                The site is organised around clear buying and research-intent pathways. The Retatrutide product page remains the main product destination, while the Retatrutide hub, price guide, UK availability guide, and supplier checklist support different search intents.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <Link href="/product/retatrutide" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Retatrutide product</div>
                  <p className="mt-2 text-sm text-muted">Main listing for product details, price, checkout and available test report.</p>
                </Link>
                <Link href="/retatrutide" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Retatrutide hub</div>
                  <p className="mt-2 text-sm text-muted">Central research-use-only Retatrutide information pathway.</p>
                </Link>
                <Link href="/metabolic-research-compounds" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Metabolic category</div>
                  <p className="mt-2 text-sm text-muted">Compare Retatrutide, Tirzepatide, NAD and related product lines.</p>
                </Link>
                <Link href="/quality-assurance" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Quality information</div>
                  <p className="mt-2 text-sm text-muted">Review available test reports and supporting documentation.</p>
                </Link>
                <Link href="/research-peptide-documentation" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Documentation guide</div>
                  <p className="mt-2 text-sm text-muted">Learn how to review product information, reports, dispatch details and research-use-only checks.</p>
                </Link>
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                Ordering and support
              </h2>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <h3 className="text-sm font-extrabold text-ink">
                    Payment options
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-muted">
                    Secure debit and credit card checkout is provided through Stripe.
                  </p>
                </div>

                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <h3 className="text-sm font-extrabold text-ink">
                    Dispatch information
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-muted">
                    Orders are dispatched after payment confirmation. UK orders
                    received before 3pm on working days are usually dispatched the
                    same working day for next-working-day delivery.
                  </p>
                </div>

                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <h3 className="text-sm font-extrabold text-ink">
                    Order status
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-muted">
                    Customers can use the order status page after checkout by
                    entering their order number and the email address used on the
                    order.
                  </p>
                </div>

                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <h3 className="text-sm font-extrabold text-ink">
                    Customer support
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-muted">
                    Support is available by email, contact form, and WhatsApp. If
                    contacting us about an existing order, please include your
                    order number so we can help faster.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/order-status"
                  className="rounded-xl2 bg-accent px-5 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                >
                  Check order status
                </Link>

                <Link
                  href="/contact"
                  className="rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                >
                  Contact support
                </Link>

                <Link
                  href="/shipping"
                  className="rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                >
                  Shipping information
                </Link>
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-emerald-200 bg-emerald-50 p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight text-emerald-950">
                Need help before ordering?
              </h2>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-emerald-800">
                If you need help with product information, stock, documentation,
                checkout, payment confirmation, or delivery, contact us before
                placing an order.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={`mailto:${brand.supportEmail}`}
                  className="rounded-xl2 bg-emerald-700 px-5 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-emerald-800"
                >
                  Email support
                </a>

                <Link
                  href="/contact"
                  className="rounded-xl2 border border-emerald-200 bg-white px-5 py-3 text-sm font-extrabold text-emerald-900 shadow-soft hover:bg-emerald-100"
                >
                  Contact page
                </Link>

                <Link
                  href="/faq"
                  className="rounded-xl2 border border-emerald-200 bg-white px-5 py-3 text-sm font-extrabold text-emerald-900 shadow-soft hover:bg-emerald-100"
                >
                  Read FAQ
                </Link>
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                Research-use-only notice
              </h2>

              <p className="mt-3 text-sm leading-7 text-muted">
                All products listed on this site are supplied strictly for
                laboratory research use only. They are not intended for human
                consumption, medical use, veterinary use, clinical use, treatment
                purposes, or diagnostic use.
              </p>
            </section>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}