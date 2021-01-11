import Vue from 'vue/dist/vue.esm'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group.vue'
Vue.component('r-button', Button)
// Vue.component('r-icon', Icon)
Vue.component('r-button-group', ButtonGroup)

new Vue({
  el: '#app',
})