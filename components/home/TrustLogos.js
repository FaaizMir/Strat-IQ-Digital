// "use client";

// import { useRef } from "react";
// import useFadeUpReveal from "./useFadeUpReveal";

// export default function TrustLogos() {
//   const containerRef = useRef(null);
//   useFadeUpReveal(containerRef, ".logo-content", { y: 24, stagger: 0.08 });

//   return (
//     <div className="section-content">
//       <div className="section _01">
//         <div className="container" ref={containerRef}>
//           <div className="title-small-main">
//             <div id="w-node-_7c7bb716-c6b1-f2b2-347b-7517524f9516-86e38a65" className="flex-small-title">
//               <div className="plus-icon">
//                 <img src="/images/webflow/69a03137ec5530c51522b5ff_plus.webp" loading="lazy" alt="" />
//               </div>
//               <div className="top-text">Built for Ambitious Brands</div>
//             </div>
//             <div id="w-node-eb581b58-add5-38fa-311c-162d8d71a2d9-86e38a65" className="flex-small-title"></div>
//             <div id="w-node-_3aa197ab-6f65-acf0-0306-80dce9d5c69c-86e38a65">
//               <img
//                 width="11"
//                 loading="lazy"
//                 alt=""
//                 src="/images/webflow/69a023ed38982c825d59ca03_arrows-2.webp"
//                 className="arrow-gray hide-mobile"
//               />
//             </div>
//           </div>
//           <div className="divider-m"></div>
//           <div className="logo-grid">

//             <div className="logo-content">
//               <div className="logo-wrapper-card">
//                 <img
//                   src="/images/uploads/advanage-white.png"
//                   loading="lazy"
//                   width="120"
//                   alt="advanage"
//                   className="logo-image"
//                 />
//               </div>
//             </div>
//             <div className="logo-content">
//               <div className="logo-wrapper-card">
//                 <img
//                   src="/images/uploads/lanes-white.png"
//                   loading="lazy"
//                   width="80"
//                   alt="lanescarproducts"
//                   className="logo-image _01"
//                 />
//               </div>
//             </div>
//             <div className="logo-content">
//               <div className="logo-wrapper-card">
//                 <img
//                   src="/images/uploads/walk-fragrances-white.png"
//                   loading="lazy"
//                   width="85"
//                   alt="walkfragrances"
//                   className="logo-image _01"
//                 />
//               </div>
//             </div>
//             <div className="logo-content">
//               <div className="logo-wrapper-card">
//                 <div className="testimonials-card hide-mobile">
//                   <div className="testimonials-top">
//                     <div className="top-text small-tessti">
//                       &quot;What impressed us most was their structured thinking. Every design decision had purpose,
//                       every interaction had intention. Strat IQ Digital.&quot;
//                     </div>
//                   </div>
//                   <div className="testimonials-bottom">
//                     <div className="div-block">
//                       <img
//                         src="/images/webflow/69a80ee36b73c91feefc54ed_Blurred-Futuristic-Portrait-(1).webp"
//                         loading="lazy"
//                         width="40"
//                         alt=""
//                         className="portrait"
//                       />
//                       <div className="small-flex">
//                         <div>Daniel Whitmore</div>
//                         <div className="smaller-text">Marketing, VK Group</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="absolute-bottom">
//                   <div className="clients-small-blog">Success Stories</div>
//                 </div>
//                 <img
//                   src="/images/uploads/perf-moto-white.png"
//                   loading="lazy"
//                   width="130"
//                   alt="perfmoto"
//                   className="logo-image"
//                 />
//               </div>
//             </div>
//             <div className="logo-content">
//               <div className="logo-wrapper-card">
//                 <div className="testimonials-card hide-mobile">
//                   <div className="testimonials-top">
//                     <div className="top-text small-tessti">
//                       &quot;Working with Strat IQ Digital felt like partnering with an in-house strategic team. They
//                       challenged our ideas, strengthened our positioning, and delivered a platform built to
//                       scale.&quot;
//                     </div>
//                   </div>
//                   <div className="testimonials-bottom">
//                     <div className="div-block">
//                       <img
//                         src="/images/webflow/69a80ee328f3e8d639efe5e3_Abstract-Red-Portrait-(2).webp"
//                         loading="lazy"
//                         width="40"
//                         alt=""
//                         className="portrait"
//                       />
//                       <div className="small-flex">
//                         <div>Sofia Reinhardt</div>
//                         <div className="smaller-text">Elevate Technologies CEO</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <img
//                   src="/images/uploads/stellar-chemical-white.png"
//                   loading="lazy"
//                   width="84"
//                   alt="stellarchemicalcorp"
//                   className="logo-image _01"
//                 />
//                 <div className="absolute-bottom">
//                   <div className="clients-small-blog">Success Stories</div>
//                 </div>
//               </div>
//             </div>
//             <div className="logo-content">
//               <div className="logo-wrapper-card">
//                 <img
//                   src="/images/uploads/woofleys-white.png"
//                   loading="lazy"
//                   width="110"
//                   alt="woofleys"
//                   className="logo-image"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";

import { useRef } from "react";
import useFadeUpReveal from "./useFadeUpReveal";

