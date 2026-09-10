import ProjectTemplate from "@/components/projects/ProjectTemplate";
import { getProjectBySlug } from "@/data/projects";

const project = getProjectBySlug("pentagon-games");

export const metadata = {
  title: project.metaTitle,
  description: project.subtitle,
};

export default function PentagonGamesPage() {
  return <ProjectTemplate project={project} />;
}
