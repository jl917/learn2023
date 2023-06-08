import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../views/Todo.vue')
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('../views/Todo.vue')
    },
    {
      path: '/optional',
      name: 'optional',
      component: () => import('../views/Optional.vue')
    },
    {
      path: '/setup',
      name: 'setup',
      component: () => import('../views/Setup.vue')
    },
    {
      path: '/class',
      name: 'class',
      component: () => import('../views/Class.vue')
    },
    {
      path: '/condition',
      name: 'condition',
      component: () => import('../views/Condition.vue')
    },
    {
      path: '/model',
      name: 'model',
      component: () => import('../views/Model.vue')
    },
    {
      path: '/lifecycle',
      name: 'lifecycle',
      component: () => import('../views/LifeCycle.vue'),
    },
    {
      path: '/lifecycle2',
      name: 'lifecycle2',
      component: () => import('../views/LifeCycle2.vue'),
    },
    {
      path: '/component',
      name: 'component',
      component: () => import('../views/Component.vue'),
    },
    {
      path: '/component2',
      name: 'component2',
      component: () => import('../views/Component2.vue'),
    },
    {
      path: '/provider',
      name: 'provider',
      component: () => import('../views/Provider.vue'),
    },
    {
      path: '/provider2',
      name: 'provider2',
      component: () => import('../views/Provider2.vue'),
    },
  ]
})

export default router
