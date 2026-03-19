"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState } from "react";

/* Clean SVG icons */
const CareerIcons = [
  <svg key="law" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v18M3 7l9-4 9 4M3 7l3 9h6M21 7l-3 9h-6M9 16h6"/>
  </svg>,
  <svg key="chart" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18"/>
    <path d="M7 16l4-8 4 4 5-9"/>
  </svg>,
  <svg key="rocket" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/>
    <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>,
  <svg key="play" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none"/>
  </svg>,
];

export default function Career() {
  const t = useTranslations("career");
  const items = t.raw("items") as Array<{
    period: string;
    role: string;
    org: string;
    copy: string;
    detail: string;
  }>;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="career" className="career">
      <div className="career-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
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
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className={`career-item ${i === items.length - 1 ? "career-item-active" : ""}`}
              onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
            >
              <div className="career-item-header">
                <span className="career-icon">{CareerIcons[i]}</span>
                <span className="career-period">{item.period}</span>
              </div>

              <h3 className="career-role">
                {item.role}
                {item.org && <span className="career-org"> · {item.org}</span>}
              </h3>

              <p className="career-copy">{item.copy}</p>

              {expandedIndex === i && (
                <p className="career-detail">{item.detail}</p>
              )}

              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                className="career-toggle"
                style={{
                  transform: expandedIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .career {
          padding: 80px 24px;
          background: var(--surface);
        }
        .career-inner {
          max-width: 640px;
          margin: 0 auto;
        }
        .section-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 32px;
        }
        .career-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .career-item {
          padding: 20px;
          background: var(--bg);
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .career-item:hover {
          background: color-mix(in srgb, var(--bg) 95%, var(--accent));
        }
        .career-item-active {
          border-left: 2px solid var(--accent);
        }
        .career-item-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }
        .career-icon {
          color: var(--accent);
          display: flex;
        }
        .career-period {
          font-size: 12px;
          font-weight: 600;
          color: var(--accent);
        }
        .career-role {
          font-size: 17px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 6px;
          letter-spacing: -0.01em;
        }
        .career-org {
          font-weight: 400;
          color: var(--text-secondary);
        }
        .career-copy {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .career-detail {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid var(--border);
        }
        .career-toggle {
          color: var(--text-secondary);
          margin-top: 8px;
          transition: transform 0.3s ease;
        }
        @media (max-width: 767px) {
          .career { padding: 56px 20px; }
        }
      `}</style>
    </section>
  );
}
