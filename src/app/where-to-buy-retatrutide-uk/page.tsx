import type { Metadata } from "next";
import { RetatrutideLandingPage } from "@/components/RetatrutideLandingPage";
import { retatrutideSeoPages } from "@/data/retatrutideSeoPages";

const page = retatrutideSeoPages["where-to-buy-retatrutide-uk"];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: {
    canonical: `https://www.peptideproducts.co.uk${page.path}`,
  },
  openGraph: {
    title: page.title,
    description: page.description,
    url: `https://www.peptideproducts.co.uk${page.path}`,
    siteName: "Peptide Products",
    images: [
      {
        url: "https://www.peptideproducts.co.uk/products/reta%20single%20box.png",
        width: 1200,
        height: 900,
        alt: "Retatrutide 40mg research peptide product packaging",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: page.title,
    description: page.description,
    images: ["https://www.peptideproducts.co.uk/products/reta%20single%20box.png"],
  },
};

export default function Page() {
  return <RetatrutideLandingPage page={page} />;
}
