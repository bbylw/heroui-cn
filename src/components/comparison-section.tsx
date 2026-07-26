"use client";

import { Reveal } from "./motion";

const comparisons = [
  {
    name: "shadcn/ui",
    diff: "HeroUI 开箱即用，自带统一的设计系统；shadcn 则是「复制—粘贴—自定义」",
  },
  {
    name: "MUI",
    diff: "HeroUI 更轻量、原生支持 Tailwind，没有 CSS-in-JS 运行时开销",
  },
  {
    name: "Chakra UI",
    diff: "HeroUI 使用 React Aria（更强的可访问性原语）与 Tailwind v4（更佳性能）",
  },
  {
    name: "Mantine",
    diff: "HeroUI 提供 AI 工具链（MCP、llms.txt），以 Tailwind 为首要样式方案",
  },
];

export function ComparisonSection() {
  return (
    <section className="relative py-32" id="comparison">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-surface-600/60 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 max-w-[560px]">
          <p className="text-accent-400 font-mono text-sm mb-3 tracking-wide">
            // 对比其他方案
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
            不是又一个组件库
          </h2>
          <p className="text-text-secondary leading-relaxed font-body">
            与主流方案的核心差异，一目了然。
          </p>
        </div>

        <Reveal delay={0.15}>
          <div className="glass-card rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-[180px_1fr] md:grid-cols-[220px_1fr] border-b border-surface-700/50">
              <div className="px-6 py-4 text-xs font-mono text-text-muted uppercase tracking-wider">
                库
              </div>
              <div className="px-6 py-4 text-xs font-mono text-text-muted uppercase tracking-wider">
                HeroUI 的不同之处
              </div>
            </div>
            {/* Rows */}
            {comparisons.map((c, i) => (
              <div
                key={c.name}
                className={`grid grid-cols-[180px_1fr] md:grid-cols-[220px_1fr] transition-colors duration-200 hover:bg-surface-800/40 ${
                  i < comparisons.length - 1 ? "border-b border-surface-700/30" : ""
                }`}
              >
                <div className="px-6 py-5 font-display font-semibold text-sm">
                  {c.name}
                </div>
                <div className="px-6 py-5 text-text-secondary text-sm leading-relaxed font-body">
                  {c.diff}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
