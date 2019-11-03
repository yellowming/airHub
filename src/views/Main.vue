<template>
  <v-app id="sandbox">
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :clipped="primaryDrawer.clipped"
      :floating="primaryDrawer.floating"
      :mini-variant="primaryDrawer.mini"
      permanent
      app
      overflow
    >
      <v-list>
        <sider-menu :itemData="homeUri" />
        <sider-menu v-for="menuItem in menuTree" :key="menuItem._id" :itemData="menuItem" />
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="primaryDrawer.clipped"
      app
    >
      <v-app-bar-nav-icon
        @click.stop="primaryDrawer.mini = !primaryDrawer.mini"
      />
      <v-toolbar-title>Vuetify</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer
      inset
      app
    >
      <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import SiderMenu from '../components/SiderMenu'
export default {
  components: {
    SiderMenu
  },
  data: () => ({
    drawers: ['Default (no property)', 'Permanent', 'Temporary'],
    primaryDrawer: {
      model: null,
      type: 'default (no property)',
      clipped: true,
      floating: true,
      mini: false
    },
    homeUri: {
      uri: '/',
      name: '首页',
      icon: 'mdi-home'
    },
    menuTree: []
  }),
  methods: {
    mergeRoute: function (uris) {
      let newRoute = []
      let _this = this
      uris.forEach(uri => {
        let route = {
          exact: true,
          path: uri.uri,
          name: uri._id,
          component: (resovle) => import(`../views/Login.vue`).then(resovle)
        }
        if (uri.children) newRoute.concat(_this.mergeRoute(uri.children))
        if (uri.uri) newRoute.push(route)
      })
      return newRoute
    }
  },
  mounted: function () {
    let _this = this
    this.axios.get('menu/getall').then(function (res) {
      _this.menuTree = res.data
      let newRoute = _this.mergeRoute(res.data)
      console.log(newRoute)
      _this.$router.addRoutes(newRoute)
      console.log(_this.$router.options)
    }).catch(function (error) {
      console.log(error)
    })
  }
}
</script>
