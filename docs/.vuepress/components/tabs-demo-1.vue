<template>
  <div style="padding-top: 16px;">
    <r-tabs :selected="selected">
      <r-tabs-head>
        <r-tabs-item name="1">1</r-tabs-item>
        <r-tabs-item name="2">2</r-tabs-item>
      </r-tabs-head>
      <r-tabs-body>
        <r-tabs-pane name="1">content 1</r-tabs-pane>
        <r-tabs-pane name="2">content 2</r-tabs-pane>
      </r-tabs-body>
    </r-tabs>
  </div>
</template>
<script>
  import RTabs from '../../../packages/tabs'
  import RTabsBody from '../../../packages/tabs-body'
  import RTabsHead from '../../../packages/tabs-header'
  import RTabsItem from '../../../packages/tabs-item'
  import RTabsPane from '../../../packages/tabs-pane/'

  export default {
    components: {RTabs, RTabsBody, RTabsHead, RTabsItem, RTabsPane},
    data () {
      return {
        selected: '1',
      }
    }
  }
</script>
