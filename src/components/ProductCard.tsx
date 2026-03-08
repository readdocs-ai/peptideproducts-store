"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";
import { addToCart, formatGBP } from "@/lib/cart";

export function ProductCard({ p }: { p: Product }) {
  return (
    <div className="group overflow-hidden rounded-xl3 border border-line bg-paper/85 shadow-soft backdrop-blur">
      <Link href={`/product/${p.id}`} className="block">
        <div className="relative aspect-square bg-haze">
          <Image src={p.image} alt={p.name} fill className="object-cover" />
          <div className="absolute left-3 top-3 rounded-full bg-paper/85 px-3 py-1 text-xs font-extrabold shadow-soft">
            {p.category}
          </div>
        </div>

        <div className="p-5">
          <div className="text-xs font-bold text-slate">{p.subtitle}</div>
          <div className="mt-1 text-xl font-extrabold tracking-tight">{p.name}</div>
          <div className="mt-2 flex items-center justify-between text-sm">
            <div className="text-slate">{p.pack}</div>
            <div className="font-extrabold">{formatGBP(p.priceGBP)}</div>
          </div>
          <ul className="mt-3 grid gap-1 text-sm text-slate">
            {p.highlights.slice(0, 2).map((h) => (
              <li key={h}>• {h}</li>
            ))}
          </ul>
        </div>
      </Link>

      <div className="border-t border-line p-4">
        <button
          onClick={() => addToCart(p.id, 1)}
          className="w-full rounded-xl2 bg-accent px-4 py-2 text-sm font-extrabold text-paper shadow-glow hover:opacity-95"
        >
          Add to cart
        </button>
        <div className="mt-2 text-center text-[11px] text-slate">Research use only</div>
      </div>
    </div>
  );
}
