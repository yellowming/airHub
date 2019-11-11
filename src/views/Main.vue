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
        <v-list-item link @click.stop="alert(1)">
          <v-list-item-avatar size="48">
            <v-img src="http://airHub.test/assets/avatars/john.png"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{$store.state.User.user.name}}</v-list-item-title>
            <v-list-item-subtitle>{{$store.state.User.user.email}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
          <template v-for="menuItem in menuRoutes">
            <menu-item v-if="menuItem.menu" :key="menuItem.name" :itemData="menuItem"/>
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
      <v-app-bar-nav-icon
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
      />
      <v-toolbar-title>FinTV</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="$vuetify.breakpoint.smAndUp">
        <v-btn text>导出</v-btn>
        <v-btn text>删除</v-btn>
        <v-btn text>新增</v-btn>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
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
import MenuItem from '../components/MenuItem'
import menuRoutes from '../router/menuRouters'
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
    items: [
      {
        text: 'Dashboard',
        disabled: false,
        href: 'breadcrumbs_dashboard'
      },
      {
        text: 'Link 1',
        disabled: false,
        href: 'breadcrumbs_link_1'
      },
      {
        text: 'Link 2',
        disabled: true,
        href: 'breadcrumbs_link_2'
      }
    ]
  }),
  methods: {
    logout: function () {
      this.$store.commit('setUserToken', '')
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>
