import { motion } from 'framer-motion'
import { Palette, Layers, Code2 } from 'lucide-react'
import { COLOR_SYSTEM, SURFACE_LAYERS, THEMING_CONCEPTS } from '../lib/data'
import { useReveal } from '../lib/hooks'

export default function Theming() {
  const { ref, visible } = useReveal()

  return (
    <section
      id="theming"
      ref={ref}
      className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8"
    >
      <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-block text-xs font-700 uppercase tracking-[0.2em] text-[var(--accent)]"
          >
            04 — 主题系统
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-700 leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            语义化
            <span className="text-gradient-amber italic"> 色彩体系</span>
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md text-base leading-relaxed text-[var(--muted-foreground)] text-pretty"
        >
          颜色围绕语义意图构建，而非堆砌视觉色板。一小套有意义的色彩角色，覆盖绝大多数界面需求。
        </motion.p>
      </div>

      {/* 语义色板 */}
      <div className="mb-16">
        <div className="mb-6 flex items-center gap-2">
          <Palette size={18} className="text-[var(--accent)]" />
          <h3 className="font-display text-xl font-700">语义色板</h3>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COLOR_SYSTEM.map((color, i) => (
            <motion.div
              key={color.name}
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-all duration-500 hover:border-[var(--accent)]"
            >
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h4 className="font-display text-lg font-700">{color.name}</h4>
                  <span className="font-mono text-xs text-[var(--muted-foreground)]">
                    {color.en}
                  </span>
                </div>
                <code className="rounded-md bg-[var(--muted)] px-2 py-1 font-mono text-[11px] text-[var(--accent)]">
                  {color.var}
                </code>
              </div>
              <p className="mb-4 text-xs leading-relaxed text-[var(--muted-foreground)]">
                {color.desc}
              </p>
              {/* 色块 */}
              <div className="flex gap-1.5">
                {color.swatches.map((sw) => (
                  <div
                    key={sw.label}
                    className="group/sw flex-1 overflow-hidden rounded-lg"
                    title={`${sw.label}: ${sw.var}`}
                  >
                    <div
                      className="h-14 w-full transition-transform duration-300 group-hover/sw:scale-105"
                      style={{ background: `var(${sw.var}, var(--accent))` }}
                    />
                    <div className="mt-1.5 text-center">
                      <div className="text-[11px] font-500 text-[var(--foreground)]">
                        {sw.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 表面层级 */}
      <div className="mb-16">
        <div className="mb-6 flex items-center gap-2">
          <Layers size={18} className="text-[var(--accent)]" />
          <h3 className="font-display text-xl font-700">表面与背景层级</h3>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {SURFACE_LAYERS.map((layer, i) => (
            <motion.div
              key={layer.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={visible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
              className="overflow-hidden rounded-xl border border-[var(--border)]"
            >
              <div
                className="h-20 w-full"
                style={{ background: `var(${layer.var}, var(--surface))` }}
              />
              <div className="bg-[var(--surface)] p-3">
                <div className="text-xs font-600">{layer.label}</div>
                <div className="mt-0.5 text-[11px] text-[var(--muted-foreground)]">
                  {layer.desc}
                </div>
                <code className="mt-1 block font-mono text-[11px] text-[var(--accent)]">
                  {layer.var}
                </code>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 主题概念与代码 */}
      <div>
        <div className="mb-6 flex items-center gap-2">
          <Code2 size={18} className="text-[var(--accent)]" />
          <h3 className="font-display text-xl font-700">主题工作原理</h3>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {THEMING_CONCEPTS.map((concept, i) => (
            <motion.div
              key={concept.title}
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
              className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]"
            >
              <div className="p-6">
                <h4 className="font-display text-lg font-700">{concept.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {concept.desc}
                </p>
              </div>
              <div className="border-t border-[var(--border)] bg-[var(--ink-950,#0a0908)] p-4">
                <pre className="overflow-x-auto text-xs leading-relaxed">
                  <code className="font-mono text-[var(--ink-100,#e8e3d6)]">
                    {concept.code.split('\n').map((line, j) => (
                      <div key={j} className="whitespace-pre">
                        {line || ' '}
                      </div>
                    ))}
                  </code>
                </pre>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
