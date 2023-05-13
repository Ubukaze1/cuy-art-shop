import { createPinia } from 'pinia'
import { createApp } from 'vue'

import './style.css'
import './Firebase/Fire'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia().use(piniaPluginPersistedstate))

app.use(router)

app.mount('#app')
