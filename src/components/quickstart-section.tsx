"use client";

import { Reveal } from "./motion";

export function QuickStartSection() {
  return (
    <section className="relative py-32 overflow-hidden" id="quick-start">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent-500/4 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <Reveal>
            <p className="text-accent-400 font-mono text-sm mb-3 tracking-wide">
              // 快速开始
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
              两行代码，即刻启程
            </h2>
            <p className="text-text-secondary font-body max-w-[480px] mx-auto">
              无需 Provider，无需配置文件。安装、引入、渲染。
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="max-w-[720px] mx-auto">
            {/* Step 1: Install */}
            <div className="glass-card rounded-2xl overflow-hidden mb-6">
              <div className="flex items-center gap-3 px-6 py-3 border-b border-surface-700/50">
                <span className="w-6 h-6 rounded-full bg-accent-500/15 text-accent-400 text-xs font-bold flex items-center justify-center">
                  1
                </span>
                <span className="text-sm text-text-secondary font-body">
                  安装依赖
                </span>
              </div>
              <div className="px-6 py-5 font-mono text-sm">
                <span className="text-text-muted select-none">$ </span>
                <span className="text-text-primary">
                  npm i @heroui/styles @heroui/react
                </span>
              </div>
            </div>

            {/* Step 2: CSS */}
            <div className="glass-card rounded-2xl overflow-hidden mb-6">
              <div className="flex items-center gap-3 px-6 py-3 border-b border-surface-700/50">
                <span className="w-6 h-6 rounded-full bg-accent-500/15 text-accent-400 text-xs font-bold flex items-center justify-center">
                  2
                </span>
                <span className="text-sm text-text-secondary font-body">
                  引入样式（globals.css）
                </span>
              </div>
              <div className="px-6 py-5 font-mono text-sm space-y-1">
                <p>
                  <span className="text-cool-300">@import</span>{" "}
                  <span className="text-[#a5d6a7]">&quot;tailwindcss&quot;</span>;
                </p>
                <p>
                  <span className="text-cool-300">@import</span>{" "}
                  <span className="text-[#a5d6a7]">&quot;@heroui/styles&quot;</span>;
                </p>
                <p className="text-text-muted text-xs mt-3">
                  {"// 引入顺序很重要：先 Tailwind，后 HeroUI"}
                </p>
              </div>
            </div>

            {/* Step 3: Use */}
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="flex items-center gap-3 px-6 py-3 border-b border-surface-700/50">
                <span className="w-6 h-6 rounded-full bg-accent-500/15 text-accent-400 text-xs font-bold flex items-center justify-center">
                  3
                </span>
                <span className="text-sm text-text-secondary font-body">
                  渲染组件
                </span>
              </div>
              <div className="px-6 py-5 font-mono text-sm space-y-1">
                <p>
                  <span className="text-cool-300">import</span>{" "}
                  <span className="text-text-primary">{"{ Button }"}</span>{" "}
                  <span className="text-cool-300">from</span>{" "}
                  <span className="text-[#a5d6a7]">&quot;@heroui/react&quot;</span>;
                </p>
                <p className="mt-2">
                  <span className="text-cool-300">export default</span>{" "}
                  <span className="text-text-primary">()</span>{" "}
                  <span className="text-cool-300">=&gt;</span>{" "}
                  <span className="text-text-primary">{"<"}</span>
                  <span className="text-accent-400">Button</span>
                  <span className="text-text-primary">{">"}</span>
                  <span className="text-text-secondary">Hello HeroUI</span>
                  <span className="text-text-primary">{"</"}</span>
                  <span className="text-accent-400">Button</span>
                  <span className="text-text-primary">{">"}</span>;
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
