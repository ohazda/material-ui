---
product: material-ui
title: React Badge（徽章）组件
components: Badge, BadgeUnstyled
githubLabel: 'component: badge'
---

# Badge 徽章

<p class="description">徽章组件会在其子项（们）的右上角生成一个小徽章。</p>

{{"component": "modules/components/ComponentLinkHeader.js"}}

## 简单的徽章

这个示例是个包含了文本的徽章，同时使用了主色和副色。 徽章会对其子元素生效。

{{"demo": "SimpleBadge.js"}}

## 自定义徽章

Use `color` prop to apply theme palette to component.

{{"demo": "ColorBadge.js"}}

## 徽章组件的可见性

以下是自定义组件的一个示例。 您可以在 [重写文档页面](/material-ui/customization/how-to-customize/) 中了解更多有关此内容的信息。

{{"demo": "CustomizedBadges.js"}}

## 徽章组件的可见性

徽章组件的隐显可以通过 `invisible` 属性来设置。

{{"demo": "BadgeVisibility.js"}}

当 badgeContent 为零时，徽章组件将会自动隐藏。 您可以使用 `showZero` 属性覆盖它。

{{"demo": "ShowZeroBadge.js"}}

## 最大值

您可以使用 `max` 属性来限制徽章组件内容的最大值。

{{"demo": "BadgeMax.js"}}

## 圆点徽章

`dot` 属性会使得徽章渲染为一个小点。 这样的话，可以在不给出具体计数的情况下，组件能够提示一下变化。

{{"demo": "DotBadge.js"}}

## 徽章组件的 overlap 属性

你可以使用 `anchorOrigin` 属性移把徽章组件移动到封装的元素的任何角落。

{{"demo": "BadgeOverlap.js"}}

## 徽章组件的校准

你可以使用 `anchorOrigin` 属性移把徽章组件移动到封装的元素的任何角落。

{{"demo": "BadgeAlignment.js", "hideToolbar": true}}

## Unstyled

Badge 组件还有一个无样式的版本。 当你有大量的自定义样式需求时，使用它可以更好的帮助你控制住包的大小。

```js
import BadgeUnstyled from '@mui/base/BadgeUnstyled';
```

{{"demo": "UnstyledBadge.js"}}

## Accessibility

您不能指望徽章的内容被正确的读出。 您应该提供一个完整的描述，例如， 使用 `aria-label`：

{{"demo": "AccessibleBadges.js"}}
