"use client";

import { Reveal } from "./motion";

const buttonCode = `import { Button } from "@heroui/react";

// 6 种语义变体
<Button variant="primary">主要</Button>
<Button variant="secondary">次要</Button>
<Button variant="tertiary">三级</Button>
<Button variant="outline">描边</Button>
<Button variant="ghost">幽灵</Button>
<Button variant="danger">危险</Button>

// 尺寸与状态
<Button size="sm">小</Button>
<Button size="lg" fullWidth>全宽大按钮</Button>
<Button isPending>加载中...</Button>
<Button isIconOnly><Icon /></Button>`;

const cardCode = `import { Card } from "@heroui/react";

// 复合组件 API — 点号访问子部件
<Card variant="secondary">
  <Card.Header>
    <Card.Title>成为创作者</Card.Title>
    <Card.Description>
      立即注册，开始赚取积分。
    </Card.Description>
  </Card.Header>
  <Card.Content>
    <p>主体内容区域</p>
  </Card.Content>
  <Card.Footer>
    <Button variant="primary">加入</Button>
  </Card.Footer>
</Card>

// 4 种语义层级
// transparent → default → secondary → tertiary`;

const tableCode = `import { Table } from "@heroui/react";

<Table>
  <Table.ScrollContainer>
    <Table.Content aria-label="成员表">
      <Table.Header>
        <Table.Column isRowHeader allowsSorting>
          姓名
        </Table.Column>
        <Table.Column>角色</Table.Column>
        <Table.Column>状态</Table.Column>
      </Table.Header>
      <Table.Body items={users}>
        {(user) => (
          <Table.Row id={user.id}>
            <Table.Cell>{user.name}</Table.Cell>
            <Table.Cell>{user.role}</Table.Cell>
            <Table.Cell>
              <Chip color="success" variant="soft">
                在线
              </Chip>
            </Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table.Content>
  </Table.ScrollContainer>
</Table>

// 支持：排序、选择、列宽调整、
// 无限加载、虚拟化、可展开行`;

const toastCode = `import { Toast, toast } from "@heroui/react";

// 根部放置 Provider
<Toast.Provider placement="bottom end" />

// 任意位置触发
toast("事件已创建");
toast.success("文件已保存");
toast.warning("额度即将用完", {
  description: "升级到付费计划",
  actionProps: { children: "升级" },
});

// Promise 集成
toast.promise(uploadFile(), {
  loading: "上传中...",
  success: (d) => \`\${d.name} 已上传\`,
  error: "上传失败",
});`;

const tabs = [
  { label: "Button", code: buttonCode, desc: "6 种变体 · 3 种尺寸 · 加载态 · 图标模式" },
  { label: "Card", code: cardCode, desc: "复合组件 · 4 种语义层级 · 表单嵌套" },
  { label: "Table", code: tableCode, desc: "排序 · 选择 · 虚拟化 · 无限加载 · TanStack 集成" },
  { label: "Toast", code: toastCode, desc: "5 种变体 · Promise · 多队列 · 自定义渲染" },
];

import { useState } from "react";

export function ComponentShowcase() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-32 overflow-hidden" id="showcase">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-surface-600/60 to-transparent" />
      <div className="absolute top-1/4 left-[-8%] w-[400px] h-[400px] bg-cool-400/4 blur-[100px] rounded-full" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-12 max-w-[600px]">
          <p className="text-accent-400 font-mono text-sm mb-3 tracking-wide">
            // 组件实战
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
            简洁的 API，
            <br />
            强大的能力
          </h2>
          <p className="text-text-secondary leading-relaxed font-body">
            复合组件设计让每个部件都可独立组合。以下是最常用的几个组件。
          </p>
        </div>

        <Reveal delay={0.15}>
          {/* Tab bar */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActive(i)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active === i
                    ? "bg-accent-500/15 text-accent-400 border border-accent-500/30"
                    : "bg-surface-800/50 text-text-secondary border border-surface-600/30 hover:border-surface-500 hover:text-text-primary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Code panel */}
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-3 border-b border-surface-700/50">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-xs text-text-muted font-body">
                {tabs[active].desc}
              </span>
            </div>
            <div className="px-6 py-5 overflow-x-auto">
              <pre className="font-mono text-[13px] leading-relaxed text-text-secondary whitespace-pre">
                <code>{tabs[active].code}</code>
              </pre>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
