import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import { router } from './routes/web.js'

createApp(App).use(router).mount('#app')

