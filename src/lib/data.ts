// 集中式数据源 — 所有页面内容均从此处生成

export const NAV_LINKS = [
  { label: '特性', href: '#features' },
  { label: '生态', href: '#ecosystem' },
  { label: '组件', href: '#components' },
  { label: '主题', href: '#theming' },
  { label: '组合', href: '#composition' },
  { label: '进阶', href: '#advanced' },
  { label: '快速开始', href: '#quick-start' },
  { label: 'AI 开发', href: '#ai-dev' },
  { label: '对比', href: '#comparison' },
] as const

export const HERO_STATS = [
  { value: '50+', label: '组件数量' },
  { value: 'WCAG', label: '无障碍标准' },
  { value: 'v3', label: '当前版本' },
  { value: 'MIT', label: '开源协议' },
] as const

export const FEATURES = [
  {
    icon: 'Accessibility',
    title: '默认可访问',
    desc: '基于 React Aria 构建，开箱即用符合 WCAG 的键盘、焦点与屏幕阅读器行为。内置焦点管理、键盘导航和屏幕阅读器支持。',
    span: 'lg:col-span-2',
    accent: true,
  },
  {
    icon: 'Wind',
    title: 'Tailwind CSS v4',
    desc: '现代引擎，无 CSS-in-JS 运行时，输出更小、构建更快。',
    span: '',
    accent: false,
  },
  {
    icon: 'Boxes',
    title: '复合组件',
    desc: '可组合的 API（Card.Header、Card.Content），取代层层嵌套的 props。',
    span: '',
    accent: false,
  },
  {
    icon: 'Zap',
    title: '零样板代码',
    desc: '无需 Provider 包裹层（与 Chakra、MUI 不同），开箱即用。',
    span: '',
    accent: false,
  },
  {
    icon: 'Bot',
    title: 'AI 原生',
    desc: '提供 MCP 服务器、llms.txt 以及 Agent 技能，让 AI 助手理解你的组件与主题。',
    span: 'lg:col-span-2',
    accent: false,
  },
  {
    icon: 'ShieldCheck',
    title: '久经考验',
    desc: '前身为 NextUI，已获数千个生产环境应用信赖。',
    span: '',
    accent: false,
  },
] as const

export const ECOSYSTEM = [
  {
    name: 'HeroUI v3',
    tag: 'Web',
    desc: '基于 Tailwind CSS v4 的 React 组件库，你正在浏览的就是这里。',
    url: 'https://heroui.com',
    badge: '当前版本',
  },
  {
    name: 'HeroUI Native',
    tag: '移动端',
    desc: '为 React Native 提供精美组件，跨平台一致的设计语言。',
    url: 'https://link.heroui.com/native',
    badge: '移动端',
  },
  {
    name: 'HeroUI Chat',
    tag: '应用',
    desc: '用自然语言创建应用，从对话到可运行的产品原型。',
    url: 'https://heroui.chat/?ref=heroui-v3',
    badge: 'AI 应用',
  },
  {
    name: '面向 LLM 的 UI',
    tag: '即将推出',
    desc: '全新平台与 MCP 即将推出，为 LLM 原生设计的 UI 体系。',
    url: '#',
    badge: '敬请期待',
  },
] as const

