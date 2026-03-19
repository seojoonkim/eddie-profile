"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Vision() {
  const t = useTranslations("vision");
  const chain = t.raw("chain") as Array<{ title: string; desc: string }>;

  return (
    <section className="vision-section">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="vision-intro"
        >
          <p className="section-label">{t("sectionTitle")}</p>
          <h2 className="vision-quote">&ldquo;{t("quote")}&rdquo;</h2>
          <p className="vision-sub">{t("sub")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="vision-chain"
        >
          {chain.map((step, i) => (
            <div key={i} className="vision-card">
              <span className="vision-num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="vision-card-title">{step.title}</h3>
              <p className="vision-card-desc">{step.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .vision-section {
          padding: 120px 40px;
          border-top: 1px solid var(--border);
        }
        .vision-intro {
          margin-bottom: 64px;
        }
        .section-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 16px;
        }
        .vision-quote {
          font-size: clamp(24px, 3.5vw, 40px);
          font-weight: 600;
          color: var(--text);
          line-height: 1.3;
          letter-spacing: -0.03em;
          max-width: 700px;
        }
        .vision-sub {
          font-size: 15px;
          color: var(--text-muted);
          margin-top: 14px;
        }
        .vision-chain {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--border);
          border-radius: 12px;
          overflow: hidden;
        }
        .vision-card {
          padding: 28px 24px;
          background: var(--bg);
        }
        .vision-num {
          font-size: 44px;
          font-weight: 200;
          color: var(--border);
          line-height: 1;
          display: block;
          margin-bottom: 14px;
        }
        .vision-card-title {
          font-size: 14px;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 4px;
        }
        .vision-card-desc {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.6;
        }
        @media (max-width: 767px) {
          .vision-section { padding: 64px 20px; }
          .vision-intro { margin-bottom: 36px; }
          .vision-chain {
            grid-template-columns: 1fr;
            border-radius: 8px;
          }
        }
      `}</style>
    </section>
  );
}
