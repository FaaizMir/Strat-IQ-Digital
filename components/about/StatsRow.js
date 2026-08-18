"use client";

import { useRef } from "react";
import useFadeUpReveal from "../home/useFadeUpReveal";

const STATS = [
  {
    number: "10",
    prefix: "$",
    suffix: "M+",
    label: "Revenue Generated",
  },
  {
    number: "200",
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    number: "15",
    suffix: "years",
    label: "Collective team experience",
  },
  {
    number: "17",
    suffix: "K+",
    label: "Leads Captured",
  },
];

export default function StatsRow() {
  const containerRef = useRef(null);

  useFadeUpReveal(containerRef, ".reveal-fade", {
    y: 20,
    stagger: 0.08,
  });

  return (
    <section
      style={{
        background: "#050505",
        padding: "70px 0",
        width: "100%",
      }}
    >
      <div
        ref={containerRef}
        style={{
          maxWidth: "1500px",
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "40px",
          }}
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="reveal-fade"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* Number */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  color: "#fff",
                  fontSize: "105px",
                  fontWeight: 500,
                  lineHeight: 0.9,
                  letterSpacing: "-5px",
                  whiteSpace: "nowrap",
                }}
              >
                {stat.prefix && (
                  <span
                    style={{
                      fontSize: "55px",
                      color: "#555",
                      marginRight: "5px",
                      lineHeight: "1",
                      letterSpacing: "0",
                    }}
                  >
                    {stat.prefix}
                  </span>
                )}

                <span>
                  {stat.number}
                </span>

                {stat.suffix && (
                  <span
                    style={{
                      fontSize: stat.suffix === "years" ? "55px" : "55px",
                      color: "#777",
                      marginLeft: "5px",
                      lineHeight: "0.85",
                      letterSpacing: "-2px",
                    }}
                  >
                    {stat.suffix}
                  </span>
                )}
              </div>

              {/* Label */}
              <div
                style={{
                  marginTop: "20px",
                  fontSize: "18px",
                  fontWeight: 500,
                  color: "#a0a0a0",
                  lineHeight: "1.3",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Responsive Styling */}
      <style jsx>{`
        @media (max-width: 1100px) {
          div {
            box-sizing: border-box;
          }
        }

        @media (max-width: 900px) {
          section > div > div {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 550px) {
          section > div > div {
            grid-template-columns: 1fr !important;
          }

          section {
            padding: 40px 0 !important;
          }

          section > div {
            padding: 0 20px !important;
          }
        }
      `}</style>
    </section>
  );
}