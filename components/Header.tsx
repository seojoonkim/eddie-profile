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
      <div className="header-inner">
        {/* Left: Logo */}
        <button onClick={() => scrollTo("hero")} className="header-logo">
          EC
        </button>

        {/* Center: Nav links */}
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
        </nav>

        {/* Right: Controls */}
        <div className="header-controls">
          {/* Language toggle */}
          <button onClick={switchLocale} className="lang-toggle" aria-label="Switch language">
            <span className={`lang-opt ${locale === "ko" ? "lang-active" : ""}`}>KO</span>
            <span className="lang-divider">/</span>
            <span className={`lang-opt ${locale === "en" ? "lang-active" : ""}`}>EN</span>
          </button>

          {/* Theme toggle */}
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
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
        </div>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 40;
          transition: all 0.3s ease;
        }
        .header-scrolled {
          backdrop-filter: blur(16px);
          background: color-mix(in srgb, var(--bg) 85%, transparent);
          border-bottom: 1px solid var(--border);
        }
        .header-inner {
          max-width: 960px;
          margin: 0 auto;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
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
          flex: 1;
        }
        .header-nav {
          display: flex;
          align-items: center;
          gap: 4px;
          justify-content: center;
          flex: 1;
        }
        .header-link {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          font-family: inherit;
          padding: 6px 14px;
          border-radius: 6px;
          transition: color 0.2s, background 0.2s;
          white-space: nowrap;
        }
        .header-link:hover {
          color: var(--text-primary);
          background: var(--surface);
        }
        .header-controls {
          display: flex;
          align-items: center;
          gap: 8px;
          flex: 1;
          justify-content: flex-end;
        }
        .lang-toggle {
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          display: flex;
          align-items: center;
          gap: 2px;
          padding: 4px 8px;
          border-radius: 6px;
          transition: background 0.2s;
        }
        .lang-toggle:hover {
          background: var(--surface);
        }
        .lang-opt {
          font-size: 12px;
          font-weight: 500;
          color: var(--text-secondary);
          transition: color 0.2s;
        }
        .lang-active {
          color: var(--text-primary);
          font-weight: 700;
        }
        .lang-divider {
          font-size: 11px;
          color: var(--text-secondary);
          opacity: 0.4;
        }
        .theme-toggle {
          background: none;
          border: none;
          color: var(--text-secondary);
          padding: 6px 8px;
          border-radius: 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
          transition: color 0.2s, background 0.2s;
        }
        .theme-toggle:hover {
          color: var(--text-primary);
          background: var(--surface);
        }
        @media (max-width: 767px) {
          .header-inner {
            padding: 12px 16px;
          }
          .header-link {
            padding: 5px 10px;
            font-size: 12px;
          }
        }
      `}</style>
    </header>
  );
}
