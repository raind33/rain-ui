const onClickDocument = (e) => {
  const { target } = e
  callbacks.forEach((item) => {
    if (target === item.el || item.el.contains(target)) {

    } else {
      item.callback()
    }
  })
}
document.addEventListener('click', onClickDocument)
const callbacks = []
export default {
  bind: function (el, binding, vnode) {
    callbacks.push({ el, callback: binding.value })
  }
}

const removeListener = () => {
  document.removeEventListener('click', onClickDocument)
}

export { removeListener }
