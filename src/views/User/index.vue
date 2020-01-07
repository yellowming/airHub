<template>
  <div>
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

          <v-btn v-if="helper.hasPermissions('USER_ADD')" color="primary" @click="$router.push({name:'USER_ADD'})">新增</v-btn>

        </v-toolbar>
      </template>
      <template v-slot:item.avatar="{ item }">
        <v-avatar color="primary" size="36">
          <img v-if="item.avatar" :src="item.avatar">
          <span v-else class="white--text text-uppercase">{{ item.name.substr(0, 1) }}</span>
        </v-avatar>
      </template>
      <template v-slot:item.roles="{ item }">
        <v-chip class="mr-1" small v-for="role in item.roles" :key="role" color="secondary">
          {{ roleObjs[role].name }}
        </v-chip>
      </template>
      <template v-slot:item.action="{ item }">
        <v-icon color="indigo" @click="$router.push({name:'USER_EDIT', params: { id: item._id }})" class="mr-2" v-if="helper.hasPermissions('USER_EDIT')">
          mdi-circle-edit-outline
        </v-icon>
        <v-icon color="red" @click="deleteUser(item)" v-if="helper.hasPermissions('USER_DELETE')">
          mdi-delete
        </v-icon>
      </template>

      <template v-slot:no-data>
        没有数据
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userList: [],
      roleList: [],
      roleObjs: {},
      headers: [
        { text: '头像', value: 'avatar', sortable: false },
        { text: '用户名', value: 'name' },
        { text: '邮箱', value: 'email' }
      ],
      loading: false,
      options: {},
      totalDesserts: 0
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
  mounted () {
    if (this.helper.containPermissions(['USER_DELETE', 'USER_EDIT'])) {
      this.headers.push({ text: '操作', value: 'action', sortable: false })
    }
    if (this.helper.hasPermissions('ROLE_LIST')) {
      this.helper.permissionRequest('ROLE_LIST').then((data) => {
        this.roleList = data.data.role
        this.roleObjs = this.array2Obj(data.data.role, '_id')
        this.headers.splice(3, 0, { text: '角色', value: 'roles', sortable: false })
      })
    }
  },
  methods: {
    getData () {
      this.loading = true
      this.helper.permissionRequest('USER_LIST', { params: this.options }).then((data) => {
        this.userList = data.data.users
        this.totalDesserts = data.data.count
        this.loading = false
      })
    },
    deleteUser (item) {
      console.log(item)
    },
    array2Obj (array, key) {
      let obj = {}
      array.forEach((item) => {
        obj[item[key]] = item
      })
      return obj
    }
  }
}
</script>
