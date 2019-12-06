<template>
  <v-card>
    <v-data-table
      :headers="headers"
      :items="apiList"
      :server-items-length="totalDesserts"
      :loading="loading"
    >
      <template v-slot:item.public="{ item }">
        <v-icon v-if="item.public" color="success">mdi-check</v-icon>
        <v-icon v-else color="red">mdi-close</v-icon>
      </template>
      <template v-slot:item.api="{ item }">
        <v-chip v-for="api in item.api" :key="api.method" :color="methodColor[api.method]" dark small class="mx-1">{{api.method}}</v-chip>
      </template>
      <template v-slot:item.action="{ item }">
        <v-icon color="indigo" class="mr-2" > mdi-circle-edit-outline </v-icon>
        <v-icon color="red" @click="deleteUser(item)">mdi-delete</v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { getApiList } from '@/plugins/api'
export default {
  data: () => ({
    apiList: [],
    totalDesserts: 10,
    headers: [
      { text: '名称', value: 'name', sortable: false },
      { text: '路由', value: 'uri', sortable: false },
      { text: 'methods', value: 'api', sortable: false },
      { text: '分类', value: 'group_id', sortable: false },
      { text: 'public', value: 'public', sortable: false },
      { text: '操作', value: 'action', sortable: false }
    ],
    loading: false,
    methodColor: {
      get: 'primary',
      post: 'indigo',
      delete: 'red',
      put: 'teal',
      patch: 'blue-grey'
    }
  }),
  mounted () {
    getApiList().then(response => {
      this.apiList = response.data.apis
    })
  }
}
</script>
