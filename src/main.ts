import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index'
const pinia = createPinia()

import App from './App.vue'

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
