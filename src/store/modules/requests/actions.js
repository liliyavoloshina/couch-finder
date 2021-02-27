export default {
  addRequest({commit}, request) {
    const newRequest = {
      id: new Date().toISOString(),
      coachId: request.coachId,
      email: request.email,
      message: request.message
    }
    commit('addRequest', newRequest)
  }
}