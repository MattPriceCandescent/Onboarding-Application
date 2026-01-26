import { createRouter, createWebHistory } from 'vue-router'
import { useOnboardingStore } from '../stores/onboardingStore'

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
      component: () => import('../views/Step1/Page2.vue'),
      beforeEnter: (to, from, next) => {
        const store = useOnboardingStore()
        // Allow navigation if coming from page1 or if page1 is complete
        if (from.name === 'Step1Page1' || store.isPageComplete('step1', 'page1')) {
          next()
        } else {
          next('/step1/page1')
        }
      }
    },
    {
      path: '/step1/page3',
      name: 'Step1Page3',
      component: () => import('../views/Step1/Page3.vue'),
      beforeEnter: (to, from, next) => {
        const store = useOnboardingStore()
        // Allow navigation if coming from page2 or if page2 is complete
        if (from.name === 'Step1Page2' || store.isPageComplete('step1', 'page2')) {
          next()
        } else {
          next('/step1/page2')
        }
      }
    }
  ]
})

export default router
