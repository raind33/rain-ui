import TabsPane from './src/main.vue'

TabsPane.install = (Vue) => {
  Vue.component(TabsPane.name, TabsPane)
}

export default TabsPane
