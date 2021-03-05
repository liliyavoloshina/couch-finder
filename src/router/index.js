import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', redirect: '/coaches' },
    {
      path: '/coaches',
      name: 'CoachList',
      component: () => import('@/pages/coaches/CoachList')
    },
    {
      path: '/coaches/:id',
      name: 'CoachDetail',
      props: true,
      component: () => import('@/pages/coaches/CoachDetail'),
      children: [
        {
          path: 'contact',
          name: 'ContactCoach',
          props: true,
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
      path: '/auth',
      name: 'UserAuth',
      component: () => import('@/pages/auth/UserAuth')
    },
    {
      path: '/:notFound(.*)',
      name: 'NotFound',
      component: () => import('@/pages/NotFound')
    }
  ]
})

export default router
