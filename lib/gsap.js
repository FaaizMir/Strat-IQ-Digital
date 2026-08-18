"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { CustomEase } from "gsap/CustomEase";

let registered = false;

export function useGsapPlugins() {
  if (!registered && typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);
    CustomEase.create("iq-ease", "0.65, 0.05, 0.1, 1");
    registered = true;
  }
  return gsap;
}

export { gsap, ScrollTrigger, SplitText };
