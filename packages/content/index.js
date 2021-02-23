import Content from './src/main.vue'

Content.install = (Vue) => {
  Vue.component(Content.name, Content)
}

export default Content
