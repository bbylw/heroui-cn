"use client";

import { Reveal } from "./motion";

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-noise">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-accent-500/8 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-[-15%] left-[-5%] w-[500px] h-[500px] rounded-full bg-cool-400/6 blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      {/* Floating geometric elements */}
      <div className="absolute top-[15%] right-[12%] w-20 h-20 border border-surface-600/50 rotate-45 animate-float" />
      <div className="absolute bottom-[25%] left-[8%] w-12 h-12 border border-accent-500/30 rotate-12 animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-[40%] left-[15%] w-3 h-3 rounded-full bg-accent-400/60 animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <Reveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-surface-600/60 bg-surface-800/50 mb-8">
                <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
                <span className="text-sm text-text-secondary font-body">
                  v3 现已发布 · 前身 NextUI
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] mb-6">
                构建界面，
                <br />
                <span className="text-gradient-accent">快人一步</span>
              </h1>
            </Reveal>

            <Reveal delay={0.35}>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-[540px] mb-10 font-body">
                HeroUI 将 React Aria 的可访问性严谨与 Tailwind CSS v4
                的实用优先理念融为一体。复合组件 API，零样板代码，开箱即用。
              </p>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#quick-start"
                  className="inline-flex items-center justify-center bg-accent-500 text-white font-semibold px-8 py-3 rounded-xl text-base hover:bg-accent-600 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  快速开始
                </a>
                <a
                  href="https://github.com/heroui-inc/heroui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-surface-600 text-text-primary font-medium px-8 py-3 rounded-xl text-base bg-surface-800/50 hover:border-surface-500 hover:bg-surface-700/50 transition-all duration-200"
                >
                  GitHub ↗
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.65}>
              <div className="mt-12 flex items-center gap-8 text-sm text-text-muted font-body">
                <span>React 19+</span>
                <span className="w-1 h-1 rounded-full bg-surface-500" />
                <span>Tailwind CSS v4</span>
                <span className="w-1 h-1 rounded-full bg-surface-500" />
                <span>WCAG 可访问</span>
              </div>
            </Reveal>
          </div>

          {/* Right: Code preview */}
          <Reveal delay={0.4} direction="left">
            <div className="glass-card rounded-2xl p-6 font-mono text-sm leading-relaxed">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-text-muted text-xs">app.tsx</span>
              </div>
              <pre className="text-text-secondary overflow-x-auto">
                <code>{`import { Button, Card } from "@heroui/react";

export default function App() {
  return (
    <Card className="p-6">
      <Card.Header>
        <h2>欢迎使用 HeroUI</h2>
      </Card.Header>
      <Card.Content>
        <p>零 Provider，零样板代码。</p>
      </Card.Content>
      <Card.Footer>
        <Button color="primary">
          开始构建
        </Button>
      </Card.Footer>
    </Card>
  );
}`}</code>
              </pre>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-950 to-transparent" />
    </section>
  );
}
