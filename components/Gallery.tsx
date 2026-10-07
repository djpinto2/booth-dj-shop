"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/lib/products";

export function Gallery({ images }: { images: Product["images"] }) {
  const [i, setI] = useState(0);
  const img = images[i];

  return (
    <div>
      <div className={`relative aspect-square overflow-hidden rounded-3xl transition-colors duration-500 ${img.dark ? "bg-black" : "bg-[#e9e7e2]"}`}>
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          priority
          sizes="(min-width:1024px) 50vw, 100vw"
          className={`rise object-contain ${img.dark ? "" : "p-10 mix-blend-multiply"}`}
          style={{ animationDuration: ".6s" }}
        />
      </div>
      {images.length > 1 && (
        <div className="mt-3 flex gap-3">
          {images.map((m, k) => (
            <button
              key={m.src}
              onClick={() => setI(k)}
              aria-label={`Ver imagen ${k + 1}`}
              className={`relative h-20 w-24 overflow-hidden rounded-xl border transition ${
                k === i ? "border-[var(--accent)]" : "border-transparent opacity-60 hover:opacity-100"
              } ${m.dark ? "bg-black" : "bg-[#e9e7e2]"}`}
            >
              <Image src={m.src} alt="" fill sizes="96px" className={`object-contain ${m.dark ? "" : "p-1 mix-blend-multiply"}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
