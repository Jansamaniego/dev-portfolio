import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetails } from "@/components/ProjectDetails";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getProjectBySlug, projects } from "@/data/projects";
import { isReadyValue } from "@/lib/links";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const description = project.overview ?? project.description;
  return {
    title: project.title,
    description: isReadyValue(description) ? description : undefined,
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <SiteHeader />
      <main id="top" className="flex-1">
        <ProjectDetails project={project} />
      </main>
      <SiteFooter />
    </>
  );
}
