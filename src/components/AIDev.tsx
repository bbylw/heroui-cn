import { motion } from 'framer-motion'
import { Server, FileText, Sparkles, Terminal } from 'lucide-react'
import { AI_TOOLS } from '../lib/data'
import { useReveal } from '../lib/hooks'

const ICONS = { Server, FileText, Sparkles } as const

export default function AIDev() {
  const { ref, visible } = useReveal()

  return (
    <section
      id="ai-dev"
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
            08 — AI 开发
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-700 leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            为 AI 辅助开发
            <br />
            <span className="text-gradient-amber italic">而生</span>
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md text-base leading-relaxed text-[var(--muted-foreground)] text-pretty"
        >
          HeroUI 专为 AI 辅助的开发工作流而打造。让 AI 助手真正理解你的组件库与主题。
        </motion.p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {AI_TOOLS.map((tool, i) => {
          const Icon = ICONS[tool.icon as keyof typeof ICONS]
          return (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 24 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-500 hover:border-[var(--accent)]"
            >
              {/* 悬停光晕 */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[var(--accent)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />

              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--muted)] text-[var(--accent)]">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-xl font-700">
                  {tool.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-[var(--accent)]">
                  {tool.name}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {tool.desc}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {tool.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-[var(--border)] bg-[var(--background)] px-2 py-1 font-mono text-[11px] text-[var(--muted-foreground)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* MCP 配置示例 */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-6 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--ink-950,#0a0908)]"
      >
        <div className="flex items-center gap-2 border-b border-[var(--border)] px-4 py-2.5">
          <Terminal size={14} className="text-[var(--accent)]" />
          <span className="font-mono text-xs text-[var(--muted-foreground)]">
            .cursor/mcp.json
          </span>
        </div>
        <pre className="overflow-x-auto p-5 text-sm leading-relaxed">
          <code className="font-mono text-[var(--ink-100,#e8e3d6)]">
            <span className="text-[var(--ink-400,#6f6859)]">{'{'}</span>
            {'\n  '}
            <span className="text-[#e8a87c]">"mcpServers"</span>
            <span className="text-[var(--ink-400,#6f6859)]">: {'{'}</span>
            {'\n    '}
            <span className="text-[#e8a87c]">"heroui-react"</span>
            <span className="text-[var(--ink-400,#6f6859)]">: {'{'}</span>
            {'\n      '}
            <span className="text-[#e8a87c]">"command"</span>
            <span className="text-[var(--ink-400,#6f6859)]">: </span>
            <span className="text-[#9a9282]">"npx"</span>
            <span className="text-[var(--ink-400,#6f6859)]">,</span>
            {'\n      '}
            <span className="text-[#e8a87c]">"args"</span>
            <span className="text-[var(--ink-400,#6f6859)]">: [</span>
            <span className="text-[#9a9282]">"-y"</span>
            <span className="text-[var(--ink-400,#6f6859)]">, </span>
            <span className="text-[#9a9282]">"@heroui/react-mcp@latest"</span>
            <span className="text-[var(--ink-400,#6f6859)]">]</span>
            {'\n    '}
            <span className="text-[var(--ink-400,#6f6859)]">{'}'}</span>
            {'\n  '}
            <span className="text-[var(--ink-400,#6f6859)]">{'}'}</span>
            {'\n'}
            <span className="text-[var(--ink-400,#6f6859)]">{'}'}</span>
          </code>
        </pre>
      </motion.div>
    </section>
  )
}
