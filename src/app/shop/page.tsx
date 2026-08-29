import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShopClient } from "@/components/ShopClient";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Buy Research Peptides UK | Catalogue",
  description:
    "Browse research-use-only peptides and laboratory compounds from Peptide Products. UK dispatch, product documentation, stock status, and support available.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/shop",
  },
  openGraph: {
    title: "Buy Research Peptides UK | Peptide Products Catalogue",
    description:
      "Browse research-use-only peptides and laboratory compounds with UK dispatch, product documentation, and test reports available on selected product lines.",
    url: "https://www.peptideproducts.co.uk/shop",
    siteName: "Peptide Products",
    images: [
      {
        url: "https://www.peptideproducts.co.uk/products/retatrutide-40mg-uk.jpg",
        width: 1200,
        height: 900,
        alt: "Peptide Products research peptide catalogue",
      },
    ],
  },
};

export default function ShopPage() {
  const merchantReturnPolicy = {
    "@type": "MerchantReturnPolicy",
    applicableCountry: "GB",
    returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
    merchantReturnDays: 0,
  };

  const shippingDetails = [
    {
      "@type": "OfferShippingDetails",
      shippingDestination: {
        "@type": "DefinedRegion",
        addressCountry: "GB",
      },
      shippingRate: {
        "@type": "MonetaryAmount",
        value: 0,
        currency: "GBP",
      },
      deliveryTime: {
        "@type": "ShippingDeliveryTime",
        handlingTime: {
          "@type": "QuantitativeValue",
          minValue: 1,
          maxValue: 2,
          unitCode: "DAY",
        },
        transitTime: {
          "@type": "QuantitativeValue",
          minValue: 1,
          maxValue: 3,
          unitCode: "DAY",
        },
      },
    },
    {
      "@type": "OfferShippingDetails",
      shippingDestination: {
        "@type": "DefinedRegion",
        addressCountry: [
          "US",
          "CA",
          "AU",
          "NZ",
          "IE",
          "DE",
          "FR",
          "ES",
          "IT",
          "NL",
          "BE",
          "SE",
          "NO",
          "DK",
          "CH",
          "AT",
          "PT",
          "AE",
          "SA",
        ],
      },
      shippingRate: {
        "@type": "MonetaryAmount",
        value: 25,
        currency: "GBP",
      },
      deliveryTime: {
        "@type": "ShippingDeliveryTime",
        handlingTime: {
          "@type": "QuantitativeValue",
          minValue: 1,
          maxValue: 3,
          unitCode: "DAY",
        },
        transitTime: {
          "@type": "QuantitativeValue",
          minValue: 5,
          maxValue: 10,
          unitCode: "DAY",
        },
      },
    },
  ];

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Peptide Products research-use-only product catalogue",
    url: "https://www.peptideproducts.co.uk/shop",
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        sku: product.id,
        image: `https://www.peptideproducts.co.uk${product.image}`,
        description: `${product.subtitle}. ${product.pack}. Supplied strictly for laboratory research use only.`,
        brand: {
          "@type": "Brand",
          name: "Peptide Products",
        },
        offers: {
          "@type": "Offer",
          url: `https://www.peptideproducts.co.uk/product/${product.id}`,
          priceCurrency: "GBP",
          price: product.priceGBP,
          availability:
            product.stockStatus === "in_stock"
              ? "https://schema.org/InStock"
              : "https://schema.org/OutOfStock",
          itemCondition: "https://schema.org/NewCondition",
          shippingDetails,
          hasMerchantReturnPolicy: merchantReturnPolicy,
          seller: {
            "@type": "Organization",
            name: "Peptide Products",
            url: "https://www.peptideproducts.co.uk",
          },
        },
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
          __html: JSON.stringify([itemListSchema, breadcrumbSchema]),
        }}
      />
      <Header />
      <ShopClient />
      <Footer />
    </div>
  );
}