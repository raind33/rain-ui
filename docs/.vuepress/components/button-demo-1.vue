<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <r-button>默认按钮</r-button>
    <r-button icon="settings">默认按钮</r-button>
    <r-button :loading="true">默认按钮</r-button>
    <r-button disabled>默认按钮</r-button>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Button from '../../../packages/button/'

  export default {
    components: {
      'r-button': Button
    },
    data () {
      return {
        content: `
          <r-button>默认按钮</r-button>
          <r-button icon="settings">默认按钮</r-button>
          <r-button :loading="true">默认按钮</r-button>
          <r-button disabled>默认按钮</r-button>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
