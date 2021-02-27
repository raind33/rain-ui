---
title: 快速上手
---

# 快速上手

## 安装
```bash
npm i -S raind-ui
```

## 引入

### 全量引入

```javascript
import raindUi from 'raind-ui'
import 'raind-ui/lib/theme/index.css'
Vue.use(raindUi)
```

### 按需引入

可以通过以下的写法来按需加载组件:
```javascript
import { Button } from 'raind-ui'
import 'raind-ui/lib/theme/button.css'
```
如果你使用了 babel，那么可以使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 来进行按需加载，加入这个插件后。你可以这么写:
```javascript
import { Button } from 'raind-ui'

// vue.config.js
module.exports = {
  plugins: [
    ['import',
      {
        libraryName: 'raind-ui',
        libraryDirectory: 'lib',
        style: (name, file) => {
          const libDirIndex = name.lastIndexOf('/')
          const libDir = name.substring(0, libDirIndex)
          const fileName = name.substr(libDirIndex + 1)
          return `${libDir}/theme/${fileName}.css`
        }
      }
    ]
  ]
}

```