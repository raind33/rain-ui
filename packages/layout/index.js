import Layout from './src/main.vue'

Layout.install = (Vue) => {
  Vue.component(Layout.name, Layout)
}

export default Layout
