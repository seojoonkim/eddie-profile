"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Career() {
  const t = useTranslations("career");
  const items = t.raw("items") as Array<{
    period: string; role: string; org: string; copy: string; detail: string;
  }>;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section className="career-section">
      <div className="career-grid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-label">{t("sectionTitle")}</p>
        </motion.div>

        <div className="career-list">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="career-item"
              onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
            >
              <div className="career-header">
                <h3 className="career-role">
                  {item.role}
                  {item.org && <span className="career-org"> · {item.org}</span>}
                </h3>
                <span className="career-period">{item.period}</span>
              </div>
              <p className="career-copy">{item.copy}</p>
              <div className={`career-detail-wrap ${expandedIndex === i ? "career-detail-open" : ""}`}>
                <p className="career-detail">{item.detail}</p>
              </div>
              <span className="career-toggle">{expandedIndex === i ? "−" : "+"}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .career-section {
          padding: 120px 40px;
        }
        .career-grid {
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
        .career-list {
          display: flex;
          flex-direction: column;
        }
        .career-item {
          padding: 24px 0;
          border-bottom: 1px solid var(--border);
          cursor: pointer;
        }
        .career-item:first-child {
          padding-top: 0;
        }
        .career-item:last-child {
          border-bottom: none;
        }
        .career-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 16px;
          margin-bottom: 6px;
        }
        .career-role {
          font-size: 17px;
          font-weight: 600;
          color: var(--text);
          letter-spacing: -0.01em;
        }
        .career-org {
          font-weight: 400;
          color: var(--text-muted);
        }
        .career-period {
          font-size: 13px;
          color: var(--text-muted);
          font-family: var(--font-mono);
          white-space: nowrap;
          flex-shrink: 0;
        }
        .career-copy {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.6;
        }
        .career-detail-wrap {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease;
        }
        .career-detail-open {
          max-height: 400px;
        }
        .career-detail {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.7;
          margin-top: 14px;
        }
        .career-toggle {
          font-size: 14px;
          color: var(--text-muted);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 8px;
          width: 32px;
          height: 32px;
          border-radius: 6px;
          transition: background 0.2s;
        }
        .career-toggle:hover {
          background: var(--bg-subtle);
        }
        @media (max-width: 767px) {
          .career-section { padding: 64px 20px; }
          .career-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .career-header {
            flex-direction: column;
            gap: 2px;
          }
          .career-role { font-size: 16px; }
          .career-item {
            padding: 20px 16px;
            margin: 0 -16px;
            border-radius: 8px;
            transition: background 0.2s;
          }
          .career-item:active {
            background: var(--bg-subtle);
          }
          .career-toggle {
            width: 40px;
            height: 40px;
            font-size: 18px;
            border-radius: 10px;
          }
        }
      `}</style>
    </section>
  );
}
