"use client";

import { Reveal } from "./motion";

const colorTokens = [
  { name: "--accent", desc: "强调色 / 主操作", light: "oklch(65% 0.2 25)", dark: "oklch(70% 0.18 25)" },
  { name: "--success", desc: "成功状态", light: "oklch(73% 0.19 151)", dark: "oklch(73% 0.19 151)" },
  { name: "--warning", desc: "警告状态", light: "oklch(78% 0.16 72)", dark: "oklch(82% 0.14 76)" },
  { name: "--danger", desc: "危险 / 错误", light: "oklch(65% 0.23 26)", dark: "oklch(59% 0.20 25)" },
  { name: "--foreground", desc: "主文本色", light: "eclipse", dark: "snow" },
  { name: "--background", desc: "页面背景", light: "oklch(97% 0 0)", dark: "oklch(12% 0.005 286)" },
  { name: "--surface", desc: "卡片 / 面板", light: "white", dark: "oklch(16% 0.005 286)" },
  { name: "--border", desc: "边框 / 分隔", light: "oklch(90% 0.004 286)", dark: "oklch(28% 0.006 286)" },
];

const cssExample = `/* 覆盖主题颜色 */
:root {
  --accent: oklch(65% 0.2 25);
  --accent-foreground: oklch(98% 0 0);
  --radius: 0.75rem;
}

/* 深色模式 */
.dark {
  --accent: oklch(70% 0.18 25);
  --background: oklch(12% 0.005 286);
}

/* 新增语义色 */
:root {
  --info: oklch(65% 0.15 240);
  --info-foreground: white;
}
@theme inline {
  --color-info: var(--info);
  --color-info-foreground: var(--info-foreground);
}
/* 现在可以用 bg-info、text-info-foreground */`;

export function ThemingSection() {
  return (
    <section className="relative py-32" id="theming">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-surface-600/60 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-start">
          {/* Left: Color tokens */}
          <Reveal direction="right">
            <div>
              <p className="text-cool-400 font-mono text-sm mb-3 tracking-wide">
                // 主题与颜色
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
                语义化颜色，
                <br />
                而非大色板
              </h2>
              <p className="text-text-secondary leading-relaxed font-body mb-8">
                HeroUI v3 的颜色系统围绕语义意图构建。少量角色表达目的与状态，
                多数颜色由基础值通过 color-mix 自动派生，维持对比度与主题一致性。
              </p>

              <div className="space-y-2">
                {colorTokens.map((token) => (
                  <div
                    key={token.name}
                    className="flex items-center gap-4 py-2.5 px-4 rounded-lg hover:bg-surface-800/40 transition-colors duration-200"
                  >
                    <code className="font-mono text-xs text-accent-400 w-[140px] shrink-0">
                      {token.name}
                    </code>
                    <span className="text-text-muted text-xs font-body flex-1">
                      {token.desc}
                    </span>
                    <span className="font-mono text-[10px] text-text-muted hidden sm:block">
                      {token.light}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-xs text-text-muted font-body">
                支持 Theme Builder 可视化调整颜色、圆角、字体并导出 CSS。
              </p>
            </div>
          </Reveal>

          {/* Right: CSS example */}
          <Reveal direction="left" delay={0.2}>
            <div className="lg:sticky lg:top-32">
              <div className="glass-card rounded-2xl overflow-hidden">
                <div className="flex items-center gap-3 px-6 py-3 border-b border-surface-700/50">
                  <span className="text-xs text-text-muted font-mono">globals.css</span>
                </div>
                <div className="px-6 py-5 overflow-x-auto">
                  <pre className="font-mono text-[13px] leading-relaxed text-text-secondary whitespace-pre">
                    <code>{cssExample}</code>
                  </pre>
                </div>
              </div>

              <div className="mt-6 glass-card rounded-xl p-5">
                <h4 className="font-display text-sm font-semibold mb-3">
                  布局与交互变量
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <span className="text-text-muted">--spacing: 0.25rem</span>
                  <span className="text-text-muted">--radius: 0.5rem</span>
                  <span className="text-text-muted">--border-width: 1px</span>
                  <span className="text-text-muted">--disabled-opacity: 0.5</span>
                  <span className="text-text-muted">--ring-offset: 2px</span>
                  <span className="text-text-muted">--cursor: pointer</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
