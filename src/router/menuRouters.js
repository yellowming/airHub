function view (file) {
  return (resovle) => {
    import(`@/views/${file}.vue`).then(resovle)
  }
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
    children: [
      {
        path: '/system/role',
        component: view('Router'),
        meta: {
          title: '角色管理',
          icon: 'mdi-android-messages',
          hideChildren: true
        },
        children: [
          {
            path: 'edit/:id',
            component: view('Role/form'),
            name: 'Role-edit',
            meta: {
              title: '修改'
            }
          },
          {
            path: '',
            component: view('Role/index'),
            name: 'Role-list'
          }
        ]
      },
      {
        path: 'groups',
        component: view('Group/index'),
        name: 'Group',
        meta: {
          title: '分组管理',
          icon: 'mdi-filter-variant'
        }
      }
    ]
  },
  {
    path: '/user',
    component: view('Router'),
    meta: {
      title: '用户',
      icon: 'mdi-account-supervisor',
      hideChildren: true
    },
    children: [
      {
        path: '',
        component: view('User/index'),
        name: 'USER_LIST'
      },
      {
        path: 'add',
        component: view('User/form'),
        name: 'USER_ADD',
        meta: {
          title: '新增'
        }
      },
      {
        path: 'edit/:id',
        component: view('User/form'),
        name: 'USER_EDIT',
        meta: {
          title: '修改'
        }
      }
    ]
  },
  {
    path: '/videos',
    component: view('Video/index'),
    name: 'VideoList',
    meta: {
      title: '视频列表',
      icon: 'mdi-library-video',
      permissions: 'VIDEO_LIST',
      hideChildren: true
    },
    children: [
      {
        path: 'add',
        component: view('Video/form'),
        name: 'VIDEO_ADD',
        meta: {
          title: '新增'
        }
      }
    ]
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
        name: 'API_LIST',
        component: view('Api/index'),
        meta: {
          title: '列表'
        }
      },
      {
        path: 'add',
        name: 'API_ADD',
        component: view('Api/form'),
        meta: {
          title: '新增'
        }
      },
      {
        path: 'edit/:id',
        name: 'API_EDIT',
        component: view('Api/form'),
        meta: {
          title: '编辑'
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
