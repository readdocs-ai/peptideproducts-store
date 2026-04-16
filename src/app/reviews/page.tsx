import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export default function ReviewsPage() {
  const reviews = [
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
  ];

  return (
    <div>
      <Header />
      <main className="py-10 lg:py-12">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="eyebrow">Customer reviews</div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
              Customer reviews
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted md:text-base">
              Feedback from customers who have ordered from Peptide Products.
            </p>

            <div className="mt-8 grid gap-5">
              {reviews.map((review, index) => (
                <div
                  key={`${review.name}-${index}`}
                  className="rounded-xl3 border border-line bg-white p-6 shadow-soft"
                >
                  <div className="text-lg font-extrabold text-ink">★★★★★</div>
                  <p className="mt-3 text-sm leading-7 text-muted">{review.text}</p>
                  <div className="mt-4 text-sm font-extrabold text-ink">{review.name}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
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
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}