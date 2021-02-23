import NavItem from './src/main.vue'

NavItem.install = (Vue) => {
  Vue.component(NavItem.name, NavItem)
}

export default NavItem
