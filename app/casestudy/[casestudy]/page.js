import { projectServices } from "@/data/services";
import { getProjectBySlug } from "@/data/projects";
import ProjectsGrid from "../../../components/projects/ProjectsGrid";
import "../../../components/projects/projects.css";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { casestudy } = await params;
  const service = projectServices.find((s) => s.slug === casestudy);
  
  if (!service) return { title: "Not Found" };

  return {
    title: `${service.label} Case Studies | Strat IQ Digital`,
    description: service.description,
  };
}

export default async function CaseStudyPage({ params }) {
  const { casestudy } = await params;
  const service = projectServices.find((s) => s.slug === casestudy);

  if (!service) {
    notFound();
  }

  const items = (service.projects || []).map((slug) => {
    const p = getProjectBySlug(slug);
    return {
      href: `/casestudy/${casestudy}/${slug}`,
      image: p.cardImage,
      year: p.year,
      title: p.title,
    };
  });

  return (
    <div className="projects-page">
      <div className="projects-hero">
        <img src={service.image} alt={service.label} />
        <div className="projects-hero-caption">
          <div className="projects-eyebrow">Case Studies</div>
          <h1 className="projects-h1 funnel-bold">{service.label}</h1>
          <p style={{ marginTop: "1rem", maxWidth: "600px", opacity: 0.9 }}>
            {service.description}
          </p>
        </div>
      </div>

      <div className="projects-container">
        <ProjectsGrid items={items} />
      </div>
    </div>
  );
}
