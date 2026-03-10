export function LogoMark({ dark = false }: { dark?: boolean }) {
  return (
    <div className="relative h-10 w-10 shrink-0">
      <div
        className={`absolute inset-0 rounded-2xl ${
          dark ? "bg-white/8" : "bg-[rgba(15,118,110,0.08)]"
        }`}
      />
      <div className="absolute left-1.5 top-1.5 h-4 w-4 rounded-full bg-[var(--accent)]" />
      <div className="absolute bottom-1.5 right-1.5 h-4 w-4 rounded-full bg-[var(--accent-bright)]" />
      <div className="absolute left-[1.1rem] top-[1.05rem] h-[2px] w-4 rotate-45 rounded-full bg-[var(--accent-coral)]" />
    </div>
  );
}
