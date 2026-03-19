"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState } from "react";

const ICONS = ["⚖️", "📊", "🚀", "🎬"];

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
        padding: "120px 24px",
        backgroundColor: "var(--surface)",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p
            style={{
              color: "var(--accent)",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "16px",
              textAlign: "center",
            }}
          >
            {t("sectionTitle")}
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative", marginTop: "64px" }}>
          {/* Vertical line */}
          <div
            className="timeline-line"
            style={{
              position: "absolute",
              left: "24px",
              top: 0,
              bottom: 0,
            }}
          />

          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              style={{
                position: "relative",
                paddingLeft: "64px",
                paddingBottom: i < items.length - 1 ? "48px" : 0,
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
                  left: "17px",
                  top: "6px",
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
                    gap: "12px",
                    marginBottom: "8px",
                  }}
                >
                  <span style={{ fontSize: "24px" }}>{ICONS[i]}</span>
                  <span
                    style={{
                      color: "var(--accent)",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    {item.period}
                  </span>
                </div>

                <h3
                  style={{
                    color: "var(--text-primary)",
                    fontSize: "20px",
                    fontWeight: 600,
                    marginBottom: "4px",
                  }}
                >
                  {item.role}
                  {item.org && (
                    <span
                      style={{
                        color: "var(--text-secondary)",
                        fontWeight: 400,
                      }}
                    >
                      {" "}
                      · {item.org}
                    </span>
                  )}
                </h3>

                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "16px",
                    lineHeight: 1.6,
                    marginTop: "8px",
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
                      fontSize: "15px",
                      lineHeight: 1.7,
                      marginTop: "16px",
                      paddingTop: "16px",
                      borderTop:
                        "1px solid color-mix(in srgb, var(--text-secondary) 15%, transparent)",
                    }}
                  >
                    {item.detail}
                  </p>
                </motion.div>

                <div
                  style={{
                    marginTop: "12px",
                    color: "var(--accent)",
                    fontSize: "13px",
                    fontWeight: 500,
                  }}
                >
                  {expandedIndex === i ? "−" : "+"}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          section {
            padding: 80px 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
