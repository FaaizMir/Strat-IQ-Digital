import ProjectTemplate from "@/components/projects/ProjectTemplate";
import { getProjectBySlug } from "@/data/projects";

const project = getProjectBySlug("harrier-hardware");

export const metadata = {
  title: project.metaTitle,
  description: project.subtitle,
};

export default function HarrierHardwarePage() {
  return <ProjectTemplate project={project} />;
}
