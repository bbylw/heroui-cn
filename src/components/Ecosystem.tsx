import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { ECOSYSTEM } from '../lib/data'
import { useReveal } from '../lib/hooks'

export default function Ecosystem() {
  const { ref, visible } = useReveal()

  return (
    <section
      id="ecosystem"
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
            02 — 生态系统
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-700 leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            HeroUI 生态系统
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-[var(--muted-foreground)] text-pretty"
          >
            从 Web 到移动端，从代码到对话 —— HeroUI
            为每一个界面提供一致的设计语言。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {ECOSYSTEM.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.url}
              target={item.url.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 transition-all duration-500 hover:border-[var(--accent)] hover:-translate-y-1"
            >
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <span className="rounded-full border border-[var(--border)] px-3 py-1 text-[11px] font-700 uppercase tracking-widest text-[var(--muted-foreground)]">
                    {item.tag}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-[var(--muted-foreground)] transition-all duration-300 group-hover:text-[var(--accent)] group-hover:rotate-45"
                  />
                </div>
                <h3 className="font-display text-2xl font-700 tracking-tight">
                  {item.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {item.desc}
                </p>
              </div>
              <span className="mt-6 inline-block w-fit rounded-lg bg-[var(--muted)] px-3 py-1 text-xs font-500 text-[var(--accent)]">
                {item.badge}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
