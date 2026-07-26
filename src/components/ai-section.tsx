"use client";

import { Reveal } from "./motion";

const tools = [
  {
    name: "MCP 服务器",
    pkg: "@heroui/react-mcp",
    desc: "能理解你主题的组件 — 可在 Cursor、Claude Code、Windsurf 或任何兼容 MCP 的编辑器中安装。",
  },
  {
    name: "llms.txt",
    pkg: "heroui.com/llms.txt",
    desc: "面向 LLM 的结构化上下文，覆盖每个组件的 API、用法与约束。",
  },
  {
    name: "Agent 技能",
    pkg: "npx heroui-cli agents-md",
    desc: "一条命令为 Cursor、Claude Code 等安装组件感知技能。",
  },
];

const editors = ["Cursor", "Claude Code", "Windsurf", "GitHub Copilot"];

export function AISection() {
  return (
    <section className="relative py-32 overflow-hidden" id="ai">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cool-400/5 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-start">
          <Reveal direction="right">
            <div>
              <p className="text-cool-400 font-mono text-sm mb-3 tracking-wide">
                // AI 赋能的开发
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
                让 AI 助手
                <br />
                真正理解你的组件
              </h2>
              <p className="text-text-secondary leading-relaxed font-body max-w-[420px] mb-8">
                HeroUI 专为 AI 辅助的开发工作流而打造。从 MCP 协议到
                llms.txt，你的 AI 编辑器将获得完整的组件上下文。
              </p>

              <div className="flex flex-wrap gap-2">
                {editors.map((e) => (
                  <span
                    key={e}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-surface-800/80 border border-surface-600/40 text-text-secondary"
                  >
                    {e}
                  </span>
                ))}
                <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-surface-800/80 border border-surface-600/40 text-text-muted">
                  任何兼容 MCP 的工具
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.2}>
            <div className="space-y-4">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="glass-card rounded-xl p-6 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-display font-semibold">{tool.name}</h3>
                    <code className="text-xs font-mono text-cool-300 bg-cool-400/10 px-2 py-0.5 rounded">
                      {tool.pkg}
                    </code>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed font-body">
                    {tool.desc}
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
