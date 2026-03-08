"use client";

import { Product } from "@/data/products";

export type CartItem = { productId: string; qty: number };

const KEY = "pp_cart_v1";

export function readCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((x) => x && typeof x.productId === "string" && typeof x.qty === "number");
  } catch {
    return [];
  }
}

export function writeCart(items: CartItem[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(items));
}

export function addToCart(productId: string, qty = 1) {
  const cart = readCart();
  const idx = cart.findIndex((i) => i.productId === productId);
  if (idx >= 0) cart[idx] = { ...cart[idx], qty: Math.min(99, cart[idx].qty + qty) };
  else cart.push({ productId, qty });
  writeCart(cart);
  window.dispatchEvent(new Event("pp-cart"));
}

export function setQty(productId: string, qty: number) {
  const cart = readCart();
  const next = cart.map((i) => (i.productId === productId ? { ...i, qty } : i)).filter((i) => i.qty > 0);
  writeCart(next);
  window.dispatchEvent(new Event("pp-cart"));
}

export function clearCart() {
  writeCart([]);
  window.dispatchEvent(new Event("pp-cart"));
}

export function cartCount(items: CartItem[]) {
  return items.reduce((a, b) => a + b.qty, 0);
}

export function cartTotalGBP(items: CartItem[], products: Product[]) {
  const map = new Map(products.map((p) => [p.id, p]));
  return items.reduce((sum, i) => sum + (map.get(i.productId)?.priceGBP ?? 0) * i.qty, 0);
}

export function formatGBP(n: number) {
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(n);
}
