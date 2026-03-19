"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchLocale = () => {
    const next = locale === "ko" ? "en" : "ko";
    const path = pathname.replace(`/${locale}`, `/${next}`);
    router.push(path);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
      <div className="header-inner">
        <button onClick={() => scrollTo("hero")} className="header-logo">Eddie Chang</button>
        <nav className="header-nav">
          {["about", "career", "vision", "contact"].map((section) => (
            <button key={section} onClick={() => scrollTo(section)} className="header-link">
              {t(section)}
            </button>
          ))}
          <button onClick={switchLocale} className="header-link">
            {locale === "ko" ? "EN" : "한국어"}
          </button>
        </nav>
      </div>
      <style jsx>{`
        .site-header {
          position: fixed; top: 0; left: 0; right: 0; z-index: 40;
          transition: all 0.4s ease;
          border-bottom: 1px solid transparent;
        }
        .site-header-scrolled {
          backdrop-filter: blur(20px);
          background: rgba(255,255,255,0.9);
          border-bottom-color: #E0E0E0;
        }
        .header-inner {
          max-width: 1200px; margin: 0 auto;
          padding: 20px 40px;
          display: flex; justify-content: space-between; align-items: center;
        }
        .header-logo {
          background: none; border: none;
          color: #111; font-size: 14px; font-weight: 600;
          cursor: pointer; font-family: inherit; letter-spacing: -0.02em;
        }
        .header-nav { display: flex; align-items: center; gap: 4px; }
        .header-link {
          background: none; border: none;
          color: #888; font-size: 13px; font-weight: 400;
          cursor: pointer; font-family: inherit;
          transition: color 0.2s;
          text-transform: capitalize; white-space: nowrap;
          padding: 6px 10px; border-radius: 6px;
        }
        .header-link:hover { color: #111; background: #F5F5F5; }
        @media (max-width: 767px) {
          .header-inner { padding: 12px 20px; }
          .header-nav { gap: 2px; }
          .header-link { font-size: 11px; padding: 6px 6px; }
        }
      `}</style>
    </header>
  );
}
