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
          <button onClick={toggleTheme} className="header-link header-icon">
            {theme === "light" ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            )}
          </button>
        </nav>
      </div>

      <style jsx>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 40;
          transition: all 0.4s ease;
          border-bottom: 1px solid transparent;
        }
        .site-header-scrolled {
          backdrop-filter: blur(20px);
          background: color-mix(in srgb, var(--bg) 90%, transparent);
          border-bottom-color: var(--border);
        }
        .header-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .header-logo {
          background: none;
          border: none;
          color: var(--text);
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
          letter-spacing: -0.02em;
        }
        .header-nav {
          display: flex;
          align-items: center;
          gap: 28px;
        }
        .header-link {
          background: none;
          border: none;
          color: var(--text-muted);
          font-size: 13px;
          font-weight: 400;
          cursor: pointer;
          font-family: inherit;
          transition: color 0.2s;
          text-transform: capitalize;
          white-space: nowrap;
        }
        .header-link:hover {
          color: var(--text);
        }
        .header-icon {
          display: flex;
          align-items: center;
        }
        @media (max-width: 767px) {
          .header-inner {
            padding: 14px 20px;
          }
          .header-nav {
            gap: 16px;
          }
          .header-link {
            font-size: 12px;
          }
        }
      `}</style>
    </header>
  );
}
