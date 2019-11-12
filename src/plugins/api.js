import axios from './axiosBase'

const api = {
  user: '/user',
  role: '/role',
  service: '/service',
  permission: '/permission',
  permissionNoPager: '/permission/no-pager',
  orgTree: '/org/tree'
}

export default api

export function getUserList (parameter) {
  return axios({
    url: api.user,
    method: 'get',
    params: parameter
  })
}
export function addOneUser (parameter) {
  return axios({
    url: api.user,
    method: 'post',
    params: parameter
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
export function getRoleList (parameter) {
  return axios({
    url: api.role,
    method: 'get',
    params: parameter
  })
}
