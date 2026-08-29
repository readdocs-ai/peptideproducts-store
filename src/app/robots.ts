import type { MetadataRoute } from "next";

const privatePaths = [
  "/admin",
  "/admin/",
  "/api/",
  "/cart",
  "/checkout",
  "/order-success",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: privatePaths,
      },
      {
        userAgent: [
          "OAI-SearchBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Claude-SearchBot",
          "Applebot",
          "Googlebot",
          "Bingbot",
        ],
        allow: "/",
        disallow: privatePaths,
      },
    ],
    sitemap: "https://www.peptideproducts.co.uk/sitemap.xml",
    host: "https://www.peptideproducts.co.uk",
  };
}
