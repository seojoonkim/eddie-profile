"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section
      id="contact"
      className="contact-section"
    >
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-section-label" style={{ color: "var(--accent)", marginBottom: "12px" }}>
            {t("sectionTitle")}
          </p>

          <h2 className="contact-headline">
            {t("headline")}
          </h2>

          <p className="contact-desc">
            {t("description")}
          </p>

          <a
            href="https://kr.linkedin.com/in/seungryongchang"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            {t("linkedin")}
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        .contact-section {
          padding: 100px 24px;
          background-color: var(--bg);
        }
        .contact-container {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
        }
        .contact-headline {
          color: var(--text-primary);
          font-size: clamp(24px, 4vw, 32px);
          font-weight: 700;
          margin-bottom: 16px;
          line-height: 1.3;
          letter-spacing: -0.02em;
        }
        .contact-desc {
          color: var(--text-secondary);
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 32px;
        }
        @media (max-width: 767px) {
          .contact-section {
            padding: 64px 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
