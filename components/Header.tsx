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
        transition: "all 0.4s ease",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        backgroundColor: scrolled ? "color-mix(in srgb, var(--bg) 90%, transparent)" : "transparent",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => scrollTo("hero")}
          style={{
            background: "none",
            border: "none",
            color: "var(--text)",
            fontSize: "14px",
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "inherit",
            letterSpacing: "-0.02em",
          }}
        >
          Eddie Chang
        </button>

        <nav style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          {["about", "career", "vision", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              style={{
                background: "none",
                border: "none",
                color: "var(--text-muted)",
                fontSize: "13px",
                fontWeight: 400,
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "color 0.2s",
                textTransform: "capitalize",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {t(section)}
            </button>
          ))}

          <button
            onClick={switchLocale}
            style={{
              background: "none",
              border: "none",
              color: "var(--text-muted)",
              fontSize: "13px",
              fontWeight: 400,
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            {locale === "ko" ? "EN" : "한국어"}
          </button>

          <button
            onClick={toggleTheme}
            style={{
              background: "none",
              border: "none",
              color: "var(--text-muted)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            {theme === "light" ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
