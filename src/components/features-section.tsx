"use client";

import { StaggerContainer, StaggerItem } from "./motion";

const features = [
  {
    icon: "♿",
    title: "默认可访问",
    desc: "基于 React Aria 构建，符合 WCAG 的键盘、焦点与屏幕阅读器行为，无需额外配置。",
  },
  {
    icon: "⚡",
    title: "Tailwind CSS v4",
    desc: "现代引擎驱动，无 CSS-in-JS 运行时开销，输出更小、构建更快。",
  },
  {
    icon: "🧩",
    title: "复合组件",
    desc: "可组合的 API（Card.Header、Card.Content），取代层层嵌套的 props 传递。",
  },
  {
    icon: "🚀",
    title: "零样板代码",
    desc: "无需 Provider 包裹层。与 Chakra、MUI 不同，引入即用，无全局配置。",
  },
  {
    icon: "🤖",
    title: "AI 原生",
    desc: "提供 MCP 服务器、llms.txt 以及 Agent 技能，让 AI 助手深度理解你的组件。",
  },
  {
    icon: "🏭",
    title: "久经考验",
    desc: "前身为 NextUI，已获数千个生产环境应用信赖，稳定可靠。",
  },
];

export function FeaturesSection() {
  return (
    <section className="relative py-32 overflow-hidden" id="features">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-surface-600/60 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 max-w-[600px]">
          <p className="text-accent-400 font-mono text-sm mb-3 tracking-wide">
            // 为什么选择 HeroUI
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
            为生产环境而生的
            <br />
            设计工程哲学
          </h2>
          <p className="text-text-secondary leading-relaxed font-body">
            每一个设计决策都围绕开发者体验与终端用户可访问性展开。
          </p>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <div className="glass-card rounded-2xl p-7 h-full transition-all duration-300 hover:-translate-y-1 group">
                <span className="text-2xl mb-4 block group-hover:scale-110 transition-transform duration-300">
                  {f.icon}
                </span>
                <h3 className="font-display text-lg font-semibold mb-2 tracking-tight">
                  {f.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed font-body">
                  {f.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
