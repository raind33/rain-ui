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
import Popover from './popover.vue'
import CollapseItem from './collapse-item.vue'
import Collapse from './collapse.vue'
import Cascader from './cascader.vue'
import CascaderItem from './cascader-items.vue'

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
Vue.component('r-popover', Popover)
Vue.component('r-collapse', Collapse)
Vue.component('r-collapse-item', CollapseItem)
Vue.component('r-cascader', Cascader)
Vue.component('r-cascader-item', CascaderItem)

Vue.use(plugin)
new Vue({
  el: '#app',
  data: {
    message: 232,
    selectedTab: ['2', '1'],
    source: [{
      name: '浙江',
      children: [
        {
          name: '杭州',
          children: [
            {name: '上城'},
            {name: '下城'},
            {name: '江干'},
          ]
        },
        {
          name: '嘉兴',
          children: [
            {name: '南湖'},
            {name: '秀洲'},
            {name: '嘉善'},
          ]
        },
      ]
    }, {
      name: '福建',
      children: [
        {
          name: '福州',
          children: [
            {name: '鼓楼'},
            {name: '台江'},
            {name: '仓山'},
          ]
        },
      ]
    }, {
      name: '安徽',
      children: [{
        name: '合肥',
        children: [{
          name: '瑶海'
        }, {
          name: '庐阳'
        }]
      }]
    }]
  }
})