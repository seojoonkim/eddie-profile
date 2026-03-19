"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Philosophy() {
  const t = useTranslations("philosophy");

  return (
    <section id="philosophy" style={{ padding: "120px 40px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p style={{
            fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "24px",
          }}>
            {t("sectionTitle")}
          </p>
          <h2 style={{
            fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 400,
            color: "var(--text)", lineHeight: 1.6, letterSpacing: "-0.01em",
            marginBottom: "32px",
          }}>
            {t("quote")}
          </h2>
          <p style={{
            fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.8,
            maxWidth: "560px", margin: "0 auto",
          }}>
            {t("description")}
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          section { padding: 80px 20px !important; }
        }
      `}</style>
    </section>
  );
}
