import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Palette,
  Sparkles,
  Moon,
  Sun,
  Monitor,
  Code2,
  Zap,
} from 'lucide-react'
import { Button } from '@heroui/react'
import {
  STYLING_TECHNIQUES,
  ANIMATION_TOPICS,
  DARK_MODE_INFO,
} from '../lib/data'
import { useReveal } from '../lib/hooks'

type Topic = {
  title: string
  badge: string
  desc: string
  code: string
}

function TopicCard({
  topic,
  index,
  visible,
}: {
  topic: Topic
  index: number
  visible: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
      className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-all duration-500 hover:border-[var(--accent)]"
    >
      <div className="flex items-start justify-between gap-3 p-5 pb-3">
        <div className="flex-1">
          <h4 className="font-display text-lg font-700">{topic.title}</h4>
          <p className="mt-1.5 text-xs leading-relaxed text-[var(--muted-foreground)]">
            {topic.desc}
          </p>
        </div>
        <span className="shrink-0 rounded-md border border-[var(--border)] bg-[var(--muted)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--accent)]">
          {topic.badge}
        </span>
      </div>
      <div className="border-t border-[var(--border)] bg-[var(--ink-950,#0a0908)] p-4">
        <pre className="overflow-x-auto text-xs leading-relaxed">
          <code className="font-mono text-[var(--ink-100,#e8e3d6)]">
            {topic.code.split('\n').map((line, j) => (
              <div key={j} className="whitespace-pre">
                {line || ' '}
              </div>
            ))}
          </code>
        </pre>
      </div>
    </motion.div>
  )
}

function SubHeader({
  icon,
  title,
  caption,
  visible,
  delay = 0,
}: {
  icon: React.ReactNode
  title: string
  caption: string
  visible: boolean
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="mb-6 flex items-center gap-3"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--muted)] text-[var(--accent)]">
        {icon}
      </div>
      <div>
        <h3 className="font-display text-xl font-700">{title}</h3>
        <p className="mt-0.5 text-xs text-[var(--muted-foreground)]">{caption}</p>
      </div>
    </motion.div>
  )
}

