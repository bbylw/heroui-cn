<p align="center">
  <a href="https://heroui.com">
      <img 
        alt="HeroUI v3 logo" 
        width="100%" 
        src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/heroui-og_2x.jpg"
      />
  </a>
</p>
<p align="center">
  <a href="https://github.com/heroui-inc/heroui/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/@heroui/react?style=flat" alt="License">
  </a>
  <a href="https://www.npmjs.com/package/@heroui/react">
    <img src="https://img.shields.io/npm/dm/@heroui/react.svg?style=flat-round" alt="npm downloads">
  </a>
</p>

## 为什么选择 HeroUI？

HeroUI（前身为 NextUI）是一套生产就绪的 React 组件库，它将 [React Aria](https://react-spectrum.adobe.com/react-aria/) 在可访问性方面的严谨，与 [Tailwind CSS v4](https://tailwindcss.com/) 的实用优先样式理念结合在一起。它提供了简洁的复合组件 API（`Card.Header`、`Card.Content`、`Select.Item` 等），无需 `<Provider>` 包裹层，开箱即可与 React 19 和 Next.js 协同工作。

- **默认可访问** —— 基于 React Aria 构建，符合 WCAG 的键盘、焦点与屏幕阅读器行为
- **Tailwind CSS v4** —— 现代引擎，无 CSS-in-JS 运行时，输出更小、构建更快
- **复合组件** —— 可组合的 API（`Card.Header`、`Card.Content`），取代层层嵌套的 props
- **零样板代码** —— 无需 Provider 包裹层（与 Chakra、MUI 不同）
- **AI 原生** —— 提供 MCP 服务器、`llms.txt` 以及 Agent 技能，让 AI 助手理解你的组件
- **久经考验** —— 前身为 NextUI，已获数千个生产环境应用信赖

## 包含的包

| 包 | 说明 |
|---|---|
| [`@heroui/react`](https://www.npmjs.com/package/@heroui/react) | 完整组件合集 |
| [`@heroui/styles`](https://www.npmjs.com/package/@heroui/styles) | 仅包含样式 / 主题 |
| 独立包 | 例如 `@heroui/button`、`@heroui/modal` —— 可按组件进行 tree-shake 的按需引入 |

## 快速开始

访问 [heroui.com/docs/react/getting-started/quick-start](https://heroui.com/docs/react/getting-started/quick-start) 开始使用 HeroUI。

```bash
npm install @heroui/react
```

## 适用于谁？

如果你正在构建以下类型的项目，HeroUI 会是一个不错的选择：

- **SaaS 应用** —— 开箱即用的表单、表格、浮层与通知
- **仪表盘与管理后台** —— 借助统一的设计令牌，构建数据密集的布局
- **电商前端** —— 高性能、可访问、对 SEO 友好的组件
- **营销站点与落地页** —— 精致界面，却不带沉重的运行时开销
- **任何重视设计质量与可访问性的 React / Next.js 项目**

## AI 赋能的开发

HeroUI 专为 AI 辅助的开发工作流而打造。

| 工具 | 作用 |
|---|---|
| **MCP 服务器**（`@heroui/react-mcp`） | 能理解你主题的组件 —— 可在 Cursor、Claude Code、Windsurf 或任何兼容 MCP 的编辑器中安装该服务器 |
| **llms.txt** | 托管于 [heroui.com/llms.txt](https://heroui.com/llms.txt) —— 面向 LLM 的、关于每个组件的结构化上下文 |
| **Agent 技能** | 执行 `npx heroui-cli agents-md` 为 Cursor、Claude Code 等安装技能 |

支持 **Cursor**、**Claude Code**、**Windsurf**、**GitHub Copilot**，以及任何兼容 MCP 或 `llms.txt` 的工具。

## 对比其他方案

| 库 | HeroUI 的不同之处 |
|---|---|
| **shadcn/ui** | HeroUI 开箱即用，自带统一的设计系统；shadcn 则是「复制—粘贴—自定义」 |
| **MUI** | HeroUI 更轻量、原生支持 Tailwind，没有 CSS-in-JS 运行时开销 |
| **Chakra UI** | HeroUI 使用 React Aria（更强的可访问性原语）与 Tailwind v4（更佳性能） |
| **Mantine** | HeroUI 提供 AI 工具链（MCP、llms.txt），以 Tailwind 为首要样式方案 |

## 文档

- **最新版（v3）**：[heroui.com](https://heroui.com)
- **v2**：[v2.heroui.com](https://v2.heroui.com)

## Storybook

访问 [storybook-v3.heroui.com](https://storybook-v3.heroui.com/) 查看所有组件的 Storybook。

## 路线图

访问 [herouiv3.featurebase.app/roadmap](https://herouiv3.featurebase.app/roadmap) 查看 HeroUI v3 的路线图。

## Figma

访问 [HeroUI Figma Kit (v3)](https://www.figma.com/community/file/1546526812159103429/heroui-figma-kit-v3) 查看设计套件。

## 社区

我们很高兴看到社区采用 HeroUI、提出问题并提供反馈。
无论是功能请求、Bug 报告，还是想要展示的项目，都欢迎你的参与！

- [Discord](https://discord.gg/9b6yyZKmH4)
- [X](https://x.com/hero_ui)
- [GitHub Discussions](https://github.com/heroui-inc/heroui/discussions)

## 贡献

我们始终欢迎你的贡献！

请查看 [CONTRIBUTING.md](https://github.com/heroui-inc/heroui/blob/main/CONTRIBUTING.md) 了解参与方式。

请遵守本项目的 [CODE_OF_CONDUCT](https://github.com/heroui-inc/heroui/blob/main/CODE_OF_CONDUCT.md)。

## 许可证

[MIT](https://choosealicense.com/licenses/mit/)
