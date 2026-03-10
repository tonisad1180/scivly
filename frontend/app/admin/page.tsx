import { Activity, ArrowUpRight, Clock3, Layers3, RefreshCcw, Send } from "lucide-react";

import { MetricCard } from "@/components/metric-card";
import { adminMetrics, signalQueue } from "@/lib/site-data";

const pipelineStages = [
  { label: "Queued", count: 34, width: "38%" },
  { label: "Matched", count: 82, width: "68%" },
  { label: "Parsing", count: 17, width: "24%" },
  { label: "Enriched", count: 49, width: "56%" },
  { label: "Delivered", count: 110, width: "88%" },
];

const deliveryCards = [
  {
    title: "Email digest",
    detail: "Sent to 42 recipients at 09:00 with 99.6% delivery success.",
    icon: Send,
    tone: "text-[var(--accent-bright)]",
  },
  {
    title: "Webhook replay",
    detail: "3 queued events are ready for replay after signature verification.",
    icon: RefreshCcw,
    tone: "text-sky-300",
  },
  {
    title: "Manual triage",
    detail: "7 papers were escalated for review because figure extraction confidence dropped.",
    icon: Layers3,
    tone: "text-orange-300",
  },
];

const teamMoments = [
  "Founders digest generated in 4m 12s",
  "Vision track received 3 new monitor hits",
  "Question pipeline answered 18 follow-ups",
];

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {adminMetrics.map((metric) => (
          <MetricCard
            key={metric.label}
            label={metric.label}
            value={metric.value}
            detail={metric.detail}
          />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.12fr_0.88fr]">
        <div className="rounded-[30px] border border-white/10 bg-white/6 p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Pipeline health</p>
              <h2 className="mt-3 font-[family:var(--font-display)] text-3xl font-semibold text-white">
                Every stage stays observable.
              </h2>
            </div>
            <div className="rounded-full bg-[rgba(199,244,100,0.14)] px-3 py-2 text-sm font-semibold text-[var(--accent-bright)]">
              Healthy
            </div>
          </div>

          <div className="mt-8 space-y-5">
            {pipelineStages.map((stage) => (
              <div key={stage.label}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-slate-300">{stage.label}</span>
                  <span className="font-semibold text-white">{stage.count}</span>
                </div>
                <div className="h-3 rounded-full bg-white/8">
                  <div
                    className="h-3 rounded-full bg-[linear-gradient(90deg,var(--accent)_0%,var(--accent-bright)_100%)]"
                    style={{ width: stage.width }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[24px] border border-white/10 bg-[rgba(5,10,20,0.42)] p-4">
              <Clock3 className="h-5 w-5 text-[var(--accent-bright)]" />
              <p className="mt-4 text-sm text-slate-400">Mean parse time</p>
              <p className="mt-2 font-[family:var(--font-display)] text-3xl font-semibold text-white">
                2m 18s
              </p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-[rgba(5,10,20,0.42)] p-4">
              <Activity className="h-5 w-5 text-sky-300" />
              <p className="mt-4 text-sm text-slate-400">Figure extraction</p>
              <p className="mt-2 font-[family:var(--font-display)] text-3xl font-semibold text-white">
                84%
              </p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-[rgba(5,10,20,0.42)] p-4">
              <ArrowUpRight className="h-5 w-5 text-orange-300" />
              <p className="mt-4 text-sm text-slate-400">Manual review</p>
              <p className="mt-2 font-[family:var(--font-display)] text-3xl font-semibold text-white">
                7
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[30px] border border-white/10 bg-white/6 p-6">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Delivery log</p>
          <div className="mt-6 space-y-4">
            {deliveryCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="rounded-[24px] border border-white/10 bg-[rgba(5,10,20,0.4)] p-5"
                >
                  <Icon className={`h-5 w-5 ${card.tone}`} />
                  <h3 className="mt-4 text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{card.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
        <div className="rounded-[30px] border border-white/10 bg-white/6 p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Signal queue</p>
              <h2 className="mt-3 font-[family:var(--font-display)] text-3xl font-semibold text-white">
                Recent papers matched by workspace rules
              </h2>
            </div>
            <div className="rounded-full border border-white/10 bg-white/6 px-3 py-2 text-sm text-slate-300">
              Updated 3m ago
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-[24px] border border-white/10">
            <div className="grid grid-cols-[1.4fr_1fr_0.5fr_0.7fr] gap-4 bg-white/6 px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              <span>Paper</span>
              <span>Source</span>
              <span>Score</span>
              <span>Status</span>
            </div>
            {signalQueue.map((item) => (
              <div
                key={item.paper}
                className="grid grid-cols-1 gap-3 border-t border-white/10 px-5 py-5 text-sm md:grid-cols-[1.4fr_1fr_0.5fr_0.7fr] md:items-center md:gap-4"
              >
                <p className="font-semibold text-white">{item.paper}</p>
                <p className="text-slate-400">{item.source}</p>
                <p className="font-[family:var(--font-mono)] text-[var(--accent-bright)]">
                  {item.score}
                </p>
                <p className="text-slate-300">{item.status}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[30px] border border-white/10 bg-white/6 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Team moments</p>
            <div className="mt-6 space-y-4">
              {teamMoments.map((item) => (
                <div key={item} className="flex gap-4 rounded-[24px] border border-white/10 bg-[rgba(5,10,20,0.4)] p-4">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--accent-bright)]" />
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/6 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Next actions</p>
            <div className="mt-6 space-y-3">
              <div className="rounded-[22px] border border-white/10 bg-[rgba(5,10,20,0.4)] px-4 py-4 text-sm text-slate-300">
                Investigate figure parsing regression for image-heavy PDFs.
              </div>
              <div className="rounded-[22px] border border-white/10 bg-[rgba(5,10,20,0.4)] px-4 py-4 text-sm text-slate-300">
                Approve new digest schedule for Asia morning biotech watchlists.
              </div>
              <div className="rounded-[22px] border border-white/10 bg-[rgba(5,10,20,0.4)] px-4 py-4 text-sm text-slate-300">
                Review follow-up question quality on the retrieval benchmark workspace.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
