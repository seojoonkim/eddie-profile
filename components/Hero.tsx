"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Hero() {
  const t = useTranslations("hero");

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 24px",
        position: "relative",
        backgroundColor: "var(--bg)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ maxWidth: "700px" }}
      >
        {/* Title */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-caption"
          style={{
            color: "var(--accent)",
            marginBottom: "20px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          {t("title")}
        </motion.p>

        {/* Name */}
        <h1
          className="text-hero-name-mobile"
          style={{
            color: "var(--text-primary)",
            marginBottom: "6px",
          }}
        >
          <span className="hidden-desktop">{t("name")}</span>
          <span className="hidden-mobile text-hero-name">{t("name")}</span>
        </h1>

        {/* English name */}
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "18px",
            fontWeight: 400,
            marginBottom: "40px",
          }}
        >
          {t("nameEn")}
        </p>

        {/* Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          style={{
            color: "var(--text-primary)",
            fontSize: "clamp(18px, 3vw, 24px)",
            fontWeight: 600,
            marginBottom: "16px",
            letterSpacing: "-0.02em",
            lineHeight: 1.5,
          }}
        >
          {t("tagline")}
        </motion.h2>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          style={{
            color: "var(--text-secondary)",
            fontSize: "15px",
            lineHeight: "1.8",
            marginBottom: "48px",
            maxWidth: "480px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {t("sub")}
        </motion.p>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          onClick={scrollToAbout}
          className="btn-primary"
        >
          {t("cta")}
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M7 3v8m0 0l3-3m-3 3L4 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="scroll-hint"
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          style={{ color: "var(--text-secondary)", opacity: 0.5 }}
        >
          <path
            d="M10 4v12m0 0l-4-4m4 4l4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      <style jsx>{`
        .hidden-mobile { display: none; }
        .hidden-desktop { display: inline; }
        @media (min-width: 768px) {
          .hidden-mobile { display: inline; }
          .hidden-desktop { display: none; }
        }
      `}</style>
    </section>
  );
}
