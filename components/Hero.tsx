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
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ maxWidth: "1200px", width: "100%" }}
      >
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            fontSize: "clamp(18px, 2.5vw, 24px)",
            fontWeight: 400,
            color: "var(--text-muted)",
            marginBottom: "16px",
          }}
        >
          {t("greeting")}
        </motion.p>

        {/* Name — oversized */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          style={{
            fontSize: "clamp(48px, 9vw, 96px)",
            fontWeight: 700,
            color: "var(--text)",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            marginBottom: "8px",
          }}
        >
          {t("name")}
        </motion.h1>

        {/* English name */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{
            fontSize: "18px",
            color: "var(--text-muted)",
            marginBottom: "48px",
            fontWeight: 300,
          }}
        >
          {t("nameEn")}
        </motion.p>

        {/* Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            fontWeight: 400,
            color: "var(--text)",
            lineHeight: 1.6,
            maxWidth: "500px",
            letterSpacing: "-0.01em",
            marginBottom: "12px",
          }}
        >
          {t("tagline")}
        </motion.h2>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          style={{
            fontSize: "15px",
            color: "var(--text-muted)",
            lineHeight: 1.7,
            maxWidth: "440px",
            marginBottom: "40px",
          }}
        >
          {t("sub")}
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          style={{ display: "flex", alignItems: "center", gap: "12px" }}
        >
          <div style={{ width: "40px", height: "1px", background: "var(--border)" }} />
          <a
            href="#about"
            style={{
              fontSize: "13px",
              color: "var(--text-muted)",
              textDecoration: "none",
              fontWeight: 400,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            {t("cta")} →
          </a>
        </motion.div>
      </motion.div>

      <style jsx>{`
        @media (max-width: 767px) {
          section {
            padding: 0 20px 80px !important;
            min-height: auto !important;
            padding-top: 140px !important;
          }
        }
      `}</style>
    </section>
  );
}
