<template>
  <div style="padding-top: 16px;">
    <h3>this.$toast</h3>
    <p>
      <strong>预览</strong>
    </p>

    <div>
      <r-button @click="toast('点击弹出提示')">上方弹出</r-button>
      <r-button @click="toast('点击弹出提示', {position:'middle'})">中间弹出</r-button>
      <r-button @click="toast('点击弹出提示', {position:'bottom'})">下方弹出</r-button>
    </div>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
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
        toast: Toast,
        content: `
          <style>
            .r-wrapper {
              z-index: 30;
            }
          </style>
          <r-button @click="this.$toast('点击弹出提示')">上方弹出</r-button>
          <r-button @click="this.$toast('点击弹出提示', {position:'middle'})">中间弹出</r-button>
          <r-button @click="this.$toast('点击弹出提示', {position:'bottom'})">下方弹出</r-button>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
