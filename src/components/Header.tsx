"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { brand, nav } from "@/theme/brand";
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

export function Header() {
  const pathname = usePathname();
  const [count, setCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [toast, setToast] = useState<{ name: string; qty: number } | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const productMap = useMemo(() => new Map(products.map((product) => [product.id, product.name])), []);

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

    const onScroll = () => setScrolled(window.scrollY > 10);
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

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="border-b border-line bg-ink text-white">
        <Container>
          <div className="flex min-h-[38px] flex-wrap items-center justify-center gap-x-4 gap-y-1 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] sm:justify-between">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center sm:text-left">
              <span>24 Hour Next Day UK Delivery</span>
              <span className="text-white/40">•</span>
              <span>UK Based Company</span>
              <span className="text-white/40">•</span>
              <span>Secure Checkout</span>
              <span className="text-white/40">•</span>
              <span>Discreet Shipping</span>
            </div>

            <div className="hidden items-center gap-4 text-white/80 lg:flex">
              <a href={`mailto:${brand.supportEmail}`} className="hover:text-white">
                {brand.supportEmail}
              </a>
              <span className="text-white/40">•</span>
              <span>{brand.phone}</span>
            </div>
          </div>
        </Container>
      </div>

      <header
        className={`sticky top-0 z-50 border-b border-line bg-white/92 backdrop-blur transition-shadow duration-200 ${
          scrolled ? "shadow-soft" : ""
        }`}
      >
        <Container>
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>

            <nav className="hidden items-center gap-7 lg:flex">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative text-sm font-semibold text-muted transition hover:text-ink"
                >
                  {item.label}
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

                <div className="invisible absolute left-0 top-full z-50 mt-4 w-[320px] rounded-xl2 border border-line bg-white p-3 opacity-0 shadow-lift transition-all duration-200 group-hover:visible group-hover:opacity-100">
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
                Order status
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            </nav>

            <div className="flex items-center gap-2">
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

              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                className="inline-flex items-center justify-center rounded-xl2 border border-line bg-white px-3 py-2 text-sm font-extrabold text-ink shadow-soft lg:hidden"
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                Menu
              </button>
            </div>
          </div>

          {mobileOpen ? (
            <div className="border-t border-line py-4 lg:hidden">
              <div className="grid gap-2">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl2 px-3 py-3 text-sm font-semibold text-ink transition hover:bg-panel"
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  href="/order-status"
                  className="rounded-xl2 px-3 py-3 text-sm font-semibold text-ink transition hover:bg-panel"
                >
                  Order status
                </Link>

                <div className="mt-2 rounded-xl2 border border-line bg-panel p-3">
                  <div className="mb-2 text-xs font-extrabold uppercase tracking-wide text-muted">
                    Research guides
                  </div>
                  <div className="grid gap-1">
                    {researchLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="rounded-xl2 px-3 py-2 text-sm font-semibold text-ink transition hover:bg-white"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </Container>
      </header>

      {toast ? (
        <div className="fixed bottom-4 right-4 z-[60] w-[min(92vw,380px)] rounded-xl3 border border-line bg-white p-4 shadow-lift">
          <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-accent">Added to cart</div>
          <div className="mt-2 text-base font-extrabold text-ink">{toast.name}</div>
          <div className="mt-1 text-sm text-muted">Quantity: {toast.qty}</div>
          <div className="mt-4 flex gap-3">
            <Link href="/cart" className="rounded-xl2 bg-accent px-4 py-2 text-sm font-extrabold text-white shadow-soft">
              View cart
            </Link>
            <button
              type="button"
              onClick={() => setToast(null)}
              className="rounded-xl2 border border-line bg-white px-4 py-2 text-sm font-extrabold text-ink shadow-soft"
            >
              Continue browsing
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}