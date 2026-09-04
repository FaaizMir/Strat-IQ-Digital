"use client";

import { useRef } from "react";
import Link from "next/link";
import useFadeUpReveal from "@/components/home/useFadeUpReveal";
import { services } from "@/data/services";

/* 12 category blocks shown on the live /services listing page -- the 11
   individual service routes plus one extra "End to End Digital Services"
   full-service summary block. Sub-items are decorative pills (title only,
   no links, no unique descriptions), matching the live site. */
const CATEGORIES = [
  {
    index: "01",
    title: "Amazon PPC",
    href: "/service/amazon-ppc-management-services",
    description:
      "Ads for ready buyers. We show your products to people ready to buy right now. We manage and scale your Amazon ads to get you the best return for every dollar.",
    subItems: ["Campaign setup & structure", "Keyword & Research", "Bid Optimization", "Search Term Analysis", "Performance Reporting"],
  },
  {
    index: "02",
    title: "Meta Ads",
    href: "/service/meta-instagram-ads-services",
    description:
      "Find your customers first. We use great designs and smart targeting to find your customers on Facebook and Instagram before they ever see your competitors.",
    subItems: ["Audience Targeting", "Campaign & Management", "Retargeting Campaigns", "Performance Optimization", "Creative Ad Strategy"],
  },
  {
    index: "03",
    title: "Google Ads",
    href: "/service/google-ads-management-services",
    description:
      "Be the first answer. We make sure you are the first thing people see when they search for what you sell. Simple, fast, and built to convert.",
    subItems: ["Search Campaigns", "Keyword Targeting", "Landing Page Alignment", "Conversion Tracking", "Ongoing Optimization"],
  },
  {
    index: "04",
    title: "Shopify Development",
    href: "/service/shopify-development-services",
    description: "Built to sell. A pretty store is nice, but a store that sells is better. We build Shopify sites that make it easy for your customers to buy",
    subItems: ["Custom Shopify Stores", "Product Page Setup", "Mobile Optimization", "Checkout Optimization", "Speed Optimization"],
  },
  {
    index: "05",
    title: "SEO & Content",
    href: "/service/Seo-content-strategy-services",
    description: "Technical and content-driven SEO strategies designed to increase visibility and sustainable traffic.",
    subItems: ["SEO Optimization", "Keyword Strategy", "Content Writing", "On Page Optimization", "Amazon Listing Optimization"],
  },
  {
    index: "06",
    title: "Creative Strategy",
    href: "/service/creative-strategy-services",
    description: "Stop the scroll. Good ads need to look good and make sense. We create the images and words that catch people's eyes and get them to click.",
    subItems: ["Ad Creative Strategy", "Content Planning", "Copy Writing", "Visual Strategy", "Creative Testing"],
  },
  {
    index: "07",
    title: "Conversion Optimization",
    href: "/service/conversion-optimization-services",
    description: "Fix your funnel. Traffic is useless if people don't buy. We test and fix your website pages until more visitors turn into paying customers.",
    subItems: ["Funnel Analysis", "Landing Page Optimization", "User Behaviour Analysis", "Checkout Optimization", "Conversion Rate Optimization"],
  },
  {
    index: "08",
    title: "Website Development",
    href: "/service/ui-ux-design-services",
    description: "Fast and clean. We build websites that load fast and work perfectly. Your site should work just as hard as your marketing does.",
    subItems: ["Custom Website Development", "Responsive Design", "Speed Optimization", "SEO Friendly Development", "Technical Support"],
  },
  {
    index: "09",
    title: "Branding",
    href: "/service/branding-and-design-services",
    description: "Look like a leader. We design logos and ads that keep your brand looking sharp. When you look professional, your marketing performs better.",
    subItems: ["Logo Design", "Brand Identity", "Social Creatives", "Ad Design", "Visual Identity"],
  },
  {
    index: "10",
    title: "UI/UX Design",
    href: "/service/ui-ux-design-services",
    description:
      "Our agency uses conversion-focused logic to simplify your customer journey, ensuring every visitor enjoys a seamless path to checkout.",
    subItems: ["User Journey Mapping", "Wireframing", "Interface Design", "Experience Design", "Mobile-first Design"],
  },
  {
    index: "11",
    title: "System Integration",
    href: "/service/system-integration-services",
    description: "We provide integration services and workflow automation to link your tools into one powerful, data-driven engine for growth.",
    subItems: ["Workflow Automation", "CRM Integrations", "Platform Integration", "Data Syncing", "Process Automation"],
  },
  {
    index: "12",
    title: "End to End Digital Services",
    href: "/service/full-service-ecommerce-marketing",
    description:
      "Our full-service agency provides performance marketing, creative, and strategy. We act as your integrated growth department, taking total responsibility for your revenue.",
    subItems: ["Marketing Strategy", "Paid Advertising", "Creative Strategy", "Website Development", "Growth Reporting"],
  },
];

