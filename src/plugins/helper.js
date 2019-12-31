import store from '@/store'
export default {
  // 是否有权限
  hasPermissions: (permissions) => {
    let permissionArr = []
    if (typeof (permissions) === 'string') permissionArr = [permissions]
    if (typeof (permissions) === 'object' && permissions.constructor === Array) permissionArr = permissions
    let AccessApis = store.state.AccessApis
    return permissionArr.every(v => AccessApis[v])
  },
  // 是否包含权限（是否有交集）
  containPermissions: (permissions) => {
    let permissionArr = []
    if (typeof (permissions) === 'string') permissionArr = [permissions]
    if (typeof (permissions) === 'object' && permissions.constructor === Array) permissionArr = permissions
    let AccessApis = store.state.AccessApis
    return permissionArr.some(v => AccessApis[v])
  },
  permissionRequest: (permission) => {
    let api = 
  }
}
