---
product: material-ui
title: React Accordion （扩展面板）组件
components: Accordion, AccordionActions, AccordionDetails, AccordionSummary
githubLabel: 'component: accordion'
materialDesign: https://material.io/archive/guidelines/components/expansion-panels.html
waiAria: 'https://www.w3.org/TR/wai-aria-practices/#accordion'
---

# Accordion 扩展面板

<p class="description">扩展面板是一个展示内容文本的组件，用户可以显示/隐藏文本内容。</p>

扩展面板是一个轻量级容器，既可以单独使用，也可以和卡片这样更大的平面相结合。

{{"component": "modules/components/ComponentLinkHeader.js"}}

> **注意：** 扩展面板将不再记录在 [Material Design 指南中](https://material.io/)，但 Material-UI 将继续支持它。 它之前被称为 "expansion panel（扩展面板）"。

## 简单的扩展面板

{{"demo": "BasicAccordion.js", "bg": true}}

## 可控制的折叠面板

使用`控制面板` 组件，能够扩展已有的控制面板行为，来创建自定义的扩展面板组。

{{"demo": "ControlledAccordions.js", "bg": true}}

## 自定义的扩展面板

以下是自定义扩展面板的一个示例。 您可以在 [重写文档页面](/material-ui/customization/how-to-customize/) 中了解更多。

{{"demo": "CustomizedAccordions.js"}}

## 性能

即使扩展面板不是展开状态，默认情况下扩展面板的内容也会被挂载。 这样的默认情况是是考虑到了服务端渲染（server-side rendering）和搜索引擎优化（SEO）。 如果您在扩展面板中渲染组件树性能开销很大，或者只是想要渲染很多不带内容的扩展面板，那么通过启用 `TransitionProps` 中的 `unmountOnExit` 来改变默认的渲染方式也许可行。

```jsx
<Accordion TransitionProps={{ unmountOnExit: true }} />
```

不过对所有情况下的性能优化，这并不是灵丹妙药。 一定要先确定哪些地方存在瓶颈，然后再尝试这些优化策略。

## 无障碍设计

(WAI-ARIA: https://www.w3.org/TR/wai-aria-practices/#accordion)

为了获得最佳的无障碍设计，我们建议在 `AccordionSummary` 上设置 `id` 和 `aria-controls`。 `Accordion` 将为扩展面板的内容区域派生必需的 `aria-labelledby` 和 `id`。
