import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../plugins/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    UserToken: localStorage.getItem('user_token'),
    User: null
  },
  mutations: {
    setUserToken (state, token) {
      localStorage.setItem('user_token', token)
      state.UserToken = token
    },
    setUser (state, user) {
      state.User = user
    }
  },
  actions: {
    getUser ({ commit }) {
      axios.get('auth/user')
        .then(response => {
          commit('setUser', response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  modules: {
  }
})
