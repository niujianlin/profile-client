import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import naive from 'naive-ui'
import { createDiscreteApi } from 'naive-ui'
import { router } from './common/router'
import { createPinia } from 'pinia'
import axios from 'axios'
import { AdminStore } from './stores/AdminStore'

axios.defaults.baseURL = "http://localhost:8080"
// 实用好看的一些提示api
const { message, notification, dialog } = createDiscreteApi(["message", "dialog", "notification"])


const app = createApp(App)

// provide全局使用
app.provide('axios', axios)
app.provide("server_url", axios.defaults.baseURL)

// 实用好看的一些提示
app.provide("message", message)
app.provide("notification", notification)
app.provide("dialog", dialog)

app.use(naive)
app.use(createPinia())
app.use(router)

const adminStore = AdminStore()
axios.interceptors.request.use((config) => {
    config.headers.token = adminStore.token
    return config
})

app.mount('#app')
