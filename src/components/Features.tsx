import { motion } from 'framer-motion'
import {
  Accessibility,
  Wind,
  Boxes,
  Zap,
  Bot,
  ShieldCheck,
} from 'lucide-react'
import { FEATURES } from '../lib/data'
import { useReveal } from '../lib/hooks'

const ICONS = {
  Accessibility,
  Wind,
  Boxes,
  Zap,
  Bot,
  ShieldCheck,
} as const

export default function Features() {
  const { ref, visible } = useReveal()

  return (
    <section
      id="features"
      ref={ref}
      className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* 章节标题 */}
      <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-block text-xs font-700 uppercase tracking-[0.2em] text-[var(--accent)]"
          >
            01 — 特性
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-700 leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            为什么选择
            <br />
            <span className="text-gradient-amber italic">HeroUI?</span>
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md text-base leading-relaxed text-[var(--muted-foreground)] text-pretty"
        >
          HeroUI（前身为 NextUI）是一套生产就绪的 React
          组件库，将可访问性的严谨与现代样式引擎的效率结合在一起。
        </motion.p>
      </div>

      {/* Bento 网格 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[minmax(150px,auto)]">
        {FEATURES.map((feature, i) => {
          const Icon = ICONS[feature.icon as keyof typeof ICONS]
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-6 transition-all duration-500 hover:border-[var(--accent)] ${
                feature.span
              } ${
                feature.accent
                  ? 'border-[var(--accent)] bg-gradient-to-br from-[color-mix(in_srgb,var(--accent)_15%,var(--surface))] to-[var(--surface)]'
                  : 'border-[var(--border)] bg-[var(--surface)]'
              }`}
            >
              {/* 悬停光晕 */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div
                  className="absolute -right-20 -top-20 h-40 w-40 rounded-full opacity-20 blur-3xl"
                  style={{
                    background:
                      'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
                  }}
                />
              </div>

              <div className="relative">
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-500 group-hover:scale-110 ${
                    feature.accent
                      ? 'bg-[var(--accent)] text-[var(--accent-foreground)]'
                      : 'bg-[var(--muted)] text-[var(--accent)]'
                  }`}
                >
                  <Icon size={22} />
                </div>
                <h3
                  className={`font-display font-700 tracking-tight ${
                    feature.accent ? 'text-2xl sm:text-3xl' : 'text-xl'
                  }`}
                >
                  {feature.title}
                </h3>
              </div>

              <p className="relative mt-4 text-sm leading-relaxed text-[var(--muted-foreground)]">
                {feature.desc}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
