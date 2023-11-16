import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/mae',
      name: 'mae',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/mae.vue')
    },
    {
      path: '/000',
      name: '000',
      component: () => import('../components/test000.vue')
    },
    {
      path: '/001',
      name: '001',
      component: () => import('../components/test001.vue')
    },
    {
      path: '/002',
      name: '002',
      component: () => import('../components/test002.vue')
    },
    {
      path: '/HomeB',
      name: 'homeB',
      component: () => import('../views/HomeBack.vue')
    },
  ]
})

export default router
