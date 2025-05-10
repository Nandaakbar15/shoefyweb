import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
// import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/Route.js'

const app = createApp(App)

app.use(router)

app.mount('#app')

