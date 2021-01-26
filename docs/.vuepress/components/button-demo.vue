<template>
  <div>
    <r-button>默认按钮</r-button>
    <r-button icon="settings">默认按钮</r-button>
    <r-button :loading="true">默认按钮</r-button>
    <r-button disabled>默认按钮</r-button>

    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Button from '../../../src/button'

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
      `.replace(/\t+| +/g, '').trim()
      }
    }
  }
</script>