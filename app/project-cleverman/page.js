import ProjectTemplate from "@/components/projects/ProjectTemplate";
import { getProjectBySlug } from "@/data/projects";

const project = getProjectBySlug("cleverman");

export const metadata = {
  title: project.metaTitle,
  description: project.subtitle,
};

export default function CleverManPage() {
  return <ProjectTemplate project={project} />;
}
