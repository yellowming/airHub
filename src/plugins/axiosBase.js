import axios from 'axios'
import store from '../store'
import router from '../router'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

let config = {
  baseURL: process.env === 'production' ? process.baseURL : 'http://airHub.test/api/',
  timeout: 60 * 1000, // Timeout
  withCredentials: false // Check cross-site Access-Control
}

const _axios = axios.create(config)

_axios.interceptors.request.use(
  function (config) {
    if (store.state.UserToken) config.headers.common['Authorization'] = store.state.UserToken
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response
  },
  function (error) {
    if (error.response.status === 401) {
      store.commit('setUserToken', '')
      router.push({ name: 'Login' })
    }
    // Do something with response error
    return Promise.reject(error)
  }
)

export default _axios
