const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {

  it('存在.', () => {
    expect(Row).to.exist
  })
  // it('接收 gutter 属性.', (done) => {
  //   Vue.component('r-row', Row)
  //   Vue.component('r-col', Col)
  //   const div = document.createElement('div')
  //   document.body.appendChild(div)
  //   div.innerHTML = `
  //     <r-row gutter="20">
  //       <r-col span="12"></r-col>
  //       <r-col span="12"></r-col>
  //     </r-row>
  //   `
  //   console.log(div)
  //   const vm = new Vue({
  //     el: div
  //   }).$mount()
  //   setTimeout(() => {
  //     console.log(vm.$el, 55)
  //     const row = vm.$el.querySelector('.row')
  //     expect(getComputedStyle(row).marginLeft).to.eq('-10px')
  //     expect(getComputedStyle(row).marginRight).to.eq('-10px')
  //     const cols = vm.$el.querySelectorAll('.col')
  //     expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
  //     expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
  //     done()
  //     vm.$el.remove()
  //     vm.$destroy()
  //   }, 1500)
  // })
  it('接收 align 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Row)
    const vm = new Constructor({
      propsData: {
        align: 'right'
      }
    }).$mount(div)
    const element = vm.$el
    expect(getComputedStyle(element).justifyContent).to.equal('flex-end')
    div.remove()
    vm.$destroy()
  })

})