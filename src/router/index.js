import { createRouter, createWebHistory } from 'vue-router'
import MyDay from '../views/MyDay.vue'

const routes = [
  {
    path: '/',
    name: 'MyDay',
    component: MyDay
  },
  {
    path: '/important',
    name: 'Important',
    component: () => import('../views/Important.vue')
  },
  {
    path: '/planed',
    name: 'Planed',
    component: () => import('../views/Planed.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
