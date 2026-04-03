"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { nav } from "@/theme/brand";
import { cartCount, readCart, type CartEventDetail } from "@/lib/cart";
import { products } from "@/data/products";

const researchLinks = [
  { href: "/research-peptides", label: "Research peptides" },
  { href: "/peptide-compounds-research", label: "Peptide compounds research" },
  { href: "/research-peptides-uk", label: "Research peptides UK" },
  { href: "/research-peptide-supplier-uk", label: "Research peptide supplier UK" },
  { href: "/buy-research-peptides-uk", label: "Buy research peptides UK" },
  { href: "/laboratory-peptide-compounds", label: "Laboratory peptide compounds" },
] as const;

const hiddenNavHrefs = new Set(["/research-peptides", "/faq", "/disclaimer"]);

export function Header() {
  const [count, setCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [toast, setToast] = useState<{ name: string; qty: number } | null>(null);

  const productMap = useMemo(
    () => new Map(products.map((product) => [product.id, product.name])),
    []
  );

  useEffect(() => {
    const sync = (event?: Event) => {
      setCount(cartCount(readCart()));
      const detail = (event as CustomEvent<CartEventDetail> | undefined)?.detail;
      if (detail?.added && detail.productId) {
        setToast({
          name: productMap.get(detail.productId) || "Product",
          qty: detail.qty || 1,
        });
      }
    };

    sync();

    const onScroll = () => setScrolled(window.scrollY > 6);
    const onCart = (event: Event) => sync(event);

    window.addEventListener("pp-cart", onCart as EventListener);
    window.addEventListener("storage", sync as EventListener);
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("pp-cart", onCart as EventListener);
      window.removeEventListener("storage", sync as EventListener);
      window.removeEventListener("scroll", onScroll);
    };
  }, [productMap]);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 4000);
    return () => window.clearTimeout(timer);
  }, [toast]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur transition-shadow duration-200 ${
          scrolled ? "shadow-soft" : ""
        }`}
      >
        <Container>
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center">
              <Logo compact />
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              {nav
                .filter((i) => !hiddenNavHrefs.has(i.href))
                .map((i) => (
                  <Link
                    key={i.href}
                    href={i.href}
                    className="group relative text-sm font-semibold text-muted transition hover:text-ink"
                  >
                    {i.label}
                    <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}

              <div className="group relative">
                <button
                  type="button"
                  className="group relative text-sm font-semibold text-muted transition hover:text-ink"
                  aria-label="Open research menu"
                >
                  Research
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                </button>

                <div className="invisible absolute left-0 top-full z-50 mt-4 w-[280px] rounded-xl2 border border-line bg-white p-3 opacity-0 shadow-lift transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="mb-2 px-2 text-xs font-extrabold uppercase tracking-wide text-muted">
                    Research guides
                  </div>

                  <div className="grid gap-1">
                    {researchLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="rounded-xl2 px-3 py-2 text-sm font-semibold text-muted transition hover:bg-panel hover:text-ink"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/order-status"
                className="group relative text-sm font-semibold text-muted transition hover:text-ink"
              >
                Order Status
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            </nav>

            <Link
              href="/cart"
              className="flex items-center gap-2 rounded-xl2 border border-line bg-white px-4 py-2 text-sm font-semibold shadow-soft transition hover:bg-panel"
              aria-label="Open cart"
            >
              Cart
              <span className="flex h-6 min-w-[24px] items-center justify-center rounded-full bg-accent px-2 text-xs font-bold text-white">
                {count}
              </span>
            </Link>
          </div>
        </Container>
      </header>

      {toast ? (
        <div className="fixed bottom-4 right-4 z-[60] w-[min(92vw,360px)] rounded-xl3 border border-line bg-white p-4 shadow-lift">
          <div className="text-sm font-extrabold text-ink">Added to cart</div>
          <p className="mt-1 text-sm text-muted">
            {toast.qty} × {toast.name}
          </p>
          <div className="mt-4 flex gap-3">
            <Link
              href="/cart"
              className="inline-flex flex-1 justify-center rounded-xl2 bg-accent px-4 py-2 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
            >
              View cart
            </Link>
            <Link
              href="/shop"
              className="inline-flex flex-1 justify-center rounded-xl2 border border-line bg-white px-4 py-2 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
            >
              Keep shopping
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}
