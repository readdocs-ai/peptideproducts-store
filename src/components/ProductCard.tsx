"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";
import { addToCart, formatGBP } from "@/lib/cart";

export function ProductCard({
  p,
  imageOverride,
}: {
  p: Product;
  imageOverride?: string;
}) {
  const displayImage = imageOverride ?? p.image;
  const inStock = p.stockStatus === "in_stock";
  const hasTestReport = Boolean(p.coa);
  const isFlagship = p.id === "retatrutide";

  return (
    <article
      className={
        "group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border bg-white transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_80px_rgba(11,18,32,0.14)] " +
        (isFlagship
          ? "border-[#d5b46c]/70 shadow-[0_24px_70px_rgba(184,146,74,0.18)]"
          : "border-slate-200/80 shadow-[0_14px_40px_rgba(11,18,32,0.07)]")
      }
    >
      {isFlagship ? (
        <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between bg-[#0b1220] px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-white">
          <span>Flagship Retatrutide</span>
          <span className="text-[#f2cf80]">40mg Pen</span>
        </div>
      ) : null}

      <Link href={`/product/${p.id}`} className="block">
        <div
          className={
            "relative overflow-hidden border-b border-slate-200/80 " +
            (isFlagship
              ? "h-[260px] sm:h-[350px] bg-[radial-gradient(circle_at_50%_24%,#fff7df_0%,#f5e5b3_35%,#e9d08a_70%,#d8b461_100%)] pt-10 sm:h-[350px]"
              : "h-[230px] sm:h-[305px] bg-[linear-gradient(145deg,#f8fafc_0%,#eef3f9_55%,#ffffff_100%)] sm:h-[305px]")
          }
        >
          <Image
            src={displayImage}
            alt={`${p.name} product image`}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
            className={
              "object-contain transition duration-700 group-hover:scale-[1.045] " +
              (isFlagship ? "p-4 pt-11 sm:p-6 sm:pt-12" : "p-5 sm:p-7")
            }
          />

          {!isFlagship ? (
            <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-2 p-4">
              <span className="rounded-full border border-white/80 bg-white/90 px-3 py-1 text-[10px] font-black uppercase tracking-[0.15em] text-slate-800 shadow-sm backdrop-blur">
                {p.category}
              </span>
              <span
                className={
                  "rounded-full px-3 py-1 text-[11px] font-extrabold shadow-sm " +
                  (inStock
                    ? "border border-emerald-200 bg-emerald-50/95 text-emerald-700"
                    : "border border-red-200 bg-red-50/95 text-red-700")
                }
              >
                {inStock ? "In stock" : p.availabilityLabel ?? "Sold out"}
              </span>
            </div>
          ) : (
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-2xl border border-white/60 bg-white/85 px-4 py-3 shadow-lg backdrop-blur">
              <span className="text-[11px] font-black uppercase tracking-[0.16em] text-slate-800">
                Alluvi presentation
              </span>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-black text-emerald-700">
                In stock
              </span>
            </div>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
          {isFlagship ? "Retatrutide research peptide pen" : p.subtitle}
        </div>

        <Link href={`/product/${p.id}`} className="mt-2 block">
          <h2 className="text-xl font-black sm:text-[1.35rem] leading-tight tracking-[-0.03em] text-slate-950 transition group-hover:text-blue-700">
            {isFlagship ? "Retatrutide 40mg Pen" : p.name}
          </h2>
        </Link>

        <p className="mt-3 text-sm leading-6 text-slate-600">{p.pack}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-bold text-slate-700">
            Research use only
          </span>
          {hasTestReport ? (
            <a
              href={p.coa}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[11px] font-bold text-amber-800 transition hover:bg-amber-100"
              aria-label={`Open test report for ${p.name}`}
            >
              Test report
            </a>
          ) : null}
        </div>

        <div className="mt-auto pt-6">
          <div className="flex items-end justify-between gap-4 border-t border-slate-200 pt-5">
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
                Price
              </div>
              <div className="mt-1 text-3xl font-black tracking-[-0.04em] text-slate-950">
                {formatGBP(p.priceGBP)}
              </div>
            </div>
            <Link
              href={`/product/${p.id}`}
              className="text-sm font-black text-blue-700 hover:text-slate-950"
            >
              Details →
            </Link>
          </div>

          <div className="mt-4 grid gap-2 sm:grid-cols-[1fr_auto]">
            <Link
              href={`/product/${p.id}`}
              className={
                "inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5 " +
                (isFlagship
                  ? "bg-[#0b1220] hover:bg-[#172033]"
                  : "bg-blue-700 hover:bg-blue-800")
              }
            >
              {isFlagship ? "View Retatrutide" : "View product"}
            </Link>
            <button
              type="button"
              disabled={!inStock}
              onClick={() => {
                if (inStock) addToCart(p.id, 1);
              }}
              aria-label={`Add ${p.name} to cart`}
              className={
                "min-h-12 rounded-2xl px-4 py-3 text-sm font-black transition sm:min-w-14 " +
                (inStock
                  ? "border border-slate-200 bg-white text-slate-950 hover:border-slate-400 hover:bg-slate-50"
                  : "cursor-not-allowed bg-red-100 text-red-700")
              }
            >
              {inStock ? "+ Cart" : "Unavailable"}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
