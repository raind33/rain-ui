<template>
  <div style="paddinr-top: 16px;">
    <r-slides :selected.sync="selected">
      <r-slides-item name="1">
        <div class="box">1</div>
      </r-slides-item>
      <r-slides-item name="2">
        <div class="box">2</div>
      </r-slides-item>
      <r-slides-item name="3">
        <div class="box">3</div>
      </r-slides-item>
    </r-slides>
  </div>
</template>
<script>
  import RSlides from '../../../packages/slides/'
  import RSlidesItem from '../../../packages/slides-item/'

  export default {
    components: {
      RSlides, RSlidesItem
    },
    data () {
      return {
        selected: "1",
      }
    }
  }
</script>
<style lang="scss" scoped>
  .box{
    height: 300px;
    background: $blue;
    color: white;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