const TESTIMONIALS = [
  {
    size: "large",
    quote:
      "The collaboration was smooth from start to finish. StratIQ Digital combines strong visual design with strategic thinking, delivering work that feels both premium and purposeful.",
    name: "Daniel Whitmore",
    role: "Marketing, VK Group",
  },
  {
    size: "small",
    quote:
      "Working with StratIQ Digital felt like partnering with a team that truly understands modern digital presence. Every detail was refined with precision, and the final result elevated our brand beyond expectations.",
    name: "Lucas Bennett",
    role: "Product Director, Nova Systems",
  },
  {
    size: "small",
    quote:
      "StratIQ Digital brought clarity and structure to our digital strategy. Their design thinking and execution transformed complex ideas into a seamless and elegant experience.",
    name: "Emma Laurent",
    role: "Head of Marketing, Aure Labs",
  },
];

function CategoryBlock({ item }) {
  return (
    <div className="svcl-category">
      <div className="svcl-category-index funnel-bold">({item.index})</div>
      <div className="svcl-category-main">
        <Link href={item.href} className="svcl-category-title-link">
          <h2 className="svcl-category-title funnel-bold">{item.title}</h2>
        </Link>
        <p className="svcl-category-desc">{item.description}</p>
        <div className="svcl-subitem-row">
          {item.subItems.map((s) => (
            <span className="svcl-subitem-pill" key={s}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <div className="svcl-testimonials">
      <div className="svcl-eyebrow">What Clients Say</div>
      <div className="svcl-testimonials-grid">
        {TESTIMONIALS.map((t, i) => (
          <blockquote className={`svcl-testimonial svcl-testimonial-${t.size}`} key={i}>
            <p className="svcl-testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
            <footer className="svcl-testimonial-footer">
              <div className="svcl-testimonial-name">{t.name}</div>
              <div className="svcl-testimonial-role">{t.role}</div>
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  );
}

export default function ServicesListing() {
  const rootRef = useRef(null);
  useFadeUpReveal(rootRef, ".svcl-index-item", { stagger: 0.04 });
  useFadeUpReveal(rootRef, ".svcl-category", { stagger: 0.06 });
  useFadeUpReveal(rootRef, ".svcl-testimonial", { stagger: 0.1 });

  const firstThree = CATEGORIES.slice(0, 3);
  const rest = CATEGORIES.slice(3);

  return (
    <div className="svcl-page" ref={rootRef}>
      <section className="svcl-hero">
        <div className="svcl-container">
          <div className="svcl-index-list">
            {services.map((s, i) => (
              <div className="svcl-index-item" key={s.slug}>
                <span className="svcl-index-num">{String(i + 1).padStart(2, "0")}</span>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          <h1 className="svcl-h1 funnel-bold">Services</h1>
        </div>
      </section>

      <section className="svcl-list">
        <div className="svcl-container">
          {firstThree.map((item) => (
            <CategoryBlock item={item} key={item.index} />
          ))}
        </div>

        <div className="svcl-container">
          <Testimonials />
        </div>

        <div className="svcl-container">
          {rest.map((item) => (
            <CategoryBlock item={item} key={item.index} />
          ))}
        </div>
      </section>
    </div>
  );
}
