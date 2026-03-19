"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import { useState, useEffect } from "react";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
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
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <button onClick={() => scrollTo("hero")} className="header-logo">
        EC
      </button>

      <nav className="header-nav">
        {["about", "career", "vision", "contact"].map((section) => (
          <button
            key={section}
            onClick={() => scrollTo(section)}
            className="header-link"
          >
            {t(section)}
          </button>
        ))}

        <button onClick={switchLocale} className="header-toggle">
          {locale === "ko" ? "EN" : "KR"}
        </button>

        <button onClick={toggleTheme} className="header-toggle">
          {theme === "light" ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          )}
        </button>
      </nav>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 40;
          padding: 16px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s ease;
        }
        .header-scrolled {
          backdrop-filter: blur(16px);
          background: color-mix(in srgb, var(--bg) 85%, transparent);
          border-bottom: 1px solid var(--border);
        }
        .header-logo {
          background: none;
          border: none;
          color: var(--text-primary);
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          font-family: inherit;
          letter-spacing: -0.02em;
        }
        .header-nav {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .header-link {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          font-family: inherit;
          padding: 6px 10px;
          border-radius: 6px;
          transition: color 0.2s, background 0.2s;
          white-space: nowrap;
        }
        .header-link:hover {
          color: var(--text-primary);
          background: var(--surface);
        }
        .header-toggle {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 11px;
          font-weight: 600;
          padding: 6px 10px;
          border-radius: 6px;
          cursor: pointer;
          font-family: inherit;
          transition: color 0.2s, background 0.2s;
          display: flex;
          align-items: center;
          white-space: nowrap;
        }
        .header-toggle:hover {
          color: var(--text-primary);
          background: var(--surface);
        }
        @media (max-width: 767px) {
          .header { padding: 12px 16px; }
          .header-nav { gap: 2px; }
          .header-link { padding: 5px 8px; font-size: 11px; }
          .header-toggle { padding: 5px 8px; font-size: 10px; }
        }
      `}</style>
    </header>
  );
}
