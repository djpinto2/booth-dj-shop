"use client";

import { bundle } from "@/lib/products";
import { useCart } from "./CartProvider";

export function AddToCart({ slug, className = "btn-primary" }: { slug: string; className?: string }) {
  const { add } = useCart();
  return (
    <button onClick={() => add(slug)} className={className}>
      Agregar al carrito
    </button>
  );
}

export function AddBundle() {
  const { add } = useCart();
  return (
    <button onClick={() => bundle.items.forEach((i) => add(i.slug, i.qty))} className="btn-primary">
      Sumar el Club Booth
    </button>
  );
}
