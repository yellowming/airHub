<template>
  <v-card>
    <v-data-table
      :headers="headers"
      :items="apiList"
      :server-items-length="totalDesserts"
      :loading="loading"
      hide-default-footer
    >
    <template v-slot:top>
        <v-toolbar flat>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="$router.push({name:'API_ADD'})">新增</v-btn>
        </v-toolbar>
      </template>
      <template v-slot:item.title="{ item }">
        <span v-if="item.category">{{item.category.title}}-</span>
        {{item.title}}
      </template>
      <template v-slot:item.authentication="{ item }">
        <v-icon v-if="item.authentication" color="success">mdi-check</v-icon>
        <v-icon v-else color="red">mdi-close</v-icon>
      </template>
      <template v-slot:item.authorization="{ item }">
        <v-icon v-if="item.authorization" color="success">mdi-check</v-icon>
        <v-icon v-else color="red">mdi-close</v-icon>
      </template>
      <template v-slot:item.method="{ item }">
        <v-chip :color="methodColor[item.method]" dark small class="mx-1">{{item.method}}</v-chip>
      </template>
      <template v-slot:item.action="{ item }">
        <v-icon color="indigo" class="mr-2" @click="$router.push({name:'API_EDIT', params: { id: item._id }})"> mdi-circle-edit-outline </v-icon>
        <v-icon color="red" @click="deleteUser(item)">mdi-delete</v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { getApi } from '@/plugins/api'
export default {
  data: () => ({
    apiList: [],
    totalDesserts: 10,
    headers: [
      { text: '标题', value: 'title', sortable: false },
      { text: '名称', value: 'name', sortable: false },
      { text: '路由', value: 'uri', sortable: false },
      { text: 'method', value: 'method', sortable: false },
      { text: '需要认证', value: 'authentication', sortable: false },
      { text: '需要授权', value: 'authorization', sortable: false },
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
    getApi().then(response => {
      this.apiList = response.data.apis
    })
  }
}
</script>