// ===== 颜色体系（来自 HeroUI 颜色文档） =====
export const COLOR_SYSTEM = [
  {
    name: '强调色',
    en: 'Accent',
    var: '--accent',
    desc: '品牌主识别色，用于关键操作、高亮与重点时刻。应节制使用。',
    swatches: [
      { label: 'Accent', var: '--accent' },
      { label: 'Hover', var: '--color-accent-hover' },
      { label: 'Foreground', var: '--accent-foreground' },
      { label: 'Soft', var: '--accent-soft' },
    ],
  },
  {
    name: '默认',
    en: 'Default',
    var: '--default',
    desc: '中性骨架，用于大多数非强调的界面元素。',
    swatches: [
      { label: 'Default', var: '--default' },
      { label: 'Hover', var: '--color-default-hover' },
      { label: 'Foreground', var: '--default-foreground' },
    ],
  },
  {
    name: '成功',
    en: 'Success',
    var: '--success',
    desc: '传达积极结果、确认与完成状态，常见于反馈组件与校验通过。',
    swatches: [
      { label: 'Success', var: '--success' },
      { label: 'Hover', var: '--color-success-hover' },
      { label: 'Foreground', var: '--success-foreground' },
      { label: 'Soft', var: '--success-soft' },
    ],
  },
  {
    name: '警告',
    en: 'Warning',
    var: '--warning',
    desc: '需谨慎、存在风险，或需要留意但非破坏性的操作。',
    swatches: [
      { label: 'Warning', var: '--warning' },
      { label: 'Hover', var: '--color-warning-hover' },
      { label: 'Foreground', var: '--warning-foreground' },
      { label: 'Soft', var: '--warning-soft' },
    ],
  },
  {
    name: '危险',
    en: 'Danger',
    var: '--danger',
    desc: '破坏性、不可逆或关键的操作与状态，应一眼可辨。',
    swatches: [
      { label: 'Danger', var: '--danger' },
      { label: 'Hover', var: '--color-danger-hover' },
      { label: 'Foreground', var: '--danger-foreground' },
      { label: 'Soft', var: '--danger-soft' },
    ],
  },
] as const

export const SURFACE_LAYERS = [
  { label: '背景', var: '--background', desc: '界面基底画布' },
  { label: '次级背景', var: '--color-background-secondary', desc: '次级画布' },
  { label: '第三级背景', var: '--color-background-tertiary', desc: '第三级画布' },
  { label: '表面', var: '--surface', desc: '卡片、面板、模态' },
  { label: '次级表面', var: '--surface-secondary', desc: '中等强调容器' },
  { label: '第三级表面', var: '--surface-tertiary', desc: '更高强调容器' },
] as const

export const THEMING_CONCEPTS = [
  {
    title: 'CSS 变量驱动',
    desc: 'HeroUI 使用 CSS 变量和 BEM 类实现主题化。不带后缀的颜色用作背景，带 -foreground 后缀的用于其上的文本。',
    code: '/* 覆盖任意颜色变量 */\n:root {\n  --accent: oklch(0.7 0.25 260);\n  --success: oklch(0.65 0.15 155);\n}',
  },
  {
    title: 'Tailwind v4 桥接',
    desc: '通过 @theme inline 将语义化变量映射为 Tailwind 令牌，在组件中直接使用 bg-accent、text-foreground 等工具类。',
    code: '@theme inline {\n  --color-background: var(--background);\n  --color-foreground: var(--foreground);\n  --color-accent: var(--accent);\n}',
  },
  {
    title: '自动明暗切换',
    desc: '内置浅色和深色主题同时响应 .light / .dark 类以及 data-theme 属性。计算变量使用 color-mix() 自动派生悬停与柔和变体。',
    code: '<html class="dark" data-theme="dark">\n  <body class="bg-background text-foreground">\n    <!-- 你的应用 -->\n  </body>\n</html>',
  },
  {
    title: '按需导入',
    desc: '完整导入只需两行代码。也可按需导入特定主题、组件样式，甚至 Headless 模式从头构建自己的样式。',
    code: '/* 完整导入（推荐）*/\n@import "tailwindcss";\n@import "@heroui/styles";\n\n/* 按需导入单个组件 */\n@import "@heroui/styles/components/button.css";',
  },
] as const

