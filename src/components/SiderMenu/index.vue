<template>
  <div>
    <v-list nav dense>
      <v-list-item link @click.stop="alert(1)">
        <v-list-item-avatar size="48">
          <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
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

  </div>
</template>

<script>
import menuRoutes from '../../router/menuRouters'
import menuItem from './item'
export default {
  components: {
    menuItem
  },
  data: () => ({
    menuRoutes
  })
}
</script>
