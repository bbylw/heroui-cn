"use client";

import { StaggerContainer, StaggerItem } from "./motion";

const categories = [
  {
    name: "按钮",
    components: ["Button", "ButtonGroup", "CloseButton", "ToggleButton", "ToggleButtonGroup"],
  },
  {
    name: "选择与列表",
    components: ["Dropdown", "ListBox", "TagGroup", "Autocomplete", "ComboBox", "Select"],
  },
  {
    name: "颜色与范围",
    components: ["ColorArea", "ColorField", "ColorPicker", "ColorSlider", "ColorSwatch", "Slider", "Switch"],
  },
  {
    name: "数据展示",
    components: ["Badge", "Chip", "Table", "Avatar", "Card", "Separator", "Surface", "Toolbar", "Typography", "Kbd"],
  },
  {
    name: "日期与时间",
    components: ["Calendar", "DateField", "DatePicker", "DateRangePicker", "RangeCalendar", "TimeField"],
  },
  {
    name: "反馈与状态",
    components: ["Alert", "Meter", "ProgressBar", "ProgressCircle", "Skeleton", "Spinner", "Toast", "Tooltip"],
  },
  {
    name: "表单",
    components: ["Checkbox", "CheckboxGroup", "Form", "Input", "InputGroup", "InputOTP", "NumberField", "RadioGroup", "SearchField", "TextArea", "TextField"],
  },
  {
    name: "导航与结构",
    components: ["Accordion", "Breadcrumbs", "DisclosureGroup", "Link", "Pagination", "Tabs"],
  },
  {
    name: "弹层与对话",
    components: ["AlertDialog", "Drawer", "Modal", "Popover"],
  },
];

export function ComponentsSection() {
  return (
    <section className="relative py-32 overflow-hidden" id="components">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-surface-600/60 to-transparent" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-cool-400/4 blur-[100px] rounded-full" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 max-w-[620px]">
          <p className="text-cool-400 font-mono text-sm mb-3 tracking-wide">
            // 组件全景
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
            60+ 组件，覆盖全场景
          </h2>
          <p className="text-text-secondary leading-relaxed font-body">
            从按钮到日期选择器，从表单到弹层 — 9 大分类，每个组件都经过无障碍与性能的双重打磨。更多组件持续加入中。
          </p>
        </div>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.06}>
          {categories.map((cat) => (
            <StaggerItem key={cat.name}>
              <div className="glass-card rounded-xl p-6 h-full transition-all duration-300 hover:-translate-y-0.5">
                <h3 className="font-display text-sm font-semibold mb-3 text-accent-400 tracking-tight">
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.components.map((c) => (
                    <span
                      key={c}
                      className="px-2 py-0.5 rounded text-xs font-mono bg-surface-700/60 text-text-secondary border border-surface-600/30"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
