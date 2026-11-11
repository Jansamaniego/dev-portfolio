import { projectContent } from "./projectContent";

export type Project = {
  /** URL segment used for the /projects/[slug] route. */
  slug: string;
  title: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  overview?: string;
  features: string[];
  contribution: string[];
};

/**
 * Lean project metadata — slugs, titles, images, tags and URLs only.
 * All verbose text (descriptions, features, contributions) lives in projectContent.ts.
 */
const projectMeta = [
  {
    slug: "lg-rsu-dm",
    title: "LG RSU DM",
    image: "/images/projects/lg_rsu-1.png",
    imageWidth: 898,
    imageHeight: 466,
    tags: ["Java 17", "Spring Boot", "MariaDB", "React", "AWS", "MQTT"],
    liveUrl: "TODO: https://your-live-demo.com",
    repoUrl: "TODO: https://github.com/yourusername/project-one",
  },
  {
    slug: "lexphere",
    title: "Lexphere",
    image: "/images/projects/lexphere-1.png",
    imageWidth: 602,
    imageHeight: 169,
    tags: [
      "Next.js",
      "React",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "RabbitMQ",
      "Redis",
      "Tailwind CSS",
    ],
    liveUrl: "TODO: https://your-live-demo.com",
    repoUrl: "TODO: https://github.com/yourusername/project-two",
  },
  {
    slug: "evandis",
    title: "Evandis",
    image: "/images/projects/evandis-1.png",
    imageWidth: 335,
    imageHeight: 115,
    tags: ["NestJS", "Next.js"],
    repoUrl: "TODO: https://github.com/yourusername/evandis",
  },
  {
    slug: "comake",
    title: "Comake",
    image: "/images/projects/comake-1.png",
    imageWidth: 537,
    imageHeight: 206,
    tags: ["Next.js", "shadcn/ui", "React Query"],
    repoUrl: "TODO: https://github.com/yourusername/comake",
  },
  {
    slug: "philist",
    title: "Philist",
    image: "/images/projects/philist-1.png",
    imageWidth: 432,
    imageHeight: 522,
    tags: ["NestJS", "Next.js"],
    repoUrl: "TODO: https://github.com/yourusername/philist",
  },
] as const satisfies Array<{
  slug: string;
  title: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  tags: readonly string[];
  liveUrl?: string;
  repoUrl?: string;
}>;

export const projects: Project[] = projectMeta.map((meta) => ({
  ...meta,
  tags: [...meta.tags],
  ...projectContent[meta.slug],
}));

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
