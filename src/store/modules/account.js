import axios from 'axios'

export default {
  state: {
    profile: {},
  },
  getters: {
    profile(state) {
      return state.profile
    },
  },
  mutations: {
    setUser(state, user) {
      return (state.profile = user)
    },
  },
  actions: {
    async getUser({ commit, rootGetters }) {
      const id = rootGetters.userId
      const token = rootGetters.token
      const url = `https://api.av100.ru/v3/user/${id}`
      const headers = {
        'X-Api-Key': '8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9',
        'X-Device-OS': navigator.userAgentData.platform ?? 'unknown',
        'X-User-Token': token,
      }
      const { data } = await axios.get(url, { headers })
      const user = {
        company: data.companyname,
        login: data.login,
        phone: data.phone,
        firstName: data.fname,
        lastName: data.lname,
        notifytype: data.notifytypestring,
      }
      commit('setUser', user)
    },
  },
  modules: {},
}
