import type { MetadataRoute } from "next";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.peptideproducts.co.uk";
  const now = new Date();

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

  const staticRoutes = staticPages.map((path) => {
    let priority = 0.7;
    let changeFrequency: "daily" | "weekly" | "monthly" = "weekly";

    if (path === "") {
      priority = 1;
      changeFrequency = "daily";
    } else if (
      path === "/buy-retatrutide-uk" ||
      path === "/retatrutide-research-peptide"
    ) {
      priority = 0.95;
      changeFrequency = "daily";
    } else if (
      path === "/research-peptides" ||
      path === "/research-peptides-uk" ||
      path === "/research-peptide-supplier-uk" ||
      path === "/buy-research-peptides-uk"
    ) {
      priority = 0.9;
      changeFrequency = "weekly";
    } else if (
      path === "/antioxidant-peptides" ||
      path === "/hydration-peptides" ||
      path === "/firming-peptides" ||
      path === "/regenerative-peptides" ||
      path === "/laboratory-peptide-compounds" ||
      path === "/peptide-products"
    ) {
      priority = 0.85;
      changeFrequency = "weekly";
    } else if (
      path === "/pdrn-research-peptide" ||
      path === "/glutathione-research-peptide" ||
      path === "/hyaluronic-acid-peptide-research"
    ) {
      priority = 0.84;
      changeFrequency = "weekly";
    }

    return {
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    };
  });

  const productRoutes = products.map((product) => {
    const isRetatrutide = product.id === "retatrutide";

    return {
      url: `${baseUrl}/product/${product.id}`,
      lastModified: now,
      changeFrequency: isRetatrutide ? ("daily" as const) : ("weekly" as const),
      priority: isRetatrutide ? 0.95 : 0.88,
    };
  });

  return [...staticRoutes, ...productRoutes];
}