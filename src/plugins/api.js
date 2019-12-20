import axios from './axiosBase'
import store from '@/store'

const api = {
  profile: '/auth/profile',
  users: '/user',
  user: '/user/one',
  role: '/role',
  service: '/service',
  permission: '/permission',
  permissionNoPager: '/permission/no-pager',
  video: '/video',
  api: '/api/api'
}

export default api

export function requestAccessApi (name, options) {
  const accessApis = store.state.AccessApis
  if (accessApis[name]) {
    let accessApi = accessApis[name]
    options = options || {}
    options.url = accessApi.uri
    options.method = accessApi.method
    return axios(options)
  }
}

export function getProfile (parameter) {
  return axios({
    url: api.profile,
    method: 'get',
    params: parameter
  })
}

export function getVideoList (parameter) {
  return axios({
    url: api.video,
    method: 'get',
    params: parameter
  })
}
export function getUserList (parameter) {
  return axios({
    url: api.users,
    method: 'get',
    params: parameter
  })
}
export function addOneUser (parameter) {
  return axios({
    url: api.user,
    method: 'post',
    data: parameter
  })
}
export function updateOneUser (parameter) {
  return axios({
    url: api.user,
    method: 'put',
    params: parameter
  })
}
export function deleteOneUser (parameter) {
  return axios({
    url: api.user,
    method: 'delete',
    params: parameter
  })
}
export function getRole (parameter) {
  return axios({
    url: api.role,
    method: 'get',
    params: parameter
  })
}

export function updateRole (parameter) {
  return axios({
    url: api.role,
    method: 'put',
    params: parameter
  })
}
export function getApi (parameter) {
  return axios({
    url: api.api,
    method: 'get',
    params: parameter
  })
}

export function getApiGroup (parameter) {
  return axios({
    url: 'api/api/category',
    method: 'get',
    params: parameter
  })
}

export function addApi (parameter) {
  return axios({
    url: 'api/api',
    method: 'post',
    data: parameter
  })
}

export function editApi (parameter) {
  return axios({
    url: 'api/api',
    method: 'put',
    data: parameter
  })
}
