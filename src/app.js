import Vue from 'vue/dist/vue.esm'
import Button from './button'
import Icon from './icon'

Vue.component('r-button', Button)
Vue.component('r-icon', Icon)

new Vue({
  el: '#app',
})