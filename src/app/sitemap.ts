import type { MetadataRoute } from "next";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.peptideproducts.co.uk";

  const staticPages = [
    "",
    "/shop",
    "/contact",
    "/wholesale",
    "/order-status",
    "/faq",

    "/research-peptides",
    "/research-peptides-uk",
    "/research-peptide-supplier-uk",

    "/antioxidant-peptides",
    "/hydration-peptides",
    "/firming-peptides",
    "/regenerative-peptides",

    "/pdrn-research-peptide",
    "/glutathione-research-peptide",
    "/hyaluronic-acid-peptide-research",
    "/retatrutide-research-peptide",

    "/buy-research-peptides-uk",
    "/buy-retatrutide-uk",
    "/laboratory-peptide-compounds",
    "/peptide-products",
  ];

  const staticRoutes = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority:
      path === ""
        ? 1
        : path === "/research-peptides" ||
          path === "/research-peptides-uk" ||
          path === "/research-peptide-supplier-uk" ||
          path === "/retatrutide-research-peptide" ||
          path === "/buy-retatrutide-uk"
        ? 0.9
        : path === "/antioxidant-peptides" ||
          path === "/hydration-peptides" ||
          path === "/firming-peptides" ||
          path === "/regenerative-peptides"
        ? 0.88
        : path === "/buy-research-peptides-uk" ||
          path === "/laboratory-peptide-compounds" ||
          path === "/peptide-products"
        ? 0.85
        : 0.7,
  }));

  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/product/${product.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...productRoutes];
}