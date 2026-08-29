import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { brand } from "@/theme/brand";

export const metadata: Metadata = {
  title: "International Orders | Peptide Products UK",
  description:
    "International ordering information for Peptide Products UK, including selected international delivery, £25 international shipping, estimated delivery times, customs guidance, payment options, order tracking, and support before ordering.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/international-orders",
  },
};

const WHATSAPP_NUMBER = "447429098887";

const supportedCountries = [
  "United States",
  "Canada",
  "Australia",
  "New Zealand",
  "Ireland",
  "Germany",
  "France",
  "Spain",
  "Italy",
  "Netherlands",
  "Belgium",
  "Sweden",
  "Norway",
  "Denmark",
  "Switzerland",
  "Austria",
  "Portugal",
  "Saudi Arabia",
  "United Arab Emirates",
] as const;

const priorityCountries = [
  "Switzerland",
  "Saudi Arabia",
  "United Arab Emirates",
  "Malaysia",
] as const;

const middleEastFocus = [
  {
    country: "Saudi Arabia",
    copy: "Saudi Arabia is available as a selected international delivery country during checkout. Customers can message before ordering if they need help with payment, delivery, or checkout steps.",
  },
  {
    country: "United Arab Emirates",
    copy: "United Arab Emirates is available as a selected international delivery country during checkout. Customers can contact us before placing an order if they want reassurance before payment.",
  },
] as const;

const trustPoints = [
  {
    title: "Selected international delivery",
    copy: "International delivery is available to selected destinations. The available country list is shown during checkout before payment.",
  },
  {
    title: "£25 international shipping",
    copy: "International delivery is charged at £25.00. The shipping amount is shown clearly in your cart and checkout total.",
  },
  {
    title: "Estimated delivery timeframe",
    copy: "International parcels usually arrive in approximately 6–7 working days, although this is an estimate only.",
  },
  {
    title: "Support before ordering",
    copy: "If you are unsure before ordering, contact us by email, contact form, or WhatsApp before checkout.",
  },
] as const;

const paymentOptions = [
  {
    title: "Card checkout",
    copy: "Secure card checkout is processed through Stripe where available.",
  },
  {
    title: "Secure card payment",
    copy: "Complete payment securely through Stripe after entering your delivery details.",
  },
] as const;

const usefulLinks = [
  {
    href: "/product/retatrutide",
    title: "Retatrutide product page",
    copy: "Open the main product page and review product details before ordering.",
  },
  {
    href: "/buy-retatrutide-uk",
    title: "Buy Retatrutide UK",
    copy: "Read additional Retatrutide ordering information and related guidance.",
  },
  {
    href: "/wholesale",
    title: "Wholesale enquiries",
    copy: "Contact us for larger, repeat, or trade-style enquiries.",
  },
  {
    href: "/contact",
    title: "Contact support",
    copy: "Ask a question before placing an international order.",
  },
] as const;

const faqItems = [
  {
    question: "Do you accept international orders?",
    answer:
      "Yes. Peptide Products accepts international orders to selected countries. The available countries are shown during checkout.",
  },
  {
    question: "How much is international delivery?",
    answer:
      "International delivery is charged at £25.00. The shipping amount is shown clearly before checkout and in the order total.",
  },
  {
    question: "How long does international delivery take?",
    answer:
      "International parcels usually arrive within approximately 6–7 working days. This is an estimated timeframe only and may vary due to customs, courier processing, local delivery conditions, or other delays outside our control.",
  },
  {
    question: "Can I contact you before ordering internationally?",
    answer:
      "Yes. If you have questions about delivery, payment, documentation, or product information, contact support before placing an order.",
  },
  {
    question: "Who is responsible for customs and import rules?",
    answer:
      "International customers are responsible for checking local import rules, customs requirements, taxes, duties, and any restrictions in their own country before ordering.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Tracking is provided where available. Customers can also use the order status page after ordering by entering their order number and the email address used at checkout.",
  },
] as const;

function getWhatsAppHref() {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi Peptide Products, I need help with an international order."
  )}`;
}

function getSaudiUaeWhatsAppHref() {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi Peptide Products, I am ordering from Saudi Arabia or the UAE and need help before checkout."
  )}`;
}

