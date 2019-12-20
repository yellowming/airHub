import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../plugins/axiosBase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    UserToken: localStorage.getItem('user_token'),
    User: null,
    Roles: [],
    AccessApis: {},
    isDark: localStorage.getItem('isDark') === 'true'
  },
  mutations: {
    setUserToken (state, token) {
      localStorage.setItem('user_token', token)
      state.UserToken = token
    },
    setUser (state, user) {
      state.User = user
    },
    setRoles (state, Roles) {
      state.Roles = Roles
    },
    setAccessApis (state, AccessApis) {
      state.AccessApis = AccessApis
    },
    setDark (state, isDark) {
      localStorage.setItem('isDark', isDark)
      state.isDark = isDark
    }
  },
  actions: {
    async getUser ({ commit }) {
      axios.get('auth/user')
        .then(response => {
          commit('setUser', response.data.user)
          commit('setRoles', response.data.roles)
          let AccessApis = {}
          for (let api in response.data.access) {
            AccessApis[api.name] = api
          }
          commit('setAccessApis', AccessApis)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  modules: {
  }
})
