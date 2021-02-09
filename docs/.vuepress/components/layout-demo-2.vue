<template>
  <div style="padding-top: 16px;">
    <h2>布局</h2>
    <p>
      <strong>预览</strong>
    </p>


    <r-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <r-header style="height: 50px; background:lightskyblue;">
        header
      </r-header>
      <r-layout>
        <r-sider style="height: 100px; background:#ddd; width:200px; color: black;">
          sider
        </r-sider>
        <r-content style="height: 100px; background:deepskyblue;">
          content
        </r-content>
      </r-layout>
      <r-footer style="height: 50px; background:lightskyblue;">
        footer
      </r-footer>
    </r-layout>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style scoped>
  * {
    box-sizing: border-box;
  }
</style>
<script>
  import RLayout from '../../../src/layout/layout'
  import RHeader from '../../../src/layout/header'
  import RFooter from '../../../src/layout/footer'
  import RContent from '../../../src/layout/content'
  import RSider from '../../../src/layout/sider'

  export default {
    components: {RLayout, RHeader, RFooter, RContent, RSider},
    data () {
      return {
        content: `
          <r-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <r-header style="height: 50px; background:lightskyblue;">
              header
            </r-header>
            <r-layout>
              <r-sider style="height: 100px; background:#ddd; width:200px; color: black;">
                sider
              </r-sider>
              <r-content style="height: 100px; background:deepskyblue;">
                content
              </r-content>
            </r-layout>
            <r-footer style="height: 50px; background:lightskyblue;">
              footer
            </r-footer>
          </r-layout>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
