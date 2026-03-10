import Link from "next/link";

import { LogoMark } from "./logo-mark";

const footerLinks = [
  { label: "Docs", href: "/docs" },
  { label: "API reference", href: "/docs/api" },
  { label: "Admin console", href: "/admin" },
  { label: "GitHub", href: "https://github.com/JessyTsui/scivly" },
];

export function SiteFooter() {
  return (
    <footer className="px-4 pb-8 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[32px] border border-[var(--line)] bg-[rgba(255,255,255,0.55)] px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <LogoMark />
          <div>
            <p className="font-[family:var(--font-display)] text-xl font-semibold">Scivly</p>
            <p className="max-w-md text-sm text-[var(--muted)]">
              Research monitoring, digest generation, and evidence-grounded Q&amp;A in one surface.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 text-sm font-semibold text-[var(--ink-soft)]">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 hover:bg-white hover:text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
