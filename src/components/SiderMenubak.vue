<template>
  <div v-if="!itemData.children">
      <v-list-item link :to="{name:itemData.name}">
        <v-list-item-icon>
          <v-icon v-text="itemData.menu.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content><v-list-item-title>{{ itemData.menu.name }}</v-list-item-title></v-list-item-content>
      </v-list-item>
  </div>
  <div v-else>
    <v-list-group :prepend-icon="itemData.menu.icon" value="true" >
      <template v-slot:activator>
        <v-list-item-content><v-list-item-title>{{itemData.menu.name}}</v-list-item-title></v-list-item-content>
      </template>
      <template v-for="item in itemData.children">
        <sider-menu v-if="item.menu" :key="item.name" :itemData="item" />
      </template>
    </v-list-group>
  </div>
</template>

<script>
import SiderMenu from './SiderMenu'
export default {
  name: 'SiderMenu',
  components: {
    SiderMenu
  },
  props: {
    itemData: {
      type: Object,
      required: true
    }
  }
}
</script>
