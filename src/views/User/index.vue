<template>
  <div style="height:1200px">
    <v-data-table
      :headers="headers"
      :items="userList"
      :options.sync="options"
      :server-items-length="totalDesserts"
      :loading="loading"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-text-field
            append-icon="mdi-magnify"
            label="搜索"
            single-line
            hide-details
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn color="primary" class="mr-2" dark v-on="on">
          导出
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title>Excel</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>CSV</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
          <v-dialog v-model="dialog" scrollable persistent max-width="800px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" v-on="on">{{ actions.add }}</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ actions[action] }}</span>
            </v-card-title>
            <v-card-text>
              <v-text-field label="用户名" v-model="formData.name"></v-text-field>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="gray" @click="dialog = false">取消</v-btn>
              <v-btn color="success" @click="save">提交</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        </v-toolbar>
      </template>

      <template v-slot:item.action="{ item }">
        <v-icon
          color="indigo"
          @click="editItem(item)"
          class="mr-2"
        >
          mdi-circle-edit-outline
        </v-icon>
        <v-icon
          color="red"
          @click="deleteItem(item)"
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
      ],
      loading: false,
      options: {},
      totalDesserts: 0,
      actions: {
        edit: '修改用户',
        add: '新增用户',
        delete: '删除用户'
      },
      action: 'add',
      dialog: false,
      formData: {
        name: ''
      }
    }
  },
  watch: {
    options: {
      handler () {
        this.getData()
      },
      deep: true
    }
  },
  methods: {
    getData () {
      this.loading = true
      getUserList(this.options).then((data) => {
        this.userList = data.data.users
        this.totalDesserts = 3
        this.loading = false
      })
    },
    save () {
      console.log(this.formData)
    }
  }
}
</script>
