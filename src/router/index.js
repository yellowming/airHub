import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import menuRoutes from './menuRouters'
import axios from '../plugins/axiosBase'

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
    axios.get('auth/user').then((re) => {
      store.commit('setUser', re.data)
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
