<template>
  <div style="paddinr-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
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

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
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
        content: `
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

          data: {
            selected: '1'
          }

          <style lang="scss" scoped>
            .box{
              height: 300px;
              background: blue;
              color: white;
              font-size: 30px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          </style>

      `.replace(/^ {8}/gm, '').trim()
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
