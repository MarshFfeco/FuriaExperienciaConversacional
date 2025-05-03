import { createMemoryHistory, createRouter } from 'vue-router'

import DashboardView from './views/DashboardView.vue'

const routes = [
  { path: '/', component: DashboardView },
  { path: '/chat/:uid' , component: () => import("./views/ChatView.vue") }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 76,
        behavior: 'smooth',
      }
    }
  },
})

export default router