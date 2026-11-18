"use client";

import { useRef, useState, useEffect } from "react";
import useFadeUpReveal from "./useFadeUpReveal";

const metricsData = [
    { prefix: "$", target: 10, suffix: "M+", label: "Revenue Generated" },
    { prefix: "", target: 200, suffix: "+", label: "Projects Delivered" },
    { prefix: "", target: 15, suffix: "years", label: "Collective team experience" },
    { prefix: "", target: 17, suffix: "K+", label: "Leads Captured" },
];

function CounterNumber({ target, active, duration = 1800 }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!active) {
            setCount(0);
            return;
        }

        let startTime = null;
        let animationFrameId;

        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Smooth ease-out exponential curve for natural deceleration
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const current = Math.round(ease * target);

            setCount(current);

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(step);
            }
        };

        animationFrameId = requestAnimationFrame(step);

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [active, target, duration]);

    return <span className="metric-count">{count}</span>;
}

export default function MetricsCounter() {
    const metricsRef = useRef(null);
    const [metricsInView, setMetricsInView] = useState(false);

    useFadeUpReveal(metricsRef, ".stiq-metrics-row > div", {
        y: 30,
        stagger: 0.09,
    });

    useEffect(() => {
        const el = metricsRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setMetricsInView(true);
                } else {
                    // Reset so counter loops again when scrolled back into view
                    setMetricsInView(false);
                }
            },
            {
                threshold: 0.2,
            }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <style>{`
        .stiq-metrics-wrapper {
          width: 100%;
          padding-top: 10px;
          display: flex !important;
          justify-content: center !important;
        }
        .stiq-metrics-row {
          display: grid !important;
          grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
          gap: 2.5rem 1.75rem !important;
          width: 100% !important;
          max-width: 100% !important;
          align-items: start !important;
          justify-content: center !important;
          margin: 0 auto !important;
        }
        .stiq-metrics-row > div {
          min-width: 0 !important;
          max-width: 100% !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          text-align: center !important;
        }
        .stiq-metrics-row .numver-block {
          display: flex !important;
          flex-direction: row !important;
          align-items: baseline !important;
          justify-content: center !important;
          flex-wrap: nowrap !important;
          white-space: nowrap !important;
          overflow: visible !important;
          line-height: 1 !important;
          font-size: clamp(2.35rem, 4.8vw, 5.25rem) !important;
          margin: 0 auto !important;
          padding: 0 !important;
          width: 100% !important;
          text-align: center !important;
        }
        .stiq-metrics-row .metric-number {
          line-height: 1 !important;
          font-family: inherit !important;
          font-weight: 700 !important;
          display: inline-flex !important;
          align-items: baseline !important;
          vertical-align: baseline !important;
        }
        .stiq-metrics-row .metric-digits {
          color: #ffffff !important;
          font-variant-numeric: tabular-nums !important;
        }
        .stiq-metrics-row .metric-number.small-gray {
          opacity: 0.45 !important;
          font-weight: 400 !important;
          font-size: clamp(1.15rem, 2.1vw, 2.2rem) !important;
          margin-top: 0 !important;
          margin-bottom: 0 !important;
          line-height: 1 !important;
          align-self: baseline !important;
          vertical-align: baseline !important;
        }
        .stiq-metrics-row .metric-prefix {
          margin-right: 0.06em !important;
          margin-left: 0 !important;
        }
        .stiq-metrics-row .metric-suffix {
          margin-left: 0.08em !important;
          margin-right: 0 !important;
        }
        .stiq-metrics-row .metric-suffix.suffix-word {
          font-size: clamp(0.95rem, 1.7vw, 1.75rem) !important;
          margin-left: 0.22em !important;
          letter-spacing: -0.01em !important;
        }
        .stiq-metrics-row .card-text.rl-2 {
          font-size: clamp(0.92rem, 1.1vw, 1.15rem) !important;
          line-height: 1.35 !important;
          white-space: normal !important;
          word-break: normal !important;
          overflow-wrap: break-word !important;
          max-width: 100% !important;
          color: rgba(255, 255, 255, 0.72) !important;
          margin: 0 auto !important;
          padding: 0 !important;
          text-align: center !important;
        }
        .stiq-metrics-row .divider-xs {
          height: 12px !important;
          margin: 0 !important;
        }
        @media (max-width: 900px) {
          .stiq-metrics-row {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 2.25rem 1.5rem !important;
          }
          .stiq-metrics-row .numver-block {
            font-size: clamp(2.35rem, 6.5vw, 3.8rem) !important;
          }
          .stiq-metrics-row .metric-number.small-gray {
            font-size: clamp(1.15rem, 2.8vw, 1.8rem) !important;
          }
          .stiq-metrics-row .metric-suffix.suffix-word {
            font-size: clamp(0.95rem, 2.2vw, 1.45rem) !important;
          }
        }
        @media (max-width: 480px) {
          .stiq-metrics-row {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 1.75rem 0.85rem !important;
          }
          .stiq-metrics-row .numver-block {
            font-size: clamp(1.95rem, 7.8vw, 2.65rem) !important;
          }
          .stiq-metrics-row .metric-number.small-gray {
            font-size: clamp(1rem, 3.8vw, 1.35rem) !important;
          }
          .stiq-metrics-row .metric-suffix.suffix-word {
            font-size: clamp(0.85rem, 3vw, 1.05rem) !important;
          }
          .stiq-metrics-row .card-text.rl-2 {
            font-size: 0.85rem !important;
            line-height: 1.3 !important;
          }
        }
        @media (max-width: 330px) {
          .stiq-metrics-row {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>

            <div ref={metricsRef} className="stiq-metrics-wrapper">
                <div className="stiq-metrics-row">
                    {metricsData.map((m) => (
                        <div key={m.label}>
                            <div className="numver-block" aria-label={`${m.prefix}${m.target}${m.suffix}`}>
                                {m.prefix && (
                                    <span className="metric-number small-gray metric-prefix">
                                        {m.prefix}
                                    </span>
                                )}
                                <span className="metric-number metric-digits">
                                    <CounterNumber target={m.target} active={metricsInView} />
                                </span>
                                {m.suffix && (
                                    <span
                                        className={`metric-number small-gray metric-suffix${m.suffix === "years" ? " suffix-word" : ""
                                            }`}
                                    >
                                        {m.suffix}
                                    </span>
                                )}
                            </div>
                            <div className="divider-xs"></div>
                            <div className="card-text rl-2">{m.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}