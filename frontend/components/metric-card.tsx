type MetricCardProps = {
  label: string;
  value: string;
  detail: string;
};

export function MetricCard({ label, value, detail }: MetricCardProps) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/6 p-5">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-3 font-[family:var(--font-display)] text-4xl font-semibold text-white">
        {value}
      </p>
      <p className="mt-2 text-sm text-[var(--accent-bright)]">{detail}</p>
    </div>
  );
}
