import type { Metadata } from "next";
import "./globals.css";
import { brand } from "@/theme/brand";
import Script from "next/script";

const siteUrl = `https://${brand.domain}`;
const defaultOg = `${siteUrl}/og-image.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brand.name} | Premium UK Research Peptide Supplier`,
    template: `%s | ${brand.name}`,
  },
  description:
    "Peptide Products supplies research-use-only peptide products and laboratory research compounds with UK dispatch, product documentation, and order support.",
  applicationName: brand.name,
  keywords: [
    "research peptides UK",
    "laboratory compounds UK",
    "retatrutide UK",
    "BPC-157 UK",
    "GHK-CU UK",
    "research peptide supplier",
  ],
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: brand.name,
    title: "Peptide Products | Premium UK Research Peptide Supplier",
    description:
      "Research-use-only peptide products and laboratory research compounds with UK dispatch, product documentation, and order support.",
    images: [
      {
        url: defaultOg,
        width: 1200,
        height: 630,
        alt: "Peptide Products research-use-only peptide products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peptide Products | Premium UK Research Peptide Supplier",
    description:
      "Research-use-only peptide products and laboratory research compounds with UK dispatch, product documentation, and order support.",
    images: [defaultOg],
  },
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const sitewideSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: brand.name,
      legalName: "Peptide Products Ltd",
      url: siteUrl,
      logo: `${siteUrl}/favicon.svg`,
      image: defaultOg,
      description:
        "UK-based supplier of laboratory research compounds and research-use-only peptide products.",
      identifier: [
        {
          "@type": "PropertyValue",
          propertyID: "Companies House",
          value: "17073416",
        },
      ],
      areaServed: [{ "@type": "Country", name: "United Kingdom" }],
      knowsAbout: [
        "research peptides UK",
        "Retatrutide research peptide",
        "laboratory research compounds",
        "peptide test reports",
        "research-use-only product documentation",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: brand.supportEmail,
          telephone: brand.phone,
          areaServed: "GB",
          availableLanguage: "en",
        },
      ],
      sameAs: [],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: brand.name,
      url: siteUrl,
      image: defaultOg,
      publisher: { "@id": `${siteUrl}/#organization` },
      about: [
        "research peptides",
        "Retatrutide research product information",
        "laboratory research compounds",
        "peptide quality information",
      ],
    },
  ];

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(sitewideSchema),
          }}
        />
      </head>

      <body>
        <Script id="google-tags" strategy="afterInteractive">
          {`
            (function () {
              var isAdminPage = window.location.pathname.indexOf('/admin') === 0;

              if (isAdminPage) {
                return;
              }

              var script = document.createElement('script');
              script.async = true;
              script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-18121290521';
              document.head.appendChild(script);

              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;

              gtag('js', new Date());

              // Google Analytics
              gtag('config', 'G-MFNXT0MBYH');

              // Google Ads base tag
              gtag('config', 'AW-18121290521');
            })();
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}