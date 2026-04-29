import type { MetadataRoute } from "next";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.peptideproducts.co.uk";
  const now = new Date();

  const staticPages = [
    "",
    "/shop",
    "/about",
    "/quality-assurance",
    "/contact",
    "/wholesale",
    "/order-status",
    "/buy-tirzepatide-uk",
    "/tirzepatide-price-uk",
    "/where-to-buy-tirzepatide-uk",
    "/reviews",
    "/faq",
    "/shipping",
    "/returns",
    "/tirzepatide-uk",
    "/terms",
    "/privacy",
    "/disclaimer",

    "/research-peptides",
    "/research-peptides-uk",
    "/peptides-uk",
    "/research-compounds-uk",
    "/metabolic-research-compounds",
    "/research-peptide-supplier-uk",
    "/laboratory-peptide-compounds",
    "/peptide-products",

    "/antioxidant-peptides",
    "/hydration-peptides",
    "/firming-peptides",
    "/regenerative-peptides",

    "/pdrn-research-peptide",
    "/glutathione-research-peptide",
    "/hyaluronic-acid-peptide-research",

    "/retatrutide-uk",
    "/retatrutide-research-peptide",
    "/buy-retatrutide-uk",
    "/retatrutide-price-uk",
    "/where-to-buy-retatrutide-uk",
    "/what-is-retatrutide",

    "/buy-research-peptides-uk",
  ];

  const staticRoutes = staticPages.map((path) => {
    let priority = 0.7;
    let changeFrequency: "daily" | "weekly" | "monthly" = "weekly";

    if (path === "") {
      priority = 1;
      changeFrequency = "daily";
    } else if (path === "/shop") {
      priority = 0.96;
      changeFrequency = "daily";
    } else if (
      path === "/retatrutide-uk" ||
      path === "/buy-retatrutide-uk" ||
      path === "/retatrutide-research-peptide" ||
      path === "/retatrutide-price-uk" ||
      path === "/where-to-buy-retatrutide-uk"
    ) {
      priority = 0.94;
      changeFrequency = "daily";
    } else if (
      path === "/peptides-uk" ||
      path === "/research-compounds-uk" ||
      path === "/metabolic-research-compounds" ||
      path === "/research-peptides" ||
      path === "/research-peptides-uk" ||
      path === "/research-peptide-supplier-uk" ||
      path === "/buy-research-peptides-uk"
    ) {
      priority = 0.9;
      changeFrequency = "weekly";
    } else if (
      path === "/quality-assurance" ||
      path === "/about" ||
      path === "/contact" ||
      path === "/shipping" ||
      path === "/returns"
    ) {
      priority = 0.85;
      changeFrequency = "monthly";
    } else if (
      path === "/antioxidant-peptides" ||
      path === "/hydration-peptides" ||
      path === "/firming-peptides" ||
      path === "/regenerative-peptides" ||
      path === "/laboratory-peptide-compounds" ||
      path === "/peptide-products"
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

  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/product/${product.id}`,
    lastModified: now,
    changeFrequency:
      product.id === "retatrutide" ? ("daily" as const) : ("weekly" as const),
    priority: product.id === "retatrutide" ? 0.95 : 0.86,
  }));

  return [...staticRoutes, ...productRoutes];
}