import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "FAQ | Ordering, Delivery & Test Reports",
  description:
    "Frequently asked questions about Peptide Products UK including research-use-only products, Retatrutide ordering, payment methods, UK delivery, tracking, documentation, returns and support.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/faq",
  },
};

const faqs = [

  {
    question: "Where can I find the Retatrutide product page?",
    answer:
      "The main Retatrutide product listing is available at /product/retatrutide. It contains current product images, stock status, pricing, checkout options, and the available test report link.",
  },
  {
    question: "Where can I review product documentation?",
    answer:
      "The quality information page lists available test reports and supporting files. Selected product pages also include documentation links directly on the page where available.",
  },
  {
    question: "Can I ask a question before placing an order?",
    answer:
      "Yes. Use the contact page, email, or WhatsApp before ordering if you need help reviewing product information, stock status, documentation, payment, or delivery details.",
  },
  {
    question: "Are your products for human use?",
    answer:
      "No. All products are supplied strictly for laboratory, analytical, and scientific research use only. They are not for human consumption, medical use, veterinary use, clinical use, or treatment purposes.",
  },
  {
    question: "How do I place an order?",
    answer:
      "Add products to your cart, review your order, enter your delivery details, then continue to Stripe to complete secure card payment.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept secure debit and credit card payments through Stripe. Stripe may also show saved or wallet payment options when available on your device.",
  },
  
 
  {
    question: "When will my order be dispatched?",
    answer:
      "Orders received before 3pm on working days are usually dispatched the same working day after payment confirmation. Orders placed after 3pm, on weekends, or on bank holidays are usually dispatched the next working day.",
  },
  {
    question: "How long does UK delivery take?",
    answer:
      "UK orders are usually sent using a tracked service where available. Orders dispatched on working days are usually sent for next-working-day delivery, although delivery times are estimates and can be affected by courier delays.",
  },
  {
    question: "How long does international delivery take?",
    answer:
      "International parcels usually arrive within approximately 6–7 working days. This is an estimated timeframe only and may vary due to customs, courier processing, or local delivery conditions.",
  },
  {
    question: "Can I check my order status?",
    answer:
      "Yes. Use the order status page and enter your order number together with the email address used when placing the order.",
  },
  {
    question: "Do you provide tracking?",
    answer:
      "Tracking is provided when available. If you need help with an order, use your order number when contacting support so we can check it faster.",
  },
   {
    question: "Do you provide test reports or quality information?",
    answer:
      "Test reports or supporting quality files are available on selected product pages where provided. You can also review the quality information page or contact support if you need help before ordering.",
  },
  {
    question: "Can I cancel an order?",
    answer:
      "If you need to cancel, contact us immediately. Once an order has been packed or dispatched, cancellation may not be possible.",
  },
  {
    question: "Can I return an order?",
    answer:
      "Due to the nature of research compounds and chain-of-custody requirements, all sales are final. Returns, refunds, or exchanges are not accepted except where required by law or where goods are faulty on arrival.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can contact us through the contact page, email, or WhatsApp. If your message is about an order, include your order number so we can help faster.",
  },
];

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <Header />

      <main className="py-10 lg:py-12">
        <Container>
          <div className="mx-auto max-w-5xl">
            <section className="rounded-xl3 border border-line bg-white p-6 shadow-soft lg:p-8">
              <div className="eyebrow">Help centre</div>

              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
                Frequently asked questions
              </h1>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-muted md:text-base">
                Answers to common questions about ordering, payment methods,
                delivery, tracking, quality information, returns, and research-use-only
product supply.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="trust-pill">Research use only</span>
                <span className="trust-pill">Tracked UK dispatch</span>
                <span className="trust-pill">Secure card checkout</span>
                <span className="trust-pill">Stripe secure checkout</span>
              </div>
            </section>

            <section className="mt-10 grid gap-4">
              {faqs.map((item) => (
                <div
                  key={item.question}
                  className="rounded-xl3 border border-line bg-white p-6 shadow-soft"
                >
                  <h2 className="text-lg font-extrabold tracking-tight text-ink">
                    {item.question}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {item.answer}
                  </p>
                </div>
              ))}
            </section>

            <section className="mt-10 rounded-xl3 border border-emerald-200 bg-emerald-50 p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight text-emerald-950">
                Need help with an order?
              </h2>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-emerald-800">
                If your question is about an existing order, please include your
                order number when contacting support. This helps us check your
                order faster.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/order-status"
                  className="rounded-xl2 bg-emerald-700 px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-emerald-800"
                >
                  Check order status
                </Link>

                <Link
                  href="/contact"
                  className="rounded-xl2 border border-emerald-200 bg-white px-6 py-3 text-sm font-extrabold text-emerald-900 shadow-soft hover:bg-emerald-100"
                >
                  Contact support
                </Link>
              </div>
            </section>

            <section className="mt-10 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                Useful links
              </h2>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <Link href="/shop" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Shop products</div>
                  <p className="mt-2 text-sm text-muted">
                    Browse the full product catalogue.
                  </p>
                </Link>

                <Link href="/shipping" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Shipping information</div>
                  <p className="mt-2 text-sm text-muted">
                    Review dispatch, delivery, and returns information.
                  </p>
                </Link>

                <Link href="/quality-assurance" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Quality information</div>
<p className="mt-2 text-sm text-muted">
  Review available test reports and quality information.
</p>
                </Link>

                <Link href="/reviews" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Customer reviews</div>
                  <p className="mt-2 text-sm text-muted">
                    Read feedback about ordering and delivery.
                  </p>
                </Link>
              </div>
            </section>

            <section className="mt-10 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                Research-use-only notice
              </h2>

              <p className="mt-3 text-sm leading-7 text-muted">
                Products are supplied strictly for laboratory research use only.
                They are not for human consumption, medical use, veterinary use,
                clinical use, or treatment purposes.
              </p>
            </section>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}