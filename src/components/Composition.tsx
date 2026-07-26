import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ChevronDown,
  Boxes,
  Code2,
  ArrowRight,
  Pencil,
  Copy,
  Share2,
  Archive,
  Trash2,
  AlertTriangle,
} from 'lucide-react'
import {
  Card,
  Accordion,
  Tabs,
  Button,
  Badge,
  Modal,
  Dropdown,
} from '@heroui/react'
import {
  COMPOSITION_PATTERNS,
  FAQ_ITEMS,
  MODAL_DEMO,
  DROPDOWN_DEMO_ITEMS,
} from '../lib/data'
import { useReveal } from '../lib/hooks'

const DROPDOWN_ICONS: Record<string, typeof Pencil> = {
  Pencil,
  Copy,
  Share2,
  Archive,
  Trash2,
}

export default function Composition() {
  const { ref, visible } = useReveal()
  const [activePattern, setActivePattern] = useState(0)

  return (
    <section
      id="composition"
      ref={ref}
      className="relative overflow-hidden border-y border-[var(--border)] bg-[var(--surface)] py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={visible ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-4 inline-block text-xs font-700 uppercase tracking-[0.2em] text-[var(--accent)]"
            >
              05 — 组合模式
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl font-700 leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              复合组件
              <span className="text-gradient-amber italic"> API</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md text-base leading-relaxed text-[var(--muted-foreground)] text-pretty"
          >
            通过点语法访问所有子部分（Card.Header、Card.Content），取代层层嵌套的 props。灵活、可定制、类型安全。
          </motion.p>
        </div>

        {/* 真实组件演示 */}
        <div className="mb-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Card 真实演示 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="mb-3 flex items-center gap-2">
              <Boxes size={16} className="text-[var(--accent)]" />
              <h3 className="font-display text-lg font-700">Card 实例</h3>
              <Badge variant="secondary" size="sm">
                可交互
              </Badge>
            </div>
            <Card variant="secondary" className="p-0">
              <Card.Header className="p-5 pb-3">
                <Card.Title className="font-display text-xl font-700">
                  成为 Acme 创作者
                </Card.Title>
                <Card.Description className="text-sm text-[var(--muted-foreground)]">
                  前往 Acme 创作者中心立即注册，开始从粉丝与支持者处获得积分奖励。
                </Card.Description>
              </Card.Header>
              <Card.Content className="px-5 pb-3">
                <div className="flex items-center gap-3 rounded-xl bg-[var(--muted)] p-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent)] text-[var(--accent-foreground)] font-display font-700">
                    A
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-600">Acme Creator</div>
                    <div className="text-xs text-[var(--muted-foreground)]">
                      免费开始 · 无需信用卡
                    </div>
                  </div>
                </div>
              </Card.Content>
              <Card.Footer className="flex items-center justify-between p-5 pt-3">
                <span className="text-xs text-[var(--muted-foreground)]">
                  已有 12,847 位创作者加入
                </span>
                <Button size="sm" variant="primary">
                  立即注册
                  <ArrowRight size={14} className="ml-1" />
                </Button>
              </Card.Footer>
            </Card>
          </motion.div>

          {/* Accordion 真实演示 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="mb-3 flex items-center gap-2">
              <ChevronDown size={16} className="text-[var(--accent)]" />
              <h3 className="font-display text-lg font-700">Accordion FAQ</h3>
              <Badge variant="secondary" size="sm">
                可展开
              </Badge>
            </div>
            <Accordion
              className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background)]"
              allowsMultipleExpanded
            >
              {FAQ_ITEMS.slice(0, 4).map((item, i) => (
                <Accordion.Item
                  key={i}
                  id={`faq-${i}`}
                  className="border-b border-[var(--border)] last:border-b-0"
                >
                  <Accordion.Heading>
                    <Accordion.Trigger className="flex w-full items-center justify-between p-4 text-left hover:bg-[var(--muted)]">
                      <span className="text-sm font-600">{item.q}</span>
                      <ChevronDown
                        size={16}
                        className="shrink-0 text-[var(--accent)] transition-transform"
                      />
                    </Accordion.Trigger>
                  </Accordion.Heading>
                  <Accordion.Panel>
                    <Accordion.Body className="px-4 pb-4 text-sm leading-relaxed text-[var(--muted-foreground)]">
                      {item.a}
                    </Accordion.Body>
                  </Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          </motion.div>
        </div>

        {/* Tabs 真实演示 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-16"
        >
          <div className="mb-3 flex items-center gap-2">
            <Code2 size={16} className="text-[var(--accent)]" />
            <h3 className="font-display text-lg font-700">Tabs 实例</h3>
            <Badge variant="secondary" size="sm">
              可切换
            </Badge>
          </div>
          <Tabs className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-4">
            <Tabs.ListContainer>
              <Tabs.List aria-label="组件结构示例" className="flex gap-1">
                {COMPOSITION_PATTERNS.map((p) => (
                  <Tabs.Tab
                    key={p.component}
                    id={p.component}
                    className="rounded-lg px-4 py-2 text-sm font-600 text-[var(--ink-200,#c4bda9)] transition-colors hover:text-[var(--foreground)] data-[selected]:bg-[var(--accent)] data-[selected]:text-[var(--accent-foreground)]"
                  >
                    {p.component}
                  </Tabs.Tab>
                ))}
              </Tabs.List>
            </Tabs.ListContainer>
            {COMPOSITION_PATTERNS.map((p) => (
              <Tabs.Panel key={p.component} id={p.component} className="pt-4">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <h4 className="font-display text-base font-700">
                        {p.title}
                      </h4>
                      <div className="flex gap-1">
                        {p.variants.map((v) => (
                          <span
                            key={v}
                            className="rounded-md border border-[var(--border)] px-2 py-0.5 font-mono text-[11px] text-[var(--muted-foreground)]"
                          >
                            {v}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                      {p.desc}
                    </p>
                  </div>
                  <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--ink-950,#0a0908)]">
                    <pre className="overflow-x-auto p-4 text-xs leading-relaxed">
                      <code className="font-mono text-[var(--ink-100,#e8e3d6)]">
                        {p.structure.split('\n').map((line, j) => (
                          <div key={j} className="whitespace-pre">
                            {line || ' '}
                          </div>
                        ))}
                      </code>
                    </pre>
                  </div>
                </div>
              </Tabs.Panel>
            ))}
          </Tabs>
        </motion.div>

        {/* Modal 与 Dropdown 真实演示 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mb-16 grid grid-cols-1 gap-6 lg:grid-cols-2"
        >
          {/* Modal 演示 */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <AlertTriangle size={16} className="text-[var(--accent)]" />
              <h3 className="font-display text-lg font-700">Modal 实例</h3>
              <Badge variant="secondary" size="sm">
                可弹出
              </Badge>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6">
              <p className="mb-4 text-sm leading-relaxed text-[var(--muted-foreground)]">
                点击下方按钮打开模态框。Modal 由 Backdrop、Container、Dialog、Header、Body、Footer 等子部分组成。
              </p>
              <Modal>
                <Button variant="danger" size="sm">
                  <AlertTriangle size={14} className="mr-1" />
                  删除项目
                </Button>
                <Modal.Backdrop className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                  <Modal.Container className="w-full max-w-md overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl">
                    <Modal.Dialog>
                      <Modal.Header className="border-b border-[var(--border)] p-5">
                        <Modal.Heading className="font-display text-lg font-700">
                          {MODAL_DEMO.title}
                        </Modal.Heading>
                      </Modal.Header>
                      <Modal.Body className="p-5">
                        <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                          {MODAL_DEMO.desc}
                        </p>
                      </Modal.Body>
                      <Modal.Footer className="flex justify-end gap-2 border-t border-[var(--border)] p-5 pt-3">
                        <Modal.CloseTrigger>
                          <Button variant="ghost" size="sm">
                            {MODAL_DEMO.cancelLabel}
                          </Button>
                        </Modal.CloseTrigger>
                        <Modal.CloseTrigger>
                          <Button variant="danger" size="sm">
                            {MODAL_DEMO.confirmLabel}
                          </Button>
                        </Modal.CloseTrigger>
                      </Modal.Footer>
                    </Modal.Dialog>
                  </Modal.Container>
                </Modal.Backdrop>
              </Modal>
            </div>
          </div>

          {/* Dropdown 演示 */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <ChevronDown size={16} className="text-[var(--accent)]" />
              <h3 className="font-display text-lg font-700">Dropdown 实例</h3>
              <Badge variant="secondary" size="sm">
                可展开
              </Badge>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6">
              <p className="mb-4 text-sm leading-relaxed text-[var(--muted-foreground)]">
                点击下方按钮展开下拉菜单。Dropdown 由 Trigger、Popover、Menu、Item 等子部分组成，支持键盘导航。
              </p>
              <Dropdown>
                <Dropdown.Trigger
                  className="button button--sm button--outline inline-flex items-center gap-1"
                >
                  操作菜单
                  <ChevronDown size={14} />
                </Dropdown.Trigger>
                <Dropdown.Popover className="min-w-[220px] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-xl">
                  <Dropdown.Menu className="p-1 outline-none">
                    {DROPDOWN_DEMO_ITEMS.map((item) => {
                      const Icon = DROPDOWN_ICONS[item.icon] ?? Pencil
                      return (
                        <Dropdown.Item
                          key={item.id}
                          className={`flex cursor-pointer items-start gap-3 rounded-lg px-3 py-2 outline-none data-[focused]:bg-[var(--muted)] ${
                            item.danger
                              ? 'text-[var(--danger)]'
                              : 'text-[var(--foreground)]'
                          }`}
                        >
                          <Icon
                            size={16}
                            className={`mt-0.5 shrink-0 ${
                              item.danger
                                ? 'text-[var(--danger)]'
                                : 'text-[var(--muted-foreground)]'
                            }`}
                          />
                          <div className="flex flex-col">
                            <span className="text-sm font-500">
                              {item.label}
                            </span>
                            <span className="text-xs text-[var(--muted-foreground)]">
                              {item.desc}
                            </span>
                          </div>
                        </Dropdown.Item>
                      )
                    })}
                  </Dropdown.Menu>
                </Dropdown.Popover>
              </Dropdown>
            </div>
          </div>
        </motion.div>

        {/* 所有组合模式代码结构 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="mb-6 font-display text-xl font-700">
            完整组件结构参考
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMPOSITION_PATTERNS.map((p, i) => (
              <button
                key={p.component}
                onClick={() => setActivePattern(i)}
                className={`group rounded-xl border p-4 text-left transition-all ${
                  activePattern === i
                    ? 'border-[var(--accent)] bg-[var(--background)]'
                    : 'border-[var(--border)] bg-[var(--background)] hover:border-[var(--accent)]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-600 text-[var(--accent)]">
                    {p.component}
                  </span>
                  <ArrowRight
                    size={14}
                    className="text-[var(--muted-foreground)] transition-transform group-hover:translate-x-1"
                  />
                </div>
                <p className="mt-2 text-xs text-[var(--muted-foreground)]">
                  {p.desc}
                </p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {p.variants.map((v) => (
                    <span
                      key={v}
                      className="rounded border border-[var(--border)] px-1.5 py-0.5 font-mono text-[11px] text-[var(--muted-foreground)]"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
