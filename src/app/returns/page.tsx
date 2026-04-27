import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Returns & Refunds | Peptide Products",
  description:
    "Returns and refunds information for Peptide Products laboratory research compound orders.",
};

export default function ReturnsPage() {
  return (
    <div>
      <Header />

      <main className="py-14">
        <Container>
          <div className="mx-auto max-w-3xl rounded-xl3 border border-line bg-white p-6 shadow-soft">
            <h1 className="text-4xl font-extrabold tracking-tight text-ink">
              Returns & refunds
            </h1>

            <p className="mt-5 text-sm leading-7 text-muted">
              Due to the nature of laboratory products, returns are only accepted
              for damaged, incorrect, or faulty items.
            </p>

            <p className="mt-4 text-sm leading-7 text-muted">
              Please contact support within 48 hours of delivery if your order
              arrives damaged or incorrect. Include your order number, email
              address, and clear photos where relevant.
            </p>

            <p className="mt-4 text-sm leading-7 text-muted">
              Products must remain unopened and unused unless the issue relates
              to damage during delivery.
            </p>

            <p className="mt-4 text-sm leading-7 text-muted">
              To request help with a return or refund, contact:
              <br />
              <a
                href="mailto:info@peptideproducts.co.uk"
                className="font-semibold text-ink hover:text-accent"
              >
                info@peptideproducts.co.uk
              </a>
            </p>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}