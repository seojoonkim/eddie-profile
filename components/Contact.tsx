"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-label">{t("sectionTitle")}</p>
          <h2 className="contact-head">{t("headline")}</h2>
          <p className="contact-desc">{t("description")}</p>

          <a
            href="https://kr.linkedin.com/in/seungryongchang"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            {t("linkedin")}
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        .contact {
          padding: 80px 24px;
          background: var(--bg);
          border-top: 1px solid var(--border);
        }
        .contact-inner { max-width: 640px; margin: 0 auto; }
        .section-label {
          font-size: 11px; font-weight: 600; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--accent); margin-bottom: 16px;
        }
        .contact-head {
          font-size: clamp(20px, 3vw, 26px); font-weight: 700;
          color: var(--text-primary); line-height: 1.4;
          letter-spacing: -0.02em; margin-bottom: 10px;
        }
        .contact-desc {
          font-size: 15px; color: var(--text-secondary);
          line-height: 1.8; margin-bottom: 28px;
        }
        .contact-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 24px; border-radius: 8px;
          font-size: 14px; font-weight: 500;
          background: var(--text-primary); color: var(--bg);
          text-decoration: none; transition: opacity 0.2s;
        }
        .contact-btn:hover { opacity: 0.75; }
        @media (max-width: 767px) {
          .contact { padding: 56px 20px; }
        }
      `}</style>
    </section>
  );
}
