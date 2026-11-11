import type { CSSProperties } from "react";
import { site } from "@/data/site";
import { isReadyValue } from "@/lib/links";
import { ScrollReveal } from "./ScrollReveal";

export function About() {
  const showLocation = isReadyValue(site.location);
  const isDev = process.env.NODE_ENV === "development";

  return (
    <div className="grid gap-14 lg:grid-cols-[1.45fr_1fr] lg:items-start lg:gap-20">
      <ScrollReveal className="scroll-reveal">
        <div>
          <p className="text-2xl font-light leading-snug tracking-tight text-foreground sm:text-[2rem] sm:leading-[1.3]">
            {site.bio}
          </p>
          {showLocation && (
            <p className="mt-6 text-sm text-muted">
              <span className="text-foreground/80">Based in:</span>{" "}
              {site.location}
            </p>
          )}
          {!showLocation && isDev && (
            <p className="mt-6 text-sm text-muted">
              Set your location in{" "}
              <code className="font-mono text-foreground/80">src/data/site.ts</code>
            </p>
          )}
        </div>
      </ScrollReveal>

      <ScrollReveal index={1} className="scroll-reveal">
        <div data-spotlight className="panel p-6 sm:p-8">
          <h3 className="eyebrow mb-6">Tech stack</h3>
          <ul className="stagger relative z-[2] flex flex-wrap gap-2">
            {site.skills.map((skill, index) => (
              <li
                key={skill}
                className="chip px-4 py-2 text-sm text-foreground"
                style={{ "--i": index } as CSSProperties}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>
    </div>
  );
}
