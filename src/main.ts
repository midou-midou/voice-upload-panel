import { createApp } from 'vue'
import { router } from "./route"
import './assets/style.scss'
import './assets/var.scss'
// iconfont
import './assets/iconfont/iconfont.css'
import App from './App.vue'
import i18n from './locale'

let plugins = [router, i18n, store]

const app = createApp(App)

plugins.map((plugin) => {
  app.use(plugin)
})

app.mount('#app')
