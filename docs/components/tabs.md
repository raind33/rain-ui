---
title: Tabs 标签页
---

# 标签

### 基础用法

<ClientOnly>
  <tabs-demo-1></tabs-demo-1>
</ClientOnly>

#### 代码

```html
<r-tabs :selected="selected">
  <r-tabs-head>
    <r-tabs-item name="1">1</r-tabs-item>
    <r-tabs-item name="2">2</r-tabs-item>
  </r-tabs-head>
  <r-tabs-body>
    <r-tabs-pane name="1">content 1</r-tabs-pane>
    <r-tabs-pane name="2">content 2</r-tabs-pane>
  </r-tabs-body>
</r-tabs>
<script>
  export default {
    data() {
      return {
        selected: '1',
      }
    },
  }
</script>
```
