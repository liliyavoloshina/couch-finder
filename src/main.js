import { createApp } from 'vue'

import router from '@/router/index'
import App from '@/App'

const app = createApp(App)

app.use(router)
app.mount('#app')
