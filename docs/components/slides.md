---
title: Slides 轮播
---

# 轮播

### 基本用法

<slides-demo-1></slides-demo-1>

#### 代码

```html
<r-slides :selected.sync="selected">
  <r-slides-item name="1">
    <div class="box">1</div>
  </r-slides-item>
  <r-slides-item name="2">
    <div class="box">2</div>
  </r-slides-item>
  <r-slides-item name="3">
    <div class="box">3</div>
  </r-slides-item>
</r-slides>
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
