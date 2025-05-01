import { createMemoryHistory, createRouter } from 'vue-router'

import DashboardView from './views/DashboardView.vue'

const routes = [
  { path: '/', component: DashboardView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router