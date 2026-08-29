"use client";

import { useRouter } from "next/navigation";
import { addToCart } from "@/lib/cart";

type BuyNowButtonProps = {
  productId: string;
  quantity?: number;
  label?: string;
  className?: string;
};

export function BuyNowButton({
  productId,
  quantity = 1,
  label = "Buy now",
  className,
}: BuyNowButtonProps) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        addToCart(productId, quantity);
        router.push("/cart");
      }}
      className={
        className ??
        "inline-flex justify-center rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-accent/90"
      }
    >
      {label}
    </button>
  );
}
