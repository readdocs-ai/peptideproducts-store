/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Search Console cleanup: malformed legacy URLs discovered by Google.
      {
        source: "/shipping-Shipping",
        destination: "/shipping",
        permanent: true,
      },
      {
        source: "/reviews-Reviews",
        destination: "/reviews",
        permanent: true,
      },
      {
        source: "/wholesale-Wholesale",
        destination: "/wholesale",
        permanent: true,
      },
      {
        source: '/retatrutide-uk"',
        destination: "/retatrutide-uk",
        permanent: true,
      },
      {
        source: "/glutathione-research-peptide",
        destination: "/antioxidant-peptides",
        permanent: true,
      },
      {
        source: "/pdrn-research-peptide",
        destination: "/research-peptides",
        permanent: true,
      },
      {
        source: "/hyaluronic-acid-peptide-research",
        destination: "/research-peptides",
        permanent: true,
      },
      {
        source: "/firming-peptides",
        destination: "/shop",
        permanent: true,
      },
      {
        source: "/hydration-peptides",
        destination: "/shop",
        permanent: true,
      },

      {
        source: "/product/bac-water-3ml",
        destination: "/shop",
        permanent: true,
      },
      {
        source: "/product/bac-water-10ml",
        destination: "/shop",
        permanent: true,
      },
      {
        source: "/product/meso-glutathione",
        destination: "/product/glutathione-500mg",
        permanent: true,
      },
      {
        source: "/product/meso-vitamin-c",
        destination: "/antioxidant-peptides",
        permanent: true,
      },
      {
        source: "/product/meso-lift-firming",
        destination: "/shop",
        permanent: true,
      },
      {
        source: "/product/meso-collagen",
        destination: "/research-peptides",
        permanent: true,
      },
      {
        source: "/product/meso-pdrn",
        destination: "/research-peptides",
        permanent: true,
      },
      {
        source: "/product/skinbooster-hyaluronic-acid",
        destination: "/shop",
        permanent: true,
      },

      {
        source: "/where-to-buy-retatrutide-uk",
        destination: "/buy-retatrutide-uk",
        permanent: true,
      },

      // Alluvi is now the live flagship Retatrutide presentation.
      // Consolidate previous Alluvi URLs into the established /product/retatrutide SEO URL.
      {
        source: "/product/alluvi-retatrutide-40mg",
        destination: "/product/retatrutide",
        permanent: true,
      },
      {
        source: "/alluvi-retatrutide",
        destination: "/product/retatrutide",
        permanent: true,
      },
      {
        source: "/alluvi-retatrutide-40mg",
        destination: "/product/retatrutide",
        permanent: true,
      },
      {
        source: "/buy-alluvi-retatrutide-uk",
        destination: "/product/retatrutide",
        permanent: true,
      },
      {
        source: "/alluvi-retatrutide-review",
        destination: "/product/retatrutide",
        permanent: true,
      },
      {
        source: "/where-to-buy-alluvi-retatrutide",
        destination: "/product/retatrutide",
        permanent: true,
      },

      {
        source: "/shop/meso-pdrn",
        destination: "/research-peptides",
        permanent: true,
      },

      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "peptideproducts.co.uk",
          },
        ],
        destination: "https://www.peptideproducts.co.uk/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;