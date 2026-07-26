"use client";

import { Reveal, StaggerContainer, StaggerItem } from "./motion";

const ecosystem = [
  {
    name: "HeroUI v3",
    platform: "React Web",
    desc: "面向 Web 的完整组件库，基于 Tailwind CSS v4 与 React Aria Components，支持 React 19+ 与 TypeScript。",
    status: "稳定版",
    accent: "var(--color-accent-500)",
  },
  {
    name: "HeroUI Native",
    platform: "React Native",
    desc: "为移动端提供美观且可访问的组件，包含 BottomSheet、PressableFeedback 等原生交互模式。",
    status: "v1.0+",
    accent: "var(--color-cool-400)",
  },
  {
    name: "HeroUI Chat",
    platform: "自然语言",
    desc: "用自然语言描述界面需求，AI 直接生成可运行的 HeroUI 组件代码。",
    status: "新平台",
    accent: "#a5d6a7",
  },
  {
    name: "UI for LLMs",
    platform: "MCP 协议",
    desc: "面向大语言模型的 UI 渲染层，让 AI 输出不再只是文本 — 即将推出。",
    status: "即将推出",
    accent: "#f0c674",
  },
];

export function EcosystemSection() {
  return (
    <section className="relative py-32" id="ecosystem">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-surface-600/60 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 max-w-[580px]">
          <p className="text-accent-400 font-mono text-sm mb-3 tracking-wide">
            // 生态系统
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
            不止于 Web 组件库
          </h2>
          <p className="text-text-secondary leading-relaxed font-body">
            从 Web 到移动端，从代码到自然语言 — HeroUI 正在构建完整的 UI 生态。
          </p>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
          {ecosystem.map((item) => (
            <StaggerItem key={item.name}>
              <div className="group relative glass-card rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1 h-full">
                <div
                  className="absolute top-0 left-0 w-full h-[2px] opacity-60"
                  style={{ background: `linear-gradient(90deg, ${item.accent}, transparent)` }}
                />
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-xl font-bold tracking-tight">
                    {item.name}
                  </h3>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium border"
                    style={{
                      color: item.accent,
                      borderColor: `color-mix(in srgb, ${item.accent} 30%, transparent)`,
                      background: `color-mix(in srgb, ${item.accent} 8%, transparent)`,
                    }}
                  >
                    {item.status}
                  </span>
                </div>
                <p className="text-xs font-mono text-text-muted mb-3">
                  {item.platform}
                </p>
                <p className="text-text-secondary text-sm leading-relaxed font-body">
                  {item.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
