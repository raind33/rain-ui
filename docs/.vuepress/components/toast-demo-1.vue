<template>
  <div >
    <div>
      <r-button @click="toast('点击弹出提示')">上方弹出</r-button>
      <r-button @click="toast('点击弹出提示', {position:'middle'})">中间弹出</r-button>
      <r-button @click="toast('点击弹出提示', {position:'bottom'})">下方弹出</r-button>
    </div>
  </div>
</template>
<style>
  .r-wrapper {
    z-index: 30 !important;
  }
</style>
<style scoped>
  * {
    box-sizing: border-box;
  }

</style>
<script>
  import Toast from '../../../packages/toast'
  import RButton from '../../../packages/button/'
  import Vue from 'vue'


  export default {
    components: {RButton},
    data () {
      return {
        toast: Toast
      }
    }
  }
</script>
