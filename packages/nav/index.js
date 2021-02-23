import Nav from './src/main.vue'

Nav.install = (Vue) => {
  Vue.component(Nav.name, Nav)
}

export default Nav
