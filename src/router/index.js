import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import axios from '../plugins/axiosBase'

Vue.use(VueRouter)
function route (path, file, name, children) {
  return {
    exact: true,
    path,
    name,
    children,
    component: (resovle) => import(`../views/${file}.vue`).then(resovle)
  }
}
const routes = [
  route('/login', 'Login', 'Login')
]

const ansyRoutes = [
  route('/', 'Main', null, [
    route('/', 'Home', 'Home'),
    route('*', 'admin_404', '404_n')
  ])
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  let isLoginPage = to.name === 'Login'
  if (store.state.UserToken === '') {
    return isLoginPage ? next() : next({ name: 'Login' })
  }
  if (!store.state.User) {
    axios.get('auth/user').then((re) => {
      store.commit('setUser', { name: 'william' })
      router.addRoutes(ansyRoutes)
      next({ ...to, replace: true })
    })
  } else {
    isLoginPage ? next({ path: '/' }) : next()
  }
})
router.onError((err) => {
  console.log(err)
})
export default router
