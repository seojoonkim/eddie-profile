"use client";

import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "flex-end", padding: "0 40px 120px" }}>
      <div style={{ maxWidth: "1200px", width: "100%" }}>
        <p className="animate-fade-up" style={{ fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 400, color: "#0A0A0A", marginBottom: "12px" }}>
          {t("greeting")}
        </p>

        <h1 className="animate-fade-up-delay-1" style={{ fontSize: "clamp(48px, 9vw, 96px)", fontWeight: 700, color: "#0A0A0A", lineHeight: 0.95, letterSpacing: "-0.04em", marginBottom: "8px" }}>
          {t("name")}
        </h1>

        <p className="animate-fade-up-delay-2" style={{ fontSize: "18px", color: "#666", marginBottom: "48px", fontWeight: 300 }}>
          {t("nameEn")}
        </p>

        <h2 className="animate-fade-up-delay-3" style={{ fontSize: "clamp(16px, 2vw, 20px)", fontWeight: 400, color: "#0A0A0A", lineHeight: 1.6, maxWidth: "500px", letterSpacing: "-0.01em", marginBottom: "12px" }}>
          {t("tagline")}
        </h2>

        <p className="animate-fade-up-delay-3" style={{ fontSize: "14px", color: "#666", lineHeight: 1.7, maxWidth: "440px", marginBottom: "40px" }}>
          {t("sub")}
        </p>

        <div className="animate-fade-up-delay-4" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "40px", height: "1px", background: "#E0E0E0" }} />
          <a href="#about" className="hover-fade" style={{ fontSize: "13px", color: "#B8860B", textDecoration: "none", fontWeight: 500 }}>
            {t("cta")}
          </a>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          section { padding: 0 28px 80px !important; min-height: auto !important; padding-top: 140px !important; }
        }
      `}</style>
    </section>
  );
}
