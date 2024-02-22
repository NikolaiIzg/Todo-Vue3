import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { App } from './index'

createApp(App).use(createPinia()).mount('#app')
