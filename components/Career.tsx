"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState } from "react";

/* ── SVG Icons ── */
const CareerIcons = [
  // Scale / Law
  <svg key="law" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v18M3 7l9-4 9 4M3 7l3 9h6M21 7l-3 9h-6M9 16h6"/>
  </svg>,
  // Chart / Investment
  <svg key="chart" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18"/>
    <path d="M7 16l4-8 4 4 5-9"/>
  </svg>,
  // Rocket / Startup
  <svg key="rocket" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/>
    <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>,
  // Play / Content
  <svg key="play" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none"/>
  </svg>,
];

export default function Career() {
  const t = useTranslations("career");
  const items = t.raw("items") as Array<{
    period: string;
    role: string;
    org: string;
    copy: string;
    detail: string;
  }>;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section
      id="career"
      style={{
        padding: "100px 24px",
        backgroundColor: "var(--bg)",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <p className="text-section-label" style={{ color: "var(--accent)", marginBottom: "12px" }}>
            {t("sectionTitle")}
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            className="timeline-line"
            style={{
              position: "absolute",
              left: "23px",
              top: 0,
              bottom: 0,
            }}
          />

          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              style={{
                position: "relative",
                paddingLeft: "60px",
                paddingBottom: i < items.length - 1 ? "40px" : 0,
              }}
            >
              {/* Dot */}
              <div
                className={
                  i === items.length - 1
                    ? "timeline-dot timeline-dot-active"
                    : "timeline-dot"
                }
                style={{
                  position: "absolute",
                  left: "18px",
                  top: "4px",
                }}
              />

              {/* Content */}
              <div
                className="card"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setExpandedIndex(expandedIndex === i ? null : i)
                }
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <span style={{ color: "var(--accent)", display: "flex" }}>
                    {CareerIcons[i]}
                  </span>
                  <span className="text-caption" style={{ color: "var(--accent)", fontWeight: 600 }}>
                    {item.period}
                  </span>
                </div>

                <h3
                  style={{
                    color: "var(--text-primary)",
                    fontSize: "18px",
                    fontWeight: 600,
                    marginBottom: "6px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.role}
                  {item.org && (
                    <span style={{ color: "var(--text-secondary)", fontWeight: 400, marginLeft: "6px" }}>
                      · {item.org}
                    </span>
                  )}
                </h3>

                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "15px",
                    lineHeight: 1.6,
                    marginTop: "6px",
                  }}
                >
                  {item.copy}
                </p>

                <motion.div
                  initial={false}
                  animate={{
                    height: expandedIndex === i ? "auto" : 0,
                    opacity: expandedIndex === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "14px",
                      lineHeight: 1.7,
                      marginTop: "14px",
                      paddingTop: "14px",
                      borderTop: "1px solid var(--border)",
                    }}
                  >
                    {item.detail}
                  </p>
                </motion.div>

                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  style={{
                    marginTop: "10px",
                    color: "var(--accent)",
                    transform: expandedIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          section {
            padding: 64px 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
