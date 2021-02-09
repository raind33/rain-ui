<template>
  <div style="padding-top: 16px;">
    <h2>24格网格</h2>
    <p>
      <strong>预览</strong>
    </p>
    <r-row class="demoRow">
      <r-col span="8">
        <div class="demoCol">8</div>
      </r-col>
      <r-col span="8">
        <div class="demoCol">8</div>
      </r-col>
      <r-col span="8">
        <div class="demoCol">8</div>
      </r-col>
    </r-row>
    <r-row class="demoRow">
      <r-col span="6">
        <div class="demoCol">6</div>
      </r-col>
      <r-col span="6">
        <div class="demoCol">6</div>
      </r-col>
      <r-col span="6">
        <div class="demoCol">6</div>
      </r-col>
      <r-col span="6">
        <div class="demoCol">6</div>
      </r-col>
    </r-row>
    <r-row class="demoRow">
      <r-col span="4">
        <div class="demoCol">4</div>
      </r-col>
      <r-col span="4">
        <div class="demoCol">4</div>
      </r-col>
      <r-col span="4">
        <div class="demoCol">4</div>
      </r-col>
      <r-col span="4">
        <div class="demoCol">4</div>
      </r-col>
      <r-col span="4">
        <div class="demoCol">4</div>
      </r-col>
      <r-col span="4">
        <div class="demoCol">4</div>
      </r-col>
    </r-row>
    <r-row class="demoRow">
      <r-col span="2">
        <div class="demoCol">2</div>
      </r-col>
      <r-col span="2">
        <div class="demoCol">2</div>
      </r-col>
      <r-col span="2">
        <div class="demoCol">2</div>
      </r-col>
      <r-col span="2">
        <div class="demoCol">2</div>
      </r-col>
      <r-col span="2">
        <div class="demoCol">2</div>
      </r-col>
      <r-col span="2">
        <div class="demoCol">2</div>
      </r-col>
      <r-col span="2">
        <div class="demoCol">2</div>
      </r-col>
      <r-col span="2">
        <div class="demoCol">2</div>
      </r-col>
      <r-col span="2">
        <div class="demoCol">2</div>
      </r-col>
      <r-col span="2">
        <div class="demoCol">2</div>
      </r-col>
      <r-col span="2">
        <div class="demoCol">2</div>
      </r-col>
      <r-col span="2">
        <div class="demoCol">2</div>
      </r-col>
    </r-row>

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
  .demoRow{
    margin: 10px 0;
  }
  .demoCol {
    height: 50px;
    border: 1px solid #ccc;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
<script>
  import RRow from '../../../src/grid/row'
  import RCol from '../../../src/grid/col'

  export default {
    components: {RRow, RCol},
    data () {
      return {
        content: `
          * {
            box-sizing: border-box;
          }

          <r-row class="demoRow">
            <r-col span="8">
              <div class="demoCol">8</div>
            </r-col>
            <r-col span="8">
              <div class="demoCol">8</div>
            </r-col>
            <r-col span="8">
              <div class="demoCol">8</div>
            </r-col>
          </r-row>

          <r-row class="demoRow">
            <r-col span="6">
              <div class="demoCol">6</div>
            </r-col>
            <r-col span="6">
              <div class="demoCol">6</div>
            </r-col>
            <r-col span="6">
              <div class="demoCol">6</div>
            </r-col>
            <r-col span="6">
              <div class="demoCol">6</div>
            </r-col>
          </r-row>

          <r-row class="demoRow">
            <r-col span="4">
              <div class="demoCol">4</div>
            </r-col>
            <r-col span="4">
              <div class="demoCol">4</div>
            </r-col>
            <r-col span="4">
              <div class="demoCol">4</div>
            </r-col>
            <r-col span="4">
              <div class="demoCol">4</div>
            </r-col>
            <r-col span="4">
              <div class="demoCol">4</div>
            </r-col>
            <r-col span="4">
              <div class="demoCol">4</div>
            </r-col>
          </r-row>

          <r-row class="demoRow">
            <r-col span="2">
              <div class="demoCol">2</div>
            </r-col>
            <r-col span="2">
              <div class="demoCol">2</div>
            </r-col>
            <r-col span="2">
              <div class="demoCol">2</div>
            </r-col>
            <r-col span="2">
              <div class="demoCol">2</div>
            </r-col>
            <r-col span="2">
              <div class="demoCol">2</div>
            </r-col>
            <r-col span="2">
              <div class="demoCol">2</div>
            </r-col>
            <r-col span="2">
              <div class="demoCol">2</div>
            </r-col>
            <r-col span="2">
              <div class="demoCol">2</div>
            </r-col>
            <r-col span="2">
              <div class="demoCol">2</div>
            </r-col>
            <r-col span="2">
              <div class="demoCol">2</div>
            </r-col>
            <r-col span="2">
              <div class="demoCol">2</div>
            </r-col>
            <r-col span="2">
              <div class="demoCol">2</div>
            </r-col>
          </r-row>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script><template>
  <div style="padding-top: 16px;">
    <h2>24格网格</h2>
    <p>
      <strong>预览</strong>
    </p>
    <r-row class="demoRow">
      <r-col span="8">
        <div class="demoCol">8</div>
      </r-col>
      <r-col span="8">
        <div class="demoCol">8</div>
      </r-col>
      <r-col span="8">
        <div class="demoCol">8</div>
      </r-col>
    </r-row>
    <r-row class="demoRow">
      <r-col span="6">
        <div class="demoCol">6</div>
      </r-col>
      <r-col span="6">
        <div class="demoCol">6</div>
      </r-col>
      <r-col span="6">
        <div class="demoCol">6</div>
      </r-col>
      <r-col span="6">
        <div class="demoCol">6</div>
      </r-col>
    </r-row>
    <r-row class="demoRow">
      <r-col span="4">
        <div class="demoCol">4</div>
      </r-col>
      <r-col span="4">
        <div class="demoCol">4</div>
      </r-col>
      <r-col span="4">
        <div class="demoCol">4</div>
      </r-col>
      <r-col span="4">
        <div class="demoCol">4</div>
      </r-col>
      <r-col span="4">
        <div class="demoCol">4</div>
      </r-col>
      <r-col span="4">
        <div class="demoCol">4</div>
      </r-col>
    </r-row>
    <r-row class="demoRow">
      <r-col span="2">
        <div class="demoCol">2</div>
      </r-col>
      <r-col span="2">
        <div class="demoCol">2</div>
      </r-col>
      <r-col span="2">
        <div class="demoCol">2</div>
      </r-col>
      <r-col span="2">
        <div class="demoCol">2</div>
      </r-col>
      <r-col span="2">
        <div class="demoCol">2</div>
      </r-col>
      <r-col span="2">
        <div class="demoCol">2</div>
      </r-col>
      <r-col span="2">
        <div class="demoCol">2</div>
      </r-col>
      <r-col span="2">
        <div class="demoCol">2</div>
      </r-col>
      <r-col span="2">
        <div class="demoCol">2</div>
      </r-col>
      <r-col span="2">
        <div class="demoCol">2</div>
      </r-col>
      <r-col span="2">
        <div class="demoCol">2</div>
      </r-col>
      <r-col span="2">
        <div class="demoCol">2</div>
      </r-col>
    </r-row>

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
  .demoRow{
    margin: 10px 0;
  }
  .demoCol {
    height: 50px;
    border: 1px solid #ccc;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
<script>
  import RRow from '../../../src/grid/row'
  import RCol from '../../../src/grid/col'

  export default {
    components: {RRow, RCol},
    data () {
      return {
        value: '1',
        content: `
          * {
            box-sizing: border-box;
          }

          <r-row class="demoRow">
            <r-col span="8">
              <div class="demoCol">8</div>
            </r-col>
            <r-col span="8">
              <div class="demoCol">8</div>
            </r-col>
            <r-col span="8">
              <div class="demoCol">8</div>
            </r-col>
          </r-row>

          <r-row class="demoRow">
            <r-col span="6">
              <div class="demoCol">6</div>
            </r-col>
            <r-col span="6">
              <div class="demoCol">6</div>
            </r-col>
            <r-col span="6">
              <div class="demoCol">6</div>
            </r-col>
            <r-col span="6">
              <div class="demoCol">6</div>
            </r-col>
          </r-row>

          <r-row class="demoRow">
            <r-col span="4">
              <div class="demoCol">4</div>
            </r-col>
            <r-col span="4">
              <div class="demoCol">4</div>
            </r-col>
            <r-col span="4">
              <div class="demoCol">4</div>
            </r-col>
            <r-col span="4">
              <div class="demoCol">4</div>
            </r-col>
            <r-col span="4">
              <div class="demoCol">4</div>
            </r-col>
            <r-col span="4">
              <div class="demoCol">4</div>
            </r-col>
          </r-row>

          <r-row class="demoRow">
            <r-col span="2">
              <div class="demoCol">2</div>
            </r-col>
            <r-col span="2">
              <div class="demoCol">2</div>
            </r-col>
            <r-col span="2">
              <div class="demoCol">2</div>
            </r-col>
            <r-col span="2">
              <div class="demoCol">2</div>
            </r-col>
            <r-col span="2">
              <div class="demoCol">2</div>
            </r-col>
            <r-col span="2">
              <div class="demoCol">2</div>
            </r-col>
            <r-col span="2">
              <div class="demoCol">2</div>
            </r-col>
            <r-col span="2">
              <div class="demoCol">2</div>
            </r-col>
            <r-col span="2">
              <div class="demoCol">2</div>
            </r-col>
            <r-col span="2">
              <div class="demoCol">2</div>
            </r-col>
            <r-col span="2">
              <div class="demoCol">2</div>
            </r-col>
            <r-col span="2">
              <div class="demoCol">2</div>
            </r-col>
          </r-row>
      `.replace(/ {8}/g, '').trim()
      }
    }
  }
</script>
