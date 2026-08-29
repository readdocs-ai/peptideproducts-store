import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { brand } from "@/theme/brand";

export const metadata: Metadata = {
  title: "Quality Information | Test Reports",
  description:
    "Review product quality information, available test reports, research-use-only notices, support details, dispatch guidance, and ordering information before purchasing from Peptide Products.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/quality-assurance",
  },
  openGraph: {
    title: "Quality Information | Test Reports",
    description:
      "Review available test reports, product quality information, research-use-only notices, support details, and ordering information before purchase.",
    url: "https://www.peptideproducts.co.uk/quality-assurance",
    siteName: "Peptide Products",
    images: [
      {
        url: "https://www.peptideproducts.co.uk/products/retatrutide-40mg-uk.jpg",
        width: 1200,
        height: 900,
        alt: "Peptide Products quality information and test reports",
      },
    ],
  },
};

const pillars = [
  {
    title: "Research-use-only supply",
    copy: "Products are supplied for laboratory, analytical, and scientific research use only.",
  },
  {
    title: "Available test reports",
    copy: "Selected product pages include test reports or supporting quality files where available.",
  },
  {
    title: "Clear ordering checks",
    copy: "Customers can review product pages, pricing, stock status, payment options, and dispatch information before ordering.",
  },
  {
    title: "Direct support access",
    copy: `Questions about stock, test reports, product details, or orders can be sent to ${brand.supportEmail} before purchase.`,
  },
] as const;

const uploadedDocuments = [
  {
    title: "Alluvi Retatrutide 40mg",
    href: "/docs/coa/alluvi-retatrutide-40mg.pdf",
    preview: "/docs/previews/alluvi-retatrutide-40mg.jpg",
  },
  {
    title: "GHK-CU 100mg",
    href: "/docs/coa/ghk-cu-100mg.pdf",
    preview: "/docs/previews/ghk-cu-100mg.jpg",
  },
  {
    title: "GHK-CU 50mg",
    href: "/docs/coa/ghk-cu-50mg.pdf",
    preview: "/docs/previews/ghk-cu-50mg.jpg",
  },
  {
    title: "BPC-157 5mg",
    href: "/docs/coa/bpc-157-5mg.pdf",
    preview: "/docs/previews/bpc-157-5mg.jpg",
  },
  {
    title: "NAD 500mg",
    href: "/docs/coa/nad-500mg.pdf",
    preview: "/docs/previews/nad-500mg.jpg",
  },
  {
    title: "Glutathione 500mg",
    href: "/docs/coa/glutathione-500mg.pdf",
    preview: "/docs/previews/glutathione-500mg.jpg",
  },
  {
    title: "Selank 10mg",
    href: "/docs/coa/selank-10mg.pdf",
    preview: "/docs/previews/selank-10mg.jpg",
  },
] as const;

const supportLinks = [
  {
    title: "Browse all products",
    href: "/shop",
  },
  {
    title: "Shipping information",
    href: "/shipping",
  },
  {
    title: "Track an order",
    href: "/order-status",
  },
  {
    title: "Customer reviews",
    href: "/reviews",
  },
  {
    title: "Frequently asked questions",
    href: "/faq",
  },
] as const;

