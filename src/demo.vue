<template>
  <div style="margin: 20px;">
    <r-pager :total-page="10" :current-page.sync="currentPage"></r-pager>
  </div>
</template>
<script>
import RPager from './pager'

export default {
  name: 'demo',
  components: { RPager },
  data () {
    return {
      currentPage: 1
    }
  }
}
</script>
<style>
  * {margin: 0; padding: 0; box-sizing: border-box;}
  body {background: white;}
</style>
<style scoped lang="scss">
</style>