export default function InternationalOrdersPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

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
        name: "International Orders",
        item: "https://www.peptideproducts.co.uk/international-orders",
      },
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqSchema, breadcrumbSchema]),
        }}
      />

      <Header />

      <main className="py-10 lg:py-12">
        <Container>
          <div className="mx-auto max-w-6xl">
            <section className="rounded-xl3 border border-line bg-white p-6 shadow-soft lg:p-8">
              <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-start">
                <div>
                  <div className="eyebrow">International orders</div>

                  <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
                    International delivery for selected countries.
                  </h1>

                  <p className="mt-5 max-w-3xl text-sm leading-7 text-muted md:text-base">
                    Peptide Products is a UK-based supplier offering selected
                    international delivery for laboratory research-use-only
                    products. This page explains international shipping, estimated
                    delivery times, customs responsibility, payment options, order
                    tracking, and how to get help before ordering.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="trust-pill">UK-based supplier</span>
                    <span className="trust-pill">Selected international delivery</span>
                    <span className="trust-pill">£25 international shipping</span>
                    <span className="trust-pill">WhatsApp support</span>
                    <span className="trust-pill">Research use only</span>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/product/retatrutide"
                      className="rounded-xl2 bg-accent px-5 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                    >
                      View Retatrutide
                    </Link>

                    <Link
                      href="/shop"
                      className="rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                    >
                      Browse products
                    </Link>

                    <a
                      href={getWhatsAppHref()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl2 border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-extrabold text-emerald-900 shadow-soft hover:bg-emerald-100"
                    >
                      WhatsApp support
                    </a>
                  </div>
                </div>

                <div className="rounded-xl2 border border-emerald-200 bg-emerald-50 p-5">
                  <h2 className="text-lg font-extrabold text-emerald-950">
                    Before placing an international order
                  </h2>

                  <div className="mt-4 grid gap-3 text-sm text-emerald-800">
                    <div className="rounded-xl2 border border-emerald-200 bg-white px-4 py-3">
                      International shipping is £25.00.
                    </div>
                    <div className="rounded-xl2 border border-emerald-200 bg-white px-4 py-3">
                      Delivery is usually estimated at 6–7 working days.
                    </div>
                    <div className="rounded-xl2 border border-emerald-200 bg-white px-4 py-3">
                      Local customs and import rules are the customer’s responsibility.
                    </div>
                    <div className="rounded-xl2 border border-emerald-200 bg-white px-4 py-3">
                      Contact us before checkout if you are unsure.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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

            <section className="mt-8 rounded-xl3 border border-emerald-200 bg-emerald-50 p-6 shadow-soft">
              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div>
                  <div className="soft-label">Saudi Arabia & UAE orders</div>
                  <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-emerald-950">
                    Ordering from Saudi Arabia or the United Arab Emirates?
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-emerald-800">
                    Saudi Arabia and the United Arab Emirates are included in our
                    selected international checkout countries. If you are unsure
                    before placing an order, message us first and we can help with
                    checkout, payment options, delivery estimates, and order support.
                  </p>

                  <p className="mt-3 text-sm leading-7 text-emerald-800">
                    International shipping is £25.00. Delivery estimates may vary
                    due to customs, local courier processing, and destination-country
                    checks. Customers are responsible for checking local import
                    requirements before ordering.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={getSaudiUaeWhatsAppHref()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl2 bg-emerald-700 px-5 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-emerald-800"
                    >
                      WhatsApp before ordering
                    </a>

                    <Link
                      href="/product/retatrutide"
                      className="rounded-xl2 border border-emerald-200 bg-white px-5 py-3 text-sm font-extrabold text-emerald-900 shadow-soft hover:bg-emerald-100"
                    >
                      View Retatrutide
                    </Link>
                  </div>
                </div>

                <div className="grid gap-4">
                  {middleEastFocus.map((item) => (
                    <div
                      key={item.country}
                      className="rounded-xl2 border border-emerald-200 bg-white p-5"
                    >
                      <h3 className="text-base font-extrabold text-emerald-950">
                        {item.country}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-emerald-800">
                        {item.copy}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div>
                  <div className="soft-label">High-interest locations</div>
                  <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink">
                    International buyers are welcome to contact us before ordering.
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    We are seeing interest from international customers, including
                    Switzerland, Saudi Arabia, the United Arab Emirates, and
                    Malaysia. If you are unsure about checkout, delivery, or
                    payment options, please contact support before placing an order.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={getWhatsAppHref()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl2 bg-emerald-700 px-5 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-emerald-800"
                    >
                      Message on WhatsApp
                    </a>

                    <Link
                      href="/contact"
                      className="rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                    >
                      Contact page
                    </Link>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {priorityCountries.map((country) => (
                    <div
                      key={country}
                      className="rounded-xl2 border border-line bg-panel px-4 py-3 text-sm font-extrabold text-ink"
                    >
                      {country}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                Countries currently available at checkout
              </h2>

              <p className="mt-3 text-sm leading-7 text-muted">
                The countries below are currently supported in checkout. If your
                country is not listed, contact support before ordering.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {supportedCountries.map((country) => (
                  <div
                    key={country}
                    className="rounded-xl2 border border-line bg-panel px-4 py-3 text-sm font-semibold text-ink"
                  >
                    {country}
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-start">
                <div>
                  <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                    International delivery and customs
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    International delivery is charged at £25.00. Parcels usually
                    arrive within approximately 6–7 working days, but this is an
                    estimated timeframe only.
                  </p>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    Delivery may be affected by customs, courier processing,
                    local delivery conditions, destination-country checks, bank
                    holidays, or delays outside our control.
                  </p>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    International customers are responsible for checking local
                    import rules, customs requirements, taxes, duties, and any
                    restrictions in their own country before ordering.
                  </p>
                </div>

                <div className="rounded-xl2 border border-amber-200 bg-amber-50 p-5">
                  <h3 className="text-sm font-extrabold text-amber-950">
                    Important before ordering
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-amber-800">
                    We cannot provide country-specific import advice. Please
                    check your local rules before placing an international order.
                    If you are unsure, contact us before checkout.
                  </p>

                  <Link
                    href="/contact"
                    className="mt-4 inline-flex rounded-xl2 bg-amber-700 px-4 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-amber-800"
                  >
                    Ask before ordering
                  </Link>
                </div>
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                Payment options for international customers
              </h2>

              <p className="mt-3 text-sm leading-7 text-muted">
                International customers can use the same secure Stripe card checkout. Delivery country and shipping charges are confirmed before you continue to payment.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {paymentOptions.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl2 border border-line bg-panel p-4"
                  >
                    <h3 className="text-sm font-extrabold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {item.copy}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <div className="soft-label">Useful international links</div>

              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink">
                Helpful pages before ordering
              </h2>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {usefulLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="surface-card p-5"
                  >
                    <div className="font-extrabold text-ink">{item.title}</div>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {item.copy}
                    </p>
                  </Link>
                ))}
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-emerald-200 bg-emerald-50 p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight text-emerald-950">
                Unsure before ordering internationally?
              </h2>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-emerald-800">
                If you are an international customer and need help with delivery,
                payment, product information, or documentation before ordering,
                contact us first. If contacting us about an existing order,
                include your order number.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={getWhatsAppHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl2 bg-emerald-700 px-5 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-emerald-800"
                >
                  WhatsApp support
                </a>

                <a
                  href={`mailto:${brand.supportEmail}`}
                  className="rounded-xl2 border border-emerald-200 bg-white px-5 py-3 text-sm font-extrabold text-emerald-900 shadow-soft hover:bg-emerald-100"
                >
                  Email support
                </a>

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
                Tracking and order support
              </h2>

              <p className="mt-3 text-sm leading-7 text-muted">
                After placing an order, customers can use the order status page
                by entering their order number and the email address used during
                checkout. Tracking is provided where available.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/order-status"
                  className="rounded-xl2 bg-accent px-5 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                >
                  Check order status
                </Link>

                <Link
                  href="/shipping"
                  className="rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                >
                  Delivery information
                </Link>
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                International order FAQs
              </h2>

              <div className="mt-6 grid gap-5">
                {faqItems.map((item) => (
                  <div
                    key={item.question}
                    className="rounded-xl2 border border-line bg-panel p-5"
                  >
                    <h3 className="text-base font-extrabold text-ink">
                      {item.question}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-muted">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                Research-use-only notice
              </h2>

              <p className="mt-3 text-sm leading-7 text-muted">
                Products are supplied strictly for laboratory research use only.
                They are not for human consumption, medical use, veterinary use,
                clinical use, diagnostic use, or treatment purposes. This applies
                to UK and international orders.
              </p>
            </section>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}