import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid() {
  return (
    <div className="flex flex-col gap-20 lg:gap-32">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.slug}
          project={project}
          index={index}
          total={projects.length}
        />
      ))}
    </div>
  );
}
