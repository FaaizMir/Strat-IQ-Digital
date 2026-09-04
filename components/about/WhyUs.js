"use client";

import { useRef } from "react";
import Link from "next/link";
import useFadeUpReveal from "../home/useFadeUpReveal";
import SectionEyebrow from "./SectionEyebrow";

export default function WhyUs() {
  const containerRef = useRef(null);
  useFadeUpReveal(containerRef, ".reveal-fade", { y: 30, stagger: 0.1 });

  return (
    <div className="section-content">
      <div className="section _01">
        <div className="container" ref={containerRef}>
          <SectionEyebrow label="Why Us" edition="Edition 03" />
          <div className="divider-m"></div>
          <div className="grid-request">
            <div className="max-left reveal-fade">
              <h2 className="h2">Don&apos;t just outspend. Outsmart</h2>
              <div className="divider-s"></div>
              <p className="card-max">
                Performance isn&apos;t about spending more; it&apos;s about thinking better. We apply a high-tier
                analytical lens to every pixel and every penny.
              </p>
              <div className="divider-s"></div>
              <Link href="/service" className="button-arrow w-inline-block">
                <img
                  width="9"
                  loading="lazy"
                  alt=""
                  src="/images/webflow/699f89c49271389efbdafdbc_arrows.png"
                  className="arrow-gray"
                />
                <div className="button-title-flex">
                  <div className="button-small-name">View Pricing</div>
                  <div className="button-small-name">View Pricing</div>
                </div>
              </Link>
            </div>

            <div className="card-wrapper">
              <div className="card-design reveal-fade">
                <div className="card-content">
                  <div>
                    <div className="card-title">Beyond the Click</div>
                    <p>
                      Anyone can buy a click. We engineer the post-click experience where the actual profit is made.
                      That&apos;s the real market secret.
                    </p>
                  </div>
                  <div className="smaller-text">
                    Explore our{" "}
                    <Link href="/service/conversion-optimization-services">conversion optimization services</Link>
                  </div>
                </div>
              </div>

              <div className="card-design _02 reveal-fade">
                <div className="card-content">
                  <div>
                    <div className="card-title">High-Intent Logic</div>
                    <p>
                      We don&apos;t chase &quot;eyeballs.&quot; We chase intent. Our systems filter out the noise to
                      find the customers who are ready to buy.
                    </p>
                  </div>
                  <div className="smaller-text">
                    Explore <Link href="/service/google-ads-management-services">Google Ads</Link> ·{" "}
                    <Link href="/service/amazon-ppc-management-services">Amazon PPC</Link>
                  </div>
                </div>
              </div>

              <div className="card-design _03 reveal-fade">
                <div className="card-content">
                  <div>
                    <div className="card-title">Radical Objectivity</div>
                    <p>
                      We aren&apos;t married to a single platform. If the data says &quot;pivot,&quot; we pivot. Our
                      only loyalty is to your bottom line.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-design _04 reveal-fade">
                <div className="card-content">
                  <div>
                    <div className="card-title">Frictionless Scaling</div>
                    <p>
                      Growth shouldn&apos;t break your business. We build the digital infrastructure that lets you
                      scale without the traditional growing pains or tech debt.
                    </p>
                  </div>
                  <div className="smaller-text">
                    Explore our <Link href="/service/system-integration-services">system integration services</Link>
                  </div>
                </div>
              </div>

              <div className="card-design _05 reveal-fade">
                <div className="card-content">
                  <div>
                    <div className="card-title">The Future-Proof Filter</div>
                    <p>
                      The market changes weekly. We build strategies that are flexible enough to evolve but rigid
                      enough to deliver consistent ROI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
