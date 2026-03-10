import Link from "next/link";
import { ArrowRight, BookOpenText, FileCode2, Search, ShieldCheck, Telescope } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { apiReference, docCategories } from "@/lib/site-data";

const guideLinks = [
  "Create a workspace and add your first monitor",
  "Understand paper scoring and match reasons",
  "Generate a translated digest preview",
  "Route alerts into chat or webhooks",
];

export default function DocsPage() {
  return (
    <div>
      <SiteHeader />

      <main className="px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-7xl">
          <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <SectionHeading
                eyebrow="Documentation"
                title="Make the product understandable before the first API call ever lands."
                body="The docs surface is built to feel like a clean research operations manual: fast onboarding, product-native navigation, and enough technical detail to ship with confidence."
              />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/docs/api"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-[var(--surface-dark-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                >
                  Read API reference
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/admin"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-white/70 px-6 py-3 text-sm font-semibold text-[var(--ink)] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                >
                  Open admin preview
                  <ShieldCheck className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="glass-panel rounded-[32px] p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                Search the docs
              </p>
              <div className="mt-5 flex items-center gap-3 rounded-[24px] border border-[var(--line)] bg-white px-4 py-4">
                <Search className="h-5 w-5 text-[var(--muted)]" />
                <span className="text-base text-[var(--muted)]">
                  Search monitors, digests, webhooks, and admin workflows...
                </span>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[24px] border border-[var(--line)] bg-[rgba(15,118,110,0.06)] p-5">
                  <p className="text-sm font-semibold text-[var(--accent-strong)]">Most read</p>
                  <p className="mt-2 font-[family:var(--font-display)] text-2xl font-semibold">
                    Monitor lifecycle
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    Learn how matching, scoring, enrichment, and delivery fit together.
                  </p>
                </div>
                <div className="rounded-[24px] border border-[var(--line)] bg-white p-5">
                  <p className="text-sm font-semibold text-[var(--accent-coral)]">Recently updated</p>
                  <p className="mt-2 font-[family:var(--font-display)] text-2xl font-semibold">
                    Webhook retries
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    Delivery replay, status checks, and idempotency behavior for outbound hooks.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16 grid gap-5 lg:grid-cols-3">
            {docCategories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="glass-panel group rounded-[30px] p-6 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                  {category.eyebrow}
                </p>
                <h2 className="mt-4 font-[family:var(--font-display)] text-2xl font-semibold">
                  {category.title}
                </h2>
                <ul className="mt-5 space-y-3 text-sm text-[var(--ink-soft)]">
                  {category.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink)]">
                  Open section
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </section>

          <section className="mt-16 grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
            <div className="glass-panel rounded-[32px] p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <BookOpenText className="h-6 w-6 text-[var(--accent)]" />
                <h2 className="font-[family:var(--font-display)] text-3xl font-semibold">
                  Popular guides
                </h2>
              </div>
              <div className="mt-8 space-y-4">
                {guideLinks.map((guide, index) => (
                  <div
                    key={guide}
                    className="flex items-center gap-4 rounded-[24px] border border-[var(--line)] bg-white/70 px-4 py-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(15,118,110,0.08)] text-sm font-semibold text-[var(--accent)]">
                      {index + 1}
                    </div>
                    <p className="text-base font-semibold text-[var(--ink)]">{guide}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] p-[1px] dark-panel">
              <div className="rounded-[31px] p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <FileCode2 className="h-6 w-6 text-[var(--accent-bright)]" />
                  <h2 className="font-[family:var(--font-display)] text-3xl font-semibold text-white">
                    Reference snapshot
                  </h2>
                </div>
                <div className="mt-8 space-y-4">
                  {apiReference.map((item) => (
                    <div
                      key={item.route}
                      className="rounded-[24px] border border-white/10 bg-white/6 p-5"
                    >
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-[rgba(199,244,100,0.14)] px-3 py-1 text-xs font-semibold text-[var(--accent-bright)]">
                          {item.method}
                        </span>
                        <code className="font-[family:var(--font-mono)] text-sm text-white">
                          {item.route}
                        </code>
                      </div>
                      <p className="mt-4 text-sm leading-6 text-slate-300">{item.summary}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 rounded-[24px] border border-white/10 bg-[rgba(5,10,20,0.5)] p-5">
                  <div className="flex items-center gap-3">
                    <Telescope className="h-5 w-5 text-[var(--accent-bright)]" />
                    <p className="text-sm font-semibold text-white">Q&amp;A payload example</p>
                  </div>
                  <pre className="mt-4 overflow-x-auto font-[family:var(--font-mono)] text-sm leading-7 text-slate-300">
                    <code>{`POST /v1/questions\n{\n  "workspace_id": "ws_research",\n  "paper_id": "paper_1024",\n  "question": "What changed versus the prior benchmark?"\n}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
