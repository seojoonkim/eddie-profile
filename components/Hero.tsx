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
        background:
          "linear-gradient(180deg, var(--bg) 0%, color-mix(in srgb, var(--bg) 90%, var(--accent)) 100%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ maxWidth: "800px" }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            color: "var(--accent)",
            fontSize: "16px",
            fontWeight: 500,
            marginBottom: "16px",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          {t("title")}
        </motion.p>

        <h1 className="text-hero-name-mobile" style={{ color: "var(--text-primary)", marginBottom: "8px" }}>
          <span className="hidden-desktop">{t("name")}</span>
          <span className="hidden-mobile text-hero-name">{t("name")}</span>
        </h1>

        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "20px",
            fontWeight: 400,
            marginBottom: "32px",
          }}
        >
          {t("nameEn")}
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-subheading-mobile"
          style={{
            color: "var(--text-primary)",
            marginBottom: "20px",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <span className="hidden-desktop">{t("tagline")}</span>
          <span className="hidden-mobile text-subheading">{t("tagline")}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          style={{
            color: "var(--text-secondary)",
            fontSize: "16px",
            lineHeight: "1.7",
            marginBottom: "48px",
            maxWidth: "550px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {t("sub")}
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          onClick={scrollToAbout}
          className="btn-primary"
        >
          {t("cta")}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            style={{ marginLeft: "4px" }}
          >
            <path
              d="M8 3v10m0 0l4-4m-4 4L4 9"
              stroke="currentColor"
              strokeWidth="2"
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
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          style={{ color: "var(--text-secondary)" }}
        >
          <path
            d="M12 5v14m0 0l-6-6m6 6l6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      <style jsx>{`
        .hidden-mobile {
          display: none;
        }
        .hidden-desktop {
          display: inline;
        }
        @media (min-width: 768px) {
          .hidden-mobile {
            display: inline;
          }
          .hidden-desktop {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
