"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "./CartProvider";

export function Navbar() {
  const { count, setOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-white/10 bg-black/60 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8">
        <Link href="/" className="flex items-baseline gap-2" aria-label="BOOTH inicio">
          <span className="font-display text-2xl tracking-tight">BOOTH</span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 sm:inline">pro dj supply</span>
        </Link>
        <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          <Link href="/#shop" className="transition hover:text-white">Equipos</Link>
          <Link href="/#spotlight" className="transition hover:text-white">DJM-A9</Link>
          <Link href="/#bundle" className="transition hover:text-white">Club Booth</Link>
          <Link href="/#about" className="transition hover:text-white">Nosotros</Link>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="group flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm transition hover:border-white/40"
          aria-label={`Abrir carrito, ${count} productos`}
        >
          <span>Carrito</span>
          <span
            className={`grid h-5 min-w-5 place-items-center rounded-full px-1 text-[11px] font-medium tabular-nums transition ${
              count > 0 ? "bg-[var(--accent)] text-black" : "bg-white/10 text-white/60"
            }`}
          >
            {count}
          </span>
        </button>
      </nav>
    </header>
  );
}
