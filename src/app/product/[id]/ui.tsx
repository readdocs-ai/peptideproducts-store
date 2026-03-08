"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Product } from "@/data/products";
import { addToCart, formatGBP } from "@/lib/cart";

export function ProductBuyBox({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const total = useMemo(() => product.priceGBP * qty, [product.priceGBP, qty]);

  return (
    <aside className="h-fit rounded-xl3 border border-line bg-paper/85 p-6 shadow-soft backdrop-blur">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <div className="text-sm text-slate">{product.pack}</div>
          <div className="mt-1 text-2xl font-extrabold">{formatGBP(product.priceGBP)}</div>
        </div>
        <div className="rounded-xl2 bg-haze px-3 py-2 text-xs font-extrabold text-slate border border-line">
          Research supply
        </div>
      </div>

      <div className="mt-6">
        <label className="text-xs font-extrabold text-slate">Quantity</label>
        <div className="mt-2 flex items-center gap-2">
          <button className="h-10 w-10 rounded-xl2 border border-line bg-paper font-extrabold hover:bg-mist" onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
          <input
            className="h-10 w-16 rounded-xl2 border border-line bg-mist text-center font-extrabold outline-none focus:ring-2 focus:ring-aqua/40"
            value={qty}
            onChange={(e) => {
              const n = Number(e.target.value);
              if (Number.isFinite(n)) setQty(Math.min(99, Math.max(1, Math.floor(n))));
            }}
            inputMode="numeric"
          />
          <button className="h-10 w-10 rounded-xl2 border border-line bg-paper font-extrabold hover:bg-mist" onClick={() => setQty((q) => Math.min(99, q + 1))}>+</button>
        </div>
      </div>

      <button className="mt-6 w-full rounded-xl2 bg-accent px-4 py-3 text-sm font-extrabold text-paper shadow-glow hover:opacity-95" onClick={() => addToCart(product.id, qty)}>
        Add to cart — {formatGBP(total)}
      </button>

      <div className="mt-3 text-xs text-slate">
        You’ll be asked to confirm <span className="font-bold text-ink">research use only</span> at checkout.
      </div>

      <div className="mt-6 rounded-xl2 border border-line bg-mist p-4 text-xs text-slate">
        <div className="font-extrabold text-ink">Compliance note</div>
        <div className="mt-1">Not for human or veterinary use. Handle only in a suitable laboratory environment.</div>
      </div>

      <div className="mt-6 flex items-center justify-between text-sm">
        <Link href="/shop" className="font-extrabold text-slate hover:text-ink">← Continue shopping</Link>
        <Link href="/cart" className="font-extrabold text-ink hover:underline">Go to cart →</Link>
      </div>
    </aside>
  );
}
