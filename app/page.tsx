import Image from "next/image";
import Link from "next/link";
import { ShopGrid } from "@/components/ShopGrid";
import { Reveal } from "@/components/Reveal";
import { AddBundle, AddToCart } from "@/components/AddButtons";
import { bundle, formatPrice, getProduct } from "@/lib/products";

const ticker = ["CDJ-3000", "DJM-A9", "XDJ-AZ", "XDJ-RX3", "rekordbox", "PRO DJ LINK", "96 kHz / 32-bit", "Envío gratis", "Garantía oficial"];

export default function Home() {
  const a9 = getProduct("djm-a9")!;
  const bundleItems = bundle.items.map((i) => ({ ...i, product: getProduct(i.slug)! }));
  const bundleFull = bundleItems.reduce((a, i) => a + i.product.price * i.qty, 0);
  const bundlePrice = Math.round(bundleFull * (1 - bundle.discount));

  return (
    <main>
      {/* HERO */}
      <section className="grain relative flex h-[100svh] min-h-[640px] items-end overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/media/hero.mp4"
          poster="/media/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[var(--bg)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,.6))]" />

        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 sm:px-8 sm:pb-24">
          <p className="rise font-mono text-xs uppercase tracking-[0.35em] text-white/60">Pro DJ Supply — Temporada 2026</p>
          <h1 className="rise mt-6 font-display text-[15vw] leading-[0.85] sm:text-[11vw] lg:text-[9.5rem]" style={{ animationDelay: "150ms" }}>
            Club standard,
            <br />
            <span className="italic text-[var(--accent)]">curado.</span>
          </h1>
          <div className="rise mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between" style={{ animationDelay: "350ms" }}>
            <p className="max-w-md text-base text-white/70">
              Los mismos players y mixers que encontrás en las mejores cabinas del mundo. Specs completas, precios claros y envío a todo el país.
            </p>
            <div className="flex gap-3">
              <a href="#shop" className="btn-primary">Ver equipos</a>
              <a href="#bundle" className="btn-ghost backdrop-blur">Club Booth</a>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="overflow-hidden border-y border-white/10 py-4">
        <div className="marquee flex w-max gap-12 whitespace-nowrap font-mono text-xs uppercase tracking-[0.3em] text-white/45">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="flex items-center gap-12">
              {t} <span className="text-[var(--accent)]">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* SHOP */}
      <section id="shop" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="font-display text-6xl leading-none sm:text-7xl">
              La colección
              <span className="ml-3 align-top font-mono text-sm text-white/40">(04)</span>
            </h2>
            <p className="max-w-sm text-sm text-white/55">
              Cuatro piezas, cero relleno. Cada equipo está elegido por cómo suena, cómo se siente bajo las manos y cuánto aguanta una noche entera.
            </p>
          </div>
        </Reveal>
        <ShopGrid />
      </section>

      {/* SPOTLIGHT */}
      <section id="spotlight" className="relative scroll-mt-16 overflow-hidden bg-black">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 sm:px-8 lg:grid-cols-[1.3fr_1fr] lg:py-32">
          <Reveal>
            <div className="relative aspect-[16/12]">
              <div className="absolute inset-[15%] rounded-full bg-[var(--accent)] opacity-[0.07] blur-3xl" />
              <Image src={a9.images[0].src} alt={a9.images[0].alt} fill sizes="(min-width:1024px) 60vw, 100vw" className="object-contain" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--accent)]">En foco</p>
            <h2 className="mt-4 font-display text-6xl leading-[0.9] sm:text-7xl">
              DJM-A9.
              <br />
              <span className="italic text-white/60">El nuevo centro de la cabina.</span>
            </h2>
            <p className="mt-6 text-white/60">{a9.description}</p>
            <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10">
              {[
                ["114 dB", "S/N digital"],
                ["40 kHz", "Respuesta máx."],
                ["4 ch", "+ 2 mic"],
                ["10,2 kg", "Peso"],
              ].map(([v, l]) => (
                <div key={l} className="bg-black p-5">
                  <dt className="font-display text-3xl">{v}</dt>
                  <dd className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">{l}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex items-center gap-4">
              <AddToCart slug={a9.slug} />
              <Link href={`/producto/${a9.slug}`} className="btn-ghost">Ficha completa</Link>
              <span className="ml-auto text-xl tabular-nums">{formatPrice(a9.price)}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BUNDLE */}
      <section id="bundle" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#141414] to-[#0a0a0a] p-8 sm:p-14">
            <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[var(--accent)] opacity-10 blur-3xl" />
            <div className="relative grid gap-12 lg:grid-cols-2">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">Bundle · −{Math.round(bundle.discount * 100)}%</p>
                <h2 className="mt-4 font-display text-6xl leading-[0.9] sm:text-7xl">
                  Club Booth<span className="text-[var(--accent)]">.</span>
                </h2>
                <p className="mt-6 max-w-md text-white/60">
                  El setup que vas a encontrar en cualquier club serio: dos CDJ-3000 y un DJM-A9 al centro. Todo listo para conectar por PRO DJ LINK y tocar.
                </p>
                <div className="mt-10 flex flex-wrap items-end gap-6">
                  <div>
                    <p className="text-sm text-white/40 line-through tabular-nums">{formatPrice(bundleFull)}</p>
                    <p className="font-display text-5xl tabular-nums">{formatPrice(bundlePrice)}</p>
                  </div>
                  <AddBundle />
                </div>
              </div>
              <ul className="grid grid-cols-3 gap-3 self-center">
                {[bundleItems[0], bundleItems[1], bundleItems[0]].map((i, k) => (
                  <li
                    key={k}
                    className={`relative aspect-[3/4] overflow-hidden rounded-xl ${i.product.images[0].dark ? "bg-black" : "bg-[#e9e7e2]"}`}
                  >
                    <Image
                      src={i.product.images[0].src}
                      alt={i.product.images[0].alt}
                      fill
                      sizes="200px"
                      className={`object-contain ${i.product.images[0].dark ? "scale-125" : "p-3 mix-blend-multiply"}`}
                    />
                    <span className={`absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.2em] ${i.product.images[0].dark ? "text-white/60" : "text-black/50"}`}>
                      {i.product.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ABOUT / EDITORIAL */}
      <section id="about" className="relative scroll-mt-16">
        <div className="relative h-[70vh] min-h-[480px] overflow-hidden">
          <Image src="/media/editorial.jpg" alt="Auriculares sobre un CDJ en la cabina" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-black/40 to-[var(--bg)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
          <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 sm:px-8">
            <Reveal>
              <blockquote className="max-w-2xl font-display text-5xl leading-[0.95] sm:text-7xl">
                “El equipo no hace al DJ. <span className="italic text-white/50">Pero el correcto deja de estorbar.</span>”
              </blockquote>
            </Reveal>
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl gap-px px-4 pb-24 sm:px-8 md:grid-cols-3">
          {[
            ["01", "Garantía oficial", "Todos los equipos son nuevos, sellados y con garantía oficial del fabricante."],
            ["02", "Envío asegurado", "Embalaje original y seguro de transporte. Gratis a todo el país."],
            ["03", "Asesoramiento real", "Te ayudamos a armar el setup según dónde y cómo tocás. Hablamos de DJ a DJ."],
          ].map(([n, t, d], i) => (
            <Reveal key={n} delay={i * 120}>
              <div className="border-t border-white/15 py-8 md:pr-10">
                <p className="font-mono text-xs text-[var(--accent)]">{n}</p>
                <h3 className="mt-3 font-display text-3xl">{t}</h3>
                <p className="mt-2 text-sm text-white/55">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
