"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function About() {
  const t = useTranslations("about");

  const tags: string[] = t.raw("tags");

  return (
    <section
      id="about"
      className="about-section"
    >
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-section-label" style={{ color: "var(--accent)", marginBottom: "12px" }}>
            {t("sectionTitle")}
          </p>

          <h2 className="about-oneliner">
            {t("oneLiner")}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="about-content"
        >
          <p className="about-p1">
            {t("p1")}
          </p>
          <p className="about-p2">
            {t("p2")}
          </p>
          <p className="about-p3">
            {t("p3")}
          </p>

          <div className="about-tags">
            {tags.map((tag: string) => (
              <span key={tag} className="tag">
                #{tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .about-section {
          padding: 100px 24px;
          background-color: var(--bg);
        }
        .about-container {
          max-width: 700px;
          margin: 0 auto;
        }
        .about-oneliner {
          color: var(--text-primary);
          font-size: clamp(24px, 4vw, 32px);
          font-weight: 700;
          margin-bottom: 40px;
          line-height: 1.4;
          letter-spacing: -0.02em;
        }
        .about-p1 {
          color: var(--text-primary);
          font-size: 17px;
          line-height: 1.8;
          margin-bottom: 20px;
        }
        .about-p2 {
          color: var(--text-secondary);
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 20px;
        }
        .about-p3 {
          color: var(--text-secondary);
          font-size: 16px;
          line-height: 1.8;
          font-style: italic;
          margin-bottom: 0;
        }
        .about-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 32px;
        }
        @media (max-width: 767px) {
          .about-section {
            padding: 64px 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
