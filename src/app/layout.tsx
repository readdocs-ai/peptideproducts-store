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
  return (
    <html lang="en">
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
      <body>
        <AgeGate />
        {children}
      </body>
    </html>
  );
}