"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const ChainIcons = [
  <svg key="source" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/><path d="M8 11h6"/><path d="M11 8v6"/>
  </svg>,
  <svg key="dist" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="6" width="20" height="12" rx="2"/><path d="M12 12l5-3"/><path d="M12 12l5 3"/><path d="M12 12l-5 3"/><path d="M12 12l-5-3"/>
  </svg>,
  <svg key="view" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/>
  </svg>,
];

export default function Vision() {
  const t = useTranslations("vision");
  const chain = t.raw("chain") as Array<{ title: string; desc: string }>;

  return (
    <section id="vision" className="vision">
      <div className="vision-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
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
            <div key={i} className="vision-step">
              <div className="vision-step-icon">{ChainIcons[i]}</div>
              <div>
                <h3 className="vision-step-title">{step.title}</h3>
                <p className="vision-step-desc">{step.desc}</p>
              </div>
              {i < chain.length - 1 && (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="vision-arrow">
                  <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .vision {
          padding: 80px 24px;
          background: var(--bg);
          border-top: 1px solid var(--border);
        }
        .vision-inner { max-width: 640px; margin: 0 auto; }
        .section-label {
          font-size: 11px; font-weight: 600; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--accent); margin-bottom: 16px;
        }
        .vision-quote {
          font-size: clamp(20px, 3vw, 26px); font-weight: 700;
          color: var(--text-primary); line-height: 1.5;
          letter-spacing: -0.02em; margin-bottom: 10px;
        }
        .vision-sub {
          font-size: 15px; color: var(--text-secondary); margin-bottom: 40px;
        }
        .vision-chain {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .vision-step {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          background: var(--surface);
          border-radius: 10px;
          position: relative;
        }
        .vision-step-icon {
          width: 36px; height: 36px; min-width: 36px;
          border-radius: 8px;
          background: var(--bg);
          display: flex; align-items: center; justify-content: center;
          color: var(--accent);
        }
        .vision-step-title {
          font-size: 15px; font-weight: 600; color: var(--text-primary); margin-bottom: 2px;
        }
        .vision-step-desc {
          font-size: 13px; color: var(--text-secondary); line-height: 1.5;
        }
        .vision-arrow {
          color: var(--text-secondary);
          margin-left: auto;
          opacity: 0.4;
        }
        @media (max-width: 767px) {
          .vision { padding: 56px 20px; }
          .vision-arrow { display: none; }
        }
      `}</style>
    </section>
  );
}
