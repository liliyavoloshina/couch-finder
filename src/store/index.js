import { createStore } from 'vuex'

import coaches from '@/store/modules/coaches/index'

const store = createStore({
  modules: { coaches}
})

export default store
