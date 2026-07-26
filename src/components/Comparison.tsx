import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { COMPARISON } from '../lib/data'
import { useReveal } from '../lib/hooks'

export default function Comparison() {
  const { ref, visible } = useReveal()

  return (
    <section
      id="comparison"
      ref={ref}
      className="relative overflow-hidden border-y border-[var(--border)] bg-[var(--surface)] py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <motion.span
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-block text-xs font-700 uppercase tracking-[0.2em] text-[var(--accent)]"
          >
            06 — 对比
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-700 leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            对比其他方案
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-[var(--muted-foreground)] text-pretty"
          >
            了解 HeroUI 与其他流行 React 组件库之间的关键差异。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {COMPARISON.map((lib, i) => (
            <motion.div
              key={lib.name}
              initial={{ opacity: 0, y: 24 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className={`relative overflow-hidden rounded-2xl border p-6 transition-all duration-500 ${
                lib.highlight
                  ? 'border-[var(--accent)] bg-[var(--background)] amber-glow lg:-translate-y-2'
                  : 'border-[var(--border)] bg-[var(--background)]'
              }`}
            >
              {lib.highlight && (
                <span className="absolute right-4 top-4 rounded-full bg-[var(--accent)] px-2.5 py-1 text-[10px] font-700 uppercase tracking-wider text-[var(--accent-foreground)]">
                  推荐
                </span>
              )}
              <h3
                className={`font-display text-2xl font-700 tracking-tight ${
                  lib.highlight ? 'text-[var(--accent)]' : ''
                }`}
              >
                {lib.name}
              </h3>
              <ul className="mt-6 space-y-3">
                {lib.points.map((point, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2.5 text-sm text-[var(--muted-foreground)]"
                  >
                    {lib.highlight ? (
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-[var(--accent)]"
                      />
                    ) : (
                      <X
                        size={16}
                        className="mt-0.5 shrink-0 text-[var(--ink-500,#544e44)]"
                      />
                    )}
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
