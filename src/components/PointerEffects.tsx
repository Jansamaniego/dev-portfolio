"use client";

import { useEffect, useRef } from "react";

/**
 * One throttled pointer listener drives the ambient glow and the
 * [data-spotlight] highlights. Mouse-only, and off for reduced motion.
 */
export function PointerEffects() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const glow = glowRef.current;
    if (!canHover || reduced || !glow) return;

    let frame = 0;
    let x = 0;
    let y = 0;
    let target: Element | null = null;

    const apply = () => {
      frame = 0;
      glow.style.opacity = "1";
      glow.style.transform = `translate3d(${x}px, ${y}px, 0)`;

      const spotlight = target?.closest<HTMLElement>("[data-spotlight]");
      if (spotlight) {
        const rect = spotlight.getBoundingClientRect();
        spotlight.style.setProperty("--spot-x", `${x - rect.left}px`);
        spotlight.style.setProperty("--spot-y", `${y - rect.top}px`);
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      target = event.target as Element | null;
      if (!frame) frame = requestAnimationFrame(apply);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={glowRef} className="pointer-glow" />;
}