// ===== 组合模式（来自组合文档） =====
export const COMPOSITION_PATTERNS = [
  {
    component: 'Card',
    title: '卡片',
    desc: '通过点语法访问所有子部分，无需层层嵌套 props。',
    structure: `<Card>
  <Card.Header>
    <Card.Title />
    <Card.Description />
  </Card.Header>
  <Card.Content />
  <Card.Footer />
</Card>`,
    variants: ['transparent', 'default', 'secondary', 'tertiary'],
  },
  {
    component: 'Accordion',
    title: '手风琴',
    desc: '可折叠内容面板，紧凑空间中组织信息。',
    structure: `<Accordion>
  <Accordion.Item>
    <Accordion.Heading>
      <Accordion.Trigger>
        <Accordion.Indicator />
      </Accordion.Trigger>
    </Accordion.Heading>
    <Accordion.Panel>
      <Accordion.Body />
    </Accordion.Panel>
  </Accordion.Item>
</Accordion>`,
    variants: ['default', 'outline', 'ghost'],
  },
  {
    component: 'Tabs',
    title: '标签页',
    desc: '将内容组织为多个区块，支持水平/垂直布局与溢出滚动。',
    structure: `<Tabs>
  <Tabs.ListContainer>
    <Tabs.List aria-label="选项">
      <Tabs.Tab>
        <Tabs.Indicator />
      </Tabs.Tab>
    </Tabs.List>
  </Tabs.ListContainer>
  <Tabs.Panel />
</Tabs>`,
    variants: ['horizontal', 'vertical'],
  },
  {
    component: 'Modal',
    title: '模态框',
    desc: '聚焦用户交互与重要内容的对话框遮罩层。',
    structure: `<Modal>
  <Button>打开</Button>
  <Modal.Backdrop>
    <Modal.Container>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Heading />
        </Modal.Header>
        <Modal.Body />
        <Modal.Footer />
      </Modal.Dialog>
    </Modal.Container>
  </Modal.Backdrop>
</Modal>`,
    variants: ['auto', 'top', 'center', 'bottom'],
  },
  {
    component: 'Dropdown',
    title: '下拉菜单',
    desc: '展示一组可供用户选择的操作或选项，支持单选/多选。',
    structure: `<Dropdown>
  <Dropdown.Trigger>
    <Button />
  </Dropdown.Trigger>
  <Dropdown.Popover>
    <Dropdown.Menu>
      <Dropdown.Item>
        <Label />
        <Description />
      </Dropdown.Item>
      <Dropdown.Section>
        <Header />
        <Dropdown.Item />
      </Dropdown.Section>
    </Dropdown.Menu>
  </Dropdown.Popover>
</Dropdown>`,
    variants: ['default', 'single', 'multiple'],
  },
] as const

// ===== 组件分类 =====
export const COMPONENT_CATEGORIES = [
  {
    title: '按钮与交互',
    items: ['Button', 'ButtonGroup', 'ToggleButton', 'ToggleButtonGroup', 'CloseButton'],
  },
  {
    title: '表单控件',
    items: ['Input', 'TextField', 'Checkbox', 'Switch', 'Slider', 'NumberField', 'InputOTP'],
  },
  {
    title: '数据展示',
    items: ['Table', 'Badge', 'Chip', 'Skeleton', 'ProgressBar', 'ProgressCircle', 'Meter'],
  },
  {
    title: '反馈与浮层',
    items: ['Alert', 'Spinner', 'Dropdown', 'Modal', 'Tooltip', 'Toast'],
  },
  {
    title: '布局与导航',
    items: ['Card', 'Accordion', 'Tabs', 'Drawer', 'Popover', 'Toolbar'],
  },
  {
    title: '日期与时间',
    items: ['Calendar', 'DatePicker', 'DateField', 'DateRangePicker', 'TimeField'],
  },
  {
    title: '颜色',
    items: ['ColorPicker', 'ColorArea', 'ColorSlider', 'ColorSwatch', 'ColorSwatchPicker'],
  },
  {
    title: '集合',
    items: ['ListBox', 'TagGroup', 'Menu', 'ComboBox', 'Autocomplete'],
  },
] as const

