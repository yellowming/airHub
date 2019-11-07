function view (file) {
  return (resovle) => import(`../views/${file}.vue`).then(resovle)
}

const menuRoutes = [
  { path: '', redirect: '/dashboard' },
  {
    path: 'dashboard',
    component: view('Home'),
    name: 'Home',
    menu: {
      name: '首页',
      icon: 'mdi-home'
    }
  },
  {
    path: 'system',
    component: view('About'),
    menu: {
      name: '系统设置',
      icon: 'mdi-tools'
    },
    children: [{
      path: '',
      component: view('About'),
      name: 'About',
      menu: {
        name: '关于',
        icon: 'mdi-android-messages'
      }
    }]
  },
  {
    path: '*',
    component: view('404')
  }
]

export default menuRoutes
