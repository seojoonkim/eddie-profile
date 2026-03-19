"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Philosophy() {
  const t = useTranslations("philosophy");

  return (
    <section
      id="philosophy"
      style={{
        padding: "120px 24px",
        backgroundColor: "var(--bg-alt)",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
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
            }}
          >
            {t("sectionTitle")}
          </p>

          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: 700,
              color: "var(--text-primary)",
              lineHeight: 1.5,
              marginBottom: "48px",
            }}
          >
            {t("quote")}
          </h2>

          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "18px",
              lineHeight: 1.8,
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            {t("description")}
          </p>
        </motion.div>
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
