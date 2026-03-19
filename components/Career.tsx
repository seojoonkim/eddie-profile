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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

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

        {/* Timeline */}
        <div className="career-timeline">
          {/* Vertical line */}
          <div className="career-line" />

          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="career-item"
            >
              {/* Timeline dot */}
              <div className={`career-dot ${i === items.length - 1 ? "career-dot-active" : ""}`} />

              {/* Card */}
              <div
                className={`career-card ${expandedIndex === i ? "career-card-expanded" : ""}`}
                onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
              >
                {/* Header */}
                <div className="career-card-header">
                  <span className="career-icon">{CareerIcons[i]}</span>
                  <span className="career-period">{item.period}</span>
                </div>

                {/* Title */}
                <h3 className="career-role">
                  {item.role}
                  {item.org && <span className="career-org"> · {item.org}</span>}
                </h3>

                {/* Copy */}
                <p className="career-copy">{item.copy}</p>

                {/* Detail */}
                <div className={`career-detail-wrap ${expandedIndex === i ? "career-detail-open" : ""}`}>
                  <p className="career-detail">{item.detail}</p>
                </div>

                {/* Toggle */}
                <div className="career-toggle-row">
                  <span className="career-toggle-text">
                    {expandedIndex === i ? "접기" : "더보기"}
                  </span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="career-toggle-icon"
                    style={{
                      transform: expandedIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .career {
          padding: 80px 24px;
          background: var(--bg);
        }
        .career-inner {
          max-width: 700px;
          margin: 0 auto;
        }
        .section-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 40px;
        }
        .career-timeline {
          position: relative;
          padding-left: 24px;
        }
        .career-line {
          position: absolute;
          left: 5px;
          top: 8px;
          bottom: 8px;
          width: 1px;
          background: var(--border);
        }
        .career-item {
          position: relative;
          padding-bottom: 28px;
        }
        .career-item:last-child {
          padding-bottom: 0;
        }
        .career-dot {
          position: absolute;
          left: -22px;
          top: 8px;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: var(--bg);
          border: 2px solid var(--text-secondary);
          transition: all 0.2s;
        }
        .career-dot-active {
          border-color: var(--accent);
          background: var(--accent);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 15%, transparent);
        }
        .career-card {
          padding: 20px 24px;
          background: var(--surface);
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s;
          border: 1px solid transparent;
        }
        .career-card:hover {
          border-color: var(--border);
        }
        .career-card-expanded {
          border-color: color-mix(in srgb, var(--accent) 25%, transparent);
        }
        .career-card-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }
        .career-icon {
          color: var(--accent);
          display: flex;
        }
        .career-period {
          font-size: 12px;
          font-weight: 600;
          color: var(--accent);
          letter-spacing: 0.02em;
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
        .career-detail-wrap {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease;
        }
        .career-detail-open {
          max-height: 300px;
        }
        .career-detail {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-top: 14px;
          padding-top: 14px;
          border-top: 1px solid var(--border);
        }
        .career-toggle-row {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: 10px;
        }
        .career-toggle-text {
          font-size: 12px;
          font-weight: 500;
          color: var(--accent);
        }
        .career-toggle-icon {
          color: var(--accent);
          transition: transform 0.3s ease;
        }
        @media (max-width: 767px) {
          .career { padding: 56px 16px; }
          .career-timeline { padding-left: 20px; }
          .career-card { padding: 16px 18px; }
          .career-dot { left: -18px; width: 9px; height: 9px; }
          .career-line { left: 4px; }
        }
      `}</style>
    </section>
  );
}
