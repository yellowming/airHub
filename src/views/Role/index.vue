<template>
  <v-card>
    <v-data-table
      :headers="headers"
      :items="roleList"
      :server-items-length="totalDesserts"
      :loading="loading"
    >
      <template v-slot:item.action="{ item }">
        <v-icon color="indigo" @click="roleEdit(item._id)" class="mr-2" > mdi-circle-edit-outline </v-icon>
        <v-icon color="red">mdi-delete</v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { getRole } from '@/plugins/api'
export default {
  data: () => ({
    roleList: [],
    apiList: [],
    totalDesserts: 10,
    headers: [
      { text: '名称', value: 'name', sortable: false },
      { text: '路由', value: 'description', sortable: false },
      { text: '操作', value: 'action', sortable: false }
    ],
    loading: false
  }),
  mounted () {
    this.getRoleList()
  },
  methods: {
    getRoleList () {
      this.loading = true
      getRole().then(response => {
        this.loading = false
        this.roleList = response.data.role
      })
    },
    roleEdit (_id) {
      this.$router.push('/system/role/edit/' + _id)
    }
  }
}
</script>
