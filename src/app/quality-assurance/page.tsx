import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { brand } from "@/theme/brand";

export const metadata: Metadata = {
  title: "Quality & Documentation | Peptide Products",
  description:
    "Review available documentation, research-use-only information, support details, and ordering guidance before purchasing from Peptide Products.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/quality-assurance",
  },
};

const pillars = [
  {
    title: "Research-use-only information",
    copy: "The catalogue is presented for laboratory, analytical, and scientific research use only across product and support pages.",
  },
  {
    title: "Available documentation",
    copy: "Selected product lines include downloadable certificates or SDS files, with additional guidance available before checkout.",
  },
  {
    title: "Tracked UK ordering flow",
    copy: "Customers can review products, place orders securely, and follow dispatch and order updates after purchase.",
  },
  {
    title: "Direct support access",
    copy: `Questions about stock, documentation, or wholesale can be sent to ${brand.supportEmail} before ordering.`,
  },
] as const;

const uploadedDocuments = [
  { title: "GHK-CU 100mg", href: "/docs/coa/ghk-cu-100mg.pdf", preview: "/docs/previews/ghk-cu-100mg.jpg" },
  { title: "GHK-CU 50mg", href: "/docs/coa/ghk-cu-50mg.pdf", preview: "/docs/previews/ghk-cu-50mg.jpg" },
  { title: "BPC-157 5mg", href: "/docs/coa/bpc-157-5mg.pdf", preview: "/docs/previews/bpc-157-5mg.jpg" },
  { title: "NAD 500mg", href: "/docs/coa/nad-500mg.pdf", preview: "/docs/previews/nad-500mg.jpg" },
  { title: "Glutathione 500mg", href: "/docs/coa/glutathione-500mg.pdf", preview: "/docs/previews/glutathione-500mg.jpg" },
  { title: "Selank 10mg", href: "/docs/coa/selank-10mg.pdf", preview: "/docs/previews/selank-10mg.jpg" },
] as const;

const siteDocuments = [
  {
    title: "Meso Glutathione",
    docs: [
      { label: "COA", href: "/docs/coa/meso-glutathione.pdf" },
      { label: "SDS", href: "/docs/sds/meso-glutathione.pdf" },
    ],
  },
  {
    title: "Meso PDRN",
    docs: [
      { label: "COA", href: "/docs/coa/meso-pdrn.pdf" },
      { label: "SDS", href: "/docs/sds/meso-pdrn.pdf" },
    ],
  },
  {
    title: "Meso Lift Firming",
    docs: [
      { label: "COA", href: "/docs/coa/meso-lift-firming.pdf" },
      { label: "SDS", href: "/docs/sds/meso-lift-firming.pdf" },
    ],
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
              <div className="eyebrow">Quality & documentation</div>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
                Review documentation, support details, and ordering information before you buy.
              </h1>
              <p className="mt-4 text-sm leading-7 text-muted md:text-base">
                This page brings together the main information customers may want before ordering:
                research-use-only positioning, available documentation, support access, and helpful
                links for checking products before checkout.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="feature-card">
                  <div className="text-lg font-extrabold tracking-tight text-ink">{pillar.title}</div>
                  <p className="mt-3 text-sm leading-7 text-muted">{pillar.copy}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-8 grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <div className="soft-label">Available certificates</div>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink">
                Selected documents available to review
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted">
                Selected product lines include certificate files with preview images and direct PDF
                links so customers can review available documents before ordering.
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
                        alt={`${item.title} certificate preview`}
                        fill
                        sizes="(min-width:1024px) 30vw, 100vw"
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="p-4">
                      <div className="text-base font-extrabold text-ink">{item.title}</div>
                      <div className="mt-3 text-sm font-extrabold text-ink">Open PDF →</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card overflow-hidden">
              <div className="relative h-[260px] w-full bg-panel">
                <Image
                  src="/docs/previews/tesamorelin-report.jpg"
                  alt="Certificate document preview"
                  fill
                  sizes="(min-width:1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="soft-label">Before ordering</div>
                <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink">
                  Need help reviewing a product before purchase?
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Use the links below to contact support directly or return to the catalogue and
                  review available products, pricing, and supporting information.
                </p>

                <div className="mt-6 grid gap-3">
                  <a
                    href={`mailto:${brand.supportEmail}`}
                    className="rounded-xl2 bg-accent px-5 py-3 text-center text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                  >
                    Email support
                  </a>
                  <Link
                    href="/shop"
                    className="rounded-xl2 border border-line bg-white px-5 py-3 text-center text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                  >
                    Browse products
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-xl2 border border-line bg-white px-5 py-3 text-center text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                  >
                    Contact page
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
            <h2 className="text-2xl font-extrabold tracking-tight text-ink">
              Additional documentation on site
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              These files remain available below and can also be reached from relevant pages across
              the site.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {siteDocuments.map((item) => (
                <div key={item.title} className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-base font-extrabold text-ink">{item.title}</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.docs.map((doc) => (
                      <a
                        key={doc.href}
                        href={doc.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-line bg-white px-3 py-2 text-xs font-extrabold text-ink shadow-soft hover:bg-panel"
                      >
                        {doc.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-start">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                  Useful information before checkout
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Review product pages for pack details, stock status, gallery images, quick facts,
                  and any available supporting documentation before placing your order.
                </p>
              </div>

              <div className="grid gap-3">
                <Link
                  href="/shop"
                  className="rounded-xl2 border border-line bg-panel px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-white"
                >
                  Browse all products
                </Link>
                <Link
                  href="/shipping"
                  className="rounded-xl2 border border-line bg-panel px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-white"
                >
                  Shipping information
                </Link>
                <Link
                  href="/order-status"
                  className="rounded-xl2 border border-line bg-panel px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-white"
                >
                  Track an order
                </Link>
                <Link
                  href="/contact"
                  className="rounded-xl2 border border-line bg-panel px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-white"
                >
                  Contact support
                </Link>
              </div>
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  );
}