export default function TrustLogos() {
  const containerRef = useRef(null);
  useFadeUpReveal(containerRef, ".logo-content", { y: 24, stagger: 0.08 });

  const logoItems = [
    {
      type: "logo",
      src: "/images/uploads/advanage-white.png",
      width: "140",
      alt: "advanage",
      className: "logo-image",
    },
    {
      type: "logo",
      src: "/images/uploads/lanes-white.png",
      width: "100",
      alt: "lanescarproducts",
      className: "logo-image _01",
    },
    {
      type: "logo",
      src: "/images/uploads/walk-fragrances-white.png",
      width: "110",
      alt: "walkfragrances",
      className: "logo-image _01",
    },
    {
      type: "testimonial",
      quote:
        "What impressed us most was their structured thinking. Every design decision had purpose, every interaction had intention. Strat IQ Digital.",
      author: "Daniel Whitmore",
      role: "Marketing, VK Group",
      portrait: "/images/webflow/69a80ee36b73c91feefc54ed_Blurred-Futuristic-Portrait-(1).webp",
      logoSrc: "/images/uploads/perf-moto-white.png",
      logoWidth: "150",
      logoAlt: "perfmoto",
      logoClassName: "logo-image",
    },
    {
      type: "testimonial",
      quote:
        "Working with Strat IQ Digital felt like partnering with an in-house strategic team. They challenged our ideas, strengthened our positioning, and delivered a platform built to scale.",
      author: "Sofia Reinhardt",
      role: "Elevate Technologies CEO",
      portrait: "/images/webflow/69a80ee328f3e8d639efe5e3_Abstract-Red-Portrait-(2).webp",
      logoSrc: "/images/uploads/stellar-chemical-white.png",
      logoWidth: "110",
      logoAlt: "stellarchemicalcorp",
      logoClassName: "logo-image _01",
    },
    {
      type: "logo",
      src: "/images/uploads/woofleys-white.png",
      width: "130",
      alt: "woofleys",
      className: "logo-image",
    },
  ];

  const renderCard = (item, index) => {
    if (item.type === "logo") {
      return (
        <div key={index} className="logo-content marquee-item">
          <div className="logo-wrapper-card">
            <img
              src={item.src}
              loading="lazy"
              width={item.width}
              alt={item.alt}
              className={item.className}
            />
          </div>
        </div>
      );
    }

    return (
      <div key={index} className="logo-content marquee-item">
        <div className="logo-wrapper-card">
          <div className="testimonials-card hide-mobile">
            <div className="testimonials-top">
              <div className="top-text small-tessti">&quot;{item.quote}&quot;</div>
            </div>
            <div className="testimonials-bottom">
              <div className="div-block">
                <img
                  src={item.portrait}
                  loading="lazy"
                  width="40"
                  alt=""
                  className="portrait"
                />
                <div className="small-flex">
                  <div>{item.author}</div>
                  <div className="smaller-text">{item.role}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute-bottom">
            <div className="clients-small-blog">Success Stories</div>
          </div>
          <img
            src={item.logoSrc}
            loading="lazy"
            width={item.logoWidth}
            alt={item.logoAlt}
            className={item.logoClassName}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="section-content">
      <style>{`
        @keyframes infiniteScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-track {
          display: flex;
          gap: 20px;
          animation: infiniteScroll 25s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        /* Desktop: Show 3 items in screen view (accounting for 20px gap) */
        .marquee-item {
          flex: 0 0 calc((100% - 40px) / 3);
          min-width: calc((100% - 40px) / 3);
          width: calc((100% - 40px) / 3);
        }

        /* Ensure card elements stretch and scale inside larger container */
        .marquee-item .logo-wrapper-card {
          width: 100% !important;
          min-height: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Mobile: Show 2 items in screen view */
        @media (max-width: 767px) {
          .marquee-track {
            gap: 12px;
          }
          .marquee-item {
            flex: 0 0 calc((100% - 12px) / 2);
            min-width: calc((100% - 12px) / 2);
            width: calc((100% - 12px) / 2);
          }
          .marquee-item .logo-wrapper-card {
            min-height: 160px;
          }
        }
      `}</style>

      <div className="section _01">
        <div className="container" ref={containerRef}>
          <div className="title-small-main">
            <div id="w-node-_7c7bb716-c6b1-f2b2-347b-7517524f9516-86e38a65" className="flex-small-title">
              <div className="plus-icon">
                <img src="/images/webflow/69a03137ec5530c51522b5ff_plus.webp" loading="lazy" alt="" />
              </div>
              <div className="top-text">Our Partners</div>
            </div>
            <div id="w-node-eb581b58-add5-38fa-311c-162d8d71a2d9-86e38a65" className="flex-small-title"></div>
            <div id="w-node-_3aa197ab-6f65-acf0-0306-80dce9d5c69c-86e38a65">
              <img
                width="11"
                loading="lazy"
                alt=""
                src="/images/webflow/69a023ed38982c825d59ca03_arrows-2.webp"
                className="arrow-gray hide-mobile"
              />
            </div>
          </div>
          <div className="divider-m"></div>

          {/* Marquee Wrapper */}
          <div
            style={{
              overflow: "hidden",
              width: "100%",
              position: "relative",
              maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
            }}
          >
            <div className="marquee-track">
              {logoItems.map((item, i) => renderCard(item, `orig-${i}`))}
              {logoItems.map((item, i) => renderCard(item, `dup-${i}`))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}