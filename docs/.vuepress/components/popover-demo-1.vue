<template>
  <div >
    <r-popover>
      <r-button>上方弹出</r-button>
      <template slot="content">
        弹出内容
      </template>
    </r-popover>
    <r-popover position="bottom">
      <r-button>下方弹出</r-button>
      <template slot="content">
        弹出内容
      </template>
    </r-popover>
    <r-popover position="left">
      <r-button>左边弹出</r-button>
      <template slot="content">
        弹出内容
      </template>
    </r-popover>
    <r-popover position="right">
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
