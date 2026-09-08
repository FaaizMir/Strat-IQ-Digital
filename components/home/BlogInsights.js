"use client";

import { useRef } from "react";
import Link from "next/link";
import useFadeUpReveal from "./useFadeUpReveal";

const posts = [
  {
    href: "/post/designing-digital-systems-that-scale-with-your-business",
    image: "/images/webflow/699ed6f18aceafc086e38c13_blog-1.webp",
    date: "October 4, 2025",
    title: "Designing digital systems that scale your business",
  },
  {
    href: "/post/from-idea-to-execution-building-products-that-last",
    image: "/images/webflow/699ed6f18aceafc086e38c2a_blog-2.webp",
    date: "October 1, 2025",
    title: "From idea to execution: building products that last",
  },
  {
    href: "/post/the-power-of-simplicity-in-modern-brand-design",
    image: "/images/webflow/699ed6f18aceafc086e38c41_Sleek-Container-Set.webp",
    date: "November 11, 2025",
    title: "The power of simplicity in modern real brand design",
  },
];

function ArrowSvg({ absolute }) {
  return (
    <div className={`buton-icon-svg${absolute ? " is-absolute" : ""} w-embed`}>
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 17L17 7M17 7H7M17 7V17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function BlogInsights() {
  const containerRef = useRef(null);
  useFadeUpReveal(containerRef, ".w-dyn-item", { y: 30, stagger: 0.08 });

  return (
    <section className="section for-services">
      <div className="container">
        <div>
          <div className="title-small-main">
            <div id="w-node-_6b2fb3cc-304f-7555-73d4-9f9d6eb99ea7-86e38a65" className="flex-small-title">
              <div className="plus-icon">
                <img src="/images/webflow/69a03137ec5530c51522b5ff_plus.webp" loading="lazy" alt="" />
              </div>
              <div className="top-text">Market Insights</div>
            </div>
            <div id="w-node-_6b2fb3cc-304f-7555-73d4-9f9d6eb99eab-86e38a65">
              <img
                width="11"
                loading="lazy"
                alt=""
                src="/images/webflow/69a023ed38982c825d59ca03_arrows-2.webp"
                className="arrow-gray hide-mobile"
              />
            </div>
            <div id="w-node-_6b2fb3cc-304f-7555-73d4-9f9d6eb99ead-86e38a65" className="flex-small-title"></div>
          </div>
          <div className="margin-30">
            <div className="grid-title">
              <h2 className="full-section"> Things worth reading</h2>
            </div>
          </div>
        </div>
        <div className="divider-xl"></div>
        <div>
          <div className="w-dyn-list">
            <div role="list" className="blog-grid w-dyn-items" ref={containerRef}>
              {posts.map((p) => (
                <div role="listitem" className="w-dyn-item" key={p.href}>
                  <Link href={p.href} className="blog-main-wrapper w-inline-block">
                    <div className="button-icon-main">
                      <ArrowSvg />
                      <ArrowSvg absolute />
                    </div>
                    <div className="image-wrap auto">
                      <img loading="lazy" src={p.image} alt="" className="paralax-image" />
                    </div>
                    <div className="margin-20">
                      <div className="data-flex">
                        <div className="data-inside">
                          <div className="data-image invert">
                            <img
                              width="75"
                              loading="lazy"
                              alt=""
                              src="/images/webflow/69a96e7b2a7e8dcbb5ad2ef0_data-light.svg"
                            />
                          </div>
                          <p className="data-text">{p.date}</p>
                        </div>
                      </div>
                    </div>
                    <div className="margin-10">
                      <div>{p.title}</div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
