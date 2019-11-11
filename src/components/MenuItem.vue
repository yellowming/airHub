<template>
  <v-list-item v-if="!itemData.children" link :to="{name:itemData.name}">
    <v-list-item-icon>
      <v-icon v-text="itemData.menu.icon"></v-icon>
    </v-list-item-icon>
    <v-list-item-content><v-list-item-title>{{ itemData.menu.name }}</v-list-item-title></v-list-item-content>
  </v-list-item>
  <v-list-group v-else :prepend-icon="itemData.menu.icon" :sub-group="subGroup">
    <template v-slot:activator>
      <v-list-item-content><v-list-item-title>{{itemData.menu.name}}</v-list-item-title></v-list-item-content>
    </template>
    <template v-for="item in itemData.children">
      <menu-item v-if="item.menu" :key="item.name" :itemData="item" subGroup/>
    </template>
  </v-list-group>
</template>

<script>
export default {
  name: 'menuItem',
  props: {
    itemData: {
      type: Object,
      required: true
    },
    subGroup: {
      type: Boolean,
      default: false
    }
  }
}
</script>
