"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

/* ── SVG Icons ── */
const ChainIcons = [
  // 1: Search / IP Sourcing
  <svg key="source" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <path d="M21 21l-4.35-4.35"/>
    <path d="M8 11h6"/>
    <path d="M11 8v6"/>
  </svg>,
  // 2: Distribution
  <svg key="dist" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="6" width="20" height="12" rx="2"/>
    <path d="M12 12l5-3"/>
    <path d="M12 12l5 3"/>
    <path d="M12 12l-5 3"/>
    <path d="M12 12l-5-3"/>
  </svg>,
  // 3: Viewing
  <svg key="view" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <path d="M8 21h8"/>
    <path d="M12 17v4"/>
  </svg>,
];

const InterestIcons = [
  // AI
  <svg key="ai" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a4 4 0 014 4v2a4 4 0 01-8 0V6a4 4 0 014-4z"/>
    <path d="M16 14a8 8 0 01-16 0"/>
    <path d="M12 2v2"/>
    <circle cx="12" cy="18" r="2"/>
  </svg>,
  // Digital Asset
  <svg key="digital" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>,
  // Content
  <svg key="content" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="5,3 19,12 5,21"/>
  </svg>,
];

export default function Vision() {
  const t = useTranslations("vision");
  const chain = t.raw("chain") as Array<{ title: string; desc: string }>;
  const interests = t.raw("interests") as Array<{
    icon: string;
    title: string;
    desc: string;
  }>;

  const interestIconMap: Record<number, React.ReactNode> = {
    0: InterestIcons[0],
    1: InterestIcons[1],
    2: InterestIcons[2],
  };

  return (
    <section
      id="vision"
      style={{
        padding: "100px 24px",
        backgroundColor: "var(--bg)",
      }}
    >
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <p className="text-section-label" style={{ color: "var(--accent)", marginBottom: "12px" }}>
            {t("sectionTitle")}
          </p>

          <h2
            style={{
              color: "var(--text-primary)",
              fontSize: "clamp(22px, 3.5vw, 32px)",
              fontWeight: 700,
              marginBottom: "14px",
              lineHeight: 1.4,
              letterSpacing: "-0.02em",
            }}
          >
            &ldquo;{t("quote")}&rdquo;
          </h2>

          <p style={{ color: "var(--text-secondary)", fontSize: "16px", maxWidth: "500px", margin: "0 auto" }}>
            {t("sub")}
          </p>
        </motion.div>

        {/* Value Chain */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
            marginBottom: "64px",
          }}
        >
          {chain.map((step, i) => (
            <div
              key={i}
              className="card"
              style={{ textAlign: "center", position: "relative" }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  backgroundColor: i === 2 ? "var(--accent)" : "var(--surface)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 14px",
                  color: i === 2 ? "white" : "var(--accent)",
                }}
              >
                {ChainIcons[i]}
              </div>
              <h3
                style={{
                  color: "var(--text-primary)",
                  fontSize: "16px",
                  fontWeight: 600,
                  marginBottom: "6px",
                }}
              >
                {step.title}
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: 1.6 }}>
                {step.desc}
              </p>
              {/* Step number */}
              <span
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "14px",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "var(--border)",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Interest Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
        >
          {interests.map((item, i) => (
            <div key={i} className="card" style={{ textAlign: "center" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "14px",
                  color: "var(--accent)",
                }}
              >
                {interestIconMap[i]}
              </div>
              <h3
                style={{
                  color: "var(--text-primary)",
                  fontSize: "16px",
                  fontWeight: 600,
                  marginBottom: "6px",
                }}
              >
                {item.title}
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          section {
            padding: 64px 16px !important;
          }
          div[style*="grid-template-columns: repeat(3"],
          div[style*="gridTemplateColumns: repeat(3"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
