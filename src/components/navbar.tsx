"use client";

const navItems = [
  { label: "特性", href: "#features" },
  { label: "组件", href: "#components" },
  { label: "快速开始", href: "#quick-start" },
  { label: "生态", href: "#ecosystem" },
  { label: "AI 赋能", href: "#ai" },
  { label: "FAQ", href: "#faq" },
  { label: "社区", href: "#community" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mt-4 glass-card rounded-2xl px-6 py-3 flex items-center justify-between">
          <a href="#" className="font-display font-bold text-lg tracking-tight">
            Hero<span className="text-accent-400">UI</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 font-body"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="https://github.com/heroui-inc/heroui"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-surface-700/60 border border-surface-600/40 hover:border-surface-500 transition-all duration-200"
          >
            GitHub ↗
          </a>
        </div>
      </nav>
    </header>
  );
}
