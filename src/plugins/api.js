import axios from './axiosBase'

const api = {
  users: '/user/many',
  user: '/user/one',
  role: '/role',
  service: '/service',
  permission: '/permission',
  permissionNoPager: '/permission/no-pager',
  video: '/video',
  api: '/api/apilist'
}

export default api

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
export function addOneUser (parameter, _id) {
  return axios({
    url: api.user + '/' + _id,
    method: 'post',
    data: parameter
  })
}
export function updateOneUser (parameter, _id) {
  return axios({
    url: api.user + '/' + _id,
    method: 'put',
    params: parameter
  })
}
export function deleteOneUser (parameter, _id) {
  return axios({
    url: api.user + '/' + _id,
    method: 'delete',
    params: parameter
  })
}
export function getRoleList (parameter) {
  return axios({
    url: api.role,
    method: 'get',
    params: parameter
  })
}

export function getApiList (parameter) {
  return axios({
    url: api.api,
    method: 'get',
    params: parameter
  })
}
