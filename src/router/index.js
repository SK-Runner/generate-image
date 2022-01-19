import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MobileCard',
      component: () => import('@/components/MobileCard')
    },
    {
      path: '/postcard',
      name: 'postCard',
      component: () => import('@/components/postCard')
    }
  ]
})
