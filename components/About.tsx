"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";

export default function About() {
  const t = useTranslations("about");
  const tags: string[] = t.raw("tags");
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
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "48px", alignItems: "start" }}>
        <div className="scroll-reveal">
          <p className="label-accent" style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#B8860B" }}>
            {t("sectionTitle")}
          </p>
        </div>
        <div>
          <h2 className="scroll-reveal" style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 700, color: "#0A0A0A", lineHeight: 1.4, letterSpacing: "-0.03em", marginBottom: "28px" }}>
            {t("oneLiner")}
          </h2>
          <div className="scroll-reveal" style={{ display: "flex", flexDirection: "column", gap: "16px", transitionDelay: "0.1s" }}>
            <p style={{ fontSize: "16px", color: "#0A0A0A", lineHeight: 1.8 }}>{t("p1")}</p>
            <p style={{ fontSize: "15px", color: "#666", lineHeight: 1.8 }}>{t("p2")}</p>
            <p style={{ fontSize: "15px", color: "#666", lineHeight: 1.8, fontStyle: "italic", paddingLeft: "20px", borderLeft: "2px solid #B8860B" }}>{t("p3")}</p>
          </div>
          <div className="scroll-reveal" style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "28px", transitionDelay: "0.2s" }}>
            {tags.map((tag: string) => (
              <span key={tag} className="hover-fade" style={{ fontSize: "12px", fontWeight: 500, color: "#B8860B", padding: "6px 14px", borderRadius: "100px", border: "1px solid #B8860B", background: "rgba(184,134,11,0.05)" }}>
                {tag}
              </span>
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
