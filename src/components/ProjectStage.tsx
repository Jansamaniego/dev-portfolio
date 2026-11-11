import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectStageProps = {
  project: Project;
  label: string;
  className?: string;
  priority?: boolean;
};

/** Presents a project's logo as a lit plate floating on a dark stage. */
export function ProjectStage({
  project,
  label,
  className = "",
  priority = false,
}: ProjectStageProps) {
  const isPortrait = project.imageHeight > project.imageWidth;

  return (
    <div className={`stage ${className}`}>
      <div className="stage-grid" aria-hidden />
      <span className="orbit w-[48%]" style={{ "--orbit-speed": "48s" } as React.CSSProperties} aria-hidden />
      <span className="orbit w-[74%]" style={{ "--orbit-speed": "76s" } as React.CSSProperties} aria-hidden />
      <span className="stage-index" aria-hidden>
        {label}
      </span>
      <div
        className="parallax-float relative"
        style={{ width: isPortrait ? "min(27%, 11rem)" : "min(52%, 20rem)" }}
      >
        <div className="stage-plate">
          {/* Slight overscan hides stray edge pixels in the source logos. */}
          <Image
            src={project.image}
            alt={`${project.title} logo`}
            width={project.imageWidth}
            height={project.imageHeight}
            priority={priority}
            className="block h-auto w-full scale-[1.015]"
            sizes="(max-width: 640px) 50vw, 320px"
          />
        </div>
      </div>
    </div>
  );
}
