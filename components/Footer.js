"use client";

import Link from "next/link";
import Image from "next/image";
import { mainNavLinks } from "@/data/services";

const footerLinks = [
  { href: "/service", label: "Services" },
  ...mainNavLinks,
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#0a0a0a", color: "#ffffff", paddingTop: "64px", paddingBottom: "48px", fontFamily: "sans-serif", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
      {/* Top CTA & Newsletter Section */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px", paddingBottom: "80px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ maxWidth: "576px" }}>
          {/* Eyebrow Label */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <span style={{ fontSize: "12px", letterSpacing: "2px", color: "#a1a1aa", fontFamily: "monospace", textTransform: "uppercase" }}>
              // GET STARTED
            </span>
          </div>

          {/* Main Headline */}
          <h2 style={{ fontSize: "36px", fontWeight: "500", letterSpacing: "-0.5px", marginBottom: "12px", color: "#ffffff", marginTop: 0 }}>
            See you at the top of the market
          </h2>

          {/* Subtitle */}
          <p style={{ color: "#a1a1aa", fontSize: "15px", marginBottom: "32px", lineHeight: "1.6" }}>
            Strat IQ Digital — Performance marketing for brands built to grow.
          </p>

          {/* Email Subscription Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ display: "flex", gap: "8px", backgroundColor: "rgba(24, 24, 27, 0.8)", padding: "6px", borderRadius: "8px", border: "1px solid #27272a", maxWidth: "448px" }}
          >
            <input
              type="email"
              placeholder="info@stratiqdigital.com"
              required
              style={{ backgroundColor: "transparent", border: "none", padding: "10px 16px", fontSize: "14px", color: "#ffffff", outline: "none", flexGrow: 1 }}
            />
            <button
              type="submit"
              style={{ backgroundColor: "#e4e4e7", color: "#000000", border: "none", fontSize: "14px", fontWeight: "500", padding: "10px 20px", borderRadius: "6px", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", whitespace: "nowrap" }}
            >
              <span>Subscribe</span>
              <span style={{ fontSize: "12px" }}>→</span>
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer Navigation Grid */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px", paddingTop: "64px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "40px" }}>

          {/* Column 1: Brand & Founder Card / Contact */}
          <div style={{ display: "flex", flexDirection: "column", justifyBetween: "space-between", gap: "24px" }}>
            <div>
              <Link href="/" style={{ textDecoration: "none", color: "inherit", display: "inline-block", marginBottom: "16px" }}>
                <span style={{ fontSize: "20px", fontWeight: "700", letterSpacing: "-0.5px" }}>
                  Strat IQ Digital
                </span>
              </Link>

              {/* Founder / Contact Card */}
              {/* <Link href="/contact" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "8px 12px", borderRadius: "8px", backgroundColor: "rgba(24, 24, 27, 0.5)", border: "1px solid #27272a", textDecoration: "none", color: "inherit" }}>
                <Image
                  loading="lazy"
                  src="/images/webflow/Gemini_Generated_Image_a56hp0a56hp0a56h.jpg"
                  alt="Nouman Rao"
                  width={40}
                  height={40}
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                />
                <div style={{ fontSize: "12px" }}>
                  <div style={{ color: "#ffffff", fontWeight: "500" }}>Nouman Rao</div>
                  <div style={{ color: "#a1a1aa" }}>Strat IQ Digital CEO</div>
                </div>
              </Link> */}
            </div>

            {/* Direct Contact Info & Copyright */}
            <div style={{ fontSize: "14px", color: "#a1a1aa", display: "flex", flexDirection: "column", gap: "8px" }}>
              <p style={{ margin: 0 }}>
                <a href="mailto:info@stratiqdigital.com" style={{ color: "inherit", textDecoration: "none" }}>
                  info@stratiqdigital.com
                </a>
              </p>
              <p style={{ margin: 0 }}>
                <a href="tel:+12897487424" style={{ color: "inherit", textDecoration: "none" }}>
                  +1 (289) 748 7424
                </a>
              </p>
              <p style={{ fontSize: "12px", color: "#71717a", margin: 0, paddingTop: "8px" }}>
                © {currentYear} Strat IQ Digital.
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 style={{ fontSize: "12px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "2px", color: "#a1a1aa", marginBottom: "24px", marginTop: 0 }}>
              QUICK LINKS
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {footerLinks.map((link, i) => (
                <li key={`${link.href}-${i}`}>
                  <Link
                    href={link.href}
                    style={{ color: "#a1a1aa", textDecoration: "none", fontSize: "14px" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company Navigation */}
          <div>
            <h3 style={{ fontSize: "12px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "2px", color: "#a1a1aa", marginBottom: "24px", marginTop: 0 }}>
              COMPANY
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              <li>
                <Link href="/about" style={{ color: "#a1a1aa", textDecoration: "none", fontSize: "14px" }}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" style={{ color: "#a1a1aa", textDecoration: "none", fontSize: "14px" }}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/contact" style={{ color: "#a1a1aa", textDecoration: "none", fontSize: "14px" }}>
                  Book A Call
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Policies & Plus Icons */}
          <div>
            <h3 style={{ fontSize: "12px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "2px", color: "#a1a1aa", marginBottom: "24px", marginTop: 0 }}>
              POLICIES
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
              <li>
                <Link href="/terms" style={{ color: "#a1a1aa", textDecoration: "none", fontSize: "14px" }}>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" style={{ color: "#a1a1aa", textDecoration: "none", fontSize: "14px" }}>
                  Privacy Policy
                </Link>
              </li>
            </ul>

            {/* Plus Icon Accents */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  style={{ width: "32px", height: "32px", borderRadius: "4px", border: "1px solid #27272a", backgroundColor: "rgba(24, 24, 27, 0.5)", display: "flex", alignItems: "center", justifyCenter: "center" }}
                >
                  <Image
                    src="/images/webflow/69a03137ec5530c51522b5ff_plus.webp"
                    loading="lazy"
                    alt="plus"
                    width={10}
                    height={10}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
// import Link from "next/link";
// import Image from "next/image";
// import { mainNavLinks } from "@/data/services";

// const footerLinks = [
//   { href: "/service", label: "Services" },
//   ...mainNavLinks,
// ];

// export default function Footer() {
//   return (
//     <section className="section for-services for-ftr">
//       <div className="gray-big-div">
//         <div className="container">
//           <div>
//             <div className="title-small-main">
//               <div className="flex-small-title">
//                 <div className="plus-icon">
//                   <Image src="/images/webflow/69a03137ec5530c51522b5ff_plus.webp" loading="lazy" alt="" width={14} height={14} />
//                 </div>
//                 <div className="top-text">See you at the top of the market</div>
//               </div>
//               <div>
//                 <Image
//                   width={11}
//                   height={11}
//                   loading="lazy"
//                   alt=""
//                   src="/images/webflow/69a023ed38982c825d59ca03_arrows-2.webp"
//                   className="arrow-gray hide-mobile"
//                 />
//               </div>
//               <div className="flex-small-title">
//                 <div className="top-text gray">Edition 10</div>
//               </div>
//             </div>
//             <div className="margin-30">
//               <div className="grid-title make-4">
//                 <h2 className="h4 full-section"> Let &apos;s Talk</h2>
//                 <div className="div-block-2">
//                   <Link href="/contact" className="contact-team w-inline-block">
//                     <div className="team-photo">
//                       <Image
//                         loading="lazy"
//                         src="/images/webflow/Gemini_Generated_Image_a56hp0a56hp0a56h.jpg"
//                         alt=""
//                         width={80}
//                         height={80}
//                         className="img-team"
//                       />
//                     </div>
//                     <div className="founder-flex">
//                       <div className="founder-overflow">
//                         <div className="smaller-text _01">Contact us</div>
//                       </div>
//                       <div className="small-flex">
//                         <div>Nouman Rao</div>
//                         <div className="smaller-text">Strat IQ Digital CEO</div>
//                       </div>
//                     </div>
//                     <div className="arrow-wrapper">
//                       <div className="arrow-mask">
//                         <Image loading="lazy" src="/images/webflow/69a02bfcdcbd8c7fbcee47de_arrows-3.webp" alt="" width={16} height={16} className="arrow-black" />
//                         <Image loading="lazy" src="/images/webflow/69a02bfcdcbd8c7fbcee47de_arrows-3.webp" alt="" width={16} height={16} className="arrow-black" />
//                       </div>
//                     </div>
//                     <div className="slot-wrapper">
//                       <div className="slot-line"><div className="slot-live-overlay"></div></div>
//                       <div className="slot-line"><div className="slot-live-overlay"></div></div>
//                       <div className="slot-line"><div className="slot-live-overlay"></div></div>
//                       <div className="slot-line"></div>
//                       <div className="slot-line"></div>
//                     </div>
//                     <div className="blur-div"></div>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="divider-m"></div>
//       <div className="grid-plus">
//         {[0, 1, 2, 3].map((i) => (
//           <div key={i}>
//             <div className="plus-icon">
//               <Image src="/images/webflow/69a03137ec5530c51522b5ff_plus.webp" loading="lazy" alt="" width={14} height={14} />
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="divider-m"></div>

//       <div className="container">
//         <div className="footer-grid">
//           <div>
//             <div className="max-left">
//               <Link href="/" className="logo-first w-inline-block">
//                 <p className="top-text logo">Strat IQ Digital</p>
//               </Link>
//               <h2 className="h2 for-h2 third add-top">
//                 Strat IQ Digital — Performance marketing for brands built to grow.
//               </h2>
//               <div className="divider-xxl"></div>
//               <div className="small-vt-flex">
//                 <a href="mailto:info@stratiqdigital.com" className="button-arrow w-inline-block">
//                   <Image width={9} height={9} loading="lazy" alt="" src="/images/webflow/699f89c49271389efbdafdbc_arrows.png" className="arrow-gray" />
//                   <div className="button-title-flex">
//                     <div className="button-small-name">info@stratiqdigital.com</div>
//                   </div>
//                 </a>
//                 <div className="bottom-grid">
//                   <a href="tel:+12897487424" className="button-arrow w-inline-block">
//                     <Image width={9} height={9} loading="lazy" alt="" src="/images/webflow/699f89c49271389efbdafdbc_arrows.png" className="arrow-gray" />
//                     <div className="button-title-flex">
//                       <div className="button-small-name">+1 (289) 748 7424</div>
//                     </div>
//                   </a>
//                   <div className="copywrith-dark">
//                     <div>  2026 Strat IQ Digital</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="max-w-right">
//             {footerLinks.map((link, i) => (
//               <Link key={link.href} href={link.href} className="button-big-menu w-inline-block">
//                 <div className="button-big-flex">
//                   <Image width={18} height={18} loading="lazy" alt="" src="/images/webflow/699f89c49271389efbdafdbc_arrows.png" className="button-big-arrow" />
//                   <div className="big-text-btn">{link.label}</div>
//                   <div className="number-small-btn">
//                     <div className="number-small-big-menu">{String(i + 1).padStart(2, "0")}</div>
//                   </div>
//                 </div>
//                 <div className="button-big-line">
//                   <div className="button-big-line-overlay"></div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
