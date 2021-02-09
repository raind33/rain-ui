<template>
  <div style="padding-top: 16px;">
    <h2>双向绑定</h2>
    <p>
      <strong>预览</strong>
    </p>
    <r-input v-model="value"></r-input>
    <div>
      value: {{value}}
    </div>

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
        value: '1',
        content: `
          data:{
            value: '1'
          }

          <r-input v-model="value"></r-input>
          <div>
            value: {{value}}
          </div>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
