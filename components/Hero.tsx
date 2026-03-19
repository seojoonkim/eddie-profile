"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "flex-end", padding: "0 40px 120px" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ maxWidth: "1200px", width: "100%" }}
      >
        <p style={{ fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 400, color: "#0A0A0A", marginBottom: "12px" }}>
          {t("greeting")}
        </p>

        <h1 style={{ fontSize: "clamp(48px, 9vw, 96px)", fontWeight: 700, color: "#0A0A0A", lineHeight: 0.95, letterSpacing: "-0.04em", marginBottom: "8px" }}>
          {t("name")}
        </h1>

        <p style={{ fontSize: "18px", color: "#666", marginBottom: "48px", fontWeight: 300 }}>
          {t("nameEn")}
        </p>

        <h2 style={{ fontSize: "clamp(16px, 2vw, 20px)", fontWeight: 400, color: "#0A0A0A", lineHeight: 1.6, maxWidth: "500px", letterSpacing: "-0.01em", marginBottom: "12px" }}>
          {t("tagline")}
        </h2>

        <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.7, maxWidth: "440px", marginBottom: "40px" }}>
          {t("sub")}
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "40px", height: "1px", background: "#E0E0E0" }} />
          <a href="#about" style={{ fontSize: "13px", color: "#B8860B", textDecoration: "none", fontWeight: 500, transition: "opacity 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
            {t("cta")}
          </a>
        </div>
      </motion.div>

      <style jsx>{`
        @media (max-width: 767px) {
          section { padding: 0 28px 80px !important; min-height: auto !important; padding-top: 140px !important; }
        }
      `}</style>
    </section>
  );
}
