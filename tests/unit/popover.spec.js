import chai, { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Popover from '@/popover'


describe('Popover', () => {
  it('存在.', () => {
    expect(Popover).to.exist
  })

  it('可以设置position.', (done) => {
    const wrapper = mount(Popover, {
      slots: {
        default: { template: '<button>点我</button>' },
        content: '<div>弹出内容</div>'
      },
      propsData: {
        position: 'bottom'
      }
    })
    wrapper.find('button').trigger('click')
    // 元素挂载到了body上
    wrapper.vm.$nextTick(() => {
      const content = document.querySelector('.content-wrapper')
      expect(content.classList.contains('position-bottom')).to.be.true
      // 避免对下一个测试造成影响
      content.remove()
      done()
    })
    // const classes = wrapper.find('content-wrapper').classes()
    // expect(classes).to.include('position-bottom')
  })
  it('可以设置 trigger', (done) => {
    const wrapper = mount(Popover, {
      slots: {
        default: { template: '<button>点我</button>' },
        content: '<div>弹出内容</div>'
      },
      propsData: {
        position: 'bottom',
        trigger: 'hover'
      }
    })
    expect(document.querySelector('.content-wrapper')).to.not.exist
    wrapper.find('.popover').trigger('mouseenter')
    wrapper.vm.$nextTick(() => {
      expect(document.querySelector('.content-wrapper')).to.exist
      done()
    })
  })
})
