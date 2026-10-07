"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "./CartProvider";
import { formatPrice, getProduct } from "@/lib/products";

export function CartDrawer() {
  const { lines, subtotal, open, setOpen, setQty, clear } = useCart();
  const [done, setDone] = useState(false);

  const close = () => {
    setOpen(false);
    setDone(false);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      setDone(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setOpen]);


  return (
    <div className={`fixed inset-0 z-[60] ${open ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!open}>
      <div
        onClick={close}
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"}`}
      />
      <aside
        role="dialog"
        aria-label="Carrito"
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-white/10 bg-[#0b0b0c] transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <header className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/60">Tu booth</p>
          <button onClick={close} className="text-sm text-white/60 transition hover:text-white" aria-label="Cerrar carrito">
            Cerrar ✕
          </button>
        </header>

        {done && lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <div className="grid h-16 w-16 place-items-center rounded-full border border-[var(--accent)] text-2xl text-[var(--accent)]">✓</div>
            <h3 className="font-display text-3xl">Pedido confirmado</h3>
            <p className="text-sm text-white/60">
              Esto es una demo de portfolio — no se realizó ningún cobro. Gracias por pasar por BOOTH.
            </p>
            <button onClick={close} className="btn-primary mt-4">
              Seguir mirando
            </button>
          </div>
        ) : lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-8 text-center">
            <p className="font-display text-3xl">Tu booth está vacío</p>
            <p className="text-sm text-white/50">Sumá un player o un mixer para empezar a armar tu setup.</p>
            <Link href="/#shop" onClick={close} className="btn-ghost mt-4">
              Ver equipos
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-white/10 overflow-y-auto px-6">
              {lines.map((l) => {
                const p = getProduct(l.slug);
                if (!p) return null;
                return (
                  <li key={l.slug} className="flex gap-4 py-5">
                    <Link
                      href={`/producto/${p.slug}`}
                      onClick={() => setOpen(false)}
                      className={`relative h-20 w-24 shrink-0 overflow-hidden rounded-lg ${p.images[0].dark ? "bg-black" : "bg-[#e9e7e2]"}`}
                    >
                      <Image src={p.images[0].src} alt={p.images[0].alt} fill sizes="96px" className={`object-contain p-1 ${p.images[0].dark ? "" : "mix-blend-multiply"}`} />
                    </Link>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">{p.brand}</p>
                          <p className="font-medium">{p.name}</p>
                        </div>
                        <p className="tabular-nums">{formatPrice(p.price * l.qty)}</p>
                      </div>
                      <div className="mt-auto flex items-center gap-3">
                        <div className="flex items-center rounded-full border border-white/15">
                          <button className="px-3 py-1 text-white/70 hover:text-white" onClick={() => setQty(l.slug, l.qty - 1)} aria-label="Restar">
                            −
                          </button>
                          <span className="w-6 text-center text-sm tabular-nums">{l.qty}</span>
                          <button className="px-3 py-1 text-white/70 hover:text-white" onClick={() => setQty(l.slug, l.qty + 1)} aria-label="Sumar">
                            +
                          </button>
                        </div>
                        <button onClick={() => setQty(l.slug, 0)} className="text-xs text-white/40 underline-offset-4 hover:text-white hover:underline">
                          Quitar
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <footer className="space-y-3 border-t border-white/10 px-6 py-6">
              <div className="flex justify-between text-sm text-white/60">
                <span>Envío</span>
                <span>Gratis</span>
              </div>
              <div className="flex justify-between text-lg">
                <span>Subtotal</span>
                <span className="tabular-nums">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-white/40">Precios estimados en USD. Hasta 12 cuotas sin interés.</p>
              <button
                onClick={() => {
                  clear();
                  setDone(true);
                }}
                className="btn-primary w-full"
              >
                Finalizar compra
              </button>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
}
