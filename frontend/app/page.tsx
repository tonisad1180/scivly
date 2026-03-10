import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  ChartColumn,
  MessagesSquare,
  Orbit,
  Radar,
  Sparkles,
} from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  digestMoments,
  productPillars,
  surfaceCards,
  workflowSteps,
} from "@/lib/site-data";

const heroStats = [
  { label: "Sources watched", value: "12k+" },
  { label: "Digest latency", value: "< 6 min" },
  { label: "Figure coverage", value: "84%" },
];

const signalBoard = [
  {
    title: "New signal",
    body: "A multimodal reasoning paper hit two author watchlists and one agent workflow.",
    tone: "bg-[rgba(199,244,100,0.14)] text-[var(--accent-bright)]",
  },
  {
    title: "Digest ready",
    body: "Translation, figure extraction, and limitation notes are bundled for the morning brief.",
    tone: "bg-[rgba(56,189,248,0.12)] text-sky-300",
  },
  {
    title: "Follow-up question",
    body: "An operator asked how the paper compares against last month's retrieval benchmark.",
    tone: "bg-[rgba(251,146,60,0.12)] text-orange-300",
  },
];

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="float-slow absolute left-[8%] top-28 h-40 w-40 rounded-full bg-[rgba(199,244,100,0.12)] blur-3xl" />
        <div className="pulse-glow absolute right-[10%] top-52 h-56 w-56 rounded-full bg-[rgba(15,118,110,0.08)] blur-3xl" />
      </div>

      <SiteHeader />

      <main>
        <section className="px-4 pb-18 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="rise-in">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/70 px-4 py-2 text-sm font-semibold text-[var(--ink-soft)]">
                <Sparkles className="h-4 w-4 text-[var(--accent)]" />
                Built for paper subscriptions, digests, and follow-up research ops
              </div>
              <h1 className="text-balance mt-6 font-[family:var(--font-display)] text-5xl font-semibold tracking-tight text-[var(--ink)] sm:text-6xl lg:text-7xl">
                The research intelligence layer for fast-moving paper teams.
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-[var(--ink-soft)]">
                Scivly monitors topics, authors, and labs, turns papers into translated briefings,
                and keeps every delivery, retry, and follow-up question inside one clean console.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/docs"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--ink)] px-6 py-3 text-base font-semibold text-white hover:-translate-y-0.5 hover:bg-[var(--surface-dark-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                >
                  Explore docs
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/admin"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-white/70 px-6 py-3 text-base font-semibold text-[var(--ink)] hover:border-[var(--accent)] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                >
                  View admin console
                  <Orbit className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {heroStats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[24px] border border-[var(--line)] bg-white/55 px-5 py-4"
                  >
                    <p className="text-sm text-[var(--muted)]">{item.label}</p>
                    <p className="mt-2 font-[family:var(--font-display)] text-3xl font-semibold">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rise-in rounded-[36px] p-[1px] [animation-delay:120ms] dark-panel">
              <div className="grid-pattern rounded-[35px] p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-white/55">
                      Operator console
                    </p>
                    <h2 className="mt-3 font-[family:var(--font-display)] text-3xl font-semibold text-white">
                      See the entire paper pipeline at a glance.
                    </h2>
                  </div>
                  <div className="rounded-full bg-white/8 px-3 py-2 text-sm text-white/72">
                    Live queue
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {signalBoard.map((item) => (
                    <div key={item.title} className="rounded-[24px] border border-white/10 bg-white/6 p-4">
                      <div className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${item.tone}`}>
                        {item.title}
                      </div>
                      <p className="mt-4 text-sm leading-6 text-slate-200">{item.body}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[28px] border border-white/10 bg-[rgba(5,10,20,0.52)] p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-white">Morning digest run</p>
                    <p className="text-sm text-[var(--accent-bright)]">88% auto-routed</p>
                  </div>
                  <div className="mt-5 space-y-4">
                    {digestMoments.map((item, index) => (
                      <div key={item} className="flex gap-3">
                        <div className="mt-1 flex flex-col items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-[var(--accent-bright)]" />
                          {index < digestMoments.length - 1 ? (
                            <div className="mt-2 h-10 w-px bg-white/12" />
                          ) : null}
                        </div>
                        <p className="text-sm leading-6 text-slate-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[32px] border border-[var(--line)] bg-[rgba(255,255,255,0.66)] px-6 py-8 sm:px-8">
            <div className="grid gap-5 md:grid-cols-3">
              <div className="flex gap-4 rounded-[26px] border border-[var(--line)] bg-white/70 p-5">
                <Radar className="mt-1 h-5 w-5 text-[var(--accent)]" />
                <div>
                  <p className="font-semibold text-[var(--ink)]">Signal over volume</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    Watchlists, author graphs, and team-specific scoring keep the queue usable.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 rounded-[26px] border border-[var(--line)] bg-white/70 p-5">
                <ChartColumn className="mt-1 h-5 w-5 text-[var(--accent-coral)]" />
                <div>
                  <p className="font-semibold text-[var(--ink)]">Operational visibility</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    Intake, enrichment, delivery, and Q&amp;A are measurable instead of hidden in scripts.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 rounded-[26px] border border-[var(--line)] bg-white/70 p-5">
                <MessagesSquare className="mt-1 h-5 w-5 text-[var(--accent-strong)]" />
                <div>
                  <p className="font-semibold text-[var(--ink)]">Evidence-grounded answers</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    Follow-up questions stay attached to the paper, digest, and retrieval trail that produced them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="product" className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Product surfaces"
              title="One product language across the landing page, docs, and admin console."
              body="The site is designed to feel like a real operating surface for research teams: editorial enough to pitch the product, technical enough to trust in production."
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {productPillars.map((pillar, index) => {
                const Icon = pillar.icon;

                return (
                  <div
                    key={pillar.title}
                    className={`glass-panel rounded-[30px] p-6 sm:p-7 ${
                      index % 2 === 0 ? "lg:-translate-y-4" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="rounded-2xl bg-[rgba(15,118,110,0.08)] p-3 text-[var(--accent)]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                        Workflow primitive
                      </p>
                    </div>
                    <h3 className="mt-6 font-[family:var(--font-display)] text-2xl font-semibold">
                      {pillar.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-[var(--ink-soft)]">
                      {pillar.description}
                    </p>
                    <p className="mt-5 border-t border-[var(--line)] pt-5 text-sm leading-6 text-[var(--muted)]">
                      {pillar.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="workflow" className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[40px] p-[1px] dark-panel">
            <div className="rounded-[39px] px-6 py-10 sm:px-8 lg:px-10">
              <SectionHeading
                eyebrow="Workflow"
                title="Research operations should move from source sync to follow-up without losing context."
                body="Scivly is structured around the full paper lifecycle, so ingestion, enrichment, routing, and delivery can be observed in one place."
                light
              />

              <div className="mt-10 grid gap-5 lg:grid-cols-4">
                {workflowSteps.map((step) => (
                  <div key={step.eyebrow} className="rounded-[28px] border border-white/10 bg-white/6 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent-bright)]">
                      {step.eyebrow}
                    </p>
                    <h3 className="mt-4 font-[family:var(--font-display)] text-2xl font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-300">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Beyond the hero"
              title="Scivly needs more than a homepage, so the docs and admin console are designed from day one."
              body="The frontend foundation includes a documentation experience for onboarding and an operator-facing admin surface for observing the system."
            />

            <div className="mt-10 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
              <div className="glass-panel rounded-[32px] p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                      Documentation
                    </p>
                    <h3 className="mt-3 font-[family:var(--font-display)] text-3xl font-semibold">
                      A docs surface that feels product-native.
                    </h3>
                  </div>
                  <BookOpenText className="h-9 w-9 text-[var(--accent)]" />
                </div>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {surfaceCards.slice(0, 2).map((card) => {
                    const Icon = card.icon;

                    return (
                      <div key={card.title} className="rounded-[24px] border border-[var(--line)] bg-white/70 p-5">
                        <Icon className="h-5 w-5 text-[var(--accent)]" />
                        <h4 className="mt-4 text-lg font-semibold">{card.title}</h4>
                        <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                          {card.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <Link
                  href="/docs"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-[var(--surface-dark-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                >
                  Browse docs
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="rounded-[32px] p-[1px] dark-panel">
                <div className="rounded-[31px] p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-bright)]">
                        Admin console
                      </p>
                      <h3 className="mt-3 font-[family:var(--font-display)] text-3xl font-semibold text-white">
                        Inspect queues, delivery, and cost posture.
                      </h3>
                    </div>
                    <ChartColumn className="h-9 w-9 text-[var(--accent-bright)]" />
                  </div>

                  <div className="mt-8 space-y-4">
                    {surfaceCards.slice(2).map((card) => {
                      const Icon = card.icon;

                      return (
                        <div
                          key={card.title}
                          className="flex gap-4 rounded-[24px] border border-white/10 bg-white/6 p-5"
                        >
                          <div className="rounded-2xl bg-white/8 p-3 text-[var(--accent-bright)]">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white">{card.title}</h4>
                            <p className="mt-2 text-sm leading-6 text-slate-300">
                              {card.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <Link
                    href="/admin"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[var(--ink)] hover:-translate-y-0.5 hover:bg-[var(--accent-bright)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    Open admin preview
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
