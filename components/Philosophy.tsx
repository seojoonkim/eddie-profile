"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Philosophy() {
  const t = useTranslations("philosophy");

  return (
    <section id="philosophy" className="philosophy">
      <div className="philosophy-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-label">{t("sectionTitle")}</p>
          <h2 className="philosophy-quote">{t("quote")}</h2>
          <p className="philosophy-desc">{t("description")}</p>
        </motion.div>
      </div>

      <style jsx>{`
        .philosophy {
          padding: 80px 24px;
          background: var(--bg);
          border-top: 1px solid var(--border);
        }
        .philosophy-inner { max-width: 640px; margin: 0 auto; }
        .section-label {
          font-size: 11px; font-weight: 600; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--accent); margin-bottom: 16px;
        }
        .philosophy-quote {
          font-size: clamp(18px, 3vw, 24px); font-weight: 600;
          color: var(--text-primary); line-height: 1.6;
          margin-bottom: 20px;
        }
        .philosophy-desc {
          font-size: 15px; color: var(--text-secondary); line-height: 1.8;
        }
        @media (max-width: 767px) {
          .philosophy { padding: 56px 20px; }
        }
      `}</style>
    </section>
  );
}
