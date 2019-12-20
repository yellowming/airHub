import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import menuRoutes from './menuRouters'
import { getProfile } from '@/plugins/api'

Vue.use(VueRouter)

const routes = [{
  path: '/login',
  name: 'Login',
  component: (resovle) => import('../views/Login.vue').then(resovle)
}]
const mainRoutes = [{
  path: '/',
  children: menuRoutes,
  component: (resovle) => import('../views/Main.vue').then(resovle)
}]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  let isLoginPage = to.name === 'Login'
  if (!store.state.UserToken || store.state.UserToken === '') {
    return isLoginPage ? next() : next({ name: 'Login' })
  }
  if (!store.state.User) {
    getProfile().then((response) => {
      store.commit('setUser', response.data.user)
      store.commit('setRoles', response.data.roles)
      let AccessApis = {}
      response.data.access.forEach((api) => {
        AccessApis[api.name] = api
      })
      store.commit('setAccessApis', AccessApis)
      router.addRoutes(mainRoutes)
      next({ ...to, replace: true })
    }).catch((e) => {
      store.commit('setUserToken', '')
      next({ name: 'Login' })
    })
  } else {
    isLoginPage ? next({ path: '/' }) : next()
  }
})

router.onError((err) => {
  console.log(err)
})
export default router
