import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import ElementPlus from 'element-plus'

import App from './App.vue'
import router from './router'

//import theme
import './theme/index.scss'

//import element-plus
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

//pinia
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

//element-plus
app.use(ElementPlus)

app.mount('#app')
