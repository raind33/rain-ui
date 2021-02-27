<template>
  <div >
    <r-input value="中文"></r-input>
    <r-input value="中文" disabled></r-input>
    <r-input value="中文" readonly></r-input>
  </div>
</template>
<script>
  import RInput from '../../../packages/input/'

  export default {
    components: {RInput},
    data () {
      return {
      }
    }
  }
</script>
