import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin",
        "/admin/",
        "/api/",
      ],
    },
    sitemap: "https://www.peptideproducts.co.uk/sitemap.xml",
    host: "https://www.peptideproducts.co.uk",
  };
}