import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShopClient } from "@/components/ShopClient";

export const metadata: Metadata = {
  title: "Shop Research-Use-Only Peptides | UK Product Catalogue | Peptide Products",
  description:
    "Browse the Peptide Products catalogue of research-use-only peptides and laboratory compounds with secure checkout, tracked UK dispatch, and documentation available on selected product lines.",
};

export default function ShopPage() {
  return (
    <div>
      <Header />
      <ShopClient />
      <Footer />
    </div>
  );
}