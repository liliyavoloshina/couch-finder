import { createApp, defineAsyncComponent } from 'vue'

import router from '@/router/index'
import store from '@/store/index'
import App from '@/App'

import BaseCard from '@/components/UI/BaseCard'
import BaseButton from '@/components/UI/BaseButton'
import BaseBadge from '@/components/UI/BaseBadge'
import BaseSpinner from '@/components/UI/BaseSpinner'

const BaseDialog = defineAsyncComponent(() => import('@/components/UI/BaseDialog'))

const app = createApp(App)

app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-badge', BaseBadge)
app.component('base-spinner', BaseSpinner)
app.component('base-dialog', BaseDialog)

app.use(router)
app.use(store)
app.mount('#app')
