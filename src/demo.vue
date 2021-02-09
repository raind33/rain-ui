<template>
  <div>
    <r-button>322</r-button>
  </div>
</template>
<script>
import RButton from './button/button'

export default {
  name: 'demo',
  components: { RButton },
  data () {
    return {
      selected: '2'
    }
  },
  created () {
  }
}
</script>
<style>
  * {margin: 0; padding: 0; box-sizing: border-box;}
  .wrapper {
    margin: 40px;
  }
  .box {
    width: 100%;
    height: 350px;
    background: #ddd;
    border: 1px solid red;
  }
</style>
