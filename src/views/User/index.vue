<template>
  <div>
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
            <v-spacer></v-spacer>
            <v-btn icon color="light-blue">
              <v-icon>mdi-export-variant</v-icon>
            </v-btn>
            <v-btn icon color="indigo">
              <v-icon>mdi-plus-circle</v-icon>
            </v-btn>
          </template>
        </v-toolbar>
      </template>

      <template v-slot:item.action="{ item }">
        <v-icon
          color="indigo"
          @click="deleteItem(item)"
          class="mr-2"
        >
          mdi-circle-edit-outline
        </v-icon>
        <v-icon
          color="red"
          @click="editItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>

      <template v-slot:no-data>
        没有数据，或者<v-btn color="primary" @click="getData">刷新</v-btn>
      </template>
    </v-data-table>
  </div>
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
        { text: '邮箱', value: 'email' },
        { text: '操作', value: 'action', sortable: false }
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
    },
    getData () {
      getUserList().then((data) => {
        this.setData(data)
      })
    }
  }
}
</script>
