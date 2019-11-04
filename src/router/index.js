import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

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
    store.dispatch('getUser')
    router.addRoutes(ansyRoutes)
    router.replace(to)
  }
  isLoginPage ? next({ name: 'Home' }) : next()
})
export default router
