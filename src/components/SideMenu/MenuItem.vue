<template>
  <v-list-group v-if="itemData.children && !itemData.meta.hideChildren" :prepend-icon="itemData.meta.icon" class="menu_sub" :sub-group="subGroup">
    <template v-slot:activator>
      <v-list-item-content><v-list-item-title>{{itemData.meta.title}}</v-list-item-title></v-list-item-content>
    </template>
    <template v-for="item in itemData.children">
      <menu-item v-if="item.meta && !item.meta.hideMenu" :key="item.name" :itemData="item" subGroup/>
    </template>
  </v-list-group>
  <v-list-item v-else-if="helper.hasPermissions(itemData.meta.permissions)" link :to="itemData">
    <v-list-item-icon>
      <v-icon v-text="itemData.meta.icon"></v-icon>
    </v-list-item-icon>
    <v-list-item-content><v-list-item-title>{{ itemData.meta.title }}</v-list-item-title></v-list-item-content>
  </v-list-item>
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
<style>
  .menu_sub>.v-list-group__items{
    padding-left: 20px;
    padding-bottom: 4px;
  }
</style>
