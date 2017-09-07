import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Manufacturer from '@/components/inventory/Manufacturer/Manufacturer'
import Manufacturers from '@/components/inventory/Manufacturer/Manufacturers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/mfg/:id',
      name: 'Manufacturer',
      component: Manufacturer
    },
    {
      path: '/mfgs',
      name: 'Manufacturers',
      component: Manufacturers
    }
  ]
})
