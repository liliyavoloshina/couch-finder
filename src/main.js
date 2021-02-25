import { createApp } from 'vue'

import router from '@/router/index'
import App from '@/App'
import PrimeVue from 'primevue/config'
import 'primeflex/primeflex.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css' 

const app = createApp(App)

app.use(router)
app.use(PrimeVue);
app.mount('#app')
