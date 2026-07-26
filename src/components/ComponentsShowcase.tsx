import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Button,
  Switch,
  Slider,
  Checkbox,
  Badge,
  Chip,
  ProgressBar,
  Spinner,
  Alert,
  Input,
} from '@heroui/react'
import { Heart, Bell, Search, Check } from 'lucide-react'
import { COMPONENT_CATEGORIES, BUTTON_VARIANTS } from '../lib/data'
import { useReveal } from '../lib/hooks'

export default function ComponentsShowcase() {
  const { ref, visible } = useReveal()
  const [switchOn, setSwitchOn] = useState(true)
  const [checked, setChecked] = useState(true)
  const [sliderVal, setSliderVal] = useState<number>(60)
  const [progress, setProgress] = useState<number>(72)

  return (
    <section
      id="components"
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
            03 — 组件
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-700 leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            50+ 组件，
            <span className="text-gradient-amber italic">开箱即用</span>
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md text-base leading-relaxed text-[var(--muted-foreground)] text-pretty"
        >
          每个组件都带有流畅的动画、精致的无障碍支持。以下是真实可交互的
          HeroUI 组件演示。
        </motion.p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        {/* 大卡片 — 交互组件 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass relative overflow-hidden rounded-2xl p-8 lg:col-span-7"
        >
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-display text-xl font-700">交互组件</h3>
            <Badge variant="primary" size="sm">
              可交互
            </Badge>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            {/* Switch */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-500 uppercase tracking-wider text-[var(--muted-foreground)]">
                Switch
              </span>
              <Switch
                isSelected={switchOn}
                onChange={setSwitchOn}
                aria-label="开关"
              />
            </div>

            {/* Checkbox */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-500 uppercase tracking-wider text-[var(--muted-foreground)]">
                Checkbox
              </span>
              <Checkbox
                isSelected={checked}
                onChange={setChecked}
                aria-label="复选框"
              >
                <span className="text-sm">已选中</span>
              </Checkbox>
            </div>

            {/* Spinner */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-500 uppercase tracking-wider text-[var(--muted-foreground)]">
                Spinner
              </span>
              <Spinner size="md" aria-label="加载中" />
            </div>

            {/* Slider */}
            <div className="col-span-2 flex flex-col gap-2 sm:col-span-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-500 uppercase tracking-wider text-[var(--muted-foreground)]">
                  Slider
                </span>
                <span className="font-mono text-xs text-[var(--accent)]">
                  {sliderVal}%
                </span>
              </div>
              <Slider
                value={sliderVal}
                onChange={(v) => setSliderVal(v as number)}
                minValue={0}
                maxValue={100}
                aria-label="滑块"
              />
            </div>

            {/* Buttons */}
            <div className="col-span-2 flex flex-col gap-2">
              <span className="text-xs font-500 uppercase tracking-wider text-[var(--muted-foreground)]">
                Button 变体
              </span>
              <div className="flex flex-wrap gap-2">
                <Button size="sm" variant="primary">
                  Primary
                </Button>
                <Button size="sm" variant="secondary">
                  Secondary
                </Button>
                <Button size="sm" variant="ghost">
                  Ghost
                </Button>
                <Button
                  size="sm"
                  variant="primary"
                  isIconOnly
                  aria-label="收藏"
                >
                  <Heart size={16} />
                </Button>
              </div>
            </div>

            {/* Progress */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-500 uppercase tracking-wider text-[var(--muted-foreground)]">
                  Progress
                </span>
                <button
                  onClick={() =>
                    setProgress((p) => (p >= 100 ? 0 : p + 10))
                  }
                  className="font-mono text-xs text-[var(--accent)] hover:underline"
                >
                  {progress}%
                </button>
              </div>
              <ProgressBar value={progress} className="mt-1" />
            </div>
          </div>
        </motion.div>

        {/* 右侧 — 输入与反馈 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col gap-4 lg:col-span-5"
        >
          {/* Alert */}
          <div className="glass rounded-2xl p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display text-lg font-700">Alert</h3>
              <Bell size={16} className="text-[var(--accent)]" />
            </div>
            <Alert>
              <div className="flex items-center gap-2">
                <Check size={16} />
                <span className="text-sm">HeroUI 已成功安装！</span>
              </div>
            </Alert>
          </div>

          {/* Input */}
          <div className="glass rounded-2xl p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display text-lg font-700">Input</h3>
              <Search size={16} className="text-[var(--accent)]" />
            </div>
            <div className="relative w-full">
              <Search
                size={16}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]"
              />
              <Input
                placeholder="搜索组件..."
                className="w-full pl-10"
                aria-label="搜索组件"
                name="search"
              />
            </div>
          </div>

          {/* Chips & Badges */}
          <div className="glass rounded-2xl p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display text-lg font-700">Chip & Badge</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <Chip variant="primary">React 19</Chip>
              <Chip variant="secondary">Tailwind v4</Chip>
              <Chip variant="tertiary">TypeScript</Chip>
              <Badge variant="primary" size="sm">
                New
              </Badge>
              <Badge variant="secondary" size="sm">
                v3
              </Badge>
            </div>
          </div>
        </motion.div>

        {/* 组件分类列表 — 全宽 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="lg:col-span-12"
        >
          {/* Button 变体展示 */}
          <div className="mb-4 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-display text-lg font-700">
                Button 7 种变体
              </h3>
              <span className="text-xs text-[var(--muted-foreground)]">
                variant="primary | secondary | ..."
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
              {BUTTON_VARIANTS.map((v) => (
                <div
                  key={v.name}
                  className="flex flex-col items-center gap-2 rounded-xl border border-[var(--border)] p-3"
                >
                  <Button
                    size="sm"
                    variant={v.name as 'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost' | 'danger' | 'danger-soft'}
                  >
                    {v.label}
                  </Button>
                  <code className="font-mono text-[11px] text-[var(--muted-foreground)]">
                    {v.name}
                  </code>
                </div>
              ))}
            </div>
          </div>

          {/* 组件分类网格 */}
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-4 lg:grid-cols-8">
            {COMPONENT_CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="bg-[var(--surface)] p-5 transition-colors hover:bg-[var(--muted)]"
              >
                <h4 className="mb-3 text-xs font-700 uppercase tracking-wider text-[var(--accent)]">
                  {cat.title}
                </h4>
                <ul className="space-y-1.5">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="font-mono text-xs text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
