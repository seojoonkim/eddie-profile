"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Philosophy() {
  const t = useTranslations("philosophy");

  return (
    <section style={{ padding: "120px 40px" }}>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
        style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#D4A017", marginBottom: "24px" }}>
          {t("sectionTitle")}
        </p>
        <h2 style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 400, color: "#111", lineHeight: 1.6, letterSpacing: "-0.01em", marginBottom: "24px" }}>
          {t("quote")}
        </h2>
        <p style={{ fontSize: "14px", color: "#888", lineHeight: 1.8 }}>{t("description")}</p>
      </motion.div>
      <style jsx>{`
        @media (max-width: 767px) { section { padding: 64px 28px !important; } }
      `}</style>
    </section>
  );
}
