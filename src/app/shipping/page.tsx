import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "UK Delivery, Returns & Dispatch | Peptide Products",
  description:
    "Shipping, dispatch, tracking, returns and cancellation information for Peptide Products research-use-only orders. UK dispatch, selected international delivery and support links.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/shipping",
  },
  openGraph: {
    title: "UK Delivery, Returns & Dispatch | Peptide Products",
    description:
      "Review dispatch cut-offs, UK delivery, selected international delivery, returns, cancellations and order support before purchasing research-use-only products.",
    url: "https://www.peptideproducts.co.uk/shipping",
    siteName: "Peptide Products",
  },
};

const shippingFaqs = [
  {
    question: "When are UK orders dispatched?",
    answer:
      "Orders received before 3pm on working days are usually dispatched the same working day after payment confirmation. Orders placed after 3pm, on weekends, or on bank holidays are usually dispatched the next working day.",
  },
  {
    question: "How much is UK delivery?",
    answer:
      "UK delivery is currently free. Delivery timeframes are estimates and may vary due to courier processing or events outside our control.",
  },
  {
    question: "Do you offer international delivery?",
    answer:
      "Selected international delivery is available at GBP 25.00. International parcels usually arrive within approximately 6 to 7 working days, but this is an estimate only and may vary due to customs, courier processing, or local delivery conditions.",
  },
  {
    question: "Can research-use-only products be returned?",
    answer:
      "Due to the nature of research compounds and chain-of-custody requirements, all sales are final. Returns, refunds, or exchanges are not accepted except where required by law or where goods are faulty on arrival.",
  },
] as const;

export default function ShippingPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "UK Delivery, Returns & Dispatch | Peptide Products",
      url: "https://www.peptideproducts.co.uk/shipping",
      description:
        "Shipping, dispatch, tracking, returns and cancellation information for Peptide Products research-use-only orders.",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.peptideproducts.co.uk" },
        { "@type": "ListItem", position: 2, name: "Shipping", item: "https://www.peptideproducts.co.uk/shipping" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: shippingFaqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ];

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main className="py-10 lg:py-12">
        <Container>
          <div className="mx-auto max-w-5xl">
            <section className="rounded-xl3 border border-line bg-white p-6 shadow-soft lg:p-8">
              <div className="eyebrow">Delivery information</div>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
                UK delivery, returns and cancellations.
              </h1>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-muted md:text-base">
                Shipping and returns policy for research-use-only goods. Orders are dispatched from the UK after payment confirmation, with tracking provided where available.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="trust-pill">UK dispatch</span>
                <span className="trust-pill">Free UK delivery</span>
                <span className="trust-pill">Selected international delivery</span>
                <span className="trust-pill">Order status support</span>
              </div>
            </section>

            <section className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl3 border border-emerald-200 bg-emerald-50 p-5 shadow-soft">
                <h2 className="font-extrabold text-emerald-950">Dispatch cut-off</h2>
                <p className="mt-2 text-sm leading-7 text-emerald-800">
                  UK orders received before 3pm on working days are usually dispatched the same working day after payment confirmation.
                </p>
              </div>
              <div className="rounded-xl3 border border-line bg-white p-5 shadow-soft">
                <h2 className="font-extrabold text-ink">UK delivery</h2>
                <p className="mt-2 text-sm leading-7 text-muted">
                  UK delivery is currently free and usually sent for next-working-day delivery after dispatch, where available.
                </p>
              </div>
              <div className="rounded-xl3 border border-line bg-white p-5 shadow-soft">
                <h2 className="font-extrabold text-ink">International delivery</h2>
                <p className="mt-2 text-sm leading-7 text-muted">
                  Selected international delivery is available at GBP 25.00, usually around 6 to 7 working days as an estimate only.
                </p>
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight text-ink">Shipping prices</h2>
              <div className="mt-5 overflow-hidden rounded-xl2 border border-line bg-white">
                <div className="grid grid-cols-3 gap-0 text-sm">
                  <div className="border-b border-line bg-panel px-4 py-3 font-extrabold text-ink">Region</div>
                  <div className="border-b border-line bg-panel px-4 py-3 font-extrabold text-ink">Price</div>
                  <div className="border-b border-line bg-panel px-4 py-3 font-extrabold text-ink">Notes</div>
                  <div className="border-b border-line px-4 py-3">United Kingdom</div>
                  <div className="border-b border-line px-4 py-3 font-semibold text-ink">Free</div>
                  <div className="border-b border-line px-4 py-3">Usually next-working-day delivery after dispatch</div>
                  <div className="px-4 py-3">International</div>
                  <div className="px-4 py-3 font-semibold text-ink">GBP 25.00</div>
                  <div className="px-4 py-3">Usually around 6 to 7 working days, estimated only</div>
                </div>
              </div>
            </section>

            <section className="mt-8 grid gap-4 md:grid-cols-2">
              {shippingFaqs.map((item) => (
                <div key={item.question} className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                  <h2 className="text-lg font-extrabold tracking-tight text-ink">{item.question}</h2>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.answer}</p>
                </div>
              ))}
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight text-ink">Dispatch, payment confirmation and tracking</h2>
              <p className="mt-3 text-sm leading-7 text-muted">
                Orders are dispatched after successful payment confirmation through Stripe. Tracking is provided when available.
              </p>
              <p className="mt-3 text-sm leading-7 text-muted">
                International orders may be inspected by customs. The buyer is responsible for local import requirements, customs clearance, taxes, duties, and any associated risks.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/order-status" className="rounded-xl2 bg-accent px-5 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90">Check order status</Link>
                <Link href="/contact" className="rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel">Contact support</Link>
                <Link href="/faq" className="rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel">Read FAQ</Link>
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight text-ink">Research-use-only notice</h2>
              <p className="mt-3 text-sm leading-7 text-muted">
                Products are supplied strictly for laboratory research use only. They are not for human consumption, medical use, veterinary use, clinical use, diagnostic use, or treatment purposes.
              </p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
