import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Status | Peptide Products",
  description: "Private order status lookup for Peptide Products customers.",
  robots: { index: false, follow: false },
};

export default function OrderStatusLayout({ children }: { children: React.ReactNode }) {
  return children;
}
