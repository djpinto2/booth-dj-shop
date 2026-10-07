"use client";

import { useState } from "react";
import { categories, products, type Category } from "@/lib/products";
import { ProductCard } from "./ProductCard";

export function ShopGrid() {
  const [filter, setFilter] = useState<Category | "all">("all");
  const list = filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Filtrar por categoría">
        {categories.map((c) => {
          const n = c.id === "all" ? products.length : products.filter((p) => p.category === c.id).length;
          const active = filter === c.id;
          return (
            <button
              key={c.id}
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(c.id)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                active ? "border-white bg-white text-black" : "border-white/15 text-white/70 hover:border-white/40 hover:text-white"
              }`}
            >
              {c.label} <span className="ml-1 font-mono text-[10px] opacity-50">{n}</span>
            </button>
          );
        })}
      </div>
      <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
        {list.map((p) => (
          <ProductCard key={p.slug} product={p} index={products.indexOf(p)} />
        ))}
      </div>
    </>
  );
}
