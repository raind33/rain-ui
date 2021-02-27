<template>
  <div >
    <r-button>默认按钮</r-button>
    <r-button icon="settings">默认按钮</r-button>
    <r-button :loading="true">默认按钮</r-button>
    <r-button disabled>默认按钮</r-button>
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
      }
    }
  }
</script>
