"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function About() {
  const t = useTranslations("about");
  const tags: string[] = t.raw("tags");

  return (
    <section style={{ padding: "120px 40px", borderTop: "1px solid #E8E8E8" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "80px", alignItems: "start" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#D4A017" }}>
            {t("sectionTitle")}
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
          <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 700, color: "#111", lineHeight: 1.4, letterSpacing: "-0.03em", marginBottom: "28px" }}>
            {t("oneLiner")}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontSize: "16px", color: "#111", lineHeight: 1.8 }}>{t("p1")}</p>
            <p style={{ fontSize: "15px", color: "#888", lineHeight: 1.8 }}>{t("p2")}</p>
            <p style={{ fontSize: "15px", color: "#888", lineHeight: 1.8, fontStyle: "italic", paddingLeft: "20px", borderLeft: "2px solid #D4A017" }}>{t("p3")}</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "28px" }}>
            {tags.map((tag: string) => (
              <span key={tag} style={{ fontSize: "12px", fontWeight: 500, color: "#D4A017", padding: "6px 14px", borderRadius: "100px", border: "1px solid #D4A017", background: "rgba(212,160,23,0.06)" }}>
                {tag}
              </span>
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
