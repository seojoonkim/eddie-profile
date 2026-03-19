"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Philosophy() {
  const t = useTranslations("philosophy");

  return (
    <section className="philosophy-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="philosophy-inner"
      >
        <p className="section-label">{t("sectionTitle")}</p>
        <h2 className="philosophy-quote">{t("quote")}</h2>
        <p className="philosophy-desc">{t("description")}</p>
      </motion.div>

      <style jsx>{`
        .philosophy-section {
          padding: 120px 40px;
        }
        .philosophy-inner {
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
        }
        .section-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 24px;
        }
        .philosophy-quote {
          font-size: clamp(20px, 2.5vw, 28px);
          font-weight: 400;
          color: var(--text);
          line-height: 1.6;
          letter-spacing: -0.01em;
          margin-bottom: 24px;
        }
        .philosophy-desc {
          font-size: 15px;
          color: var(--text-muted);
          line-height: 1.8;
        }
        @media (max-width: 767px) {
          .philosophy-section { padding: 64px 20px; }
        }
      `}</style>
    </section>
  );
}
