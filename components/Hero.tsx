"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function Hero() {
  const t = useTranslations("hero");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section">
      <div className={`hero-inner ${loaded ? "hero-loaded" : ""}`}>
        {/* Left: Text */}
        <div className="hero-text">
          <p className="animate-fade-up hero-greeting">{t("greeting")}</p>
          <h1 className="animate-fade-up-delay-1 hero-name">{t("name")}</h1>
          <p className="animate-fade-up-delay-2 hero-name-en">{t("nameEn")}</p>
          <h2 className="animate-fade-up-delay-3 hero-tagline">{t("tagline")}</h2>
          <p className="animate-fade-up-delay-3 hero-sub">{t("sub")}</p>
          <div className="animate-fade-up-delay-4">
            <a href="#about" className="hero-cta hover-fade">
              {t("cta")} &darr;
            </a>
          </div>
        </div>

        {/* Right: Photo */}
        <div className="hero-photo-wrap animate-fade-up-delay-2">
          <img src="/profile.jpg" alt="Eddie Chang" className="hero-photo" />
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 100px 40px 60px;
          background: #FFFFFF;
        }
        .hero-inner {
          max-width: 1100px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 60px;
          align-items: center;
          margin: 0 auto;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .hero-loaded {
          opacity: 1;
        }
        .hero-text {
          display: flex;
          flex-direction: column;
        }
        .hero-greeting {
          font-size: 18px;
          font-weight: 400;
          color: #0A0A0A;
          margin-bottom: 10px;
        }
        .hero-name {
          font-size: clamp(48px, 7vw, 72px);
          font-weight: 700;
          color: #0A0A0A;
          line-height: 1.05;
          letter-spacing: -0.04em;
          margin-bottom: 6px;
        }
        .hero-name-en {
          font-size: 16px;
          color: #999;
          margin-bottom: 36px;
          font-weight: 300;
        }
        .hero-tagline {
          font-size: 17px;
          font-weight: 500;
          color: #0A0A0A;
          line-height: 1.6;
          letter-spacing: -0.01em;
          margin-bottom: 10px;
        }
        .hero-sub {
          font-size: 14px;
          color: #666;
          line-height: 1.7;
          max-width: 440px;
          margin-bottom: 36px;
        }
        .hero-cta {
          font-size: 13px;
          color: #B8860B;
          text-decoration: none;
          font-weight: 500;
          border-bottom: 1px solid #B8860B;
          padding-bottom: 2px;
        }
        .hero-photo-wrap {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
        .hero-photo {
          width: 100%;
          max-width: 280px;
          height: 360px;
          object-fit: cover;
          border-radius: 12px;
          filter: grayscale(15%);
          transition: filter 0.3s ease;
        }
        .hero-photo:hover {
          filter: grayscale(0%);
        }
        @media (max-width: 767px) {
          .hero-section {
            padding: 90px 28px 40px !important;
            min-height: auto !important;
          }
          .hero-inner {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .hero-photo-wrap {
            justify-content: flex-start;
          }
          .hero-photo {
            max-width: 200px;
            height: 260px;
          }
        }
      `}</style>
    </section>
  );
}
