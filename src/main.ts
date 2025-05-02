import './style.css'

import { createApp } from 'vue'
import ui from '@nuxt/ui/vue-plugin'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

app.use(ui)
app.use(router)
app.use(pinia)
app.mount('#app')
