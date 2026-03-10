import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { navigation } from "@/lib/site-data";

import { LogoMark } from "./logo-mark";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="glass-panel mx-auto flex max-w-7xl items-center justify-between rounded-full px-5 py-3">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
        >
          <LogoMark />
          <div>
            <p className="font-[family:var(--font-display)] text-base font-semibold">Scivly</p>
            <p className="text-xs uppercase tracking-[0.26em] text-[var(--muted)]">
              research intelligence
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[var(--ink-soft)] hover:text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/docs"
            className="hidden rounded-full px-4 py-2 text-sm font-semibold text-[var(--ink-soft)] hover:text-[var(--ink)] sm:inline-flex"
          >
            Read docs
          </Link>
          <Link
            href="/admin"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-4 py-2 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-[var(--surface-dark-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
          >
            Open console
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
