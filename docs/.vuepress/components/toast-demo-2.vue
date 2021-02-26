<template>
  <div style="padding-top: 16px;">
    <h2>设置关闭按钮</h2>
    <p>
      <strong>预览</strong>
    </p>

    <div>
      <r-button @click="onClickButton">上方弹出</r-button>
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

          <div>
            <r-button @click="onClickButton">上方弹出</r-button>
          </div>

          methods: {
            onClickButton () {
              this.$toast('你知道我在等你吗？', {
                closeButton: {
                  text: '知道了',
                  callback: () => {
                    console.log('他说知道了')
                  }
                }
              })
            }
          },
      `.replace(/^ {8}/gm, '').trim()
      }
    },
    methods: {
      onClickButton () {
        this.toast('你知道我在等你吗？', {
          closeButton: {
            text: '知道了',
            callback: () => {
              console.log('他说知道了')
            }
          }
        })
      }
    },
  }
</script>
