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
      <sider-menu/>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click.stop="logout">Logout</v-btn>
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
