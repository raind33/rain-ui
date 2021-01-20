import Vue from 'vue/dist/vue.esm'
import Button from './button'
import Icon from './icon'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import ButtonGroup from './button-group.vue'
Vue.component('r-button', Button)
Vue.component('r-icon', Icon)
Vue.component('r-input', Input)
Vue.component('r-row', Row)
Vue.component('r-col', Col)
Vue.component('r-button-group', ButtonGroup)

new Vue({
  el: '#app',
  data: {
    message: 232
  }
})