---
title: Popover 弹出框
---

# 弹出框

### 基本用法

<popover-demo-1></popover-demo-1>

```html
<r-popover>
  <r-button>上方弹出</r-button>
  <template slot="content">
    弹出内容
  </template>
</r-popover>
<r-popover position="bottom">
  <r-button>下方弹出</r-button>
  <template slot="content">
    弹出内容
  </template>
</r-popover>
<r-popover position="left">
  <r-button>左边弹出</r-button>
  <template slot="content">
    弹出内容
  </template>
</r-popover>
<r-popover position="right">
  <r-button>右边弹出</r-button>
  <template slot="content">
    弹出内容
  </template>
</r-popover>
```

### 触发方式

<popover-demo-2></popover-demo-2>

```html
<r-popover trigger="hover">
  <r-button>上方弹出</r-button>
  <template slot="content">
    弹出内容
  </template>
</r-popover>
<r-popover position="bottom" trigger="hover">
  <r-button>下方弹出</r-button>
  <template slot="content">
    弹出内容
  </template>
</r-popover>
<r-popover position="left" trigger="hover">
  <r-button>左边弹出</r-button>
  <template slot="content">
    弹出内容
  </template>
</r-popover>
<r-popover position="right" trigger="hover">
  <r-button>右边弹出</r-button>
  <template slot="content">
    弹出内容
  </template>
</r-popover>
```
