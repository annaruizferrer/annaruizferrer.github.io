import { createRouter, createWebHashHistory } from 'vue-router'
import ProjectWrapper from '@/views/ProjectWrapper.vue'

const routes = [
  {
    path: '/',
    redirect: '/the-fractals',
  },
  {
    path: '/:id',
    name: 'Project Wrapper',
    component: ProjectWrapper
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_API_URL),
  routes
})

export default router
