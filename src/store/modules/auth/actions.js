let timer

export default {
  async auth(context, payload) {
    const mode = payload.mode

    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FIREBASE_API}`
    if (mode === 'signup') {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_FIREBASE_API}`
    }

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    })

    const responseData = await response.json()

    if (!response.ok) {
      const error = new Error(
        responseData.error.message || 'Failed to authenticate'
      )
      throw error
    }
    const expiresIn = +responseData.expiresIn * 1000
    const expirationTime = new Date().getTime() + expiresIn

    localStorage.setItem('token', responseData.idToken)
    localStorage.setItem('userId', responseData.localId)
    localStorage.setItem('tokenExpiration', expirationTime)

    timer = setTimeout(function() {
      context.dispatch('autoLogout')
    }, expiresIn)

    context.commit('SET_USER', {
      token: responseData.idToken,
      userId: responseData.localId
    })
  },
  tryLogin(context) {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    const tokenExpiration = localStorage.getItem('tokenExpiration')

    const expiresIn = +tokenExpiration - new Date().getTime()

    if (expiresIn < 0) {
      return
    }

    timer = setTimeout(function() {
      context.dispatch('autoLogout')
    }, expiresIn)

    if (token && userId) {
      context.commit('SET_USER', {
        token: token,
        userId: userId
      })
    }
  },
  logout({ commit }) {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('tokenExpiration')

    clearTimeout(timer)

    commit('SET_USER', {
      token: null,
      userId: null
    })
  },
  autoLogout(context) {
    context.dispatch('logout')
    context.commit('SET_AUTO_LOGOUT')
  }
}
