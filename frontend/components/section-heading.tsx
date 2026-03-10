type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body: string;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p
        className={`mb-4 text-sm font-semibold uppercase tracking-[0.28em] ${
          light ? "text-white/64" : "text-[var(--accent-strong)]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-[family:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-[var(--ink)]"
        }`}
      >
        {title}
      </h2>
      <p className={`mt-4 text-lg leading-8 ${light ? "text-slate-300" : "text-[var(--muted)]"}`}>
        {body}
      </p>
    </div>
  );
}
