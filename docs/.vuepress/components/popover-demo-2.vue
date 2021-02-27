<template>
  <div >
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
  </div>
</template>
<style>
</style>
<style scoped>
</style>
<script>
  import RButton from '../../../packages/button/'
  import RPopover from '../../../packages/popover/'
  export default {
    components: {RButton, RPopover}
  }
</script>
