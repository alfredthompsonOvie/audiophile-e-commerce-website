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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/headphones',
      name: 'headphones',
      component: () => import('../views/HeadphonesView.vue')
    },
    {
      path: '/speakers',
      name: 'speakers',
      component: () => import('../views/SpeakersView.vue')
    },
    {
      path: '/speakers/product/:id',
      name: 'product',
      component: () => import('../views/products/ProductView.vue'),
      props: true
    },
    {
      path: '/earphones',
      name: 'earphones',
      component: () => import('../views/EarphonesView.vue')
    },
  ]
})

export default router
