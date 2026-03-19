"use client";

import { useTranslations } from "next-intl";

export default function Philosophy() {
  const t = useTranslations("philosophy");

  return (
    <section style={{ padding: "120px 40px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "80px", alignItems: "start" }}>
        <div>
          <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#B8860B" }}>
            {t("sectionTitle")}
          </p>
        </div>
        <div>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 600, color: "#0A0A0A", lineHeight: 1.5, letterSpacing: "-0.02em", marginBottom: "20px" }}>
            {t("quote")}
          </h2>
          <p style={{ fontSize: "15px", color: "#666", lineHeight: 1.8, marginBottom: "48px" }}>
            {t("description")}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {["question1", "question2", "question3"].map((key) => (
              <div key={key} style={{ padding: "20px 0",  }}>
                <p style={{ fontSize: "16px", fontWeight: 400, color: "#0A0A0A", lineHeight: 1.7, fontStyle: "italic" }}>
                  {t(key)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 767px) {
          section { padding: 64px 28px !important; }
          div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
      `}</style>
    </section>
  );
}
