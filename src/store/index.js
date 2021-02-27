import { createStore } from 'vuex'

import coaches from '@/store/modules/coaches/index'
import requests from '@/store/modules/requests/index'

const store = createStore({
  modules: { coaches, requests},
  state() {
    return {
      userId: 'c3'
    }
  },
  getters: {
    userId(state) {
      return state.userId
    }
  }
})

export default store
