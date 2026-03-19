"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section
      id="contact"
      style={{
        padding: "120px 24px",
        backgroundColor: "var(--bg)",
      }}
    >
      <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
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
              fontSize: "clamp(28px, 5vw, 40px)",
              fontWeight: 700,
              color: "var(--text-primary)",
              lineHeight: 1.3,
              marginBottom: "24px",
            }}
          >
            {t("headline")}
          </h2>

          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "17px",
              lineHeight: 1.8,
              marginBottom: "40px",
            }}
          >
            {t("description")}
          </p>

          <a
            href="https://kr.linkedin.com/in/seungryongchang"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            {t("linkedin")}
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        .cta-button {
          display: inline-block;
          padding: 16px 40px;
          background: var(--accent);
          color: #fff;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }
        @media (max-width: 767px) {
          section {
            padding: 80px 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
