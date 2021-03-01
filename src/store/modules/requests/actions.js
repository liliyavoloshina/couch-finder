export default {
  async addRequest({ commit }, request) {
    const newRequest = {
      email: request.email,
      message: request.message
    }
    const response = await fetch(
      `${process.env.VUE_APP_FIREBASE_URL}/requests/${request.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest)
      }
    )

    const responseData = await response.json()

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to send request')
      throw error
    }

    newRequest.id = responseData.name
    newRequest.coachId = request.coachId

    commit('addRequest', newRequest)
  },
  async loadRequests(context) {
    const coachId = context.rootGetters.userId
    const response = await fetch(
      `${process.env.VUE_APP_FIREBASE_URL}/requests/${coachId}.json`
    )

    const responseData = await response.json()

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to fetch requests'
      )
      throw error
    }

    const requests = []

    for (let key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        message: responseData[key].message,
        email: responseData[key].email
      }

      requests.push(request)
    }

    context.commit('setRequests', requests)
  }
}
