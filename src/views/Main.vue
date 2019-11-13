<template>
  <v-app id="sandbox">
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :clipped="primaryDrawer.clipped"
      :floating="primaryDrawer.floating"
      :mini-variant.sync="primaryDrawer.mini"
      app
      overflow
      dark
    >
      <v-list nav dense>
        <v-list-item>
          <v-list-item-avatar color="primary" size="48">
            <img v-if="$store.state.User.user.avatar" :src="$store.state.User.user.avatar">
            <span v-else class="white--text text-uppercase">{{ $store.state.User.user.name.substr(0, 1) }}</span>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{$store.state.User.user.name}}</v-list-item-title>
            <v-list-item-subtitle>{{$store.state.User.user.email}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider class="mb-1"></v-divider>
          <template v-for="menuItem in menuRoutes">
            <menu-item v-if="menuItem.meta && menuItem.meta.menu" :key="menuItem.name" :itemData="menuItem"/>
          </template>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click.stop="logout" ><v-icon left>mdi-exit-to-app</v-icon>退出账号</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="primaryDrawer.clipped"
      color="teal"
      app
      dark
    >
      <v-app-bar-nav-icon  @click.stop="primaryDrawer.model = !primaryDrawer.model"/>
      <v-toolbar-title>FinTV</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="$vuetify.breakpoint.smAndUp"></v-toolbar-items>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-breadcrumbs :items="breadList">
        <template v-slot:item="props">
          <v-breadcrumbs-item link :to="{path:props.item.path}">
            {{ props.item.meta.title }}
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import MenuItem from '../components/MenuItem'
import menuRoutes, { homeRoute } from '../router/menuRouters'
export default {
  components: {
    MenuItem
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
    menuRoutes,
    breadList: []
  }),
  methods: {
    logout: function () {
      this.$store.commit('setUserToken', '')
      this.$router.push({ name: 'Login' })
    },
    getBreadcrumb () {
      this.breadList = []
      if (this.$route.name === homeRoute.name) return
      this.breadList.push(homeRoute)
      this.$route.matched.forEach(item => {
        if (item.meta.title) this.breadList.push(item)
      })
    }
  },
  created () {
    this.getBreadcrumb()
  },
  watch: {
    $route: {
      handler () {
        this.getBreadcrumb()
      },
      deep: true
    }
  }
}
</script>
