function view (file) {
  return (resovle) => import(`../views/${file}.vue`).then(resovle)
}

export const homeRoute = {
  path: 'dashboard',
  component: view('Dashboard/index'),
  name: 'Dashboard',
  meta: {
    title: '首页',
    icon: 'mdi-home'
  }
}

export const profileRoute = {
  path: '/profile',
  component: view('Profile/index'),
  name: 'Profile',
  meta: {
    title: '个人中心',
    icon: 'mdi-tools',
    hideMenu: true
  }
}

const menuRoutes = [
  {
    path: '',
    redirect: homeRoute
  },
  homeRoute,
  profileRoute,
  {
    path: '/system',
    component: view('Router'),
    meta: {
      title: '系统设置',
      icon: 'mdi-tools'
    },
    children: [{
      path: '',
      component: view('Role'),
      name: 'Role',
      meta: {
        title: '角色管理',
        icon: 'mdi-android-messages'
      }
    }]
  },
  {
    path: '/user',
    component: view('User/index'),
    name: 'User',
    meta: {
      title: '用户',
      icon: 'mdi-account-supervisor'
    }
  },
  {
    path: '/videos',
    component: view('Video/index'),
    name: 'VideoList',
    meta: {
      title: '视频列表',
      icon: 'mdi-library-video'
    }
  },
  {
    path: '/apis',
    component: view('Router'),
    meta: {
      title: 'API',
      icon: 'mdi-api',
      hideChildren: true
    },
    children: [
      {
        path: '',
        name: 'ApiList',
        component: view('Api/index'),
        meta: {
          title: '列表'
        }
      }
    ]
  },
  {
    path: '*',
    component: view('404')
  }
]

export default menuRoutes
