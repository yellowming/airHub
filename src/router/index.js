import Vue from 'vue'
import VueRouter from 'vue-router'

function route (path, file, name, children) {
  return {
    exact: true,
    path,
    name,
    children,
    component: (resovle) => import(`../views/${file}.vue`).then(resovle)
  }
}

Vue.use(VueRouter)

const routes = [
  route('/login', 'Login', 'login'),
  route('/', 'Main', null, [
    route('/', 'Home', 'home'),
    route('/about', 'About')
  ]),
  route('*', '404', '404')
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
