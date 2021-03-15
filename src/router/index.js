import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/index'

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
      component: () => import('@/pages/coaches/CoachRegistration'),
      meta: { requiresAuth: true }
    },
    {
      path: '/requests',
      name: 'RequestReceived',
      component: () => import('@/pages/requests/RequestReceived'),
      meta: { requiresAuth: true }
    },
    {
      path: '/auth',
      name: 'UserAuth',
      component: () => import('@/pages/auth/UserAuth'),
      meta: { requiresUnAuth: true }
    },
    {
      path: '/:notFound(.*)',
      name: 'NotFound',
      component: () => import('@/pages/NotFound')
    }
  ]
})

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next({ name: 'UserAuth' })
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next({ name: 'CoachList' })
  } else {
    next()
  }
})

export default router
