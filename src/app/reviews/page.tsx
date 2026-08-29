import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Customer Reviews | Peptide Products UK",
  description:
  "Read customer reviews for Peptide Products UK including delivery feedback, ordering experience, packaging, support, and product supply service.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/reviews",
  },
};

export default function ReviewsPage() {
  const reviews = [
  {
    name: "Marie, UK",
    text: "Outstanding fast delivery, outstanding service, and excellent prices! I was initially a little sceptical about ordering from a new supplier, but communication was excellent and I received an update within a few hours. My order arrived quickly and the whole process was smooth. I will definitely be ordering again. Thank you!",
  },
  {
    name: "C. Jennings, UK",
    text: "Amazing! Quick and easy to order and pay, and I received it the following day. I will certainly be ordering again.",
  },
  {
    name: "Jeanette R., UK",
    text: "I was very skeptical ordering this from a company I’d never heard of and sending £125 upfront via BACS! But I can not fault anything! The retatrutide arrived as promised, well packaged and sealed! And a lot cheaper than my previous supplier! Will be definitely using again! 5 star service! Thank you from Jen",
  },
  {
    name: "Mo MacPherson, UK",
    text: "Impressive! Very easy ordering and payment process, and extremely fast delivery. Having been let down in the past by another supplier it is wonderful to get such great service. Will definitely be back!",
  },
  {
    name: "Eddie Sell, UK",
    text: "Incredible service, I've ordered similar products before from various suppliers, but this was next day delivery, would highly recommend.",
  },
  {
    name: "Morag, UK",
    text: "Excellent service once again, will definitely be back. Fast, easy to order and very reliable.",
  },
  {
    name: "Simon S., UK",
    text: "Ordered before 14:30 received next day before 11 am. This is my second order.",
  },
  {
    name: "Amy, UK",
    text: "Easy to order and pay. Quick delivery, great tracking option and delivery status notifications. I have ordered a few times from this company with no issues whatsoever. Thank you.",
  },
  {
    name: "Patrice B., UK",
    text: "Straight forward process. The product was at my door the following morning. Couldn’t ask for a better service ⭐⭐⭐⭐⭐",
  },
  {
    name: "David, UK",
    text: "Quick delivery, perfect packing, great service.",
  },
  {
    name: "Amanda, UK",
    text: "Excellent service, delivery within 3 days well packaged. Great price also. Will be ordering again.",
  },
  {
    name: "Mihaela, UK",
    text: "Thank you very much! My order arrived very quickly, and I am extremely pleased with the service. You are very professional and reliable. I highly recommend you and will definitely order again. Thanks for the excellent service!",
  },
  {
    name: "Andrew, UK",
    text: "Delivery was quicker than I expected and the product was well packaged.",
  },
  {
    name: "Tracy, UK",
    text: "Ordering was straightforward and delivery was faster than expected. The products arrived well packaged with clear labeling and no issues at all. I also appreciated the helpful communication from the customer support team throughout the process.",
  },
  {
    name: "James, UK",
    text: "Fast delivery and secure packaging. Very smooth ordering process.",
  },
  {
    name: "A. R., UK",
    text: "Order arrived quickly and everything was packed well.",
  },
  {
    name: "Michael, UK",
    text: "Clear communication, easy checkout, and a good overall experience.",
  },
  {
    name: "Daniel, UK",
    text: "Tracked delivery arrived on time and checkout was straightforward.",
  },
  {
    name: "Chris, UK",
    text: "Product information was much clearer compared to most sites I checked.",
  },
];
  const reviewSchema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Customer Reviews | Peptide Products UK",
      url: "https://www.peptideproducts.co.uk/reviews",
      description:
        "Customer feedback about Peptide Products ordering, delivery, packaging, communication, checkout and support.",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.peptideproducts.co.uk" },
        { "@type": "ListItem", position: 2, name: "Reviews", item: "https://www.peptideproducts.co.uk/reviews" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Peptide Products customer reviews",
      itemListElement: reviews.map((review, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Review",
          author: { "@type": "Person", name: review.name },
          reviewBody: review.text,
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          itemReviewed: { "@type": "Organization", name: "Peptide Products", url: "https://www.peptideproducts.co.uk" },
        },
      })),
    },
  ];

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <Header />

      <main className="py-10 lg:py-12">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft lg:p-8">
              <div className="eyebrow">Customer reviews</div>

              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
                Customer reviews
              </h1>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-muted md:text-base">
                Feedback shared by customers about their ordering experience,
delivery, packaging, communication, and support from Peptide Products UK. Customers commonly mention
                clear product information, straightforward checkout, tracked delivery,
                careful packaging, and helpful communication.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="trust-pill">UK-based supplier</span>
                <span className="trust-pill">Tracked delivery available</span>
               <span className="trust-pill">Secure card checkout</span>
<span className="trust-pill">Stripe card payments</span>
                <span className="trust-pill">Simple mobile checkout</span>
                <span className="trust-pill">Laboratory research use only</span>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-2xl font-extrabold text-ink">Service</div>
<div className="mt-1 text-sm text-muted">
  Ordering and delivery feedback
