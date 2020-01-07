import axios from './axiosBase'

export default {
  login: (parameter) => {
    return axios({
      url: '/profile/token',
      method: 'post',
      data: parameter
    })
  },
  getProfile: (parameter) => {
    return axios({
      url: '/profile',
      method: 'get',
      params: parameter
    })
  },
  editProfile: (parameter) => {
    return axios({
      url: '/profile',
      method: 'post',
      data: parameter
    })
  }
}
