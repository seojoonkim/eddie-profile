"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";

export default function Contact() {
  const t = useTranslations("contact");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".scroll-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ padding: "120px 40px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "60px", alignItems: "start" }}>
        <div className="scroll-reveal">
          <p className="label-accent" style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#B8860B" }}>
            {t("sectionTitle")}
          </p>
        </div>
        <div>
          <h2 className="scroll-reveal" style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: "#0A0A0A", lineHeight: 1.4, letterSpacing: "-0.02em", marginBottom: "14px" }}>
            {t("headline")}
          </h2>
          <p className="scroll-reveal" style={{ fontSize: "14px", color: "#666", lineHeight: 1.8, marginBottom: "28px", transitionDelay: "0.1s" }}>{t("description")}</p>
          <a href="https://kr.linkedin.com/in/seungryongchang" target="_blank" rel="noopener noreferrer"
            className="scroll-reveal hover-lift"
            style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "14px 32px", borderRadius: "8px", fontSize: "15px", fontWeight: 500, background: "#B8860B", color: "#FFFFFF", textDecoration: "none", transitionDelay: "0.2s" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            {t("linkedin")}
          </a>
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
