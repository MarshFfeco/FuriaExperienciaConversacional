import { createMemoryHistory, createRouter } from 'vue-router'

import DashboardView from './views/DashboardView.vue'

const routes = [
  { path: '/', component: DashboardView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  },
})

export default router