"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Vision() {
  const t = useTranslations("vision");
  const chain = t.raw("chain") as Array<{ title: string; desc: string }>;

  return (
    <section style={{ padding: "120px 40px", borderTop: "1px solid #E0E0E0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} style={{ marginBottom: "64px" }}>
          <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#B8860B", marginBottom: "16px" }}>
            {t("sectionTitle")}
          </p>
          <h2 style={{ fontSize: "clamp(24px, 3.5vw, 40px)", fontWeight: 700, color: "#0A0A0A", lineHeight: 1.3, letterSpacing: "-0.03em", maxWidth: "700px" }}>
            &ldquo;{t("quote")}&rdquo;
          </h2>
          <p style={{ fontSize: "14px", color: "#666", marginTop: "14px" }}>{t("sub")}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} viewport={{ once: true }}
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "#E0E0E0", borderRadius: "12px", overflow: "hidden" }}>
          {chain.map((step, i) => (
            <div key={i} style={{ padding: "28px 24px", background: "#FFFFFF", transition: "background 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(212,160,23,0.04)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#FFFFFF")}>
              <span style={{ fontSize: "44px", fontWeight: 200, color: "#B8860B", lineHeight: 1, display: "block", marginBottom: "14px", opacity: 0.4 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#0A0A0A", marginBottom: "4px" }}>{step.title}</h3>
              <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.6 }}>{step.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
      <style jsx>{`
        @media (max-width: 767px) {
          section { padding: 64px 28px !important; }
          div[style*="grid-template-columns: repeat(3"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
