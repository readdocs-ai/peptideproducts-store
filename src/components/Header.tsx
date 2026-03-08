"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { nav } from "@/theme/brand";
import { cartCount, readCart } from "@/lib/cart";

export function Header() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const sync = () => setCount(cartCount(readCart()));
    sync();
    window.addEventListener("pp-cart", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("pp-cart", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <Logo compact />
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="text-sm font-semibold text-slate hover:text-ink"
              >
                {i.label}
              </Link>
            ))}

            {/* Order Status link added separately */}
            <Link
              href="/order-status"
              className="text-sm font-semibold text-slate hover:text-ink"
            >
              Order Status
            </Link>
          </nav>

          <Link
            href="/cart"
            className="rounded-xl2 border border-line bg-paper px-3 py-2 text-sm font-extrabold shadow-soft hover:bg-mist"
            aria-label="Open cart"
          >
            Cart{" "}
            <span className="ml-1 rounded-full bg-haze px-2 py-0.5 text-xs">
              {count}
            </span>
          </Link>
        </div>
      </Container>
    </header>
  );
}