// ===== Button 变体 =====
export const BUTTON_VARIANTS = [
  { name: 'primary', label: '主要', desc: '最高强调，关键操作' },
  { name: 'secondary', label: '次要', desc: '中等强调，辅助操作' },
  { name: 'tertiary', label: '第三', desc: '更低强调' },
  { name: 'outline', label: '线框', desc: '描边样式' },
  { name: 'ghost', label: '幽灵', desc: '透明背景' },
  { name: 'danger', label: '危险', desc: '破坏性操作' },
  { name: 'danger-soft', label: '柔和危险', desc: '柔和背景的危险变体' },
] as const

// ===== Accordion FAQ =====
export const FAQ_ITEMS = [
  {
    q: 'HeroUI 免费吗？',
    a: '是的，基于 Apache License 2.0 完全免费且开源。可用于个人和商业项目。',
  },
  {
    q: '可以用于生产环境吗？',
    a: '可以。HeroUI v3 已经稳定，可放心用于生产环境。前身为 NextUI，已获数千个生产环境应用信赖。',
  },
  {
    q: '我可以定制组件吗？',
    a: '当然可以！你可以使用 Tailwind 工具类、CSS 变量、BEM 修饰符，或以不同的方式组合组件。每一个插槽都可以定制。',
  },
  {
    q: '它支持 TypeScript 吗？',
    a: '完全类型化，提供出色的 IDE 支持和自动补全。所有组件的 props 都有完整的类型定义。',
  },
  {
    q: '无障碍能力如何？',
    a: '基于 React Aria Components 构建，符合 WCAG 标准。内置键盘导航、焦点管理和屏幕阅读器支持。',
  },
  {
    q: '可以在不使用 React 的情况下使用样式吗？',
    a: '可以，CSS 可以应用于纯 HTML。HeroUI 的变体函数位于 @heroui/styles 包中，可以独立于 React 使用，Vue、Svelte 等框架也能使用。',
  },
] as const

// ===== 安装步骤 =====
export const INSTALL_STEPS = [
  {
    step: '01',
    title: '安装依赖',
    desc: '使用你偏好的包管理器安装 HeroUI 及其样式包。支持 npm、pnpm、yarn、bun。',
    code: 'pnpm add @heroui/styles @heroui/react',
    lang: 'bash',
  },
  {
    step: '02',
    title: '导入样式',
    desc: '在主 CSS 文件中导入 Tailwind 与 HeroUI 样式。顺序很重要 — 请务必先导入 tailwindcss。',
    code: '@import "tailwindcss";\n@import "@heroui/styles";',
    lang: 'css',
  },
  {
    step: '03',
    title: '使用组件',
    desc: '直接从 @heroui/react 导入组件，无需 Provider 包裹层。开箱即用，与 React 19 和 Next.js 协同工作。',
    code: `import { Button } from '@heroui/react';\n\nfunction App() {\n  return (\n    <Button variant="primary" onPress={() => console.log('点击')}>\n      开始使用\n    </Button>\n  );\n}`,
    lang: 'tsx',
  },
] as const

// ===== AI 开发工具 =====
export const AI_TOOLS = [
  {
    icon: 'Server',
    title: 'MCP 服务器',
    name: '@heroui/react-mcp',
    desc: '能理解你主题的组件 —— 可在 Cursor、Claude Code、Windsurf 或任何兼容 MCP 的编辑器中安装该服务器。让 AI 助手直接访问 HeroUI v3 组件文档。',
    tools: ['list_components', 'get_component_docs', 'get_component_source_code', 'get_theme_variables'],
  },
  {
    icon: 'FileText',
    title: 'llms.txt',
    name: 'heroui.com/llms.txt',
    desc: '面向 LLM 的、关于每个组件的结构化上下文，让 AI 助手准确理解 HeroUI 的 API 与用法。',
    tools: ['结构化文档', '组件上下文', 'API 参考'],
  },
  {
    icon: 'Sparkles',
    title: 'Agent 技能',
    name: 'npx heroui-cli agents-md',
    desc: '执行该命令为 Cursor、Claude Code 等安装 Agent 技能，让 AI 直接生成符合 HeroUI 规范的代码。',
    tools: ['Cursor', 'Claude Code', 'Windsurf', 'GitHub Copilot'],
  },
] as const

