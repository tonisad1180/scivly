import Link from "next/link";
import {
  BellRing,
  BookOpenText,
  DatabaseZap,
  LayoutDashboard,
  SearchCheck,
  Settings2,
} from "lucide-react";

import { LogoMark } from "@/components/logo-mark";

const adminNav = [
  { label: "Overview", href: "/admin", icon: LayoutDashboard },
  { label: "Signals", href: "/admin", icon: SearchCheck },
  { label: "Delivery", href: "/admin", icon: BellRing },
  { label: "Knowledge", href: "/docs", icon: BookOpenText },
  { label: "Settings", href: "/admin", icon: Settings2 },
];

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(199,244,100,0.12),transparent_24%),linear-gradient(180deg,#07101e_0%,#081224_100%)] text-white">
      <div className="grid min-h-screen lg:grid-cols-[270px_minmax(0,1fr)]">
        <aside className="border-b border-white/10 bg-white/4 px-6 py-8 backdrop-blur lg:border-b-0 lg:border-r">
          <Link href="/" className="flex items-center gap-3 rounded-full">
            <LogoMark dark />
            <div>
              <p className="font-[family:var(--font-display)] text-lg font-semibold text-white">
                Scivly
              </p>
              <p className="text-xs uppercase tracking-[0.26em] text-slate-400">admin surface</p>
            </div>
          </Link>

          <nav className="mt-10 grid gap-2">
            {adminNav.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 rounded-2xl border border-transparent px-4 py-3 text-sm font-semibold text-slate-300 hover:border-white/10 hover:bg-white/6 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-10 rounded-[28px] border border-white/10 bg-white/6 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent-bright)]">
              Workspace
            </p>
            <p className="mt-4 font-[family:var(--font-display)] text-2xl font-semibold text-white">
              Applied AI
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Managing monitors for agent benchmarks, retrieval pipelines, and multimodal systems.
            </p>
            <div className="mt-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-[rgba(5,10,20,0.5)] px-4 py-3">
              <DatabaseZap className="h-4 w-4 text-[var(--accent-bright)]" />
              <p className="text-sm text-slate-300">12 digest schedules active</p>
            </div>
          </div>
        </aside>

        <div className="flex min-w-0 flex-col">
          <header className="border-b border-white/10 bg-[rgba(7,16,30,0.75)] px-6 py-5 backdrop-blur lg:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Control room</p>
                <h1 className="mt-2 font-[family:var(--font-display)] text-3xl font-semibold">
                  Research operations overview
                </h1>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-slate-300">
                  Sync health: stable
                </div>
                <Link
                  href="/docs/api"
                  className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--ink)] hover:-translate-y-0.5 hover:bg-[var(--accent-bright)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  API reference
                </Link>
              </div>
            </div>
          </header>

          <main className="flex-1 px-6 py-6 lg:px-8 lg:py-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
