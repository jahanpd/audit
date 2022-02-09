import { createApp } from 'vue'
import App from './App.vue'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import './index.css'

loadFonts()

createApp(App)
  .use(router)
  .mount('#app')
