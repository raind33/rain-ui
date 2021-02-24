import Slides from './src/main.vue'

Slides.install = (Vue) => {
  Vue.component(Slides.name, Slides)
}

export default Slides
