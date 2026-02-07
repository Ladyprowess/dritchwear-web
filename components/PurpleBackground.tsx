export function PurpleBackground() {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-[var(--brand-purple)]/25 blur-3xl" />
        <div className="absolute top-1/3 -right-40 h-[480px] w-[480px] rounded-full bg-[var(--brand-purple)]/15 blur-3xl" />
      </div>
    );
  }