export default function Advanced() {
  const { ref, visible } = useReveal({ threshold: 0.05 })
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system')

  return (
    <section
      id="advanced"
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
            06 — 进阶用法
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-700 leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            样式 · 动画
            <span className="text-gradient-amber italic"> · 深色模式</span>
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md text-base leading-relaxed text-[var(--muted-foreground)] text-pretty"
        >
          HeroUI 把样式能力交到你手里：从 className 到 BEM、从渲染属性到
          tailwind-variants；动画既尊重无障碍也支持 Framer Motion；深色模式由
          CSS 驱动，无需 Provider。
        </motion.p>
      </div>

      {/* 1. 样式 */}
      <div className="mb-24">
        <SubHeader
          icon={<Palette size={18} />}
          title="样式方案"
          caption="Tailwind 工具类 · 数据属性 · BEM · 渲染属性 · tailwind-variants"
          visible={visible}
          delay={0.25}
        />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {STYLING_TECHNIQUES.map((t, i) => (
            <TopicCard
              key={t.title}
              topic={t as unknown as Topic}
              index={i}
              visible={visible}
            />
          ))}
        </div>
      </div>

      {/* 2. 动画 */}
      <div className="mb-24">
        <SubHeader
          icon={<Sparkles size={18} />}
          title="动画与过渡"
          caption="内置数据属性 · Tailwind 工具 · Framer Motion · prefers-reduced-motion"
          visible={visible}
          delay={0.3}
        />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {ANIMATION_TOPICS.map((t, i) => (
            <TopicCard
              key={t.title}
              topic={t as unknown as Topic}
              index={i}
              visible={visible}
            />
          ))}
        </div>

        {/* 动画演示卡 — 实时 GPU 变换 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6"
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap size={16} className="text-[var(--accent)]" />
              <h4 className="font-display text-base font-700">
                GPU 加速属性演示
              </h4>
            </div>
            <span className="font-mono text-[10px] text-[var(--muted-foreground)]">
              animate: transform / opacity
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {[
              { label: 'translateY', cls: 'hover:-translate-y-2' },
              { label: 'scale', cls: 'hover:scale-110' },
              { label: 'rotate', cls: 'hover:rotate-6' },
              { label: 'opacity', cls: 'hover:opacity-60' },
            ].map((demo) => (
              <div
                key={demo.label}
                className={`flex h-20 w-32 cursor-pointer flex-col items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--muted)] transition-all duration-300 ${demo.cls}`}
              >
                <span className="font-display text-sm font-700">
                  Hover me
                </span>
                <code className="mt-1 font-mono text-[10px] text-[var(--accent)]">
                  {demo.label}
                </code>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 3. 深色模式 */}
      <div>
        <SubHeader
          icon={<Moon size={18} />}
          title="深色模式"
          caption="CSS 驱动 · next-themes · useTheme · 自定义主题名称"
          visible={visible}
          delay={0.35}
        />

        {/* 实时主题切换演示 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-6 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6"
        >
          <div className="mb-4 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <h4 className="font-display text-base font-700">
                主题切换器（演示）
              </h4>
              <p className="mt-1 text-xs text-[var(--muted-foreground)]">
                模拟 useTheme 钩子的三态选择：Light · Dark · System
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant={theme === 'light' ? 'primary' : 'secondary'}
                onPress={() => setTheme('light')}
              >
                <Sun size={14} className="mr-1" />
                Light
              </Button>
              <Button
                size="sm"
                variant={theme === 'dark' ? 'primary' : 'secondary'}
                onPress={() => setTheme('dark')}
              >
                <Moon size={14} className="mr-1" />
                Dark
              </Button>
              <Button
                size="sm"
                variant={theme === 'system' ? 'primary' : 'secondary'}
                onPress={() => setTheme('system')}
              >
                <Monitor size={14} className="mr-1" />
                System
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              { label: 'bg-background', var: '--background' },
              { label: 'bg-surface', var: '--surface' },
              { label: 'text-foreground', var: '--foreground' },
              { label: 'accent', var: '--accent' },
              { label: 'success', var: '--success' },
              { label: 'danger', var: '--danger' },
            ].map((sw) => (
              <div
                key={sw.label}
                className="overflow-hidden rounded-xl border border-[var(--border)]"
              >
                <div
                  className="h-16 w-full"
                  style={{ background: `var(${sw.var}, var(--accent))` }}
                />
                <div className="bg-[var(--surface)] p-2">
                  <code className="font-mono text-[10px] text-[var(--muted-foreground)]">
                    {sw.label}
                  </code>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 font-mono text-[10px] text-[var(--muted-foreground)]">
            当前选择: <span className="text-[var(--accent)]">{theme}</span>{' '}
            · 这些色块读取的是当前页面 CSS 变量
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {DARK_MODE_INFO.map((t, i) => (
            <TopicCard
              key={t.title}
              topic={t as unknown as Topic}
              index={i}
              visible={visible}
            />
          ))}
        </div>
      </div>

      {/* 引导卡 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-16 flex flex-col items-start justify-between gap-4 rounded-2xl border border-[var(--accent)]/40 bg-[var(--accent-soft,var(--muted))] p-6 sm:flex-row sm:items-center"
      >
        <div className="flex items-center gap-3">
          <Code2 size={20} className="text-[var(--accent)]" />
          <div>
            <h4 className="font-display text-base font-700">
              想看完整组件 API？
            </h4>
            <p className="text-xs text-[var(--muted-foreground)]">
              每个 HeroUI 组件都有详细的 props、变体与 CSS 类名参考。
            </p>
          </div>
        </div>
        <a
          href="https://heroui.com/cn/docs/react/components"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-600 text-[var(--accent-foreground)] transition-transform hover:scale-[1.03]"
        >
          浏览组件文档
          <ArrowRightIcon />
        </a>
      </motion.div>
    </section>
  )
}

function ArrowRightIcon() {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
