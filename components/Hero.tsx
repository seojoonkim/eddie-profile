"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function Hero() {
  const t = useTranslations("hero");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 40px",
      background: "#FFFFFF",
      opacity: loaded ? 1 : 0,
      transition: "opacity 0.4s ease",
    }}>
      <div style={{ maxWidth: "720px", width: "100%" }}>
        <p className="animate-fade-up" style={{ fontSize: "18px", fontWeight: 400, color: "#0A0A0A", marginBottom: "10px" }}>
          {t("greeting")}
        </p>

        <h1 className="animate-fade-up-delay-1" style={{ fontSize: "clamp(52px, 8vw, 80px)", fontWeight: 700, color: "#0A0A0A", lineHeight: 1, letterSpacing: "-0.04em", marginBottom: "6px" }}>
          {t("name")}
        </h1>

        <p className="animate-fade-up-delay-2" style={{ fontSize: "16px", color: "#999", marginBottom: "40px", fontWeight: 300 }}>
          {t("nameEn")}
        </p>

        <h2 className="animate-fade-up-delay-3" style={{ fontSize: "17px", fontWeight: 500, color: "#0A0A0A", lineHeight: 1.6, letterSpacing: "-0.01em", marginBottom: "10px" }}>
          {t("tagline")}
        </h2>

        <p className="animate-fade-up-delay-3" style={{ fontSize: "14px", color: "#666", lineHeight: 1.7, maxWidth: "440px", marginBottom: "40px" }}>
          {t("sub")}
        </p>

        <div className="animate-fade-up-delay-4">
          <a href="#about" className="hover-fade" style={{ fontSize: "13px", color: "#B8860B", textDecoration: "none", fontWeight: 500, borderBottom: "1px solid #B8860B", paddingBottom: "2px" }}>
            {t("cta")} &darr;
          </a>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          section { padding: 0 28px !important; min-height: auto !important; padding-top: 120px !important; padding-bottom: 60px !important; }
        }
      `}</style>
    </section>
  );
}
