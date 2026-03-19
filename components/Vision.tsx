"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Vision() {
  const t = useTranslations("vision");
  const chain = t.raw("chain") as Array<{ title: string; desc: string }>;

  return (
    <section id="vision" style={{ padding: "120px 40px", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Top: Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: "64px" }}
        >
          <p style={{
            fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "16px",
          }}>
            {t("sectionTitle")}
          </p>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 600,
            color: "var(--text)", lineHeight: 1.3, letterSpacing: "-0.03em",
            maxWidth: "700px",
          }}>
            &ldquo;{t("quote")}&rdquo;
          </h2>
          <p style={{
            fontSize: "16px", color: "var(--text-muted)", marginTop: "16px",
          }}>
            {t("sub")}
          </p>
        </motion.div>

        {/* Chain: horizontal layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "var(--border)",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          {chain.map((step, i) => (
            <div key={i} style={{
              padding: "32px 28px",
              background: "var(--bg)",
              position: "relative",
            }}>
              <span style={{
                fontSize: "48px", fontWeight: 200, color: "var(--border)",
                lineHeight: 1, display: "block", marginBottom: "16px",
              }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 style={{
                fontSize: "15px", fontWeight: 600, color: "var(--text)",
                marginBottom: "6px",
              }}>
                {step.title}
              </h3>
              <p style={{
                fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.6,
              }}>
                {step.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          section { padding: 80px 20px !important; }
          div[style*="grid-template-columns: repeat(3"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
