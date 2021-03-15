export default {
  async addCoach(context, data) {
    const userId = context.rootGetters.userId
    const token = context.rootGetters.token
    const coachData = {
      firstName: data.firstName,
      lastName: data.lastName,
      areas: data.areas,
      description: data.description,
      hourlyRate: data.rate
    }

    const response = await fetch(
      `${process.env.VUE_APP_FIREBASE_URL}/coaches/${userId}.json?auth=${token}`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData)
      }
    )

    const responseData = await response.json()

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to add')
      throw error
    }

    context.commit('addCoach', {
      ...coachData,
      id: userId
    })
  },
  async loadCoaches(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return
    }
    const response = await fetch(
      `${process.env.VUE_APP_FIREBASE_URL}/coaches.json`
    )

    const responseData = await response.json()

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch')
      throw error
    }

    const coaches = []
    for (let key in responseData) {
      const newCoach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        areas: responseData[key].areas,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate
      }
      coaches.push(newCoach)
    }
    context.commit('setCoaches', coaches)
    context.commit('setFetchTimestamp')
  }
}
