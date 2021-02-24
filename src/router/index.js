import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: () => import('@/pages/coaches/CoachList') },
    {
      path: '/coaches/:id',
      component: () => import('@/pages/coaches/CoachDetail'),
      children: [
        {
          path: '/contact',
          component: () => import('@/pages/requests/ContactCoach')
        }
      ]
    },
    {
      path: '/register',
      component: () => import('@/pages/coaches/CoachRegistration')
    },
    {
      path: '/requsest',
      component: () => import('@/pages/requests/RequestReceived')
    },
    { path: '/:notFound(.*)', component: () => import('@/pages/NotFound') }
  ]
})

export default router
