import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppLoader from './components/AppLoader.vue'
import App from './App.vue'
import { router } from './routes/web.js'

createApp(App).component('AppLoader', AppLoader).use(router).mount('#app')

