"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function About() {
  const t = useTranslations("about");
  const tags: string[] = t.raw("tags");

  return (
    <section id="about" className="about">
      <div className="about-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-label">{t("sectionTitle")}</p>
          <h2 className="about-head">{t("oneLiner")}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <p className="about-p1">{t("p1")}</p>
          <p className="about-p2">{t("p2")}</p>
          <p className="about-quote">{t("p3")}</p>
          <div className="about-tags">
            {tags.map((tag: string) => (
              <span key={tag} className="about-tag">#{tag}</span>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .about {
          padding: 80px 24px;
          background: var(--bg);
          border-top: 1px solid var(--border);
        }
        .about-inner {
          max-width: 640px;
          margin: 0 auto;
        }
        .section-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 16px;
        }
        .about-head {
          font-size: clamp(22px, 3.5vw, 28px);
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.4;
          letter-spacing: -0.02em;
          margin-bottom: 28px;
        }
        .about-p1 {
          font-size: 16px;
          color: var(--text-primary);
          line-height: 1.8;
          margin-bottom: 16px;
        }
        .about-p2 {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 16px;
        }
        .about-quote {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.8;
          font-style: italic;
          padding-left: 16px;
          border-left: 2px solid var(--accent);
          margin-bottom: 0;
        }
        .about-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 24px;
        }
        .about-tag {
          font-size: 12px;
          font-weight: 500;
          color: var(--text-secondary);
          padding: 4px 12px;
          border-radius: 100px;
          background: var(--surface);
          border: 1px solid var(--border);
        }
        @media (max-width: 767px) {
          .about { padding: 56px 20px; }
        }
      `}</style>
    </section>
  );
}
