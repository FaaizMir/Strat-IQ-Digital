import { projectServices } from "@/data/services";
import { getProjectBySlug } from "@/data/projects";
import ProjectsGrid from "../../components/projects/ProjectsGrid";
import "../../components/projects/projects.css";
import Link from "next/link";

export const metadata = {
  title: "Case Studies | Strat IQ Digital",
  description: "Explore our performance-driven case studies across various services.",
};

export default function CaseStudyHub() {
  return (
    <div className="projects-page">
      <div className="projects-hero">
        <img src="/images/uploads/blog-test.jpeg" alt="" />
        <div className="projects-hero-caption">
          <div className="projects-eyebrow">Highlighted Work</div>
          <h1 className="projects-h1 funnel-bold">Case Studies</h1>
        </div>
      </div>

      <div className="projects-container" style={{ display: "flex", flexDirection: "column", gap: "80px", paddingTop: "40px" }}>
        {projectServices.map((service, index) => {
          // If the service has mapped projects, get their data
          const hasProjects = service.projects && service.projects.length > 0;
          const items = hasProjects 
            ? service.projects.map((slug) => {
                const p = getProjectBySlug(slug);
                return { href: `/casestudy/${service.slug}/${p.slug}`, image: p.cardImage, year: p.year, title: p.title };
              })
            : [];

          return (
            <div key={service.slug} className="service-casestudy-section" style={{ borderBottom: index !== projectServices.length - 1 ? "1px solid #eaeaea" : "none", paddingBottom: "80px" }}>
              <div style={{ marginBottom: "40px" }}>
                <h2 className="funnel-bold" style={{ fontSize: "2rem", marginBottom: "16px" }}>{service.label}</h2>
                <p style={{ fontSize: "1.125rem", color: "#666", maxWidth: "800px" }}>{service.description}</p>
              </div>

              {hasProjects ? (
                <>
                  <ProjectsGrid items={items} />
                  <div style={{ marginTop: "40px", display: "flex", justifyContent: "flex-end" }}>
                    <Link href={`/casestudy/${service.slug}`} className="button-arrow w-inline-block">
                      <img
                        width="9"
                        loading="lazy"
                        alt=""
                        src="/images/webflow/699f89c49271389efbdafdbc_arrows.png"
                        className="arrow-gray"
                      />
                      <div className="button-title-flex">
                        <div className="button-small-name">See more</div>
                        <div className="button-small-name">See more</div>
                      </div>
                    </Link>
                  </div>
                </>
              ) : (
                <div style={{ padding: "40px 0", textAlign: "center", backgroundColor: "#f9f9f9", borderRadius: "12px", border: "1px dashed #ccc" }}>
                  <p style={{ color: "#888", fontSize: "1rem" }}>Projects coming soon for this service.</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
