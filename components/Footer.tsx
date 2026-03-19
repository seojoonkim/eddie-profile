"use client";

export default function Footer() {
  return (
    <footer style={{
      padding: "40px 40px", borderTop: "1px solid var(--border)",
      display: "flex", justifyContent: "space-between", alignItems: "center",
    }}>
      <p style={{ fontSize: "12px", color: "var(--text-muted)" }}>
        &copy; {new Date().getFullYear()} Seungryong Chang
      </p>
      <a
        href="https://kr.linkedin.com/in/seungryongchang"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontSize: "12px", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
      >
        LinkedIn ↗
      </a>
    </footer>
  );
}
