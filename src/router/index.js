import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/onboarding-app/'),
  routes: [
    {
      path: '/',
      name: 'Overview',
      component: () => import('../views/Overview.vue')
    },
    {
      path: '/step1/page1',
      name: 'Step1Page1',
      component: () => import('../views/Step1/Page1.vue')
    },
    {
      path: '/step1/page2',
      name: 'Step1Page2',
      component: () => import('../views/Step1/Page2.vue')
    },
    {
      path: '/step1/page3',
      name: 'Step1Page3',
      component: () => import('../views/Step1/Page3.vue')
    }
  ]
})

export default router
