import './style.css'

import { createApp } from 'vue'
import ui from '@nuxt/ui/vue-plugin'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(ui)
app.use(router)
app.mount('#app')
