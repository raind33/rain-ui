<template>
  <div style="padding-top: 16px;">
    <r-layout style="color: white;">
      <r-header style="height: 50px; background:lightskyblue;">
        header
      </r-header>
      <r-content style="height: 100px; background:deepskyblue;">
        content
      </r-content>
      <r-footer style="height: 50px; background:lightskyblue;">
        footer
      </r-footer>
    </r-layout>
  </div>
</template>
<style scoped>
  * {
    box-sizing: border-box;
  }
</style>
<script>
  import RLayout from '../../../packages/layout/'
  import RHeader from '../../../packages/header/'
  import RFooter from '../../../packages/footer/'
  import RContent from '../../../packages/content/'
  import RAside from '../../../packages/aside/'

  export default {
    components: {RLayout, RHeader, RFooter, RContent, RAside}
  }
</script>
