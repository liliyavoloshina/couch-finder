import { createApp } from 'vue'

import router from '@/router/index'
import store from '@/store/index'
import App from '@/App'

import BaseCard from '@/components/UI/BaseCard'
import BaseButton from '@/components/UI/BaseButton'

const app = createApp(App)

app.component('base-card', BaseCard)
app.component('base-button', BaseButton)

app.use(router)
app.use(store)
app.mount('#app')
