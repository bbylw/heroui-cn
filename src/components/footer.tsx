export function Footer() {
  return (
    <footer className="relative py-16 border-t border-surface-800/60">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-lg tracking-tight">
              Hero<span className="text-accent-400">UI</span>
            </span>
            <span className="text-text-muted text-sm font-body">
              前身为 NextUI
            </span>
          </div>

          <p className="text-text-muted text-sm font-body">
            MIT 许可证 · 由社区驱动 · 为开发者而生
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://discord.gg/9b6yyZKmH4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors duration-200 text-sm"
            >
              Discord
            </a>
            <a
              href="https://x.com/hero_ui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors duration-200 text-sm"
            >
              X
            </a>
            <a
              href="https://github.com/heroui-inc/heroui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors duration-200 text-sm"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
