<template>
  <v-app v-resize="onResize">
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :clipped="primaryDrawer.clipped"
      floating
      :mini-variant="primaryDrawer.mini"
      app
      overflow
    >
      <side-menu />
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="primaryDrawer.clipped"
      color="teal"
      app
      dark
    >
      <v-app-bar-nav-icon  @click.stop="miniMenu ? (primaryDrawer.mini = !primaryDrawer.mini) : (primaryDrawer.model = !primaryDrawer.model)"/>
      <v-toolbar-title><router-link to="/"><v-img :src="logo" height="50" width="120" /></router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="handleFullScreen">
        <v-icon v-if="fullscreen">mdi-fullscreen-exit</v-icon>
        <v-icon v-else>mdi-fullscreen</v-icon>
      </v-btn>
      <v-toolbar-items class="" style="margin-right:-12px">
        <v-btn text>
          <v-badge
          overlap
          color="orange"
        >
          <template v-slot:badge>
            3
          </template>
          <v-icon>mdi-android-messages</v-icon>
        </v-badge>
        </v-btn>
        <v-menu
          v-model="navUserMenu"
          offset-y
          open-on-click
          allow-overflow
          right
          :close-on-content-click="false"
        >
      <template v-slot:activator="{ on }">
        <v-btn text v-on="on">
          <v-avatar color="primary" size="36">
            <img v-if="$store.state.User.avatar" :src="$store.state.User.avatar">
            <span v-else class="white--text text-uppercase">{{ $store.state.User.name.substr(0, 1) }}</span>
          </v-avatar>
          <span class="mx-1 text-capitalize">{{$store.state.User.name}}</span>
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar size="48">
              <img v-if="$store.state.User.avatar" :src="$store.state.User.avatar" :alt="$store.state.User.name">
              <span v-else class="white--text text-uppercase">{{ $store.state.User.name.substr(0, 1) }}</span>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{$store.state.User.name}}</v-list-item-title>
              <v-list-item-subtitle>{{$store.state.User.email}}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
                <v-btn icon @click="toProfile">
                  <v-icon>mdi-pencil-outline</v-icon>
                </v-btn>
              </v-list-item-action>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item>
            <v-list-item-title>黑暗模式</v-list-item-title>
            <v-list-item-action>
              <v-switch v-model="$vuetify.theme.isDark" @change="darkToogle" color="purple"></v-switch>
            </v-list-item-action>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>迷你菜单</v-list-item-title>
            <v-list-item-action>
              <v-switch v-model="miniMenu" @change="miniToogle" color="purple"></v-switch>
            </v-list-item-action>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <v-select
                v-model="e1"
                :items="states"
                menu-props="auto"
                label="语言"
                hide-details
              ></v-select>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item @click.stop="logout">
            <v-list-item-title><v-icon left>mdi-exit-to-app</v-icon>退出账号</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
      </v-toolbar-items>

    </v-app-bar>
    <v-content>
      <v-breadcrumbs v-if="breadList.length>0" :items="breadList">
        <template v-slot:item="props">
          <v-breadcrumbs-item link :to="props.item">
            {{ props.item.meta.title }}
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
      <v-container fluid>
        <router-view v-if="hasPermission"></router-view>
        <deny-page v-else />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import SideMenu from '@/components/SideMenu'
import { homeRoute } from '@/router/menuRouters'
import logo from '@/assets/logo.png'
import denyPage from '@/views/403'
export default {
  components: {
    SideMenu,
    denyPage
  },
  data: () => ({
    homeRoute,
    logo,
    hasPermission: true,
    navUserMenu: false,
    miniMenu: false,
    drawers: ['Default (no property)', 'Permanent', 'Temporary'],
    primaryDrawer: {
      model: null,
      type: 'default (no property)',
      clipped: true,
      mini: false
    },
    breadList: [],
    fullscreen: false,
    states: [
      '简体',
      '繁体'
    ],
    e1: '简体'
  }),
  methods: {
    logout () {
      this.$store.commit('setUserToken', '')
      this.$router.push({ name: 'Login' })
    },
    toProfile () {
      if (this.$route.name !== 'Profile') this.$router.push({ name: 'Profile' })
      this.navUserMenu = false
    },
    darkToogle () {
      this.$store.commit('setDark', this.$vuetify.theme.isDark)
    },
    miniToogle () {
      if (this.miniMenu) {
        if (!this.primaryDrawer.model) this.primaryDrawer.model = true
      }
    },
    getBreadcrumb () {
      this.hasPermission = this.helper.hasPermissions(this.$route.meta.permissions)
      this.breadList = []
      if (!this.$route.name) return
      if (this.$route.name === homeRoute.name) return
      this.breadList.push(homeRoute)
      this.$route.matched.forEach(item => {
        if (item.meta.title) this.breadList.push(item)
      })
    },
    handleFullScreen () {
      let element = document.documentElement
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen()
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen()
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen()
        } else if (element.msRequestFullscreen) {
          element.msRequestFullscreen()
        }
      }
      this.fullscreen = !this.fullscreen
    },
    onResize () {
      let isFull = document.isFullScreen || document.mozIsFullScreen || document.webkitIsFullScreen
      if (isFull === undefined) { isFull = false }
      this.fullscreen = isFull
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
