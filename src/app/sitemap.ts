import type { MetadataRoute } from "next";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.peptideproducts.co.uk";
  const now = new Date();

  const staticPages = [
    "",
    "/shop",
<<<<<<< HEAD
    "/quality-assurance",
=======
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
    "/contact",
    "/wholesale",
    "/order-status",
    "/faq",
<<<<<<< HEAD
    "/research-peptides",
    "/research-peptides-uk",
    "/research-peptide-supplier-uk",
=======

    "/research-peptides",
    "/research-peptides-uk",
    "/research-peptide-supplier-uk",

>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
    "/antioxidant-peptides",
    "/hydration-peptides",
    "/firming-peptides",
    "/regenerative-peptides",
<<<<<<< HEAD
=======

>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
    "/pdrn-research-peptide",
    "/glutathione-research-peptide",
    "/hyaluronic-acid-peptide-research",
    "/retatrutide-research-peptide",
<<<<<<< HEAD
    "/buy-research-peptides-uk",
    "/buy-retatrutide-uk",
    "/what-is-retatrutide",
=======

    "/buy-research-peptides-uk",
    "/buy-retatrutide-uk",
    "/what-is-retatrutide", // ✅ NEW PAGE

>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
    "/laboratory-peptide-compounds",
    "/peptide-products",
  ];

  const staticRoutes = staticPages.map((path) => {
    let priority = 0.7;
    let changeFrequency: "daily" | "weekly" | "monthly" = "weekly";

    if (path === "") {
      priority = 1;
      changeFrequency = "daily";
<<<<<<< HEAD
    } else if (path === "/shop" || path === "/quality-assurance") {
      priority = 0.95;
      changeFrequency = "daily";
    } else if (path === "/buy-retatrutide-uk" || path === "/retatrutide-research-peptide") {
      priority = 0.94;
      changeFrequency = "daily";
    } else if (path === "/what-is-retatrutide") {
      priority = 0.9;
      changeFrequency = "weekly";
    } else if (
=======
    } 
    else if (
      path === "/buy-retatrutide-uk" ||
      path === "/retatrutide-research-peptide"
    ) {
      priority = 0.95;
      changeFrequency = "daily";
    } 
    else if (path === "/what-is-retatrutide") {
      priority = 0.92; // ✅ HIGH SUPPORT PAGE
      changeFrequency = "weekly";
    }
    else if (
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
      path === "/research-peptides" ||
      path === "/research-peptides-uk" ||
      path === "/research-peptide-supplier-uk" ||
      path === "/buy-research-peptides-uk"
    ) {
<<<<<<< HEAD
      priority = 0.88;
      changeFrequency = "weekly";
    } else if (
=======
      priority = 0.9;
      changeFrequency = "weekly";
    } 
    else if (
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
      path === "/antioxidant-peptides" ||
      path === "/hydration-peptides" ||
      path === "/firming-peptides" ||
      path === "/regenerative-peptides" ||
      path === "/laboratory-peptide-compounds" ||
      path === "/peptide-products"
    ) {
<<<<<<< HEAD
=======
      priority = 0.85;
      changeFrequency = "weekly";
    } 
    else if (
      path === "/pdrn-research-peptide" ||
      path === "/glutathione-research-peptide" ||
      path === "/hyaluronic-acid-peptide-research"
    ) {
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
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

<<<<<<< HEAD
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/product/${product.id}`,
    lastModified: now,
    changeFrequency: product.id === "retatrutide" ? ("daily" as const) : ("weekly" as const),
    priority: product.id === "retatrutide" ? 0.95 : 0.86,
  }));

  return [...staticRoutes, ...productRoutes];
}
=======
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
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
