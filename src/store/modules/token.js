import axios from 'axios'
export default {
  state: {
    token: null,
    userId: null,
  },
  getters: {
    token(state) {
      return state.token
    },
    userId(state) {
      return state.userId
    },
  },
  mutations: {
    setToken(state, token) {
      return (state.token = token)
    },
    setUserId(state, id) {
      return (state.userId = id)
    },
  },
  actions: {
    async login({ commit }) {
      const url = 'https://api.av100.ru/v3/login'
      const headers = {
        'X-Api-Key': '8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9',
        'X-Device-OS': navigator.userAgentData.platform ?? 'unknown',
      }
      const { data } = await axios.post(
        url,
        {
          login: '9994516078',
          password: '2644157863',
        },
        { headers }
      )
      console.log(data.user.id)
      commit('setToken', data.token)
      commit('setUserId', data.user.id)
    },
  },
  modules: {},
}
