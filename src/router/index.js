import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HlBreadCrumbs',
    component: () => import('@/views/HlBreadcrumbs')
  },
  {
    path: '/pagejs',
    name: 'HlPagejs',
    component: () => import('@/views/HlPagejs')
  },
]

const router = new VueRouter({
  routes
})

export default router
