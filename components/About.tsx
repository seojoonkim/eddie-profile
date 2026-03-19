"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function About() {
  const t = useTranslations("about");

  const tags: string[] = t.raw("tags");

  return (
    <section
      id="about"
      style={{
        padding: "120px 24px",
        backgroundColor: "var(--bg)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
            className="gradient-text"
            style={{
              fontSize: "clamp(28px, 5vw, 40px)",
              fontWeight: 700,
              marginBottom: "48px",
              lineHeight: 1.3,
            }}
          >
            {t("oneLiner")}
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
            alignItems: "start",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <p
                style={{
                  color: "var(--text-primary)",
                  fontSize: "18px",
                  lineHeight: 1.8,
                }}
              >
                {t("p1")}
              </p>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "17px",
                  lineHeight: 1.8,
                }}
              >
                {t("p2")}
              </p>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "17px",
                  lineHeight: 1.8,
                  fontStyle: "italic",
                }}
              >
                {t("p3")}
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                marginTop: "36px",
              }}
            >
              {tags.map((tag: string) => (
                <span key={tag} className="tag">
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
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
