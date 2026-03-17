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

    // category pages
    "/antioxidant-peptides",
    "/hydration-peptides",
    "/firming-peptides",
    "/regenerative-peptides",

  // compound topic pages
"/pdrn-research-peptide",
"/glutathione-research-peptide",
"/hyaluronic-acid-peptide-research",
"/retatrutide-research-peptide",

// buyer / commercial pages
"/buy-research-peptides-uk",
"/buy-retatrutide-uk",
"/laboratory-peptide-compounds",
"/peptide-products",

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
        : path === "/antioxidant-peptides" ||
          path === "/hydration-peptides" ||
          path === "/firming-peptides" ||
          path === "/regenerative-peptides"
        ? 0.88
       : path === "/buy-research-peptides-uk" ||
  path === "/buy-retatrutide-uk" ||
  path === "/retatrutide-research-peptide" ||
  path === "/laboratory-peptide-compounds" ||
  path === "/peptide-products"
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