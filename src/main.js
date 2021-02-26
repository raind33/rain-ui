import Vue from 'vue'
import demo from './demo.vue'
// import router from './router'
Vue.config.productionTip = false

new Vue({
  // router,
  render: h => h(demo)
}).$mount('#app')
