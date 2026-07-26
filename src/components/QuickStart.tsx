import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Copy } from 'lucide-react'
import { INSTALL_STEPS } from '../lib/data'
import { useReveal } from '../lib/hooks'

function CodeBlock({ code, lang }: { code: string; lang: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* noop */
    }
  }

  return (
    <div className="group relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--ink-950,#0a0908)]">
      {/* 顶部栏 */}
      <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          <span className="ml-3 font-mono text-xs text-[var(--muted-foreground)]">
            {lang}
          </span>
        </div>
        <button
          onClick={copy}
          className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-[var(--muted-foreground)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
          aria-label="复制代码"
        >
          {copied ? (
            <>
              <Check size={13} className="text-[var(--accent)]" />
              <span className="text-[var(--accent)]">已复制</span>
            </>
          ) : (
            <>
              <Copy size={13} />
              <span>复制</span>
            </>
          )}
        </button>
      </div>
      {/* 代码内容 */}
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
        <code className="font-mono text-[var(--ink-100,#e8e3d6)]">
          {code.split('\n').map((line, i) => (
            <div key={i} className="flex">
              <span className="mr-4 inline-block w-6 select-none text-right text-[var(--ink-600,#3a362f)]">
                {i + 1}
              </span>
              <span className="whitespace-pre">{line || ' '}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  )
}

export default function QuickStart() {
  const { ref, visible } = useReveal()

  return (
    <section
      id="quick-start"
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
            04 — 快速开始
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-700 leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            三步开始，
            <span className="text-gradient-amber italic">无需配置</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-[var(--muted-foreground)] text-pretty"
          >
            只需几分钟即可开始使用 HeroUI v3。无需 Provider 包裹层，导入样式即可使用。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {INSTALL_STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <span className="font-display text-5xl font-900 text-[var(--accent)] opacity-30">
                  {step.step}
                </span>
                <div>
                  <h3 className="font-display text-xl font-700">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                    {step.desc}
                  </p>
                </div>
              </div>
              <CodeBlock code={step.code} lang={step.lang} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
