"use client";

import Image from "next/image";
import { useState } from "react";
import type { GalleryImage } from "@/data/photos";
import { Lightbox } from "./Lightbox";
import { ScrollReveal } from "./ScrollReveal";

type PhotoGridProps = {
  images: GalleryImage[];
  /** Put the large tile on the right on desktop */
  mirror?: boolean;
};

function isReadyCaption(caption?: string) {
  return caption && !caption.trim().startsWith("TODO");
}

/** Mosaic repeats every four tiles: one large, two small, one wide. */
function tileClass(index: number, mirror: boolean) {
  const position = index % 4;
  if (position === 0) {
    return `col-span-2 row-span-2 ${mirror ? "md:col-start-3" : ""}`;
  }
  return position === 3 ? "col-span-2" : "";
}

function tileSizes(index: number) {
  return index % 4 === 0 || index % 4 === 3
    ? "(max-width: 768px) 100vw, 550px"
    : "(max-width: 768px) 50vw, 275px";
}

export function PhotoGrid({ images, mirror = false }: PhotoGridProps) {
  const [active, setActive] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="grid grid-flow-dense auto-rows-[10.5rem] grid-cols-2 gap-3 sm:auto-rows-[14rem] md:grid-cols-4 lg:auto-rows-[16rem]">
        {images.map((image, index) => (
          <ScrollReveal
            key={image.src}
            index={index}
            className={`scroll-reveal ${tileClass(index, mirror)}`}
          >
            <button
              type="button"
              data-spotlight
              className="bezel group block h-full w-full cursor-zoom-in text-left"
              onClick={() => setActive(image)}
            >
              <span className="relative block h-full overflow-hidden rounded-[0.875rem]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.05]"
                  sizes={tileSizes(index)}
                />
                {isReadyCaption(image.caption) && (
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 pb-3 pt-10 text-xs text-foreground/90 transition-transform duration-500 ease-[var(--ease-out)] md:translate-y-full md:group-hover:translate-y-0 md:group-focus-visible:translate-y-0">
                    {image.caption}
                  </span>
                )}
              </span>
            </button>
          </ScrollReveal>
        ))}
      </div>

      {active && (
        <Lightbox
          src={active.src}
          alt={active.alt}
          caption={active.caption}
          onClose={() => setActive(null)}
        />
      )}
    </>
  );
}
