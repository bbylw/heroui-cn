"use client";

import { StaggerContainer, StaggerItem } from "./motion";

const useCases = [
  {
    title: "SaaS 应用",
    desc: "开箱即用的表单、表格、浮层与通知，快速搭建完整工作流。",
    accent: "var(--color-accent-500)",
  },
  {
    title: "仪表盘与管理后台",
    desc: "借助统一的设计令牌，构建数据密集的布局，保持视觉一致性。",
    accent: "var(--color-cool-400)",
  },
  {
    title: "电商前端",
    desc: "高性能、可访问、对 SEO 友好的组件，转化不留死角。",
    accent: "#a5d6a7",
  },
  {
    title: "营销站点与落地页",
    desc: "精致界面，却不带沉重的运行时开销。首屏即巅峰。",
    accent: "#f0c674",
  },
];

export function UseCasesSection() {
  return (
    <section className="relative py-32" id="use-cases">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-surface-600/60 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p className="text-accent-400 font-mono text-sm mb-3 tracking-wide">
            // 适用于谁
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
            你的下一个项目，
            <br className="hidden md:block" />
            值得更好的起点
          </h2>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {useCases.map((uc) => (
            <StaggerItem key={uc.title}>
              <div className="group relative glass-card rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1">
                {/* Accent line */}
                <div
                  className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, ${uc.accent}, transparent)` }}
                />
                <h3 className="font-display text-xl font-semibold mb-3 tracking-tight">
                  {uc.title}
                </h3>
                <p className="text-text-secondary leading-relaxed font-body text-sm">
                  {uc.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <StaggerContainer staggerDelay={0.08}>
          <StaggerItem>
            <p className="mt-10 text-text-muted text-sm font-body text-center">
              以及任何重视设计质量与可访问性的 React / Next.js 项目
            </p>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
