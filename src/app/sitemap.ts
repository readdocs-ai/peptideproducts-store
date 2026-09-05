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
    "/research-peptide-documentation",
    "/contact",
    "/wholesale",
    "/reviews",
    "/faq",
    "/shipping",
    "/international-orders",
    "/returns",
    "/terms",
    "/privacy",
    "/disclaimer",

    "/buy-peptides-uk",
    "/where-to-buy-peptides-uk",

    "/research-peptides",
    "/research-peptides-uk",
    "/peptides-uk",
    "/research-compounds-uk",
    "/metabolic-research-compounds",
    "/research-peptide-supplier-uk",
    "/buy-research-peptides-uk",
    "/laboratory-peptide-compounds",
    "/peptide-products",

    "/antioxidant-peptides",
    "/regenerative-peptides",
    "/nootropic-peptides",

    
    

    "/retatrutide",
    "/reta",
    "/retatrutide-uk",
    "/buy-retatrutide-uk",
    "/retatrutide-price-uk",
    "/retatrutide-research-peptide",
    "/what-is-retatrutide",
    "/retatrutide-for-sale-uk",
    "/retatrutide-40mg-uk",
    "/retatrutide-uk-pen",
    "/reta-peptide-buy",
    "/peptide-pens-uk",
    "/tr40-peptide-uk",
    "/retatrutide-supplier-checklist",

    "/tirzepatide-uk",
    "/buy-tirzepatide-uk",
    "/tirzepatide-price-uk",
    "/where-to-buy-tirzepatide-uk",

    "/ghk-cu-uk",
    "/bpc-157-uk",
    "/tb-500-uk",
    "/nad-500mg-uk",
    "/ipamorelin-uk",
    "/selank-uk",
    "/semax-uk",
    "/melanotan-uk",
    "/glutathione-uk",
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
      path === "/retatrutide" ||
      path === "/reta" ||
      path === "/retatrutide-uk" ||
      path === "/buy-retatrutide-uk" ||
      path === "/retatrutide-price-uk" ||
      path === "/retatrutide-research-peptide" ||
      path === "/what-is-retatrutide" ||
      path === "/retatrutide-for-sale-uk" ||
      path === "/retatrutide-40mg-uk" ||
      path === "/retatrutide-uk-pen" ||
      path === "/reta-peptide-buy" ||
      path === "/peptide-pens-uk" ||
      path === "/retatrutide-supplier-checklist"
    ) {
      priority = 0.94;
      changeFrequency = "daily";
    } else if (
      path === "/tirzepatide-uk" ||
      path === "/buy-tirzepatide-uk" ||
      path === "/tirzepatide-price-uk" ||
      path === "/where-to-buy-tirzepatide-uk" ||
      path === "/tr40-peptide-uk"
    ) {
      priority = 0.9;
      changeFrequency = "weekly";
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
      path === "/research-peptide-documentation" ||
      path === "/about" ||
      path === "/contact" ||
      path === "/shipping" ||
      path === "/international-orders" ||
      path === "/returns" ||
      path === "/reviews" ||
      path === "/faq" ||
      path === "/wholesale" ||
      path === "/terms" ||
      path === "/privacy" ||
      path === "/disclaimer"
    ) {
      priority = 0.85;
      changeFrequency = "monthly";
    } else if (
      path === "/antioxidant-peptides" ||
      path === "/regenerative-peptides" ||
      path === "/nootropic-peptides" ||
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

  const highPriorityProductIds = new Set([
    "retatrutide",
    "reta-research-compound-10mg-vial",
    "reta-research-compound-20mg-vial",
    "reta-research-compound-40mg-vial",
    "retatrutide-research-compound-10mg-vial",
    "retatrutide-research-compound-20mg-vial",
    "retatrutide-research-compound-40mg-vial",
  ]);

  const productRoutes = products.map((product) => {
    const isHighPriorityProduct = highPriorityProductIds.has(product.id);

    return {
      url: `${baseUrl}/product/${product.id}`,
      lastModified: now,
      changeFrequency: isHighPriorityProduct
        ? ("daily" as const)
        : ("weekly" as const),
      priority: product.id === "retatrutide" ? 0.95 : isHighPriorityProduct ? 0.92 : 0.86,
    };
  });

  return [...staticRoutes, ...productRoutes];
}