"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Philosophy() {
  const t = useTranslations("philosophy");

  return (
    <section style={{ padding: "120px 40px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "80px", alignItems: "start" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#D4A017" }}>
            {t("sectionTitle")}
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 600, color: "#111", lineHeight: 1.5, letterSpacing: "-0.02em", marginBottom: "20px" }}>
            {t("quote")}
          </h2>
          <p style={{ fontSize: "15px", color: "#888", lineHeight: 1.8, marginBottom: "48px" }}>
            {t("description")}
          </p>

          {/* Philosophical questions */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {["question1", "question2", "question3"].map((key, i) => (
              <div key={key} style={{
                padding: "20px 0",
                borderTop: "1px solid #E8E8E8",
              }}>
                <p style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#111",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                }}>
                  {t(key)}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          section { padding: 64px 28px !important; }
          div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
      `}</style>
    </section>
  );
}
