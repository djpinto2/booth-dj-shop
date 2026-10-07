"use client";

import Image from "next/image";
import Link from "next/link";
import { categoryLabel, formatPrice, type Product } from "@/lib/products";
import { useCart } from "./CartProvider";

export function ProductCard({ product: p, index }: { product: Product; index: number }) {
  const { add } = useCart();
  const img = p.images[0];

  return (
    <article className="group relative flex flex-col">
      <Link
        href={`/producto/${p.slug}`}
        className={`relative block aspect-[4/3] overflow-hidden rounded-2xl ${img.dark ? "bg-black" : "bg-[#e9e7e2]"}`}
      >
        <span className={`absolute left-4 top-4 z-10 font-mono text-[10px] uppercase tracking-[0.25em] ${img.dark ? "text-white/50" : "text-black/40"}`}>
          {String(index + 1).padStart(2, "0")}
        </span>
        {p.badge && (
          <span className="absolute right-4 top-4 z-10 rounded-full bg-black px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
            {p.badge}
          </span>
        )}
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className={`object-contain transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.05] ${
            img.dark ? "p-2" : "p-8 mix-blend-multiply"
          }`}
        />
      </Link>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
            {p.brand} · {categoryLabel[p.category]}
          </p>
          <h3 className="mt-1 font-display text-3xl leading-none">
            <Link href={`/producto/${p.slug}`} className="hover:text-[var(--accent)]">
              {p.name}
            </Link>
          </h3>
          <p className="mt-2 text-sm text-white/55">{p.tagline}</p>
        </div>
        <div className="text-right">
          <p className="text-lg tabular-nums">{formatPrice(p.price)}</p>
          {p.compareAt && <p className="text-xs text-white/35 line-through tabular-nums">{formatPrice(p.compareAt)}</p>}
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <button onClick={() => add(p.slug)} className="btn-primary flex-1">
          Agregar al carrito
        </button>
        <Link href={`/producto/${p.slug}`} className="btn-ghost">
          Specs
        </Link>
      </div>
    </article>
  );
}
