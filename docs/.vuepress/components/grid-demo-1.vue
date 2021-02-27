<template>
  <div >
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
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}
.demoRow {
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
import RRow from '../../../packages/row/'
import RCol from '../../../packages/col/'

export default {
  components: { RRow, RCol },
  data() {
    return {
    }
  }
}
</script>
