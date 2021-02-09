<template>
  <div style="padding-top: 16px;">
    <h2>将触发方式改为 hover</h2>
    <p>
      <strong>预览</strong>
    </p>

    <r-popover trigger="hover">
      <r-button>上方弹出</r-button>
      <template slot="content">
        弹出内容
      </template>
    </r-popover>
    <r-popover position="bottom" trigger="hover">
      <r-button>下方弹出</r-button>
      <template slot="content">
        弹出内容
      </template>
    </r-popover>
    <r-popover position="left" trigger="hover">
      <r-button>左边弹出</r-button>
      <template slot="content">
        弹出内容
      </template>
    </r-popover>
    <r-popover position="right" trigger="hover">
      <r-button>右边弹出</r-button>
      <template slot="content">
        弹出内容
      </template>
    </r-popover>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style>
</style>
<style scoped>
</style>
<script>
  import RButton from '../../../src/button'
  import RPopover from '../../../src/popover'


  export default {
    components: {RButton, RPopover},
    data () {
      return {
        content: `
          <r-popover trigger="hover">
            <r-button>上方弹出</r-button>
            <template slot="content">
              弹出内容
            </template>
          </r-popover>
          <r-popover position="bottom" trigger="hover">
            <r-button>下方弹出</r-button>
            <template slot="content">
              弹出内容
            </template>
          </r-popover>
          <r-popover position="left" trigger="hover">
            <r-button>左边弹出</r-button>
            <template slot="content">
              弹出内容
            </template>
          </r-popover>
          <r-popover position="right" trigger="hover">
            <r-button>右边弹出</r-button>
            <template slot="content">
              弹出内容
            </template>
          </r-popover>
      `.replace(/^ {8}/gm, '').trim()
      }
    },
    methods: {
      onClickButton () {
        this.$toast('<strong style="color:red;">加粗的提示</strong>', {
          enableHtml: true
        })
      }
    },
  }
</script>
