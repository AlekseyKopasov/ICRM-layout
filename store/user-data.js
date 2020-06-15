export const state = () => ({
  user: {
    // name: 'Константин',
    // lastname: 'Константинопольский-Константинопольский',
    name: '',
    lastname: '',
    avatar: 'test-ava.jpg'
  }
})

export const getters = {
  user: s => s.user
}

export const mutations = {
  setUser(state, user) {
    state.user = user
  }
}

export const actions = {
  addUser({ commit }) {
    const user = this.getters.user
    commit('setUser', user)
  }
}
