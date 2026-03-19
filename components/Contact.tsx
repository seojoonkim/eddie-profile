"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section style={{ padding: "120px 40px", borderTop: "1px solid #E8E8E8" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "80px", alignItems: "start" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#D4A017" }}>
            {t("sectionTitle")}
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: "#111", lineHeight: 1.4, letterSpacing: "-0.02em", marginBottom: "14px" }}>
            {t("headline")}
          </h2>
          <p style={{ fontSize: "14px", color: "#888", lineHeight: 1.8, marginBottom: "28px" }}>{t("description")}</p>
          <a href="https://kr.linkedin.com/in/seungryongchang" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "14px 32px", borderRadius: "8px", fontSize: "15px", fontWeight: 500, background: "#D4A017", color: "#FFFFFF", textDecoration: "none", transition: "opacity 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            {t("linkedin")}
          </a>
        </motion.div>
      </div>
      <style jsx>{`
        @media (max-width: 767px) {
          section { padding: 64px 20px !important; }
          div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
      `}</style>
    </section>
  );
}
