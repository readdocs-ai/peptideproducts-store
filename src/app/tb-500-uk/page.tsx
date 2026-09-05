import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "TB-500 UK | Laboratory Research Peptide",
  description:
    "TB-500 UK laboratory research peptide information page. View product availability, pricing, quality information, and ordering guidance for UK research customers.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/tb-500-uk",
  },
};

const faqs = [
  {
    q: "What is TB-500?",
    a: "TB-500 is listed as a laboratory research peptide supplied strictly for analytical and scientific research environments.",
  },
  {
    q: "Is TB-500 supplied for human use?",
    a: "No. All products are supplied strictly for laboratory and research use only and are not intended for human consumption or medical use.",
  },
  {
    q: "Can UK customers order TB-500 online?",
    a: "Customers can review TB-500 availability, pricing, and ordering information through the website product pages.",
  },
];

export default function Page() {
  return (
    <div>
      <Header />

      <main className="py-14">
        <Container>
          <div className="mx-auto max-w-4xl">

            <div className="eyebrow">Regenerative research peptide</div>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              TB-500 UK laboratory research peptide
            </h1>

            <p className="mt-5 text-base leading-8 text-muted">
              TB-500 is listed by Peptide Products as a laboratory research
              peptide for analytical and scientific research purposes. UK
              customers can review product availability, pricing, ordering
              options, and related peptide research pages through the website.
            </p>

            <p className="mt-4 text-base leading-8 text-muted">
              All products are supplied strictly for laboratory and research
              use only. Products are not intended for human consumption,
              clinical application, veterinary use, or medical treatment.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <Link
                href="/shop"
                className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
              >
                Browse TB-500 products
              </Link>

              <Link
                href="/regenerative-peptides"
                className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
              >
                Regenerative peptides
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
                TB-500 availability in the UK
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Peptide Products provides TB-500 laboratory research peptide
                information for UK customers seeking research-use-only peptide
                compounds and analytical materials.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                Product pages display stock information, pricing, checkout
                options, and supporting information where available.
              </p>

            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">

              <h2 className="text-2xl font-extrabold tracking-tight">
                Ordering and delivery information
              </h2>

              <div className="mt-5 grid gap-4 md:grid-cols-3">

                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">
                    Secure checkout
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Payments are processed securely through Stripe.
                  </p>
                </div>

                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">
                    Tracked UK delivery
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Orders are prepared for tracked dispatch after processing.
                  </p>
                </div>

                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">
                    Research use only
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Products are supplied strictly for laboratory use only.
                  </p>
                </div>

              </div>

            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">

              <h2 className="text-2xl font-extrabold tracking-tight">
                Related peptide research pages
              </h2>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">

                <Link href="/bpc-157-uk" className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    BPC-157 UK
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Browse related regenerative peptide research information.
                  </p>
                </Link>

                <Link href="/ghk-cu-uk" className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    GHK-CU UK
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    View additional peptide compound information.
                  </p>
                </Link>

                <Link href="/research-peptides" className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    Research peptides
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Explore broader peptide research categories.
                  </p>
                </Link>

                <Link href="/regenerative-peptides" className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    Regenerative peptides
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Browse regenerative laboratory peptide pages.
                  </p>
                </Link>

              </div>

            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">

              <h2 className="text-2xl font-extrabold tracking-tight">
                TB-500 UK FAQs
              </h2>

              <div className="mt-5 grid gap-4">

                {faqs.map((item) => (
                  <div
                    key={item.q}
                    className="rounded-xl2 border border-line bg-panel p-4"
                  >
                    <h3 className="text-sm font-extrabold text-ink">
                      {item.q}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-muted">
                      {item.a}
                    </p>
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