// ===== 对比 =====
export const COMPARISON = [
  {
    name: 'HeroUI',
    points: [
      '开箱即用，自带统一设计系统',
      'React Aria 强可访问性原语',
      'Tailwind v4，无运行时开销',
      'AI 工具链（MCP、llms.txt）',
      '复合组件 API，无需 Provider',
    ],
    highlight: true,
  },
  {
    name: 'shadcn/ui',
    points: ['复制—粘贴—自定义模式', '需自行维护依赖', '基于 Radix UI', '无内置 AI 工具链'],
    highlight: false,
  },
  {
    name: 'MUI',
    points: ['CSS-in-JS 运行时开销', 'Emotion 依赖', '主题较重', '完整 Material Design 体系'],
    highlight: false,
  },
  {
    name: 'Chakra UI',
    points: ['CSS-in-JS 运行时', '可访问性原语较弱', '样式属性模式', '无原生 AI 集成'],
    highlight: false,
  },
] as const

export const MARQUEE_ITEMS = [
  'React Aria',
  'Tailwind CSS v4',
  'React 19',
  'TypeScript',
  'WCAG 无障碍',
  'Tree Shaking',
  '复合组件',
  '零 Provider',
  '深色模式',
  'Framer Motion',
  'MCP 服务器',
  'llms.txt',
  'CSS 变量',
  'BEM 方法论',
  'OKLCH 色彩',
  'Server Components',
  '渲染属性',
  'tailwind-variants',
  'next-themes',
  'motion-reduce',
] as const

// ===== 样式技术（来自 styling 文档） =====
export const STYLING_TECHNIQUES = [
  {
    title: 'className 与 style',
    badge: '基础',
    desc: '所有 HeroUI 组件都接受 className 与内联 style 属性，可与 Tailwind 工具类无缝混用。',
    code: `<Button className="bg-purple-500 hover:bg-purple-600">
  Custom Button
</Button>

<Button style={{ backgroundColor: '#8B5CF6' }}>
  Styled Button
</Button>`,
  },
  {
    title: '基于数据属性的样式',
    badge: '状态',
    desc: '组件通过 data-* 属性公开状态，等价于 CSS 伪类，可针对悬停、按下、键盘焦点等精确控制。',
    code: `.button[data-hovered="true"], .button:hover {
  background: var(--accent-hover);
}
.button[data-pressed="true"], .button:active {
  transform: scale(0.97);
}
.button[data-focus-visible="true"] {
  outline: 2px solid var(--focus);
}`,
  },
  {
    title: '渲染属性（Render Props）',
    badge: '动态',
    desc: '根据组件状态动态返回 className 或子节点，让交互式样式无需手动维护 state。',
    code: `<Button
  className={({ isPressed }) =>
    isPressed ? 'bg-blue-600' : 'bg-blue-500'
  }
>
  Press me
</Button>`,
  },
  {
    title: 'BEM 类名方法',
    badge: '约定',
    desc: 'HeroUI 使用 BEM 方法论保持类名一致性：block、__element、--modifier 三段式命名。',
    code: `/* Block */       .button { }
/* Element */    .accordion__trigger { }
/* Modifier */   .button--primary { }
                 .button--lg { }
                 .accordion--outline { }

@layer components {
  .button--primary {
    @apply bg-indigo-600 hover:bg-indigo-700;
  }
}`,
  },
  {
    title: 'tailwind-variants 包装',
    badge: '进阶',
    desc: '使用 tailwind-variants 扩展 HeroUI 自带的变体函数，封装出自定义的可复用组件。',
    code: `import { Button as HeroButton, type ButtonProps } from '@heroui/react';
import { buttonVariants, tv, type VariantProps } from '@heroui/styles';

const customButtonVariants = tv({
  extend: buttonVariants,
  base: 'font-medium transition-all',
  variants: {
    intent: {
      primary: 'bg-blue-500 hover:bg-blue-600 text-white',
      danger:  'bg-red-500 hover:bg-red-600 text-white',
    },
  },
  defaultVariants: { intent: 'primary' },
});`,
  },
  {
    title: '主题化滚动条',
    badge: '细节',
    desc: '@heroui/styles 提供四种滚动条工具类，读取 --scrollbar-* 主题变量，可在任意溢出容器上使用。',
    code: `<div className="scrollbar h-64 overflow-y-auto">
  {/* 长内容 */}
</div>

/* 工具类：
   scrollbar         — HeroUI 滑块
   scrollbar-thin    — 纤细版本
   scrollbar-default — 浏览器原生
   scrollbar-none    — 完全隐藏 */`,
  },
] as const

