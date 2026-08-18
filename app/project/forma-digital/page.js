import ProjectTemplate from "@/components/projects/ProjectTemplate";
import { getProjectBySlug } from "@/data/projects";

const project = getProjectBySlug("forma-digital");

export const metadata = {
  title: project.metaTitle,
  description: project.subtitle,
};

export default function PentagonGamesPage() {
  return <ProjectTemplate project={project} />;
}
