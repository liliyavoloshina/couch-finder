import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    {
      path: '/coaches',
      name: 'Coaches',
      component: () => import('@/pages/coaches/CoachList')
    },
    {
      path: '/coaches/:id',
      name: 'CoachDetail',
      component: () => import('@/pages/coaches/CoachDetail'),
      children: [
        {
          path: 'contact',
          name: 'ContactCoach',
          component: () => import('@/pages/requests/ContactCoach')
        }
      ]
    },
    {
      path: '/register',
      name: 'CoachRegistration',
      component: () => import('@/pages/coaches/CoachRegistration')
    },
    {
      path: '/requests',
      name: 'RequestReceived',
      component: () => import('@/pages/requests/RequestReceived')
    },
    {
      path: '/:notFound(.*)',
      name: 'NotFound',
      component: () => import('@/pages/NotFound')
    }
  ]
})

export default router
