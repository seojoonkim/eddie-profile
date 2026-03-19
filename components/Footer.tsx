"use client";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        &copy; {new Date().getFullYear()} Seungryong Chang. All rights reserved.
      </p>

      <style jsx>{`
        .footer {
          padding: 32px 24px;
          background: var(--bg);
          border-top: 1px solid var(--border);
          text-align: center;
        }
        .footer-text {
          font-size: 12px;
          color: var(--text-secondary);
          opacity: 0.6;
        }
      `}</style>
    </footer>
  );
}
