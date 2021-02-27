<template>
  <div >
    <div>
      <r-button @click="onClickButton">上方弹出</r-button>
    </div>
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
        toast: Toast
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
