"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";

export default function Vision() {
  const t = useTranslations("vision");
  const chain = t.raw("chain") as Array<{ title: string; desc: string }>;
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
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="scroll-reveal" style={{ marginBottom: "64px" }}>
          <p className="label-accent" style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#B8860B", marginBottom: "16px" }}>
            {t("sectionTitle")}
          </p>
          <h2 style={{ fontSize: "clamp(24px, 3.5vw, 40px)", fontWeight: 700, color: "#0A0A0A", lineHeight: 1.3, letterSpacing: "-0.03em", maxWidth: "700px" }}>
            &ldquo;{t("quote")}&rdquo;
          </h2>
          <p style={{ fontSize: "14px", color: "#666", marginTop: "14px" }}>{t("sub")}</p>
        </div>
        <div className="scroll-reveal" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "#E0E0E0", borderRadius: "12px", overflow: "hidden", transitionDelay: "0.1s" }}>
          {chain.map((step, i) => (
            <div key={i} className="hover-bg" style={{ padding: "28px 24px", background: "#FFFFFF" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(184,134,11,0.04)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#FFFFFF")}>
              <span style={{ fontSize: "44px", fontWeight: 200, color: "#B8860B", lineHeight: 1, display: "block", marginBottom: "14px", opacity: 0.4 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#0A0A0A", marginBottom: "4px" }}>{step.title}</h3>
              <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.6 }}>{step.desc}</p>
            </div>
          ))}
        </div>
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
