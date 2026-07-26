"use client";

import { Reveal } from "./motion";

const principles = [
  {
    title: "默认即美观",
    desc: "每个组件出厂即具备专业级外观，无需从零调样式。",
  },
  {
    title: "无障碍内建",
    desc: "基于 React Aria，键盘导航、焦点管理、屏幕阅读器支持开箱即用，符合 WCAG 标准。",
  },
  {
    title: "灵活可组合",
    desc: "复合组件 API 让每个部件都可独立替换、重组，而非锁死在 props 里。",
  },
  {
    title: "开发者友好",
    desc: "完整 TypeScript 类型提示，IDE 自动补全，减少查阅文档的次数。",
  },
  {
    title: "轻量无负担",
    desc: "Tree-shakeable 架构，只打包你实际用到的组件代码。",
  },
  {
    title: "面向未来",
    desc: "原生支持 React 19、Tailwind v4、RSC，以及 AI 辅助开发工具链。",
  },
];

export function PhilosophySection() {
  return (
    <section className="relative py-32 overflow-hidden" id="philosophy">
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-accent-500/4 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start">
          <Reveal direction="right">
            <div className="lg:sticky lg:top-32">
              <p className="text-accent-400 font-mono text-sm mb-3 tracking-wide">
                // 设计原则
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-6">
                活的图书馆，
                <br />
                而非静态快照
              </h2>
              <p className="text-text-secondary leading-relaxed font-body mb-6">
                HeroUI v3 反对复制粘贴式的组件方案。它是一个持续生长的花园 —
                自动更新、持续演进、与 React、Tailwind 和浏览器标准保持同步。
              </p>
              <div className="glass-card rounded-xl p-5">
                <p className="text-sm text-text-muted font-body leading-relaxed">
                  &ldquo;我们选择 React Aria 是因为它提供了大规模无障碍的原语。自 v2
                  起采用，保留了 isDisabled、onPress 等开发者习惯的接口。&rdquo;
                </p>
                <p className="text-xs text-text-muted mt-3 font-body">
                  — 致谢 Devon Govett 与 Adobe React Spectrum 团队
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.15}>
            <div className="space-y-4">
              {principles.map((p, i) => (
                <div
                  key={p.title}
                  className="glass-card rounded-xl p-6 flex gap-5 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span className="shrink-0 w-8 h-8 rounded-lg bg-surface-700/80 border border-surface-600/40 flex items-center justify-center font-mono text-xs text-accent-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-sm mb-1.5 tracking-tight">
                      {p.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed font-body">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
