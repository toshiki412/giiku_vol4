import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

import "bootstrap/dist/css/bootstrap.min.css"

const application = createApp(App)
application.use(router)
application.mount('#app')
