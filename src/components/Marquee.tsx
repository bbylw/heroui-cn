import { useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { Pause, Play } from 'lucide-react'
import { MARQUEE_ITEMS } from '../lib/data'

export default function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]
  const reduceMotion = useReducedMotion()
  const [paused, setPaused] = useState(false)

  return (
    <section
      id="marquee"
      className="relative border-y border-[var(--border)] bg-[var(--surface)] py-6"
    >
      <div className="flex overflow-hidden" aria-hidden="true">
        <div
          className="animate-marquee flex shrink-0 items-center gap-8 pr-8"
          style={{ animationPlayState: paused ? 'paused' : 'running' }}
        >
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

      {/* WCAG 2.2.2：自动滚动的装饰内容需要可暂停的控件 */}
      {!reduceMotion && (
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? '继续滚动' : '暂停滚动'}
          className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
        >
          {paused ? <Play size={12} aria-hidden="true" /> : <Pause size={12} aria-hidden="true" />}
        </button>
      )}
    </section>
  )
}
