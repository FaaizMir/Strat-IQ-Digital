"use client";

import { useRef } from "react";
import Link from "next/link";
import useFadeUpReveal from "./useFadeUpReveal";

const projects = [
  { href: "/project/pentagon-games", image: "/images/uploads/Project-1-scaled.jpg", year: "26", title: "Pentagon Games" },
  { href: "/project/raysz", image: "/images/uploads/Project-2-scaled.jpg", year: "25", title: "Raysz" },
  { href: "/project-cleverman", image: "/images/uploads/Project-4-scaled.jpg", year: "24", title: "CleverMan" },
  { href: "/project/harrier-hardware", image: "/images/uploads/harrier-hardware-scaled.jpg", year: "24", title: "Harrier Hardware" },
];

export default function FeaturedWork() {
  const containerRef = useRef(null);
  useFadeUpReveal(containerRef, ".work-wrapper", { y: 36, stagger: 0.1 });

  return (
    <>
      <div className="container">
        <div>
          <div className="title-small-main">
            <div id="w-node-ed75a45d-11d7-0be3-04ca-91c3e700e604-86e38a65" className="flex-small-title">
              <div className="plus-icon">
                <img src="/images/webflow/69a03137ec5530c51522b5ff_plus.webp" loading="lazy" alt="" />
              </div>
              <div className="top-text">Highlighted Work</div>
            </div>
            <div id="w-node-ed75a45d-11d7-0be3-04ca-91c3e700e60c-86e38a65" className="hide">
              <Link href="/casestudy" className="button-arrow w-inline-block">
                <img
                  width="9"
                  loading="lazy"
                  alt=""
                  src="/images/webflow/699f89c49271389efbdafdbc_arrows.png"
                  className="arrow-gray"
                />
                <div className="button-title-flex">
                  <div className="button-small-name">View all works</div>
                  <div className="button-small-name">View all works</div>
                </div>
              </Link>
            </div>
            <div id="w-node-_08b43d3a-6666-a02f-4ee8-75d59bf7dc43-86e38a65" className="flex-small-title"></div>
          </div>
          <div className="margin-30">
            <h2 className="h1 full-section"> Featured Works</h2>
          </div>
        </div>
      </div>

      <section className="section for-work">
        {/* Centered wrapper box */}
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <div className="collection-list-wrapper w-dyn-list">
            <div 
              role="list" 
              className="w-dyn-items" 
              ref={containerRef}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                gap: "20px",
                justifyContent: "center",
                alignItems: "start"
              }}
            >
              {projects.map((p) => (
                <div role="listitem" className="work-wrapper w-dyn-item" key={p.href} style={{ width: "100%" }}>
                  <div className="work-card">
                    <Link href={p.href} className="work-card-link w-inline-block">
                      <div 
                        className="main-image" 
                        style={{ 
                          width: "100%", 
                          aspectRatio: "3/2", 
                          borderRadius: "12px", 
                          overflow: "hidden", 
                          position: "relative" 
                        }}
                      >
                        <img 
                          loading="lazy" 
                          src={p.image} 
                          alt={p.title} 
                          className="image-bacgkround" 
                          style={{ 
                            width: "100%", 
                            height: "100%", 
                            objectFit: "cover", 
                            display: "block" 
                          }}
                        />
                        <div className="overlay"></div>
                      </div>
                    </Link>
                  </div>
                  <div className="text-info-bottom" style={{ marginTop: "10px" }}>
                    <div className="text-flex" style={{ display: "flex", gap: "4px", fontSize: "14px", opacity: 0.7 }}>
                      <div> </div>
                      <div>{p.year}</div>
                    </div>
                    <h2 className="work-title" style={{ fontSize: "16px", marginTop: "4px", fontWeight: "600" }}>
                      {p.title}
                    </h2>
                  </div>
                  <div className="trigger"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}