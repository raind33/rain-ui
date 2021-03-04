---
title: Upload 上传
---
# 上传

### 点击上传

<upload-demo-1></upload-demo-1>

#### 代码
```html
<template>
  <div>
    <r-upload
      name="file"
      :action="host+'/upload'"
      :fileList.sync="fileList"
      :size-limit="sizeLimit"
      :parseResponse="parseResponse"
    >
        <r-button>上传</r-button>
    </r-upload>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        fileList: [],
        sizeLimit: 2 * 1024 * 1024,
        host: 'https://node-image-serve.herokuapp.com'

      }
    },
    methods: {
      parseResponse (response) {
        return `${this.host}/preview/${response}`
      }
    }
  }
</script>

```

