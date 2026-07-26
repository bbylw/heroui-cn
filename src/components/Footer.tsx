import { motion } from 'framer-motion'
import { FOOTER_LINKS } from '../lib/data'
import { useReveal } from '../lib/hooks'

export default function Footer() {
  const { ref, visible } = useReveal()

  return (
    <footer ref={ref} className="relative overflow-hidden bg-[var(--background)] pt-24">
      {/* CTA 区 */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-12 text-center sm:p-20"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              background:
                'radial-gradient(circle at 50% 0%, var(--accent) 0%, transparent 60%)',
            }}
          />
          <div className="relative">
            <h2 className="font-display text-4xl font-700 leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              准备好开始
              <span className="text-gradient-amber italic"> 了吗？</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--muted-foreground)] text-pretty">
              加入数千个使用 HeroUI 构建的生产环境应用。开源、免费、AI 原生。
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://heroui.com/cn/docs/react/getting-started/quick-start"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center rounded-xl bg-[var(--accent)] px-7 text-base font-600 text-[var(--accent-foreground)] transition-transform hover:scale-[1.02]"
              >
                查看文档
              </a>
              <a
                href="https://github.com/heroui-inc/heroui"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center rounded-xl border border-[var(--border)] bg-[var(--background)] px-7 text-base font-600 transition-colors hover:bg-[var(--muted)]"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 链接区 */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Logo 列 */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--accent)] font-display text-lg font-900 text-[var(--accent-foreground)]">
                H
              </span>
              <span className="font-display text-xl font-700 tracking-tight">
                HeroUI
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--muted-foreground)]">
              为 AI 时代而生的 React 组件库。基于 React Aria 与 Tailwind CSS
              v4 构建。
            </p>
          </div>

          {/* 链接列 */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-xs font-700 uppercase tracking-widest text-[var(--muted-foreground)]">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--accent)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 底部栏 */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-8 sm:flex-row">
          <p className="text-xs text-[var(--muted-foreground)]">
            © 2026 HeroUI. 基于 Apache License 2.0 协议开源。
          </p>
          <p className="font-mono text-xs text-[var(--muted-foreground)]">
            Built with HeroUI · React 19 · Tailwind v4 · Vite
          </p>
        </div>
      </div>
    </footer>
  )
}