// ===== 动画主题（来自 animation 文档） =====
export const ANIMATION_TOPICS = [
  {
    title: '内置数据属性动画',
    badge: 'Built-in',
    desc: '组件用 data-entering / data-exiting / data-pressed 等数据属性公开动画状态，可直接用 CSS 定制。',
    code: `.popover[data-entering] {
  @apply animate-in zoom-in-90 fade-in-0 duration-200;
}
.popover[data-exiting] {
  @apply animate-out zoom-out-95 fade-out duration-150;
}
.button:active, .button[data-pressed="true"] {
  transform: scale(0.97);
}`,
  },
  {
    title: 'Tailwind 实用工具',
    badge: 'CSS',
    desc: '直接用 Tailwind 的 animate-* 工具类，配合 animate-delay-* 实现交错入场动画。',
    code: `<Button className="hover:animate-pulse">
  Hover me
</Button>

<div className="space-y-2">
  <Card className="animate-fade-in animate-delay-100">Item 1</Card>
  <Card className="animate-fade-in animate-delay-200">Item 2</Card>
</div>`,
  },
  {
    title: 'Framer Motion 协作',
    badge: 'JS',
    desc: '通过 motion(Button) 将 HeroUI 组件包装为 motion 组件，获得 whileHover、whileTap、layoutId 等能力。',
    code: `import { motion } from 'framer-motion';
import { Button } from '@heroui/react';

const MotionButton = motion(Button);

<MotionButton
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Animated Button
</MotionButton>`,
  },
  {
    title: '无障碍与 prefers-reduced-motion',
    badge: 'A11y',
    desc: 'HeroUI 扩展了 Tailwind 的 motion-reduce: 变体，同时响应原生 prefers-reduced-motion 与 data-reduce-motion 属性。',
    code: `/* HeroUI 模式 — 自动响应两种偏好 */
.button {
  @apply transition-colors motion-reduce:transition-none;
}

/* 等价展开 */
@media (prefers-reduced-motion: reduce) {
  .button { transition: none; }
}
[data-reduce-motion="true"] .button { transition: none; }

/* 全局禁用 */
<html data-reduce-motion="true">`,
  },
] as const

