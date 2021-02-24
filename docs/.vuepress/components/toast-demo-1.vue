<template>
  <div style="padding-top: 16px;">
    <h2>this.$toast</h2>
    <p>
      <strong>预览</strong>
    </p>

    <div>
      <r-button @click="$toast('点击弹出提示')">上方弹出</r-button>
      <r-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</r-button>
      <r-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</r-button>
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
  import plugin from '../../../packages/plugin'
  import RButton from '../../../packages/button/'
  import Vue from 'vue'

  Vue.use(plugin)

  export default {
    components: {RButton},
    data () {
      return {
        content: `
          <style>
            .r-wrapper {
              z-index: 30;
            }
          </style>
          <r-button @click="$toast('点击弹出提示')">上方弹出</r-button>
          <r-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</r-button>
          <r-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</r-button>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
