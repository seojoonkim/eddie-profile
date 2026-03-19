"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function About() {
  const t = useTranslations("about");
  const tags: string[] = t.raw("tags");

  return (
    <section className="about-section">
      <div className="about-grid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-label">{t("sectionTitle")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="about-head">{t("oneLiner")}</h2>
          <div className="about-text">
            <p>{t("p1")}</p>
            <p className="about-muted">{t("p2")}</p>
            <p className="about-quote">{t("p3")}</p>
          </div>
          <div className="about-tags">
            {tags.map((tag: string) => (
              <span key={tag} className="about-tag">{tag}</span>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .about-section {
          padding: 120px 40px;
          border-top: 1px solid var(--border);
        }
        .about-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 80px;
          align-items: start;
        }
        .section-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-muted);
        }
        .about-head {
          font-size: clamp(22px, 3.5vw, 36px);
          font-weight: 600;
          color: var(--text);
          line-height: 1.4;
          letter-spacing: -0.02em;
          margin-bottom: 28px;
        }
        .about-text {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .about-text p {
          font-size: 16px;
          color: var(--text);
          line-height: 1.8;
        }
        .about-muted {
          color: var(--text-muted) !important;
        }
        .about-quote {
          color: var(--text-muted) !important;
          font-style: italic;
          padding-left: 20px;
          border-left: 2px solid var(--border);
        }
        .about-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 28px;
        }
        .about-tag {
          font-size: 12px;
          font-weight: 500;
          color: var(--text-muted);
          padding: 6px 14px;
          border-radius: 100px;
          border: 1px solid var(--border);
        }
        @media (max-width: 767px) {
          .about-section { padding: 64px 20px; }
          .about-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
      `}</style>
    </section>
  );
}
