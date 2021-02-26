import Main from './main.vue'
import Vue from 'vue'
let currentToast

const Toast = function (message, options) {
  if (currentToast) {
    currentToast.close()
  }
  currentToast = createToast({
    Vue,
    message,
    propsData: options,
    onClose: () => {
      currentToast = null
    }
  })
}

function createToast ({ Vue, message, propsData, onClose }) {
  const Constructor = Vue.extend(Main)
  const toast = new Constructor({ propsData })
  toast.$slots.default = [message]
  toast.$mount()
  toast.$on('close', onClose)
  document.body.appendChild(toast.$el)
  return toast
}

export default Toast
