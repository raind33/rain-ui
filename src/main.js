import Vue from 'vue'
import demo from './demo.vue'
// import router from './router'
import plugin from '../packages/plugin'

Vue.use(plugin)
Vue.config.productionTip = false

new Vue({
  // router,
  render: h => h(demo)
}).$mount('#app')
