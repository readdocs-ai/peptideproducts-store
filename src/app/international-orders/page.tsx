import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "International Orders Temporarily Suspended | Peptide Products UK",
  description:
    "International delivery is temporarily suspended. Peptide Products is currently accepting UK orders only, with UK orders dispatched using Royal Mail Tracked 24.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/international-orders",
  },
  openGraph: {
    title: "International Orders Temporarily Suspended | Peptide Products UK",
    description:
      "International delivery is temporarily suspended. UK orders continue as normal using Royal Mail Tracked 24.",
    url: "https://www.peptideproducts.co.uk/international-orders",
    siteName: "Peptide Products",
  },
};

export default function InternationalOrdersPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "International Orders Temporarily Suspended | Peptide Products UK",
    url: "https://www.peptideproducts.co.uk/international-orders",
    description:
      "International delivery is temporarily suspended. Peptide Products is currently accepting UK orders only.",
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main className="py-10 lg:py-14">
        <Container>
          <div className="mx-auto max-w-4xl">
            <section className="rounded-xl3 border border-amber-200 bg-amber-50 p-6 shadow-soft lg:p-8">
              <div className="eyebrow">International orders</div>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-amber-950 md:text-5xl">
                International shipping is temporarily suspended.
              </h1>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-amber-900 md:text-base">
                We are currently accepting UK orders only while we resolve courier and international shipping issues. UK orders continue to be dispatched as normal using Royal Mail Tracked 24.
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-amber-900 md:text-base">
                We apologise for any inconvenience and will restore international ordering as soon as reliable delivery can be resumed.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="trust-pill">UK orders only</span>
                <span className="trust-pill">Free UK delivery</span>
                <span className="trust-pill">Royal Mail Tracked 24</span>
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft lg:p-8">
              <h2 className="text-2xl font-extrabold tracking-tight text-ink">Ordering and returns</h2>
              <p className="mt-3 text-sm leading-7 text-muted">
                UK orders can continue through the normal secure checkout. International delivery countries have been removed from checkout until further notice.
              </p>
              <p className="mt-3 text-sm leading-7 text-muted">
                All sales are final and we do not accept returns or refunds once an order has been processed. This does not affect your statutory rights.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/shop" className="rounded-xl2 bg-accent px-5 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90">
                  Shop UK delivery
                </Link>
                <Link href="/shipping" className="rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel">
                  UK shipping information
                </Link>
                <Link href="/contact" className="rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel">
                  Contact support
                </Link>
              </div>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
