import Uploader from './src/main.vue'

Uploader.install = (Vue) => {
  Vue.component(Uploader.name, Uploader)
}

export default Uploader
