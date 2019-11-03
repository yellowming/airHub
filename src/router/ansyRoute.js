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
  route('/login', 'Login', 'login'),
  route('/', 'Main', null, [
    route('/', 'Home', 'home')
  ]),
  route('*', 'admin_404', '404_n')
]
export default routes
