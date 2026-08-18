"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useGsapPlugins, ScrollTrigger } from "@/lib/gsap";
import { services } from "@/data/services";
import useFadeUpReveal from "./useFadeUpReveal";

const bySlug = (slug) => services.find((s) => s.slug === slug)?.href || "#";

const serviceCards = [
  {
    id: "amazon-ppc",
    href: bySlug("amazon-ppc-management-services"),
    image: "/images/uploads/Service-Amazon-PPC.jpg",
    title: "Amazon PPC",
    text: "We manage, optimize, and grow your Amazon advertising for maximum return.",
  },
  {
    id: "meta-ads",
    href: bySlug("meta-instagram-ads-services"),
    image: "/images/uploads/Meta-Ads.jpg",
    title: "Meta Ads",
    text: "We run Meta campaigns that find your customer before they find your competitor.",
  },
  {
    id: "branding-design",
    href: bySlug("branding-and-design-services"),
    image: "/images/uploads/Branding-and-Creative-Design.jpg",
    title: "Branding & Creative Design",
    text: "We design logos, visuals, and ad creatives that keep your brand consistent and help your marketing look and perform better.",
  },
  {
    id: "seo-content",
    href: bySlug("Seo-content-strategy-services"),
    image: "/images/uploads/Seo-Content.jpg",
    title: "SEO & Content",
    text: "We build organic visibility that compounds over time on Google and on Amazon.",
  },
  {
    id: "shopify-development",
    href: bySlug("shopify-development-services"),
    image: "/images/uploads/hopify-Development.jpg",
    title: "Shopify Store Development",
    text: "A store that converts is better. We build Shopify experiences designed around your customer's journey.",
  },
  {
    id: "creative-strategy",
    href: bySlug("creative-strategy-services"),
    image: "/images/uploads/Creative-Strategy.jpg",
    title: "Creative Strategy",
    text: "Great ads start with great creative. We develop content, copy, and visuals that stop the scroll and start the sale.",
  },
];

export default function Services() {
  const containerRef = useRef(null);
  useFadeUpReveal(containerRef, ".thumb-link-wrapper", { y: 28, stagger: 0.08 });

  useEffect(() => {
    const gsap = useGsapPlugins();
    if (!containerRef.current) return;

    // Mirrors the original mobile "reveal description on scroll" behaviour:
    // CSS only shows .service-small-text once the card carries .is-in-view.
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".thumb-link-wrapper", containerRef.current);
      ScrollTrigger.batch(cards, {
        start: "top 90%",
        once: true,
        onEnter: (batch) => batch.forEach((el) => el.classList.add("is-in-view")),
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section for-services">
      <div className="gray-big-div">
        <div className="container">
          <div>
            <div className="title-small-main">
              <div id="w-node-b83ad969-48b0-4009-52a1-c4ac42681606-86e38a65" className="flex-small-title">
                <div className="plus-icon"></div>
                <div className="top-text">Capabilities</div>
              </div>
              <div id="w-node-b83ad969-48b0-4009-52a1-c4ac4268160d-86e38a65">
                <img
                  width="11"
                  loading="lazy"
                  alt=""
                  src="/images/webflow/69a023ed38982c825d59ca03_arrows-2.webp"
                  className="arrow-gray hide-mobile"
                />
              </div>
              <div id="w-node-_4b948326-a2ac-a4f4-6c06-f4df95a5f748-86e38a65" className="flex-small-title"></div>
            </div>
            <div className="margin-30">
              <div className="grid-title">
                <h2 className="h1 full-section">Services</h2>
              </div>
            </div>
          </div>
          <div className="divider-xl"></div>
          <div>
            <div className="first-wrapper" ref={containerRef}>
              {serviceCards.map((s) => (
                <div className="thumb-link-wrapper" id={s.id} key={s.id}>
                  <div className="thumb-image-wrap">
                    <div className="thumb-image-mask">
                      <img loading="lazy" src={s.image} alt="" className="thumb-image" />
                    </div>
                  </div>
                  <div className="thumb-title-wrapper">
                    <div className="thumb-title-wrap">
                      <div className="gray-color"></div>
                      <Link href={s.href} className="service-anchor-link">
                        <h2 className="thumb-title">{s.title}</h2>
                      </Link>
                    </div>
                  </div>
                  <div className="service-small-text">
                    <div className="card-text rl">{s.text}</div>
                  </div>
                  <div>
                    <div className="plus-icon"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
