export default {
  SET_USER(state, payload) {
    state.token = payload.token
    state.userId = payload.userId
    state.tokenExpiration = payload.tokenExpiration
  }
}