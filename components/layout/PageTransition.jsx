"use client";

import { useEffect, useState } from "react";
import IntroLoader from "./IntroLoader";

export default function PageTransition({ children }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if the intro loader has already been shown in this session
    const hasLoaded = sessionStorage.getItem("hasLoadedIntro");

    if (!hasLoaded) {
      setLoading(true);
    }
  }, []);

  const handleFinishLoading = () => {
    // Save to sessionStorage so it won't show again on route change or reload
    sessionStorage.setItem("hasLoadedIntro", "true");
    setLoading(false);
  };

  return (
    <>
      {loading && <IntroLoader finishLoading={handleFinishLoading} />}
      {children}
    </>
  );
}