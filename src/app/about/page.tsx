import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "About Us | Peptide Products",
  description:
    "Peptide Products is a UK-based supplier of laboratory research compounds for analytical and scientific research use only.",
};

export default function AboutPage() {
  return (
    <div>
      <Header />

      <main className="py-14">
        <Container>
          <div className="mx-auto max-w-3xl rounded-xl3 border border-line bg-white p-6 shadow-soft">
            <h1 className="text-4xl font-extrabold tracking-tight text-ink">
              About Peptide Products
            </h1>

            <p className="mt-5 text-sm leading-7 text-muted">
              Peptide Products is a UK-based supplier of laboratory research
              compounds and reference materials.
            </p>

            <p className="mt-4 text-sm leading-7 text-muted">
              We provide materials intended strictly for laboratory, analytical,
              and scientific research use. Our focus is on reliable supply,
              secure checkout, clear product information, and transparent
              ordering for UK and selected international customers.
            </p>

            <p className="mt-4 text-sm leading-7 text-muted">
              All products listed on this site are not intended for human
              consumption, medical use, veterinary use, or clinical treatment.
            </p>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}