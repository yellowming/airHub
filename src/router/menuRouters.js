function view (file) {
  return (resovle) => import(`../views/${file}.vue`).then(resovle)
}

export const homeRoute = {
  path: 'dashboard',
  component: view('Home'),
  name: 'Home',
  meta: {
    title: '首页',
    icon: 'mdi-home',
    menu: true
  }
}

const menuRoutes = [
  { path: '', redirect: '/dashboard' },
  homeRoute,
  {
    path: 'system',
    component: view('About'),
    meta: {
      title: '系统设置',
      icon: 'mdi-tools',
      menu: true
    },
    children: [{
      path: '',
      component: view('About'),
      name: 'About',
      meta: {
        title: '关于',
        icon: 'mdi-android-messages',
        menu: true
      }
    }]
  },
  {
    path: 'user',
    component: view('User/index'),
    name: 'User',
    meta: {
      title: '用户',
      icon: 'mdi-account-supervisor',
      menu: true
    }
  },
  {
    path: '*',
    component: view('404')
  }
]

export default menuRoutes
