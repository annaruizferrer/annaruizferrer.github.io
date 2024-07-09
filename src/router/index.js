import { createRouter, createWebHistory } from 'vue-router'
import ProjectWrapper from '@/views/ProjectWrapper.vue'

const routes = [
  {
    path: '/',
    redirect: '/the-cube',
  },
  {
    path: '/the-cube',
    name: 'Project Wrapper',
    component: ProjectWrapper
  },
  {
    path: '/the-terrain',
    name: 'Project Wrapper',
    component: ProjectWrapper
  },
  {
    path: '/the-cube',
    name: 'Project Wrapper',
    component: ProjectWrapper
  },
  {
    path: '/:id',
    name: 'Project Wrapper',
    component: ProjectWrapper
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_API_URL),
  routes
})

export default router
