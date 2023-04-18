import Vue from 'vue'
import Vuex from 'vuex'
import tokenModule from './modules/token'
import accountModule from './modules/account'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    tokenModule,
    accountModule,
  },
})
