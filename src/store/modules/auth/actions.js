export default {
  async signup({ commit }, payload) {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_FIREBASE_API}`,
      {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        })
      }
    )

    const responseData = await response.json()

    if (!response.ok) {
      console.log(responseData)
      const error = new Error(
        responseData.error.message || 'Failed to authenticate'
      )
      throw error
    }

    console.log(responseData)
    commit('SET_USER', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn
    })
  },
  async login({ commit }, payload) {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FIREBASE_API}`,
      {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        })
      }
    )

    const responseData = await response.json()

    if (!response.ok) {
      console.log(responseData)
      const error = new Error(
        responseData.error.message || 'Failed to authenticate'
      )
      throw error
    }

    console.log(responseData)
    commit('SET_USER', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn
    })
  },
  logout({ commit }) {
    commit('SET_USER', {
      token: null,
      userId: null,
      tokenExpiration: null
    })
  }
}
