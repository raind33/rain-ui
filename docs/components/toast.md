---
title: Toast 轻提示
---

# Toast
## 全局方法
>  Vue.prototype 添加了全局方法 $toast。因此在 vue instance 中可以采用本页面中的方式调用 Toast

<ClientOnly>
  <toast-demo-1></toast-demo-1>
  <toast-demo-2></toast-demo-2>
  <toast-demo-3></toast-demo-3>
</ClientOnly>

## 单独引用

```vue
import { Toast } from 'element-ui';
```
此时调用方法为 Message(message. options)