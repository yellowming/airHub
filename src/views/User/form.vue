<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <input type="hidden" v-model="formData._id"/>
    <v-text-field label="用户名" :rules="rules.name" v-model="formData.name"></v-text-field>
    <v-text-field label="邮箱" :rules="rules.email" type="email" v-model="formData.email"></v-text-field>
    <v-text-field label="密码" :rules="rules.password" type="password" autocomplete="new-password" v-model="formData.password"></v-text-field>
    <v-select
      v-model="formData.roles"
      :rules="rules.roles"
      :items="roleList"
      item-text="name"
      item-value="_id"
      attach
      small-chips
      label="角色"
      multiple
    ></v-select>
  </v-form>
</template>

<script>
import { getRole } from '@/plugins/api'
export default {
  data: () => ({
    valid: true,
    formData: {
      _id: '',
      name: '',
      email: '',
      password: '',
      roles: []
    },
    roleList: [],
    rules: {
      email: [
        v => !!v || '邮箱不能为空',
        v => /.+@.+\..+/.test(v) || '邮箱不合法'
      ],
      name: [
        v => !!v || '用户名不能为空'
      ],
      password: [
        v => !!v || '密码不能为空'
      ],
      roles: [
        v => (v.length > 0) || '请选择'
      ]
    }
  }),
  mounted () {
    getRole().then((data) => {
      this.roleList = data.data.role
    })
  }
}
</script>
