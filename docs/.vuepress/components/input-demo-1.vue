<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <r-input></r-input>
    <r-input value="中文"></r-input>
    <r-input value="中文" disabled></r-input>
    <r-input value="中文" readonly></r-input>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import RInput from '../../../src/input'

  export default {
    components: {RInput},
    data () {
      return {
        selected: '1',
        content: `
          <r-input></r-input>
          <r-input value="中文"></r-input>
          <r-input value="中文" disabled></r-input>
          <r-input value="中文" readonly></r-input>
      `.replace(/ {8}/g, '').trim()
      }
    }
  }
</script>
