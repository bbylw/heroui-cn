"use client";

import { Reveal, StaggerContainer, StaggerItem } from "./motion";

const methods = [
  {
    title: "Tailwind 工具类",
    desc: "直接传入 className，与 Tailwind 生态无缝衔接",
    code: `<Card className="border-2 border-blue-500">
  <Card.Title className="text-blue-900">
    自定义标题
  </Card.Title>
</Card>`,
  },
  {
    title: "BEM CSS 类覆盖",
    desc: "每个组件按 BEM 命名暴露样式钩子，精准覆盖不破坏结构",
    code: `@layer components {
  .card--secondary {
    /* 覆盖次级卡片 */
  }
  .card__title {
    @apply text-lg font-bold;
  }
  .button--primary {
    @apply rounded-full;
  }
}`,
  },
  {
    title: "tailwind-variants 扩展",
    desc: "用 tv() 扩展组件变体，新增 radius、size 等维度",
    code: `import { tv } from "tailwind-variants";
import { buttonVariants } from "@heroui/react";

const myButton = tv({
  extend: buttonVariants,
  variants: {
    radius: {
      pill: "rounded-full",
      sharp: "rounded-none",
    },
  },
});`,
  },
  {
    title: "CSS 变量主题",
    desc: "覆盖语义变量即可全局换肤，支持亮/暗模式独立配置",
    code: `:root {
  --accent: oklch(65% 0.2 150);
  --radius: 1rem;
}
.dark {
  --accent: oklch(70% 0.18 150);
  --background: oklch(10% 0.01 280);
}`,
  },
];

export function StylingSection() {
  return (
    <section className="relative py-32 overflow-hidden" id="styling">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-surface-600/60 to-transparent" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-accent-500/4 blur-[100px] rounded-full" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 max-w-[580px]">
          <p className="text-accent-400 font-mono text-sm mb-3 tracking-wide">
            // 样式定制
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
            四种方式，深度定制
          </h2>
          <p className="text-text-secondary leading-relaxed font-body">
            从轻量覆盖到完全重构，HeroUI 提供渐进式的定制路径。
            每个槽位都可独立修改，没有锁死的黑盒。
          </p>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
          {methods.map((m) => (
            <StaggerItem key={m.title}>
              <div className="glass-card rounded-2xl overflow-hidden h-full transition-all duration-300 hover:-translate-y-0.5">
                <div className="px-6 py-4 border-b border-surface-700/40">
                  <h3 className="font-display font-semibold text-sm tracking-tight">
                    {m.title}
                  </h3>
                  <p className="text-text-muted text-xs mt-1 font-body">
                    {m.desc}
                  </p>
                </div>
                <div className="px-6 py-4 overflow-x-auto">
                  <pre className="font-mono text-xs leading-relaxed text-text-secondary whitespace-pre">
                    <code>{m.code}</code>
                  </pre>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
