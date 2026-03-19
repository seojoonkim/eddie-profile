"use client";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "40px 24px",
        backgroundColor: "var(--bg)",
        borderTop: "1px solid var(--border)",
        textAlign: "center",
      }}
    >
      <p
        style={{
          color: "var(--text-secondary)",
          fontSize: "14px",
        }}
      >
        &copy; {new Date().getFullYear()} Seungryong Chang. All rights reserved.
      </p>
    </footer>
  );
}
