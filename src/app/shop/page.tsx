import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShopClient } from "./ShopClient";

export const metadata: Metadata = {
  title: "Shop Research Peptides | Laboratory Compounds UK | Peptide Products",
  description:
    "Browse research peptides and laboratory compounds in the UK including antioxidant, hydration, firming, regenerative, and retatrutide-related products supplied for scientific study.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/shop",
  },
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