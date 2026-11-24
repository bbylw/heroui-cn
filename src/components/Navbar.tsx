import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../lib/data'
import { useScrolled } from '../lib/hooks'

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.21 3.44 9.63 8.21 11.19.6.11.82-.25.82-.56 0-.28-.01-1.02-.02-2-3.34.71-4.04-1.58-4.04-1.58-.55-1.36-1.34-1.72-1.34-1.72-1.09-.73.08-.71.08-.71 1.21.08 1.84 1.22 1.84 1.22 1.07 1.8 2.81 1.28 3.5.98.11-.76.42-1.28.76-1.57-2.67-.3-5.47-1.31-5.47-5.84 0-1.29.47-2.34 1.24-3.17-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.21a11.6 11.6 0 0 1 6 0c2.29-1.53 3.3-1.21 3.3-1.21.66 1.66.25 2.88.12 3.18.77.83 1.24 1.88 1.24 3.17 0 4.54-2.81 5.53-5.49 5.83.43.36.81 1.08.81 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.83.56C20.57 21.91 24 17.5 24 12.29 24 5.78 18.63.5 12 .5Z" />
    </svg>
  )
}

/** 关闭原生 popover 菜单（顶部图层，Esc 与点击外部由浏览器处理） */
function closeMenu() {
  document.getElementById('site-menu')?.hidePopover()
}

export default function Navbar() {
  const scrolled = useScrolled(24)
  const headerRef = useRef<HTMLElement>(null)

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-7xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6 ${
          scrolled ? 'glass-strong shadow-2xl' : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <a href="#" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--accent)] font-display text-lg font-900 text-[var(--accent-foreground)] transition-transform group-hover:scale-105">
            H
          </span>
          <span className="font-display text-xl font-700 tracking-tight">
            HeroUI
          </span>
          <span className="hidden rounded-full border border-[var(--border)] px-2 py-0.5 text-[11px] font-500 uppercase tracking-widest text-[var(--muted-foreground)] sm:inline">
            v3.2
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-sm font-500 text-[var(--muted-foreground)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/heroui-inc/heroui"
            target="_blank"
            rel="noreferrer"
            className="hidden h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--muted-foreground)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--foreground)] sm:flex"
            aria-label="GitHub"
          >
            <GithubIcon size={16} />
          </a>

          <a
            href="#quick-start"
            className="hidden h-9 items-center rounded-lg bg-[var(--accent)] px-4 text-sm font-600 text-[var(--accent-foreground)] transition-transform hover:scale-[1.02] sm:inline-flex"
          >
            开始使用
          </a>

          {/* 原生 popover 触发器：展开状态由浏览器同步到无障碍树 */}
          <button
            type="button"
            popoverTarget="site-menu"
            popoverTargetAction="toggle"
            className="nav-menu-toggle flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] lg:hidden"
            aria-label="菜单"
          >
            <Menu size={18} className="nav-icon-open" aria-hidden="true" />
            <X size={18} className="nav-icon-close" aria-hidden="true" />
          </button>

          {/* 移动端菜单：原生 popover，位于顶部图层，支持 Esc 与轻触外部关闭 */}
          <div
            id="site-menu"
            popover="auto"
            className="site-menu glass-strong rounded-2xl p-4 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-lg px-4 py-3 text-sm font-500 text-[var(--muted-foreground)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#quick-start"
                onClick={closeMenu}
                className="mt-2 inline-flex h-10 w-full items-center justify-center rounded-lg bg-[var(--accent)] text-sm font-600 text-[var(--accent-foreground)] transition-transform hover:scale-[1.02]"
              >
                开始使用
              </a>
            </div>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}
