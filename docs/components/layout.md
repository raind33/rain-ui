---
title: Layout 布局
---

# 布局

### 基础布局

<layout-demo-1></layout-demo-1>

#### 代码

```html
<r-layout ></r-layout>
  <r-header >
    header
  </r-header>
  <r-content >
    content
  </r-content>
  <r-footer >
    footer
  </r-footer>
</r-layout>
```

### 侧边栏布局 1

<layout-demo-2></layout-demo-2>

#### 代码

```html
<r-layout>
  <r-header>
    header
  </r-header>
  <r-layout>
    <r-aside closeVisible>
      aside
    </r-aside>
    <r-content>
      content
    </r-content>
  </r-layout>
  <r-footer>
    footer
  </r-footer>
</r-layout>
```

### 侧边栏布局 2

<layout-demo-3></layout-demo-3>

#### 代码

```html
<r-layout>
  <r-aside>
    aside
  </r-aside>
  <r-layout>
    <r-header>
      header
    </r-header>
    <r-content>
      content
    </r-content>
    <r-footer>
      footer
    </r-footer>
  </r-layout>
</r-layout>
```
