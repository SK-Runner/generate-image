import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'yearMobile',
      component: () => import('@/components/yearMobile')
    },
    {
      path: '/year-web',
      name: 'yearWeb',
      component: () => import('@/components/yearWeb')
    },
    {
      path: '/quarter-mobile',
      name: 'quarterMobile',
      component: () => import('@/components/quarterMobile')
    },
    {
      path: '/quarter-web',
      name: 'quarterWeb',
      component: () => import('@/components/quarterWeb')
    },
    {
      path: '/month-mobile',
      name: 'monthMobile',
      component: () => import('@/components/monthMobile')
    },
    {
      path: '/month-web',
      name: 'monthWeb',
      component: () => import('@/components/monthWeb')
    }
  ]
})
