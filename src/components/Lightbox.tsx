"use client";

import Image from "next/image";
import { useEffect } from "react";

type LightboxProps = {
  src: string;
  alt: string;
  caption?: string;
  onClose: () => void;
};

export function Lightbox({ src, alt, caption, onClose }: LightboxProps) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm [animation:fade-in_0.3s_ease_both]"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute right-4 top-4 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
        onClick={onClose}
        aria-label="Close"
      >
        Close
      </button>

      <figure
        className="relative max-h-[85vh] w-full max-w-4xl [animation:lightbox-in_0.5s_var(--ease-out)_both]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
            sizes="(max-width: 896px) 100vw, 896px"
            priority
          />
        </div>
        {caption && isReadyCaption(caption) && (
          <figcaption className="mt-4 text-center text-sm text-muted">
            {caption}
          </figcaption>
        )}
      </figure>
    </div>
  );
}

function isReadyCaption(caption: string) {
  return !caption.trim().startsWith("TODO");
}
