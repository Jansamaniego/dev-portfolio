import type { ReactNode } from "react";
import { ScrollReveal } from "./ScrollReveal";

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  /** Editorial section number, e.g. "01" */
  index?: string;
  children?: ReactNode;
};

export function Section({ id, title, subtitle, index, children }: SectionProps) {
  return (
    <section id={id} className="section-padding scroll-mt-16">
      <div className="section-container">
        <ScrollReveal className="scroll-reveal">
          <header className="mb-14 sm:mb-20">
            <div className="flex items-center gap-4">
              {index && (
                <span className="font-mono text-xs tracking-[0.2em] text-accent">
                  {index}
                </span>
              )}
              <span className="rule flex-1" aria-hidden />
            </div>
            <div className="mt-7 grid gap-4 lg:grid-cols-[1fr_minmax(0,24rem)] lg:items-end">
              <h2 className="text-5xl font-semibold tracking-[-0.04em] text-foreground sm:text-7xl">
                {title}
              </h2>
              {subtitle && (
                <p className="text-lg leading-relaxed text-muted lg:pb-2">{subtitle}</p>
              )}
            </div>
          </header>
        </ScrollReveal>
        {children ?? (
          <p className="rounded-xl border border-dashed border-border bg-surface/50 px-6 py-12 text-center text-muted">
            Coming in a later phase — content will go here.
          </p>
        )}
      </div>
    </section>
  );
}
