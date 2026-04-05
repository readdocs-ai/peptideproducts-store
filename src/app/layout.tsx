import type { Metadata } from "next";
import "./globals.css";
import { brand } from "@/theme/brand";
import { AgeGate } from "@/components/AgeGate";
import Script from "next/script";

const siteUrl = `https://${brand.domain}`;
const defaultOg = `${siteUrl}/home/home-full-vial-set.webp`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brand.name} | ${brand.tagline}`,
    template: `%s | ${brand.name}`,
  },
  description: brand.description,
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
    url: siteUrl,
    siteName: brand.name,
    title: `${brand.name} | ${brand.tagline}`,
    description: brand.description,
    images: [
      {
        url: defaultOg,
        width: 1400,
        height: 1080,
        alt: `${brand.name} research peptide range`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} | ${brand.tagline}`,
    description: brand.description,
    images: [defaultOg],
  },
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const sitewideSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: brand.name,
      url: siteUrl,
      logo: `${siteUrl}/favicon.svg`,
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
      name: brand.name,
      url: siteUrl,
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/shop`,
        "query-input": "required name=search_term_string",
      },
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MFNXT0MBYH"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MFNXT0MBYH');
          `}
        </Script>

        <AgeGate />
        {children}
      </body>
    </html>
  );
}
