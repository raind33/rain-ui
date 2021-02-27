---
title: Input 输入框
---

# 输入框

### 基础用法

<input-demo-1></input-demo-1>

#### 代码

```html
<r-input></r-input>
<r-input value="中文"></r-input>
<r-input value="中文" disabled></r-input>
<r-input value="中文" readonly></r-input>
```

### 双向绑定

<input-demo-2></input-demo-2>

#### 代码

```html
<r-input v-model="value"></r-input>
<div>
  value: {{value}}
</div>
<script>
  export default {
    data() {
      return {
        value: 'hahela',
      }
    },
  }
</script>
```