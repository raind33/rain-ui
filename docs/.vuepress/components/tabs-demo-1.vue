<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
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

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import RTabs from '../../../src/tabs/tabs'
  import RTabsBody from '../../../src/tabs/tabs-body'
  import RTabsHead from '../../../src/tabs/tabs-header'
  import RTabsItem from '../../../src/tabs/tabs-item'
  import RTabsPane from '../../../src/tabs/tabs-pane'

  export default {
    components: {RTabs, RTabsBody, RTabsHead, RTabsItem, RTabsPane},
    data () {
      return {
        selected: '1',
        content: `
          data:{
            selected: '1'
          }

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
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
