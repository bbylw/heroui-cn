"use client";

import { Reveal } from "./motion";

const faqs = [
  {
    q: "HeroUI 是免费的吗？",
    a: "是的，HeroUI 完全免费开源，采用 Apache License 2.0 许可证，可自由用于商业与个人项目。",
  },
  {
    q: "可以用于生产环境吗？",
    a: "当然可以。HeroUI 前身为 NextUI，已获数千个生产环境应用信赖，v3 在此基础上进一步提升了稳定性与性能。",
  },
  {
    q: "如何自定义组件样式？",
    a: "支持多种方式：Tailwind 工具类直接覆盖、样式变量调整、BEM 修饰符、或重组复合组件的部件。每个槽位都可独立定制。",
  },
  {
    q: "支持 TypeScript 吗？",
    a: "完整支持。所有组件均提供精确的类型定义，IDE 自动补全开箱即用。",
  },
  {
    q: "无障碍水平如何？",
    a: "基于 React Aria 构建，符合 WCAG 标准，包含键盘导航、焦点管理与屏幕阅读器支持，无需额外配置。",
  },
  {
    q: "样式能脱离 React 使用吗？",
    a: "可以。@heroui/styles 包可独立用于普通网页，配合 Tailwind 即可，不强制绑定 React。",
  },
  {
    q: "有 Figma 设计套件吗？",
    a: "有。HeroUI Figma Kit V3 已在 Figma Community 发布，设计与代码保持同步。",
  },
];

export function FAQSection() {
  return (
    <section className="relative py-32" id="faq">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-surface-600/60 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-16">
          <Reveal direction="right">
            <div className="lg:sticky lg:top-32">
              <p className="text-cool-400 font-mono text-sm mb-3 tracking-wide">
                // 常见问题
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
                你想知道的，
                <br />
                都在这里
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed font-body">
                更多问题欢迎在 GitHub Discussions 或 Discord 中提出。
              </p>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.15}>
            <div className="divide-y divide-surface-700/40">
              {faqs.map((faq) => (
                <div key={faq.q} className="py-6 group">
                  <h3 className="font-display font-semibold text-sm mb-2 tracking-tight group-hover:text-accent-400 transition-colors duration-200">
                    {faq.q}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed font-body">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
