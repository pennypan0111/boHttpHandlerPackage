import 'element-plus/dist/index.css'
import './css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import BOHttpHandler from './lib/BOHttpHandler.js'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(BOHttpHandler)
app.mount('#app')
