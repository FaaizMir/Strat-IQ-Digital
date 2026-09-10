// Single source of truth for the 4 real case studies shown on /projects and
// on each individual /project/* detail page. ProjectTemplate.js renders these.
//
// Shape notes:
// - `gallery`: ordered list of images. `full: true` renders as its own
//   full-width row; consecutive `full: false` images are grouped in pairs
//   into a 2-col grid -- this matches each project's real gallery layout.
// - `challenge` / `approach` / `design` all share the same shape:
//   { label, heading, paragraphs[], bullets[], closing }. `heading` and
//   `closing` are optional -- some projects only ever had a label, no extra
//   bolded sub-headline (Raysz, CleverMan), some have an italic closing line
//   (Pentagon Games, CleverMan).
// - `change`: { label, before[]|null, after[] } -- `before` is null for the
//   after-only sections ("What this means" / "What improved").
// - `otherWorks`: slugs of OTHER real projects only. The live site linked to
//   a "One Step" project that was never built -- never reproduce that here.

export const projects = [
  {
    slug: "pentagon-games",
    route: "/project/pentagon-games",
    metaTitle: "Pentagon Games Case Study | Web3 Website Design",
    title: "Pentagon Games",
    client: "Pentagon Games",
    category: "Website Design",
    services: ["UI/UX Design", "Web Experience", "Creative Direction"],
    subtitle:
      "Designing a Web3 experience that feels as advanced as the technology behind it.",
    year: "26",
    cardImage: "/images/uploads/Project-1-scaled.jpg",
    heroImage: "/images/uploads/Project-1-1st-Image-1.jpg",
    gallery: [
      { src: "/images/uploads/Project-1-1st-Image-1.jpg", full: true },
      { src: "/images/uploads/Project-1-2nd-scaled.jpg", full: true },
      { src: "/images/uploads/Project-1-3rd-Image.jpg", full: false },
      { src: "/images/uploads/Project-1-4th-Image.jpg", full: false },
    ],
    challenge: {
      label: "The Challenge",
      heading: "Web3 is complex.",
      paragraphs: [
        "AI, AR, blockchain, tokens — all powerful, but hard to explain. Most platforms either overwhelm users or oversimplify the product.",
        "Pentagon Games needed a digital experience that could do both:",
      ],
      bullets: ["Feel futuristic", "Still make sense instantly"],
    },
    approach: {
      label: "The Approach",
      heading: "We focused on clarity through design.",
      paragraphs: [
        "Instead of explaining everything, we designed an interface that lets users feel it. Everything built to guide, not confuse.",
      ],
      bullets: [
        "Structured content flow",
        "Visual hierarchy for complex systems",
        "Clean navigation across multiple layers",
        "Strong, immersive aesthetic",
      ],
    },
    design: {
      label: "The Design",
      heading: "The Design",
      bullets: [
        "Dark-mode interface with high contrast",
        "Futuristic visual direction aligned with Web3 space",
        "Smooth transitions between sections",
        "Clear separation between product, ecosystem, and token layers",
      ],
      closing: "The goal was simple: Make complexity feel intuitive.",
    },
    change: {
      label: "What Changed",
      before: ["Disconnected information", "Overwhelming structure", "Weak visual hierarchy"],
      after: ["Clear ecosystem presentation", "Guided user journey", "Strong, consistent visual language"],
    },
    otherWorks: ["raysz", "cleverman"],
  },

  {
    slug: "raysz",
    route: "/project/raysz",
    metaTitle: "Raysz Case Study | Athletic Wear Brand Identity",
    title: "Raysz",
    client: "Raysz",
    category: "Branding",
    services: [
      "Branding & Creative Direction",
      "Design Strategy",
      "Visual Identity Development",
      "Creative Systems",
    ],
    subtitle:
      "Building a stronger athletic wear brand through strategic creative direction and modern brand positioning.",
    year: "25",
    cardImage: "/images/uploads/Project-2-scaled.jpg",
    heroImage: "/images/uploads/Project-2-scaled.jpg",
    gallery: [
      { src: "/images/uploads/Project-2-1st-Image.jpg", full: true },
      { src: "/images/uploads/Project-2-2nd-Image-scaled.jpg", full: true },
      { src: "/images/uploads/01c1c4236835079.68f41039d5926.gif", full: false },
      { src: "/images/uploads/Project-2-4th-Image.jpg", full: false },
    ],
    challenge: {
      label: "The Challenge",
      paragraphs: ["The brand needed a stronger identity to compete in a crowded athletic wear market."],
      bullets: [
        "Inconsistent visual direction",
        "Weak brand positioning",
        "Lack of creative consistency",
        "Need for a more premium customer perception",
      ],
      closing: "The goal was building a recognizable brand customers would remember.",
    },
    approach: {
      label: "The Approach",
      paragraphs: [
        "We focused on building a clean, performance-driven brand identity designed for long-term growth and stronger customer connection.",
        "Every section had one goal: Move the user closer to purchase",
      ],
      bullets: [
        "Creative direction aligned with audience positioning",
        "Modern athletic wear branding system",
        "Consistent visual language across assets",
        "Performance-focused design strategy",
      ],
    },
    design: {
      label: "Results",
      bullets: [
        "Unified design direction across touchpoints",
        "Stronger visual recognition",
        "Scalable branding system for future campaigns",
      ],
    },
    change: {
      label: "What this means",
      before: null,
      after: [
        "The brand became more recognizable",
        "Creative assets felt more premium and consistent",
        "The foundation was built for long-term scalable growth",
      ],
    },
    otherWorks: ["pentagon-games", "harrier-hardware"],
  },

  {
    slug: "harrier-hardware",
    route: "/project/harrier-hardware",
    metaTitle: "Harrier Hardware Case Study | Web Design & Marketing",
    title: "Harrier Hardware",
    client: "Harrier Hardware",
    category: "Web Design",
    services: ["Web Design", "Marketing"],
    subtitle: "Turning a dated hardware brand into a bold, modern presence built to convert.",
    year: "24",
    cardImage: "/images/uploads/Project-3-1-scaled.jpg",
    heroImage: "/images/uploads/Project-3-1-scaled.jpg",
    gallery: [
      { src: "/images/uploads/Project-3-1st-Image.jpg", full: true },
      { src: "/images/uploads/Project-3-2nd-Image-1-scaled.jpg", full: true },
      { src: "/images/uploads/Project-3-3rd-Image.jpg", full: false },
      { src: "/images/uploads/Project-3-4th-Image.jpg", full: false },
    ],
    challenge: {
      label: "The Challenge",
      paragraphs: [
        "Harrier Hardware had solid products but a website stuck in the past, one that undersold the brand and buried the catalog.",
      ],
      bullets: [
        "Dated, cluttered site design",
        "Weak brand presence online",
        "Unclear product presentation",
        "No consistent path from browsing to buying",
      ],
    },
    approach: {
      label: "The Approach",
      paragraphs: [
        "We rebuilt the site around confidence: bolder visuals, clearer structure, and marketing built to match.",
      ],
      bullets: [
        "Modern web design aligned with brand tone",
        "Simplified product categorization",
        "Marketing strategy built around the new site",
        "Consistent messaging across every touchpoint",
      ],
    },
    design: {
      label: "The Design",
      bullets: [
        "Rugged, industrial-but-modern visual direction",
        "Clear product categorization and navigation",
        "Strong, confident typography",
        "Consistent brand presence across every page",
      ],
      closing: "The goal was simple: make the brand feel as tough and capable as its tools.",
    },
    change: {
      label: "What Changed",
      before: ["Dated, cluttered design", "Weak brand presence", "Unclear product paths"],
      after: ["Bold, modern visual identity", "Clear product categorization", "Confident, consistent brand presence"],
    },
    otherWorks: ["raysz", "cleverman"],
  },

  {
    slug: "cleverman",
    route: "/project-cleverman",
    metaTitle: "CleverMan Case Study | Ecommerce UX & Conversion Design",
    title: "CleverMan",
    client: "CleverMan",
    category: "Ecommerce",
    services: ["UI/UX Design", "Conversion Optimization", "Creative Direction"],
    subtitle: "Rebuilding a friction-heavy ecommerce store around one goal: turning visitors into buyers.",
    year: "24",
    cardImage: "/images/uploads/Project-4-scaled.jpg",
    heroImage: "/images/uploads/Project-4-scaled.jpg",
    gallery: [
      { src: "/images/uploads/Project-4-1st-Image.jpg", full: true },
      { src: "/images/uploads/Project-4-2nd-Image-scaled.jpg", full: true },
      { src: "/images/uploads/Project-4-3rd-Image.jpg", full: false },
      { src: "/images/uploads/Project-4-4th-Image.jpg", full: false },
    ],
    challenge: {
      label: "The Challenge",
      paragraphs: ["The brand had a strong product but the website wasn't helping it sell."],
      bullets: ["Too much friction", "Weak product clarity", "Lack of creative consistency", "No clear buying flow"],
      closing: "Visitors were landing but not converting.",
    },
    approach: {
      label: "The Approach",
      paragraphs: [
        "We didn't redesign the site. We rebuilt the experience around conversion.",
        "Every section had one goal: Move the user closer to purchase",
      ],
      bullets: ["Clear product messaging", "Strong visual hierarchy", "Simplified navigation", "Reduced decision fatigue"],
      closing: "No distractions. Just direction.",
    },
    design: {
      label: "Conversion Design",
      bullets: [
        "Clean product sections with focused messaging",
        "Clear CTAs at the right moments",
        "Structured flow from discovery → trust → purchase",
        "Visual storytelling to support decisions",
      ],
      closing: "Everything built around how users actually buy.",
    },
    change: {
      label: "What improved",
      before: null,
      after: [
        "Faster understanding of the product",
        "Stronger first impression",
        "Clear path to purchase",
        "Reduced confusion across pages",
        "Better alignment between design and user intent",
      ],
    },
    otherWorks: ["pentagon-games", "harrier-hardware"],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
