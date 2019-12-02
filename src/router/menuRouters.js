function view (file) {
  return (resovle) => import(`../views/${file}.vue`).then(resovle)
}

export const homeRoute = {
  path: 'dashboard',
  component: view('Dashboard/index'),
  name: 'Dashboard',
  meta: {
    title: '首页',
    icon: 'mdi-home',
    menu: true
  }
}

export const profileRoute = {
  path: 'profile',
  component: view('Profile/index'),
  name: 'Profile',
  meta: {
    title: '个人中心'
  }
}

const menuRoutes = [
  { path: '', redirect: '/dashboard' },
  homeRoute,
  {
    path: 'system',
    component: view('Router'),
    redirect: 'system/role',
    meta: {
      title: '系统设置',
      icon: 'mdi-tools',
      menu: true
    },
    children: [{
      path: 'role',
      component: view('Role'),
      name: 'Role',
      meta: {
        title: '角色管理',
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
    path: 'videos',
    component: view('Video/index'),
    name: 'VideoList',
    meta: {
      title: '视频列表',
      icon: 'mdi-library-video',
      menu: true
    }
  },
  profileRoute,
  {
    path: 'profile',
    component: view('Profile/index'),
    meta: {
      title: '个人中心',
      icon: 'mdi-tools',
      menu: false
    }
  },
  {
    path: '*',
    component: view('404')
  }
]

export default menuRoutes
