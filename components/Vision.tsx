"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const INTEREST_ICONS: Record<string, string> = {
  ai: "🤖",
  digital: "💎",
  content: "🎬",
};

export default function Vision() {
  const t = useTranslations("vision");
  const chain = t.raw("chain") as Array<{ title: string; desc: string }>;
  const interests = t.raw("interests") as Array<{
    icon: string;
    title: string;
    desc: string;
  }>;

  return (
    <section
      id="vision"
      style={{
        padding: "120px 24px",
        backgroundColor: "var(--bg)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <p
            style={{
              color: "var(--accent)",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            {t("sectionTitle")}
          </p>

          <h2
            style={{
              color: "var(--text-primary)",
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: 700,
              marginBottom: "16px",
              lineHeight: 1.3,
            }}
          >
            &ldquo;{t("quote")}&rdquo;
          </h2>

          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "17px",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
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
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
            marginBottom: "80px",
          }}
        >
          {chain.map((step, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div
                className="card"
                style={{
                  width: "100%",
                  textAlign: "center",
                  borderColor:
                    i === 2
                      ? "color-mix(in srgb, var(--highlight) 40%, transparent)"
                      : undefined,
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background:
                      i === 2
                        ? "linear-gradient(135deg, var(--highlight), var(--accent))"
                        : "color-mix(in srgb, var(--accent) 15%, transparent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: i === 2 ? "white" : "var(--accent)",
                  }}
                >
                  {i + 1}
                </div>
                <h3
                  style={{
                    color: "var(--text-primary)",
                    fontSize: "18px",
                    fontWeight: 600,
                    marginBottom: "8px",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "15px",
                    lineHeight: 1.6,
                  }}
                >
                  {step.desc}
                </p>
              </div>
              {/* Arrow connector (hidden on mobile) */}
              {i < chain.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    right: "-18px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "var(--accent)",
                    fontSize: "20px",
                    zIndex: 1,
                  }}
                  className="chain-arrow"
                >
                  →
                </div>
              )}
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
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
          }}
        >
          {interests.map((item, i) => (
            <div key={i} className="card" style={{ textAlign: "center" }}>
              <div
                style={{ fontSize: "36px", marginBottom: "16px" }}
              >
                {INTEREST_ICONS[item.icon] || "🔮"}
              </div>
              <h3
                style={{
                  color: "var(--text-primary)",
                  fontSize: "18px",
                  fontWeight: 600,
                  marginBottom: "8px",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "15px",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          section {
            padding: 80px 16px !important;
          }
          .chain-arrow {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
