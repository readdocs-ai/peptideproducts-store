import type { Metadata } from "next";
import "./globals.css";
import { brand } from "@/theme/brand";
import { AgeGate } from "@/components/AgeGate";
import Script from "next/script";

export const metadata: Metadata = {
  title: `${brand.name} — ${brand.tagline}`,
  description: brand.description,
  metadataBase: new URL(`https://${brand.domain}`),
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const sitewideSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: brand.name,
      url: `https://${brand.domain}`,
      logo: `https://${brand.domain}/favicon.svg`,
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
      url: `https://${brand.domain}`,
      potentialAction: {
        "@type": "SearchAction",
        target: `https://${brand.domain}/shop`,
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
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
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