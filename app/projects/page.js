import "./projects.css";
import { getProjectBySlug } from "@/data/projects";
import ProjectsGrid from "./ProjectsGrid";

export const metadata = {
  title: "Our Featured Portfolio & Case Studies | Strat IQ Digital",
  description:
    "See how Strat IQ Digital has helped brands like Pentagon Games, Raysz, CleverMan, and Harrier Hardware grow with performance-driven design and marketing.",
};

// Listing order as shown on the live site, independent of data/projects.js's
// storage order.
const LISTING_ORDER = ["forma-digital", "nero-vision", "cleverman", "bold-moves"];

export default function ProjectsPage() {
  const items = LISTING_ORDER.map((slug) => {
    const p = getProjectBySlug(slug);
    return { href: p.route, image: p.cardImage, year: p.year, title: p.title };
  });

  return (
    <div className="projects-page">
      <div className="projects-hero">
        <img src="/images/uploads/blog-test.jpeg" alt="" />
        <div className="projects-hero-caption">
          <div className="projects-eyebrow">Highlighted Work</div>
          <h1 className="projects-h1 funnel-bold">Featured Works</h1>
        </div>
      </div>

      <div className="projects-container">
        <ProjectsGrid items={items} />
      </div>
    </div>
  );
}
