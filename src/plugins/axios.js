import Vue from 'vue'
import axios from './axiosBase'

Plugin.install = function (Vue) {
  Vue.axios = axios
  window.axios = axios
  Object.defineProperties(Vue.prototype, {
    axios: {
      get () {
        return axios
      }
    },
    $axios: {
      get () {
        return axios
      }
    }
  })
}

Vue.use(Plugin)

export default Plugin