</div>
                </div>

                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-2xl font-extrabold text-ink">UK</div>
                  <div className="mt-1 text-sm text-muted">
                    Tracked dispatch available
                  </div>
                </div>

                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-2xl font-extrabold text-ink">Support</div>
                  <div className="mt-1 text-sm text-muted">
                    Email and WhatsApp contact
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {reviews.map((review, index) => (
                <div
                  key={`${review.name}-${index}`}
                  className="rounded-xl3 border border-line bg-white p-6 shadow-soft"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-lg font-extrabold text-amber-500">
                      ★★★★★
                    </div>
                    <div className="rounded-full border border-line bg-panel px-3 py-1 text-xs font-extrabold text-muted">
                      Customer feedback
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-muted">
                    “{review.text}”
                  </p>

                  <div className="mt-5 text-sm font-extrabold text-ink">
                    {review.name}
                  </div>
                </div>
              ))}
            </div>

            <section className="mt-12 rounded-xl3 border border-emerald-200 bg-emerald-50 p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight text-emerald-950">
                Had a good experience?
              </h2>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-emerald-800">
                If your order arrived safely and the service met your expectations,
                we would really appreciate a quick review. Customer feedback helps
                new visitors understand what to expect before ordering.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
               <Link
  href="/reviews/submit"
  className="rounded-xl2 bg-emerald-700 px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-emerald-800"
>
  Write a review
</Link>
                <Link
                  href="/order-status"
                  className="rounded-xl2 border border-emerald-200 bg-white px-6 py-3 text-sm font-extrabold text-emerald-900 shadow-soft hover:bg-emerald-100"
                >
                  Check order status
                </Link>
              </div>
            </section>

            <section className="mt-10 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                Review policy
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
                Reviews on this page are presented as customer service feedback about ordering, delivery, packaging, communication, checkout and support. They should not be read as product efficacy claims, medical claims, or usage guidance.
              </p>
            </section>

            <section className="mt-10 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                Need help before leaving feedback?
              </h2>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
                If there is an issue with your order, delivery, tracking, payment
                confirmation, or documentation, please contact us first so we can
                look into it properly.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <Link
                  href="/contact"
                  className="rounded-xl2 border border-line bg-panel px-4 py-3 text-center text-sm font-extrabold text-ink hover:bg-white"
                >
                  Contact support
                </Link>

                <Link
                  href="/order-status"
                  className="rounded-xl2 border border-line bg-panel px-4 py-3 text-center text-sm font-extrabold text-ink hover:bg-white"
                >
                  Order status
                </Link>

                <Link
                  href="/shipping"
                  className="rounded-xl2 border border-line bg-panel px-4 py-3 text-center text-sm font-extrabold text-ink hover:bg-white"
                >
                  Shipping information
                </Link>
              </div>
            </section>

            <section className="mt-12 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                Why customers choose Peptide Products
              </h2>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">
                    Transparent product pages
                  </div>

                  <p className="mt-2 text-sm leading-6 text-muted">
                    Customers can review product details, pricing, stock status,
                    documentation where available, and checkout information before
                    ordering.
                  </p>
                </div>

               <div className="rounded-xl2 border border-line bg-panel p-4">
  <div className="text-sm font-extrabold text-ink">
    Alternative checkout
  </div>

  <p className="mt-2 text-sm leading-6 text-muted">
    Secure Stripe card checkout is available, with order updates sent by email after payment confirmation.
  </p>
</div>

                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">
                    Tracked UK delivery
                  </div>

                  <p className="mt-2 text-sm leading-6 text-muted">
                    Orders are prepared for tracked delivery after payment
                    confirmation and processing.
                  </p>
                </div>

                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">
                    Research-use-only supply
                  </div>

                  <p className="mt-2 text-sm leading-6 text-muted">
                    Products are supplied strictly for laboratory, analytical,
                    and scientific research use only.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-10 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                Popular product pages
              </h2>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Link href="/product/retatrutide" className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    Retatrutide product
                  </div>

                  <p className="mt-2 text-sm text-muted">
                    View product information, stock status, and ordering options.
                  </p>
                </Link>

                <Link
                  href="/product/tirzepatide-tr15-15mg"
                  className="surface-card p-5"
                >
                  <div className="font-extrabold text-ink">
                    Tirzepatide product
                  </div>

                  <p className="mt-2 text-sm text-muted">
                    Access current pricing and ordering information.
                  </p>
                </Link>

                <Link href="/buy-peptides-uk" className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    Buy peptides UK
                  </div>

                  <p className="mt-2 text-sm text-muted">
                    Browse laboratory research products and related pages.
                  </p>
                </Link>

                <Link
  href="/product/melanotan-mt2-10mg"
  className="surface-card p-5"
>
  <div className="font-extrabold text-ink">
    Melanotan MT-2 10mg
  </div>

  <p className="mt-2 text-sm text-muted">
    View Melanotan MT-2 product information, stock status, and ordering options.
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

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
              >
                Browse products
              </Link>

              <Link
                href="/contact"
                className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
              >
                Contact support
              </Link>

              <Link
                href="/shipping"
                className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
              >
                Shipping information
              </Link>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}