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

    // SEO hub pages
    "/research-peptides",
    "/research-peptides-uk",
    "/research-peptide-supplier-uk",

    // compound topic pages
    "/pdrn-research-peptide",
    "/glutathione-research-peptide",
    "/hyaluronic-acid-peptide-research",
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
          path === "/research-peptide-supplier-uk"
        ? 0.9
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