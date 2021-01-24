import Vue from 'vue/dist/vue.esm'
import Button from './button'
import Icon from './icon'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import ButtonGroup from './button-group.vue'
import Layout from './layout'
import Header from './header'
import Slider from './slider'
import Content from './content'
import Footer from './footer'
import Toast from './toast'
import plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-header'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'

Vue.component('r-button', Button)
Vue.component('r-icon', Icon)
Vue.component('r-input', Input)
Vue.component('r-row', Row)
Vue.component('r-col', Col)
Vue.component('r-button-group', ButtonGroup)
Vue.component('r-layout', Layout)
Vue.component('r-header', Header)
Vue.component('r-content', Content)
Vue.component('r-footer', Footer)
Vue.component('r-sider', Slider)
Vue.component('r-toast', Toast)
Vue.component('r-tabs', Tabs)
Vue.component('r-tabs-head', TabsHead)
Vue.component('r-tabs-body', TabsBody)
Vue.component('r-tabs-item', TabsItem)
Vue.component('r-tabs-pane', TabsPane)
Vue.use(plugin)
new Vue({
  el: '#app',
  data: {
    message: 232,
    selectedTab: 'woman'
  },
  methods: {
    showToast1(){
      this.showToast('top')
    },
    showToast2(){
      this.showToast('middle')
    },
    showToast3(){
      this.showToast('bottom')
    },
    showToast(position){
      this.$toast(`你的智商目前为 ${parseInt(Math.random() * 100)}。你的智商需要充值！`, {
        position,
        enableHtml: false,
        closeButton: {
          text: '已充值',
          callback () {
            console.log('他说已经充值智商了')
          }
        },
        autoCloseDelay: 3
      })
    }
  }
})