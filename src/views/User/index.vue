<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="userList"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>

      <template>
        <v-text-field
          append-icon="mdi-magnify"
          label="搜索"
          single-line
          hide-details
        ></v-text-field>
        <v-btn icon color="light-blue">
          <v-icon>mdi-export-variant</v-icon>
        </v-btn>
        <v-btn icon color="red">
          <v-icon>mdi-delete-circle</v-icon>
        </v-btn>
        <v-btn icon color="indigo">
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn>
      </template>
    </v-toolbar>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import { getUserList } from '../../plugins/api'
export default {
  data () {
    return {
      userList: [],
      headers: [
        {
          text: '用户名',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: '邮箱', value: 'email' }
      ]
    }
  },
  beforeRouteEnter (to, from, next) {
    getUserList(to.params).then((data) => {
      next(vm => vm.setData(data))
    })
  },
  methods: {
    setData (data) {
      this.userList = data.data.users
      console.log(data)
    }
  }
}
</script>
