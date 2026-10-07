import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCart } from "@/components/AddButtons";
import { Gallery } from "@/components/Gallery";
import { ProductCard } from "@/components/ProductCard";
import { categoryLabel, formatPrice, getProduct, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/producto/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: `${p.name} — ${p.brand} | BOOTH`,
    description: p.tagline,
    openGraph: { images: [p.images[0].src] },
  };
}

export default async function ProductPage({ params }: PageProps<"/producto/[slug]">) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const related = products.filter((x) => x.slug !== p.slug);

  return (
    <main className="mx-auto max-w-7xl px-4 pb-24 pt-28 sm:px-8">
      <nav className="mb-8 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
        <Link href="/" className="hover:text-white">Inicio</Link> <span className="mx-2">/</span>
        <Link href="/#shop" className="hover:text-white">Equipos</Link> <span className="mx-2">/</span>
        <span className="text-white/70">{p.name}</span>
      </nav>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Gallery images={p.images} />

        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
            {p.brand} · {categoryLabel[p.category]}
            {p.badge && <span className="ml-3 text-[var(--accent)]">{p.badge}</span>}
          </p>
          <h1 className="mt-3 font-display text-7xl leading-none sm:text-8xl">{p.name}</h1>
          <p className="mt-2 font-display text-2xl italic text-white/60">{p.tagline}</p>

          <div className="mt-8 flex items-end gap-4">
            <p className="text-4xl tabular-nums">{formatPrice(p.price)}</p>
            {p.compareAt && <p className="pb-1 text-white/35 line-through tabular-nums">{formatPrice(p.compareAt)}</p>}
          </div>
          <p className="mt-1 text-xs text-white/40">Precio estimado en USD · 12 cuotas de {formatPrice(Math.round(p.price / 12))}</p>

          <div className="mt-8 flex gap-3">
            <AddToCart slug={p.slug} className="btn-primary flex-1 py-4" />
          </div>

          <p className="mt-8 leading-relaxed text-white/65">{p.description}</p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {p.highlights.map((h) => (
              <li key={h} className="flex gap-3 rounded-xl border border-white/10 p-4 text-sm text-white/80">
                <span className="text-[var(--accent)]">✦</span>
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="mt-24">
        <h2 className="font-display text-5xl">Especificaciones</h2>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">Modelo {p.model} · datos del fabricante</p>
        <dl className="mt-8 divide-y divide-white/10 border-y border-white/10">
          {p.specs.map((s) => (
            <div key={s.label} className="grid gap-1 py-4 sm:grid-cols-[240px_1fr] sm:gap-8">
              <dt className="font-mono text-xs uppercase tracking-[0.15em] text-white/45">{s.label}</dt>
              <dd className="text-white/85">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-24">
        <h2 className="mb-10 font-display text-5xl">Completá tu booth</h2>
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-3">
          {related.map((r) => (
            <ProductCard key={r.slug} product={r} index={products.indexOf(r)} />
          ))}
        </div>
      </section>
    </main>
  );
}
