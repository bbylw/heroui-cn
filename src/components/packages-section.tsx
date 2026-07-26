"use client";

import { Reveal } from "./motion";

const packages = [
  {
    name: "@heroui/react",
    desc: "完整组件合集 — 一次安装，全部拥有",
    tag: "推荐",
  },
  {
    name: "@heroui/styles",
    desc: "仅包含样式 / 主题，适合自定义组件体系",
    tag: null,
  },
  {
    name: "@heroui/button 等",
    desc: "独立包按需引入，支持 tree-shake 极致精简",
    tag: "Tree-shakeable",
  },
];

export function PackagesSection() {
  return (
    <section className="relative py-32" id="packages">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
          <Reveal direction="right">
            <div>
              <p className="text-cool-400 font-mono text-sm mb-3 tracking-wide">
                // 包含的包
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
                按需取用，
                <br />
                轻重自如
              </h2>
              <p className="text-text-secondary leading-relaxed font-body max-w-[420px]">
                从完整合集到单组件独立包，HeroUI
                的模块化架构让你只为用到的代码买单。
              </p>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.2}>
            <div className="space-y-4">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className="glass-card rounded-xl p-6 flex items-start justify-between gap-4 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div>
                    <code className="font-mono text-accent-400 text-sm font-medium">
                      {pkg.name}
                    </code>
                    <p className="text-text-secondary text-sm mt-1.5 font-body">
                      {pkg.desc}
                    </p>
                  </div>
                  {pkg.tag && (
                    <span className="shrink-0 px-3 py-1 rounded-full text-xs font-medium bg-accent-500/10 text-accent-400 border border-accent-500/20">
                      {pkg.tag}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
