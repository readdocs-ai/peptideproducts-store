import type { Metadata } from "next";
import "./globals.css";
import { brand } from "@/theme/brand";
import { AgeGate } from "@/components/AgeGate";

export const metadata: Metadata = {
  title: `${brand.name} — ${brand.tagline}`,
  description: brand.description,
  metadataBase: new URL(`https://${brand.domain}`),
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AgeGate />
        {children}
      </body>
    </html>
  );
}