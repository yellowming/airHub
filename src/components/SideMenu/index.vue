<template>
  <v-list nav dense>
    <template v-for="menuItem in menuRoutes">
      <menu-item v-if="menuItem.meta && !menuItem.meta.hideMenu" :key="menuItem.name" :itemData="menuItem"/>
    </template>
  </v-list>
</template>

<script>
import MenuItem from './MenuItem'
import menuRoutes from '@/router/menuRouters'
export default {
  components: {
    MenuItem
  },
  data: () => ({
    menuRoutes
  })
}
</script>
