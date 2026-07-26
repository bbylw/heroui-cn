import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@heroui/react'
import { HERO_STATS } from '../lib/data'

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-grid pt-32">
      {/* 动态背景层 */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* 琥珀渐变光晕 */}
        <div
          className="animate-float-slow absolute -left-32 top-20 h-[600px] w-[600px] rounded-full opacity-30 blur-[120px]"
          style={{
            background:
              'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
          }}
        />
        <div
          className="animate-pulse-glow absolute right-0 top-40 h-[500px] w-[500px] rounded-full opacity-20 blur-[100px]"
          style={{
            background:
              'radial-gradient(circle, #e8a87c 0%, transparent 70%)',
          }}
        />
        {/* 底部渐变遮罩 */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 非对称网格 */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-6">
          {/* 左侧主内容 — 跨 8 列 */}
          <div className="lg:col-span-8">
            {/* 标签 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-xs font-500 text-[var(--muted-foreground)]"
            >
              <Sparkles size={13} className="text-[var(--accent)]" />
              <span>基于 React Aria + Tailwind CSS v4</span>
              <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
              <span>React 19 就绪</span>
            </motion.div>

            {/* 主标题 — 混合衬线/无衬线 */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-[clamp(2.8rem,8vw,6.5rem)] font-700 leading-[0.98] tracking-tight text-balance"
            >
              <span className="block">为 AI 时代而生的</span>
              <span className="block">
                <span className="text-gradient-amber italic">React</span>{' '}
                组件库
              </span>
            </motion.h1>

            {/* 副标题 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 max-w-[52ch] text-lg leading-relaxed text-[var(--muted-foreground)] text-pretty sm:text-xl"
            >
              HeroUI 将 React Aria 在可访问性方面的严谨，与 Tailwind CSS v4
              的实用优先样式理念结合在一起。简洁的复合组件 API，无需
              Provider 包裹层，开箱即用。
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button
                variant="primary"
                size="lg"
                className="group h-12 px-7 text-base"
                onPress={() =>
                  (window.location.href = '#quick-start')
                }
              >
                快速开始
                <ArrowRight
                  size={18}
                  className="ml-1 transition-transform group-hover:translate-x-1"
                />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="h-12 px-7 text-base"
                onPress={() =>
                  (window.location.href = '#components')
                }
              >
                浏览组件
              </Button>
            </motion.div>

            {/* 安装命令 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10 inline-flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 font-mono text-sm"
            >
              <span className="text-[var(--accent)]">$</span>
              <span className="text-[var(--muted-foreground)]">pnpm</span>
              <span className="text-[var(--foreground)]">add</span>
              <span className="text-[var(--amber-soft)]">@heroui/react</span>
            </motion.div>
          </div>

          {/* 右侧 — 统计卡片 */}
          <div className="flex flex-col justify-end gap-4 lg:col-span-4">
            {HERO_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                className="glass group flex items-end justify-between rounded-2xl p-5"
              >
                <div>
                  <div className="font-display text-4xl font-700 tracking-tight text-[var(--foreground)] sm:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-500 uppercase tracking-widest text-[var(--muted-foreground)]">
                    {stat.label}
                  </div>
                </div>
                <div className="h-12 w-1 rounded-full bg-gradient-to-b from-[var(--accent)] to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* 滚动指示器 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-20 flex justify-center"
        >
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-[var(--border)] p-1.5">
            <div className="animate-scroll-line h-2 w-0.5 rounded-full bg-[var(--accent)]" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
