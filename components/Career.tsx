"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Career() {
  const t = useTranslations("career");
  const items = t.raw("items") as Array<{
    period: string; role: string; org: string; copy: string; detail: string;
  }>;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="career" style={{ padding: "120px 40px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "80px", alignItems: "start" }}>
        {/* Left: Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p style={{
            fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "var(--text-muted)",
          }}>
            {t("sectionTitle")}
          </p>
        </motion.div>

        {/* Right: Timeline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              style={{
                padding: "28px 0",
                borderBottom: i < items.length - 1 ? "1px solid var(--border)" : "none",
                cursor: "pointer",
              }}
              onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
            >
              {/* Period + Role */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" }}>
                <h3 style={{
                  fontSize: "18px", fontWeight: 600, color: "var(--text)",
                  letterSpacing: "-0.01em",
                }}>
                  {item.role}
                  {item.org && (
                    <span style={{ fontWeight: 400, color: "var(--text-muted)", marginLeft: "8px" }}>
                      · {item.org}
                    </span>
                  )}
                </h3>
                <span style={{
                  fontSize: "13px", color: "var(--text-muted)", fontWeight: 400,
                  fontFamily: "var(--font-mono)", letterSpacing: "0.02em",
                }}>
                  {item.period}
                </span>
              </div>

              {/* Copy */}
              <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.6 }}>
                {item.copy}
              </p>

              {/* Detail (expandable) */}
              <div style={{
                maxHeight: expandedIndex === i ? "300px" : "0",
                overflow: "hidden",
                transition: "max-height 0.4s ease",
              }}>
                <p style={{
                  fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.7,
                  marginTop: "16px",
                }}>
                  {item.detail}
                </p>
              </div>

              {/* Toggle */}
              <span style={{
                fontSize: "12px", color: "var(--text-muted)",
                marginTop: "8px", display: "inline-block",
              }}>
                {expandedIndex === i ? "−" : "+"}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          section { padding: 80px 20px !important; }
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
