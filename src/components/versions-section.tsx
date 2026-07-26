"use client";

import { Reveal, StaggerContainer, StaggerItem } from "./motion";

const highlights = [
  { version: "v3.2.0", items: ["Theme Builder 可视化主题编辑器", "CLI 脚手架工具", "useTheme Hook"] },
  { version: "v3.1.0", items: ["AlertDialog 组件", "ComboBox 组件", "InputGroup 复合输入", "Toast 通知系统"] },
  { version: "v3.0.5", items: ["Typography 组件（原 Text）", "颜色令牌系统", "RTL 从右到左支持"] },
  { version: "v3.0.0", items: ["全面重构：React Aria Components", "Tailwind CSS v4 引擎", "零 Provider 架构", "MCP 服务器与 AI 工具链", "Apache 2.0 许可证"] },
];

export function VersionsSection() {
  return (
    <section className="relative py-32 overflow-hidden" id="versions">
      <div className="absolute top-1/3 right-[-8%] w-[400px] h-[400px] bg-accent-500/4 blur-[100px] rounded-full" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 max-w-[560px]">
          <p className="text-accent-400 font-mono text-sm mb-3 tracking-wide">
            // 版本演进
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
            持续演进，从未停歇
          </h2>
          <p className="text-text-secondary leading-relaxed font-body">
            从 v3.0.0 到 v3.2.x，每个版本都在扩展边界。
          </p>
        </div>

        <StaggerContainer className="relative" staggerDelay={0.12}>
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-surface-600/50 hidden md:block" />

          <div className="space-y-8">
            {highlights.map((h) => (
              <StaggerItem key={h.version}>
                <div className="md:pl-10 relative">
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-accent-500 bg-surface-950 hidden md:block" />
                  <div className="glass-card rounded-xl p-6">
                    <span className="font-mono text-accent-400 text-sm font-bold">
                      {h.version}
                    </span>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {h.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 rounded-lg text-xs font-body bg-surface-700/50 text-text-secondary border border-surface-600/30"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
