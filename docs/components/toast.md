---
title: Toast 轻提示
---

# Toast

## 全局方法

> Vue.prototype 添加了全局方法$toast。因此在 vue instance 中可以采用本页面中的方式调用 Toast

### this.$toast

<toast-demo-1></toast-demo-1>

#### 代码

```html
<r-button @click="$toast('点击弹出提示')">上方弹出</r-button>
<r-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</r-button>
<r-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</r-button>
```

### 设置关闭按钮

<toast-demo-2></toast-demo-2>

#### 代码

```html
<r-button @click="onClickButton">上方弹出</r-button>
<script>
  export default {
    methods: {
      onClickButton () {
        this.$toast('你知道我在等你吗？', {
          closeButton: {
            text: '知道了',
            callback: () => {
              console.log('他说知道了')
            }
          }
        })
      }
    }
  }
</script>
```

### 支持 html

<toast-demo-3></toast-demo-3>

#### 代码

```html
<r-button @click="onClickButton">上方弹出</r-button>
<script>
  export default {
    methods: {
      onClickButton () {
        this.$toast('<strong style="color:red;">加粗的提示</strong>', {
          enableHtml: true
        })
      }
    },
  }
</script>
```

## 单独引用

```javascript
import { Toast } from 'element-ui';
```

此时调用方法为 Message(message. options)
