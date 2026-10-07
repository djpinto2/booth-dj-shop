import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-8 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="font-display text-5xl">BOOTH</p>
          <p className="mt-3 max-w-sm text-sm text-white/50">
            Equipamiento de cabina curado para DJs que tocan en serio. Buenos Aires · envíos a todo el país.
          </p>
        </div>
        <div className="space-y-2 text-sm text-white/60">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">Tienda</p>
          <Link href="/#shop" className="block hover:text-white">Equipos</Link>
          <Link href="/#bundle" className="block hover:text-white">Club Booth</Link>
          <Link href="/#about" className="block hover:text-white">Nosotros</Link>
        </div>
        <div className="space-y-2 text-sm text-white/60">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">Info</p>
          <p>Garantía oficial</p>
          <p>Hasta 12 cuotas</p>
          <p>Retiro en showroom</p>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-white/10 px-4 py-6 text-xs text-white/35 sm:flex-row sm:justify-between sm:px-8">
        <p>© 2026 BOOTH. Proyecto de portfolio — precios estimados, sin venta real.</p>
        <p>Diseño y desarrollo: Segundo Pinto</p>
      </div>
    </footer>
  );
}
