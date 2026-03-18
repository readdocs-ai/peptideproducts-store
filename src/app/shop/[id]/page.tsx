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
  openGraph: {
    title: "Shop Research Peptides | Laboratory Compounds UK | Peptide Products",
    description:
      "Browse research peptides and laboratory compounds in the UK including antioxidant, hydration, firming, regenerative, and retatrutide-related products supplied for scientific study.",
    url: "https://www.peptideproducts.co.uk/shop",
    siteName: "Peptide Products",
    images: [
      {
        url: "https://www.peptideproducts.co.uk/products/retatrutide-40mg-uk.jpg",
        width: 1200,
        height: 900,
        alt: "Shop research peptides and laboratory compounds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop Research Peptides | Laboratory Compounds UK | Peptide Products",
    description:
      "Browse research peptides and laboratory compounds in the UK including antioxidant, hydration, firming, regenerative, and retatrutide-related products supplied for scientific study.",
    images: ["https://www.peptideproducts.co.uk/products/retatrutide-40mg-uk.jpg"],
  },
};

export default function ShopPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Shop Research Peptides",
    url: "https://www.peptideproducts.co.uk/shop",
    description:
      "Browse research peptides and laboratory compounds in the UK including antioxidant, hydration, firming, regenerative, and retatrutide-related products supplied for scientific study.",
    isPartOf: {
      "@type": "WebSite",
      name: "Peptide Products",
      url: "https://www.peptideproducts.co.uk",
    },
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
        name: "Shop",
        item: "https://www.peptideproducts.co.uk/shop",
      },
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([webPageSchema, breadcrumbSchema]),
        }}
      />

      <Header />
      <ShopClient />
      <Footer />
    </div>
  );
}