function route (path, file, name, children) {
  return {
    exact: true,
    path,
    name,
    children,
    component: (resovle) => import(`../views/${file}.vue`).then(resovle)
  }
}
const ansyRoutes = [
  route('/', 'Main', null, [
    route('/', 'Home', 'Home'),
    route('*', 'admin_404', '404_n')
  ])
]

export default ansyRoutes
