"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="hero">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="hero-inner"
      >
        <p className="hero-greeting">{t("greeting")}</p>
        <h1 className="hero-name">{t("name")}</h1>
        <p className="hero-name-en">{t("nameEn")}</p>
        <h2 className="hero-tagline">{t("tagline")}</h2>
        <p className="hero-sub">{t("sub")}</p>

        <div className="hero-cta-row">
          <a href="#about" className="hero-cta">{t("cta")}</a>
        </div>
      </motion.div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 120px 24px 80px;
          background: var(--bg);
        }
        .hero-inner {
          max-width: 640px;
          text-align: left;
        }
        .hero-greeting {
          font-size: clamp(20px, 3vw, 26px);
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 8px;
          line-height: 1.4;
        }
        .hero-name {
          font-size: clamp(36px, 7vw, 56px);
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 4px;
        }
        .hero-name-en {
          font-size: 16px;
          color: var(--text-secondary);
          margin-bottom: 36px;
        }
        .hero-tagline {
          font-size: clamp(17px, 3vw, 20px);
          font-weight: 500;
          color: var(--text-primary);
          line-height: 1.6;
          margin-bottom: 12px;
          letter-spacing: -0.01em;
        }
        .hero-sub {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 36px;
          max-width: 480px;
        }
        .hero-cta-row {
          display: flex;
          gap: 12px;
        }
        .hero-cta {
          display: inline-flex;
          align-items: center;
          padding: 10px 24px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          background: var(--text-primary);
          color: var(--bg);
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .hero-cta:hover {
          opacity: 0.75;
        }
        @media (max-width: 767px) {
          .hero {
            padding: 100px 20px 60px;
            min-height: auto;
          }
        }
      `}</style>
    </section>
  );
}
