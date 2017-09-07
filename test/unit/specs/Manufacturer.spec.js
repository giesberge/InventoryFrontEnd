import Vue from 'vue'
import Manufacturer from '@/components/Manufacturer'
import{ shallow } from 'vue-test-utils'

describe('Manufacturer.vue', () => {
  it('should render correct contents', () => {
    const $router = { path: 'some path' }
    const wrapper = shallow(Manufacturer, {
      intercept: { $router }
    })

    // const Constructor = Vue.extend(Manufacturer)
    // const vm = new Constructor().$mount()
    expect(wrapper.vm.$el.querySelector('.mfg h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
