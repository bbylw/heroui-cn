import { MARQUEE_ITEMS } from '../lib/data'

export default function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]
  return (
    <section className="relative border-y border-[var(--border)] bg-[var(--surface)] py-6">
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="font-display text-2xl font-500 italic text-[var(--muted-foreground)] transition-colors hover:text-[var(--accent)] sm:text-3xl">
                {item}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