// ===== 深色模式（来自 dark-mode 文档） =====
export const DARK_MODE_INFO = [
  {
    title: 'CSS 驱动的主题切换',
    badge: '原理',
    desc: 'HeroUI 的深色模式完全由 CSS 驱动。组件从根元素读取主题变量，无需 Provider。在 <html> 上加 dark 类或 data-theme="dark" 即可。',
    code: `<html class="dark" data-theme="dark">
  <body class="bg-background text-foreground">
    <!-- 你的应用 -->
  </body>
</html>`,
  },
  {
    title: 'next-themes 集成（Next.js）',
    badge: 'Next.js',
    desc: '在 Next.js 应用中获得主题持久化、系统偏好支持，以及水合前不闪烁。用 NextThemesProvider 包裹应用即可。',
    code: `// app/providers.tsx
"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}`,
  },
  {
    title: 'useTheme 钩子（Vite / CRA）',
    badge: 'React',
    desc: '在普通 React 应用中，使用 @heroui/react 提供的 useTheme。它会写入 localStorage、解析 "system" 并同步类与 data-theme。',
    code: `import { Button, useTheme } from "@heroui/react";

export function ThemeSwitcher() {
  const { resolvedTheme, setTheme, theme } = useTheme("system");

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={resolvedTheme === "light" ? "primary" : "secondary"}
        onPress={() => setTheme("light")}
      >Light</Button>
      <Button
        variant={resolvedTheme === "dark" ? "primary" : "secondary"}
        onPress={() => setTheme("dark")}
      >Dark</Button>
      <Button
        variant={theme === "system" ? "primary" : "secondary"}
        onPress={() => setTheme("system")}
      >System</Button>
    </div>
  );
}`,
  },
  {
    title: '自定义主题名称',
    badge: '扩展',
    desc: '当自定义主题 CSS 基于 data-theme 选择器时，让 next-themes 写入 data-theme 而非 class，并显式声明 themes 列表。',
    code: `<NextThemesProvider
  attribute="data-theme"
  defaultTheme="system"
  enableSystem
  themes={["light", "dark", "ocean", "ocean-dark"]}
>
  {children}
</NextThemesProvider>`,
  },
] as const

// ===== Modal 与 Dropdown 演示数据 =====
export const MODAL_DEMO = {
  title: '删除项目？',
  desc: '此操作不可撤销。该项目及其所有关联资源将被永久移除。',
  confirmLabel: '确认删除',
  cancelLabel: '取消',
} as const

export const DROPDOWN_DEMO_ITEMS = [
  { id: 'edit', label: '编辑', desc: '修改当前条目', icon: 'Pencil', danger: false },
  { id: 'duplicate', label: '创建副本', desc: '复制一份相同内容', icon: 'Copy', danger: false },
  { id: 'share', label: '分享', desc: '生成可分享链接', icon: 'Share2', danger: false },
  { id: 'archive', label: '归档', desc: '移至归档区', icon: 'Archive', danger: false },
  { id: 'delete', label: '删除', desc: '永久移除', icon: 'Trash2', danger: true },
] as const

export const FOOTER_LINKS = {
  文档: [
    { label: '快速入门', href: 'https://heroui.com/cn/docs/react/getting-started/quick-start' },
    { label: '组件', href: 'https://heroui.com/cn/docs/react/components' },
    { label: '样式', href: 'https://heroui.com/cn/docs/handbook/styling' },
    { label: '主题', href: 'https://heroui.com/cn/docs/react/getting-started/theming' },
    { label: '颜色', href: 'https://heroui.com/cn/docs/react/getting-started/colors' },
  ],
  社区: [
    { label: 'Discord', href: 'https://discord.gg/9b6yyZKmH4' },
    { label: 'X / Twitter', href: 'https://x.com/hero_ui' },
    { label: 'GitHub Discussions', href: 'https://github.com/heroui-inc/heroui/discussions' },
    { label: '贡献指南', href: 'https://github.com/heroui-inc/heroui/blob/main/CONTRIBUTING.md' },
  ],
  资源: [
    { label: 'Storybook', href: 'https://storybook-v3.heroui.com/' },
    { label: 'Figma Kit', href: 'https://www.figma.com/community/file/1546526812159103429' },
    { label: '路线图', href: 'https://herouiv3.featurebase.app/roadmap' },
    { label: 'GitHub', href: 'https://github.com/heroui-inc/heroui' },
    { label: '主题构建器', href: 'https://heroui.com/cn/themes' },
  ],
} as const
