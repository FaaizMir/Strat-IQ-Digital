import Link from "next/link";
import Image from "next/image";
import { mainNavLinks } from "@/data/services";

const footerLinks = [
  { href: "/service", label: "Services" },
  ...mainNavLinks,
];

export default function Footer() {
  return (
    <section className="section for-services for-ftr">
      <div className="gray-big-div">
        <div className="container">
          <div>
            <div className="title-small-main">
              <div className="flex-small-title">
                <div className="plus-icon">
                  <Image src="/images/webflow/69a03137ec5530c51522b5ff_plus.webp" loading="lazy" alt="" width={14} height={14} />
                </div>
                <div className="top-text">See you at the top of the market</div>
              </div>
              <div>
                <Image
                  width={11}
                  height={11}
                  loading="lazy"
                  alt=""
                  src="/images/webflow/69a023ed38982c825d59ca03_arrows-2.webp"
                  className="arrow-gray hide-mobile"
                />
              </div>
              <div className="flex-small-title">
                <div className="top-text gray">Edition 10</div>
              </div>
            </div>
            <div className="margin-30">
              <div className="grid-title make-4">
                <h2 className="h4 full-section"> Let &apos;s Talk</h2>
                <div className="div-block-2">
                  <Link href="/contact" className="contact-team w-inline-block">
                    <div className="team-photo">
                      <Image
                        loading="lazy"
                        src="/images/webflow/69a80e66c49a31679ae575fe_Dramatic-Blue-Portrait.webp"
                        alt=""
                        width={80}
                        height={80}
                        className="img-team"
                      />
                    </div>
                    <div className="founder-flex">
                      <div className="founder-overflow">
                        <div className="smaller-text _01">Contact us</div>
                      </div>
                      <div className="small-flex">
                        <div>Nouman Rao</div>
                        <div className="smaller-text">Strat IQ Digital CEO</div>
                      </div>
                    </div>
                    <div className="arrow-wrapper">
                      <div className="arrow-mask">
                        <Image loading="lazy" src="/images/webflow/69a02bfcdcbd8c7fbcee47de_arrows-3.webp" alt="" width={16} height={16} className="arrow-black" />
                        <Image loading="lazy" src="/images/webflow/69a02bfcdcbd8c7fbcee47de_arrows-3.webp" alt="" width={16} height={16} className="arrow-black" />
                      </div>
                    </div>
                    <div className="slot-wrapper">
                      <div className="slot-line"><div className="slot-live-overlay"></div></div>
                      <div className="slot-line"><div className="slot-live-overlay"></div></div>
                      <div className="slot-line"><div className="slot-live-overlay"></div></div>
                      <div className="slot-line"></div>
                      <div className="slot-line"></div>
                    </div>
                    <div className="blur-div"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divider-m"></div>
      <div className="grid-plus">
        {[0, 1, 2, 3].map((i) => (
          <div key={i}>
            <div className="plus-icon">
              <Image src="/images/webflow/69a03137ec5530c51522b5ff_plus.webp" loading="lazy" alt="" width={14} height={14} />
            </div>
          </div>
        ))}
      </div>
      <div className="divider-m"></div>

      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="max-left">
              <Link href="/" className="logo-first w-inline-block">
                <p className="top-text logo">Strat IQ Digital</p>
              </Link>
              <h2 className="h2 for-h2 third add-top">
                Strat IQ Digital — Performance marketing for brands built to grow.
              </h2>
              <div className="divider-xxl"></div>
              <div className="small-vt-flex">
                <a href="mailto:info@stratiqdigital.com" className="button-arrow w-inline-block">
                  <Image width={9} height={9} loading="lazy" alt="" src="/images/webflow/699f89c49271389efbdafdbc_arrows.png" className="arrow-gray" />
                  <div className="button-title-flex">
                    <div className="button-small-name">info@stratiqdigital.com</div>
                  </div>
                </a>
                <div className="bottom-grid">
                  <a href="tel:+12897487424" className="button-arrow w-inline-block">
                    <Image width={9} height={9} loading="lazy" alt="" src="/images/webflow/699f89c49271389efbdafdbc_arrows.png" className="arrow-gray" />
                    <div className="button-title-flex">
                      <div className="button-small-name">+1 (289) 748 7424</div>
                    </div>
                  </a>
                  <div className="copywrith-dark">
                    <div>  2026 Strat IQ Digital</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-right">
            {footerLinks.map((link, i) => (
              <Link key={link.href} href={link.href} className="button-big-menu w-inline-block">
                <div className="button-big-flex">
                  <Image width={18} height={18} loading="lazy" alt="" src="/images/webflow/699f89c49271389efbdafdbc_arrows.png" className="button-big-arrow" />
                  <div className="big-text-btn">{link.label}</div>
                  <div className="number-small-btn">
                    <div className="number-small-big-menu">{String(i + 1).padStart(2, "0")}</div>
                  </div>
                </div>
                <div className="button-big-line">
                  <div className="button-big-line-overlay"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
