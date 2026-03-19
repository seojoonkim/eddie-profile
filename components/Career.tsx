"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect, useRef } from "react";

export default function Career() {
  const t = useTranslations("career");
  const items = t.raw("items") as Array<{ period: string; role: string; org: string; copy: string; detail: string; }>;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
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
          {items.map((item, i) => (
            <div key={i}
              className={`career-active scroll-reveal`}
              onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
              style={{
                padding: expandedIndex === i ? "24px 0 24px 16px" : "24px 0",
                borderBottom: "none",
                cursor: "pointer",
                borderLeft: expandedIndex === i ? "2px solid #B8860B" : "2px solid transparent",
                marginLeft: expandedIndex === i ? "-18px" : "0",
                borderTop: "none", borderRight: "none",
                transitionDelay: `${i * 0.08}s`,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "16px", marginBottom: "6px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#0A0A0A", letterSpacing: "-0.01em" }}>
                  {item.role}
                  {item.org && <span style={{ fontWeight: 400, color: "#666", marginLeft: "8px" }}>· {item.org}</span>}
                </h3>
                <span style={{ fontSize: "13px", color: "#B8860B", fontFamily: "var(--font-mono)", whiteSpace: "nowrap", flexShrink: 0, fontWeight: 600 }}>
                  {item.period}
                </span>
              </div>
              <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.6 }}>{item.copy}</p>
              <div className={expandedIndex === i ? "career-expand open" : "career-expand"}>
                <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.7, marginTop: "14px" }}>{item.detail}</p>
              </div>
              <span className="hover-fade" style={{ fontSize: "16px", color: "#B8860B", display: "inline-flex", alignItems: "center", justifyContent: "center", marginTop: "8px", width: "36px", height: "36px", borderRadius: "8px" }}>
                {expandedIndex === i ? "−" : "+"}
              </span>
            </div>
          ))}
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
