"use client";

import { Reveal } from "./motion";

const links = [
  { label: "Discord", href: "https://discord.gg/9b6yyZKmH4", desc: "加入社区讨论" },
  { label: "X (Twitter)", href: "https://x.com/hero_ui", desc: "关注最新动态" },
  { label: "GitHub Discussions", href: "https://github.com/heroui-inc/heroui/discussions", desc: "功能请求与反馈" },
];

const resources = [
  { label: "文档 (v3)", href: "https://heroui.com" },
  { label: "文档 (v2)", href: "https://v2.heroui.com" },
  { label: "Storybook", href: "https://storybook-v3.heroui.com/" },
  { label: "路线图", href: "https://herouiv3.featurebase.app/roadmap" },
  { label: "Figma Kit", href: "https://www.figma.com/community/file/1546526812159103429/heroui-figma-kit-v3" },
];

export function CommunitySection() {
  return (
    <section className="relative py-32" id="community">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-surface-600/60 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16">
          {/* Left: CTA + community links */}
          <Reveal direction="right">
            <div>
              <p className="text-accent-400 font-mono text-sm mb-3 tracking-wide">
                // 社区
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
                与我们同行
              </h2>
              <p className="text-text-secondary leading-relaxed font-body max-w-[460px] mb-10">
                无论是功能请求、Bug 报告，还是想要展示的项目，都欢迎你的参与。
              </p>

              <div className="space-y-4">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between glass-card rounded-xl px-6 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-500/30"
                  >
                    <div>
                      <span className="font-display font-semibold text-sm group-hover:text-accent-400 transition-colors duration-200">
                        {link.label}
                      </span>
                      <p className="text-text-muted text-xs mt-0.5 font-body">
                        {link.desc}
                      </p>
                    </div>
                    <span className="text-text-muted group-hover:text-accent-400 group-hover:translate-x-1 transition-all duration-200">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: Resources */}
          <Reveal direction="left" delay={0.2}>
            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-display font-semibold mb-6 tracking-tight">
                资源链接
              </h3>
              <ul className="space-y-3">
                {resources.map((r) => (
                  <li key={r.label}>
                    <a
                      href={r.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary text-sm font-body hover:text-accent-400 transition-colors duration-200 inline-flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-surface-500" />
                      {r.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-surface-700/50">
                <p className="text-text-muted text-xs font-body leading-relaxed">
                  贡献指南：
                  <a
                    href="https://github.com/heroui-inc/heroui/blob/main/CONTRIBUTING.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cool-400 hover:text-cool-300 transition-colors"
                  >
                    {" "}CONTRIBUTING.md
                  </a>
                </p>
                <p className="text-text-muted text-xs font-body mt-2">
                  许可证：MIT
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
