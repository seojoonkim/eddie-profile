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
        backdropFilter: scrolled ? "blur(12px)" : "none",
        backgroundColor: scrolled
          ? "color-mix(in srgb, var(--bg) 80%, transparent)"
          : "transparent",
        borderBottom: scrolled
          ? "1px solid color-mix(in srgb, var(--text-secondary) 10%, transparent)"
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
          fontSize: "18px",
          fontWeight: 600,
          cursor: "pointer",
          fontFamily: "inherit",
        }}
      >
        Eddie Chang
      </button>

      <nav style={{ display: "flex", alignItems: "center", gap: "24px" }}>
        {["about", "career", "vision", "contact"].map((section) => (
          <button
            key={section}
            onClick={() => scrollTo(section)}
            style={{
              background: "none",
              border: "none",
              color: "var(--text-secondary)",
              fontSize: "14px",
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "color 0.2s",
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

        <button
          onClick={switchLocale}
          style={{
            background: "none",
            border: "1px solid color-mix(in srgb, var(--text-secondary) 30%, transparent)",
            color: "var(--text-secondary)",
            fontSize: "13px",
            fontWeight: 500,
            padding: "6px 12px",
            borderRadius: "6px",
            cursor: "pointer",
            fontFamily: "inherit",
            transition: "all 0.2s",
          }}
        >
          {locale === "ko" ? "EN" : "KR"}
        </button>

        <button
          onClick={toggleTheme}
          style={{
            background: "none",
            border: "1px solid color-mix(in srgb, var(--text-secondary) 30%, transparent)",
            color: "var(--text-secondary)",
            fontSize: "16px",
            padding: "6px 10px",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  );
}
