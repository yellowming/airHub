<template>
  <div v-if="itemData.uri">
      <v-list-item link :to="itemData.uri">
        <v-list-item-icon>
          <v-icon>{{ itemData.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ itemData.name }}</v-list-item-title>
      </v-list-item>
  </div>
  <div v-else>
    <v-list-group :prepend-icon="itemData.icon" value="true" >
      <template v-slot:activator>
        <v-list-item-title>{{itemData.name}}</v-list-item-title>
      </template>
      <sider-menu v-for="item in itemData.children" :key="item._id" :itemData="item" />
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
