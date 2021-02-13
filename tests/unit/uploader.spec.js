import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {mount} from '@vue/test-utils'
import Uploader from '../../src/uploader'
import http from '../../src/http'


chai.use(sinonChai)

describe('Uploader.vue', () => {
  it('存在.', () => {
    expect(Uploader).to.exist
  })
  it('test', () => {
    const r = sinon.stub().returns(100)
    console.log(r())
  })
  it('可以上传一个文件', (done) => {
    let stub = sinon.stub(http, 'post').callsFake((url, options) => {
      setTimeout(function () {
        options.success('{"id": "123123"}')
      }, 1000)
    })

    const wrapper = mount(Uploader, {
      propsData: {
        name: 'file',
        action: 'https://node-image-serve.herokuapp.com/upload',
        method: 'post',
        parseResponse: (response) => {
          let object = JSON.parse(response)
          return `https://node-image-serve.herokuapp.com/upload/preview/${object.id}`
        },
        fileList: []
      },
      slots: {default: `<button id="x">click me</button>`},
      listeners: {
        'update:fileList': (fileList) => {
          wrapper.setProps({fileList})
        },
        'uploaded': () => {
          // loading状态为success时候，vue渲染异步
          wrapper.vm.$nextTick(() => {
            expect(wrapper.find('use').exists()).to.eq(false)
            expect(wrapper.props().fileList[0].url).to.eq('https://node-image-serve.herokuapp.com/upload/preview/123123')
            stub.restore()
            done()
          })
        }
      }
    })
    wrapper.find('#x').trigger('click')
    let inputWrapper = wrapper.find('input[type="file"]')
    let input = inputWrapper.element
    let file1 = new File(['xxxxxxxxx'], 'xxx.txt')

    const data = new DataTransfer()
    data.items.add(file1)
    input.files = data.files;
    inputWrapper.trigger('change')
    // loading状态为loading时候，vue渲染异步
    wrapper.vm.$nextTick(() => {
      let use = wrapper.find('use').element
      expect(use.getAttribute('xlink:href')).to.eq('#r-loading')
    })

  })
})
