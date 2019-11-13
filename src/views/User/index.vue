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

          <v-btn color="primary" @click="addUser">{{ actions.add }}</v-btn>

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
        <v-icon
          color="indigo"
          @click="editUser(item)"
          class="mr-2"
        >
          mdi-circle-edit-outline
        </v-icon>
        <v-icon
          color="red"
          @click="deleteUser(item)"
        >
          mdi-delete
        </v-icon>
      </template>

      <template v-slot:no-data>
        没有数据，或者<v-btn color="primary" text @click="getData">刷新</v-btn>
      </template>
    </v-data-table>

    <v-dialog v-model="dialog" persistent max-width="800px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ actions[action] }}</span>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <input type="hidden" v-if="action !== 'add'" v-model="formData._id"/>
            <template v-if="action !== 'delete'">
              <v-text-field label="用户名" :rules="nameRules" v-model="formData.name"></v-text-field>
              <v-text-field label="邮箱" :rules="emailRules" type="email" v-model="formData.email"></v-text-field>
              <v-text-field label="密码" :rules="passwordRules" type="password" v-model="formData.password" persistent-hint :hint="action === 'edit' ? '填写则修改密码' : ''"></v-text-field>
              <v-select
                v-model="formData.roles"
                :rules="rolesRules"
                :items="roleList"
                item-text="name"
                item-value="_id"
                attach
                small-chips
                label="角色"
                multiple
              ></v-select>
            </template>
            <p v-else class="error--text">确定删除用户-{{formData.name}}?</p>
          </v-form>
        </v-card-text>
        <v-card-subtitle class="py-0" v-if="formError">
          <v-alert type="error" dense class="mr-2">{{formError}}</v-alert>
        </v-card-subtitle>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="gray" :disabled="actionLoading" @click="dialogClose">取消</v-btn>
          <v-btn color="success" :loading="actionLoading" :disabled="actionLoading" @click="save">提交</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { getUserList, getRoleList, addOneUser, updateOneUser, deleteOneUser } from '../../plugins/api'
export default {
  data () {
    return {
      userList: [],
      roleList: [],
      roleObjs: {},
      headers: [
        { text: '头像', value: 'avatar', sortable: false },
        { text: '用户名', value: 'name' },
        { text: '邮箱', value: 'email' },
        { text: '操作', value: 'action', sortable: false }
      ],
      loading: false,
      actionLoading: false,
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
        _id: '',
        name: '',
        email: '',
        password: '',
        roles: []
      },
      formError: '',
      valid: true,
      emailRules: [
        v => !!v || '邮箱不能为空',
        v => /.+@.+\..+/.test(v) || '邮箱不合法'
      ],
      nameRules: [
        v => !!v || '用户名不能为空'
      ],
      passwordRules: [
        v => !!v || (this.action === 'edit') || '密码不能为空'
      ],
      rolesRules: [
        v => (v.length > 0) || '请选择'
      ]
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
    getRoleList().then((data) => {
      this.roleList = data.data.roles
      this.roleObjs = this.array2Obj(data.data.roles, '_id')
      this.headers.splice(3, 0, { text: '角色', value: 'roles', sortable: false })
    })
  },
  methods: {
    getData () {
      this.loading = true
      getUserList(this.options).then((data) => {
        this.userList = data.data.users
        this.totalDesserts = data.data.count
        this.loading = false
      })
    },
    dialogClose () {
      this.formData = {
        _id: '',
        name: '',
        email: '',
        password: '',
        roles: []
      }
      this.formError = ''
      this.dialog = false
      this.$refs.form.resetValidation()
    },
    addUser () {
      this.formData = {
        name: '',
        email: '',
        password: '',
        roles: []
      }
      this.action = 'add'
      this.dialog = true
    },
    editUser (item) {
      this.formData = item
      this.action = 'edit'
      this.dialog = true
    },
    deleteUser (item) {
      this.formData = item
      this.action = 'delete'
      this.dialog = true
    },
    array2Obj (array, key) {
      let obj = {}
      array.forEach((item) => {
        obj[item[key]] = item
      })
      return obj
    },
    save () {
      if (this.$refs.form.validate()) {
        this.actionLoading = true
        if (this.action === 'delete') {
          deleteOneUser({ _id: this.formData._id }).then((data) => {
            this.actionLoading = false
            this.dialogClose()
            this.getData()
          })
        } else if (this.action === 'add') {
          addOneUser(this.formData).then((data) => {
            console.log(data)
            this.actionLoading = false
            this.dialogClose()
            this.getData()
          }).catch((err) => {
            console.log(err)
            this.formError = '错误'
            this.actionLoading = false
          })
        } else if (this.action === 'edit') {
          updateOneUser(this.formData).then((data) => {
            console.log(data)
          })
        }
      }
    }
  }
}
</script>
