import Link from "next/link";
import { isReadyLink } from "@/lib/links";
import type { Project } from "@/data/projects";
import { ProjectStage } from "./ProjectStage";
import { ScrollReveal } from "./ScrollReveal";

type ProjectCardProps = {
  project: Project;
  index: number;
  total: number;
};

function formatIndex(value: number) {
  return String(value).padStart(2, "0");
}

export function ProjectCard({ project, index, total }: ProjectCardProps) {
  const hasLive = isReadyLink(project.liveUrl);
  const hasRepo = isReadyLink(project.repoUrl);
  const href = `/projects/${project.slug}`;
  const label = formatIndex(index + 1);

  return (
    <ScrollReveal className="scroll-reveal">
      <article className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
        {/* Keyboard users get the title link below; this one is pointer convenience. */}
        <Link
          href={href}
          tabIndex={-1}
          data-spotlight
          className={`bezel block lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}
        >
          <ProjectStage
            project={project}
            label={label}
            className="case-media aspect-[16/10]"
          />
        </Link>

        <div className="lg:col-span-5">
          <p className="font-mono text-xs tracking-[0.2em] text-muted">
            <span className="text-accent">{label}</span> / {formatIndex(total)}
          </p>
          <h3 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-foreground sm:text-5xl">
            <Link href={href} className="transition-colors duration-300 group-hover:text-accent">
              {project.title}
            </Link>
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {project.description}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
            {project.tags.map((tag) => (
              <li key={tag} className="chip px-3 py-1 text-xs text-muted">
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-6 text-sm font-medium">
            <Link
              href={href}
              className="text-accent transition-colors hover:text-accent-hover"
            >
              View details <span className="arrow">→</span>
            </Link>
            {hasLive && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground transition-colors hover:text-accent"
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
        </div>
      </article>
    </ScrollReveal>
  );
}