export default function QualityAssurancePage() {
  return (
    <div>
      <Header />

      <main className="py-10 lg:py-12">
        <Container>
          <section className="glass-card p-6 md:p-8">
            <div className="max-w-3xl">
              <div className="eyebrow">Quality information</div>

              <h1 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
                Review test reports, product details, and support information before ordering.
              </h1>

              <p className="mt-4 text-sm leading-7 text-muted md:text-base">
                This page brings together the main quality information customers
                may want before ordering from Peptide Products, including
                available test reports, research-use-only notices, product review
                checks, dispatch guidance, payment information, and support links.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted md:text-base">
                Test report availability varies by product line. Where a report
                is available, customers can review it before placing an order.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="trust-pill">Research use only</span>
                <span className="trust-pill">Test reports on selected lines</span>
                <span className="trust-pill">Tracked UK dispatch</span>
                <span className="trust-pill">Secure checkout</span>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="feature-card">
                  <div className="text-lg font-extrabold tracking-tight text-ink">
                    {pillar.title}
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {pillar.copy}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-8 grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <div className="soft-label">Available test reports</div>

              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink">
                Selected test reports available to review
              </h2>

              <p className="mt-3 text-sm leading-7 text-muted">
                Selected product lines include test reports or supporting quality
                files so customers can review available product information before
                ordering. Reports are labelled by the product and batch identified in the uploaded laboratory document.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {uploadedDocuments.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="surface-card overflow-hidden"
                  >
                    <div className="relative h-[180px] bg-panel">
                      <Image
                        src={item.preview}
                        alt={`${item.title} test report preview`}
                        fill
                        sizes="(min-width:1024px) 30vw, 100vw"
                        className="object-cover object-top"
                      />
                    </div>

                    <div className="p-4">
                      <div className="text-base font-extrabold text-ink">
                        {item.title}
                      </div>
                      <div className="mt-3 text-sm font-extrabold text-ink">
                        View Test Report →
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <div className="soft-label">Before ordering</div>

              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink">
                Need help reviewing a product before purchase?
              </h2>

              <p className="mt-3 text-sm leading-7 text-muted">
                If you want to check product details, test report availability,
                payment options, dispatch information, or stock before ordering,
                use the support links below.
              </p>

              <p className="mt-3 text-sm leading-7 text-muted">
                For order-related questions, include your order number where
                possible so support can locate your order more quickly.
              </p>

              <div className="mt-6 grid gap-3">
                <a
                  href={`mailto:${brand.supportEmail}`}
                  className="rounded-xl2 bg-accent px-5 py-3 text-center text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                >
                  Email support
                </a>

                <Link
                  href="/contact"
                  className="rounded-xl2 border border-line bg-white px-5 py-3 text-center text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                >
                  Contact page
                </Link>

                <Link
                  href="/order-status"
                  className="rounded-xl2 border border-line bg-white px-5 py-3 text-center text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                >
                  Check order status
                </Link>

                <Link
                  href="/shop"
                  className="rounded-xl2 border border-line bg-white px-5 py-3 text-center text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                >
                  Browse products
                </Link>
              </div>

              <div className="mt-6 rounded-xl2 border border-emerald-200 bg-emerald-50 p-5">
                <h3 className="text-sm font-extrabold text-emerald-950">
                  Support is available before and after ordering
                </h3>

                <p className="mt-2 text-sm leading-7 text-emerald-800">
                  You can contact us before checkout if you need help reviewing
                  test reports, product information, stock status, delivery
                  details, or payment options. Existing customers can use the
                  order status page after placing an order.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-start">
              <div>
                <div className="soft-label">Product checks</div>

                <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink">
                  Useful information before checkout
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  Before placing an order, review the relevant product page for
                  pack details, stock status, gallery images, quick facts, price,
                  available test report information, delivery details, and checkout
                  options.
                </p>

                <div className="mt-5 rounded-xl2 border border-line bg-panel p-4">
                  <h3 className="text-sm font-extrabold text-ink">
                    Dispatch and payment confirmation
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-muted">
                    Orders are dispatched after payment confirmation. UK orders
                    received before 3pm on working days are usually dispatched the
                    same working day for next-working-day delivery. International
                    delivery is estimated only and may vary.
                  </p>
                </div>
              </div>

              <div className="grid gap-3">
                {supportLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl2 border border-line bg-panel px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-white"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
            <h2 className="text-2xl font-extrabold tracking-tight text-ink">
              Research-use-only notice
            </h2>

            <p className="mt-3 text-sm leading-7 text-muted">
              Products are supplied strictly for laboratory, analytical, and
              scientific research use only. They are not supplied for human use,
              veterinary use, diagnosis, treatment, cure, or prevention of disease.
            </p>
          </section>
        </Container>
      </main>

      <Footer />
    </div>
  );
}