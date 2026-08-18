"use client";

import { useRef } from "react";
import useFadeUpReveal from "./useFadeUpReveal";

export default function VideoShowreel() {
  const containerRef = useRef(null);
  useFadeUpReveal(containerRef, ".flex-center-video > div", { y: 24, stagger: 0.12 });

  return (
    <section className="video-showreel">
      <div className="video-sticky">
        <div className="container _01">
          <div className="title-small-main cnt">
            <div id="w-node-_1e4e1f19-7618-a97c-ccf2-4bd69123e492-86e38a65" className="flex-small-title">
              <div className="plus-icon">
                <img src="/images/webflow/69a03137ec5530c51522b5ff_plus.webp" loading="lazy" alt="" />
              </div>
            </div>
            <div id="w-node-_1e4e1f19-7618-a97c-ccf2-4bd69123e496-86e38a65">
              <img
                width="11"
                loading="lazy"
                alt=""
                src="/images/webflow/69a023ed38982c825d59ca03_arrows-2.webp"
                className="arrow-gray hide-mobile"
              />
            </div>
            <div id="w-node-_1e4e1f19-7618-a97c-ccf2-4bd69123e498-86e38a65" className="flex-small-title"></div>
          </div>
        </div>
        <div className="container _03">
          <div className="flex-center-video" ref={containerRef}>
            <div>
              <h2 className="h1 full-section _01">Play</h2>
            </div>
            <div>
              <a
                href="https://www.youtube.com/watch?v=677IU_NErto"
                target="_blank"
                rel="noopener noreferrer"
                className="video-link w-inline-block"
              >
                {/* TODO: missing asset https://cdn.prod.website-files.com/699ed6f18aceafc086e38a82/69a8318032ea653b7ba1ce7a_play%20(1).webp -- not present in public/images/webflow, mapped path below assumes it will be added */}
                <img
                  src="/images/webflow/69a8318032ea653b7ba1ce7a_play-(1).webp"
                  loading="lazy"
                  alt=""
                  className="play-icon"
                />
              </a>
            </div>
            <div>
              <h2 className="h1 full-section _02">Reel</h2>
            </div>
          </div>
        </div>
        <div className="bg-overlay w-background-video w-background-video-atom">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/webflow/69a593bef47cd9955a19a694_rays-2_poster.0000000.jpg"
            data-object-fit="cover"
          >
            <source src="/videos/69a593bef47cd9955a19a694_rays-2_mp4.mp4" type="video/mp4" />
            <source src="/videos/69a593bef47cd9955a19a694_rays-2_webm.webm" type="video/webm" />
          </video>
        </div>
        <img
          src="/images/uploads/Reel-Banner.jpg"
          loading="lazy"
          alt=""
          className="video-image"
        />
        <div className="container _02">
          <div className="plus-grid still-grid">
            {[0, 1, 2, 3].map((i) => (
              <div key={i}>
                <div className="plus-icon">
                  <img src="/images/webflow/69a03137ec5530c51522b5ff_plus.webp" loading="lazy" alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
