import Link from "next/link";
import type { CSSProperties } from "react";
import { isReadyLink, isReadyValue } from "@/lib/links";
import { projects, type Project } from "@/data/projects";
import { ProjectStage } from "./ProjectStage";
import { ScrollReveal } from "./ScrollReveal";

type ProjectDetailsProps = {
  project: Project;
};

function delay(step: number) {
  return { "--d": step } as CSSProperties;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const hasLive = isReadyLink(project.liveUrl);
  const hasRepo = isReadyLink(project.repoUrl);
  const overview = project.overview ?? project.description;
  const features = project.features.filter(isReadyValue);
  const contribution = project.contribution.filter(isReadyValue);
  const position = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(position + 1) % projects.length];

  return (
    <article className="pb-[clamp(5rem,11vw,9rem)] pt-12 sm:pt-16">
      <div className="section-container">
        <Link
          href="/#projects"
          className="hero-rise inline-block text-sm text-muted transition-colors hover:text-accent"
          style={delay(0)}
        >
          ← Back to projects
        </Link>

        <header className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-14">
          <div>
            <p className="eyebrow hero-rise" style={delay(1)}>
              Case study {String(position + 1).padStart(2, "0")}
            </p>
            <h1
              className="hero-rise mt-5 text-6xl font-semibold tracking-[-0.045em] text-foreground sm:text-8xl"
              style={delay(2)}
            >
              {project.title}
            </h1>
          </div>

          <div className="hero-rise lg:pb-3" style={delay(3)}>
            {isReadyValue(overview) && (
              <p className="text-lg leading-relaxed text-muted">{overview}</p>
            )}

            {(hasLive || hasRepo) && (
              <div className="mt-6 flex flex-wrap gap-6 text-sm font-medium">
                {hasLive && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent transition-colors hover:text-accent-hover"
                  >
                    Live demo <span className="arrow">→</span>
                  </a>
                )}
                {hasRepo && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground transition-colors hover:text-accent"
                  >
                    Source code <span className="arrow">→</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </header>

        <div className="bezel hero-rise mt-12" style={delay(4)}>
          <ProjectStage
            project={project}
            label={String(position + 1).padStart(2, "0")}
            priority
            className="aspect-[16/10] sm:aspect-[21/9]"
          />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          <ScrollReveal className="scroll-reveal">
            <section
              aria-labelledby="features-heading"
              data-spotlight
              className="panel h-full p-7 sm:p-9"
            >
              <h2
                id="features-heading"
                className="text-2xl font-semibold tracking-tight text-foreground"
              >
                Features
              </h2>
              {features.length > 0 ? (
                <ul className="stagger relative z-[2] mt-6 divide-y divide-border/70">
                  {features.map((feature, index) => (
                    <li
                      key={feature}
                      className="flex gap-5 py-4 text-sm leading-relaxed text-muted first:pt-0 last:pb-0"
                      style={{ "--i": index } as CSSProperties}
                    >
                      <span className="mt-0.5 font-mono text-xs text-accent" aria-hidden>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-sm text-muted">
                  Add features in{" "}
                  <code className="font-mono text-foreground/80">src/data/projects.ts</code>
                </p>
              )}
            </section>
          </ScrollReveal>

          <ScrollReveal index={1} className="scroll-reveal">
            <div className="flex h-full flex-col gap-6">
              <section
                aria-labelledby="contribution-heading"
                data-spotlight
                className="panel flex-1 p-7 sm:p-9"
              >
                <h2
                  id="contribution-heading"
                  className="text-2xl font-semibold tracking-tight text-foreground"
                >
                  My contribution
                </h2>
                {contribution.length > 0 ? (
                  <ul className="stagger relative z-[2] mt-6 space-y-3">
                    {contribution.map((item, index) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                        style={{ "--i": index } as CSSProperties}
                      >
                        <span
                          className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_10px_var(--accent-glow)]"
                          aria-hidden
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 text-sm text-muted">
                    Add your contribution in{" "}
                    <code className="font-mono text-foreground/80">src/data/projects.ts</code>
                  </p>
                )}
              </section>

              <section
                aria-labelledby="stack-heading"
                data-spotlight
                className="panel p-7 sm:p-9"
              >
                <h2 id="stack-heading" className="eyebrow">
                  Tech stack
                </h2>
                <ul className="stagger relative z-[2] mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <li
                      key={tag}
                      className="chip px-3 py-1 text-xs text-muted"
                      style={{ "--i": index } as CSSProperties}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </ScrollReveal>
        </div>

        {nextProject && nextProject.slug !== project.slug && (
          <ScrollReveal className="scroll-reveal">
            <Link
              href={`/projects/${nextProject.slug}`}
              data-spotlight
              className="panel group mt-6 flex items-center justify-between gap-6 p-7 sm:p-9"
            >
              <span>
                <span className="eyebrow block">Next project</span>
                <span className="mt-3 block text-3xl font-semibold tracking-[-0.03em] text-foreground transition-colors duration-300 group-hover:text-accent sm:text-5xl">
                  {nextProject.title}
                </span>
              </span>
              <span
                className="text-3xl text-accent transition-transform duration-500 ease-[var(--ease-out)] group-hover:translate-x-2 sm:text-5xl"
                aria-hidden
              >
                →
              </span>
            </Link>
          </ScrollReveal>
        )}
      </div>
    </article>
  );
}
