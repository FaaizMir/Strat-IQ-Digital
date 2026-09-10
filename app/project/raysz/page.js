import ProjectTemplate from "@/components/projects/ProjectTemplate";
import { getProjectBySlug } from "@/data/projects";

const project = getProjectBySlug("raysz");

export const metadata = {
  title: project.metaTitle,
  description: project.subtitle,
};

export default function RayszPage() {
  return <ProjectTemplate project={project} />;
}
