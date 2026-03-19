"use client";

export default function Footer() {
  return (
    <footer style={{ padding: "40px", borderTop: "1px solid #E0E0E0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <p style={{ fontSize: "12px", color: "#666" }}>&copy; {new Date().getFullYear()} Seungryong Chang</p>
      <a href="https://kr.linkedin.com/in/seungryongchang" target="_blank" rel="noopener noreferrer"
        style={{ fontSize: "12px", color: "#666", textDecoration: "none", transition: "color 0.2s" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#111")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}>
        LinkedIn
      </a>
    </footer>
  );
}
