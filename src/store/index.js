import { createStore } from 'vuex'

import coaches from '@/store/modules/coaches/index'
import requests from '@/store/modules/requests/index'
import auth from '@/store/modules/auth/index'

const store = createStore({
  modules: { coaches, requests, auth}
})

export default store
