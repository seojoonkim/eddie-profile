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
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        padding: "16px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        backgroundColor: scrolled
          ? "color-mix(in srgb, var(--bg) 85%, transparent)"
          : "transparent",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <button
        onClick={() => scrollTo("hero")}
        style={{
          background: "none",
          border: "none",
          color: "var(--text-primary)",
          fontSize: "16px",
          fontWeight: 600,
          cursor: "pointer",
          fontFamily: "inherit",
          letterSpacing: "-0.02em",
        }}
      >
        Eddie Chang
      </button>

      <nav style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
        {["about", "career", "vision", "contact"].map((section) => (
          <button
            key={section}
            onClick={() => scrollTo(section)}
            style={{
              background: "none",
              border: "none",
              color: "var(--text-secondary)",
              fontSize: "12px",
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "color 0.2s",
              letterSpacing: "0.01em",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--text-primary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-secondary)")
            }
          >
            {t(section)}
          </button>
        ))}

        {/* Locale toggle */}
        <button
          onClick={switchLocale}
          style={{
            background: "none",
            border: "1px solid var(--border)",
            color: "var(--text-secondary)",
            fontSize: "11px",
            fontWeight: 600,
            padding: "4px 8px",
            borderRadius: "4px",
            cursor: "pointer",
            fontFamily: "inherit",
            transition: "all 0.2s",
            letterSpacing: "0.02em",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          {locale === "ko" ? "EN" : "KR"}
        </button>

        {/* Theme toggle — SVG */}
        <button
          onClick={toggleTheme}
          style={{
            background: "none",
            border: "1px solid var(--border)",
            color: "var(--text-secondary)",
            padding: "5px",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "all 0.2s",
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
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
    </header>
  );
}
