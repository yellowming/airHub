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
      dark
    >
      <v-list>
        <template v-for="menuItem in menuRoutes">
          <sider-menu v-if="menuItem.menu" :key="menuItem.name" :itemData="menuItem" />
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="primaryDrawer.clipped"
      color="#6A76AB"
      shrink-on-scroll
      fade-img-on-scroll
      src="../assets/banner.jpg"
      app
      dark
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.5), rgba(25,32,72,.5)"
        ></v-img>
      </template>
      <v-app-bar-nav-icon
        @click.stop="primaryDrawer.mini = !primaryDrawer.mini"
      />
      <v-toolbar-title>编辑</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="logout" disabled>
        <v-avatar color="indigo" size="36">
          <img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="John"
          >
        </v-avatar>
      </v-btn>
      fdwef
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer
      :inset="false"
      app
    >
      <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import SiderMenu from '../components/SiderMenu'
import menuRoutes from '../router/menuRouters'
export default {
  components: {
    SiderMenu
  },
  data: () => ({
    drawers: ['Default (no property)', 'Permanent', 'Temporary'],
    primaryDrawer: {
      model: null,
      type: 'default (no property)',
      clipped: false,
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
  },
  mounted: function () {
    console.log(this.$store.state)
  }
}
</script>
