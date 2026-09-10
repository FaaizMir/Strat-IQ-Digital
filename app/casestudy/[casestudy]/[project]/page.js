import ProjectTemplate from "@/components/projects/ProjectTemplate";
import { getProjectBySlug } from "@/data/projects";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { project } = await params;
  const projectData = getProjectBySlug(project);
  
  if (!projectData) return { title: "Not Found" };

  return {
    title: projectData.metaTitle || `${projectData.title} | Case Study`,
    description: projectData.subtitle,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { project } = await params;
  const projectData = getProjectBySlug(project);

  if (!projectData) {
    notFound();
  }

  return <ProjectTemplate project={projectData} />;
}
