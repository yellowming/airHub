<template>
<v-container>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="role.name"
      :counter="10"
      :rules="nameRules"
      label="名称"
      required
    ></v-text-field>

    <v-text-field
      v-model="role.description"
      :counter="50"
      :rules="emailRules"
      label="描述"
      required
    ></v-text-field>
    <header>权限</header>
    <v-card class="mt-1 mb-5" tile>
      <div v-for="group in authApis" :key="group.name">
        <template v-if="group.apis.length > 0">
          <v-card-subtitle>{{group.title}}</v-card-subtitle>
          <v-card-actions>
            <v-checkbox  class="ml-5 mt-0 d-inline-block" v-model="role.apis" :value="api._id" color="primary" v-for="api in group.apis" :key="api._id" dense :label="api.title"></v-checkbox>
          </v-card-actions>
        </template>
      </div>
    </v-card>
    <v-btn class="mr-5" @click="$router.go(-1)">取消并返回</v-btn>
    <v-btn color="primary" @click="validate"> 提交修改 </v-btn>
  </v-form>
</v-container>
</template>

<script>
import { getRole, updateRole } from '@/plugins/api'
export default {
  beforeRouteEnter (to, from, next) {
    getRole({ _id: to.params.id, withAuthApis: true }).then(res => {
      let role = res.data.role[0]
      let authApis = res.data.authApis
      next(vm => {
        vm.role = role
        vm.authApis = authApis
      })
    })
  },
  data: () => ({
    role: {},
    authApis: [],
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => (v && v.length <= 50) || 'Name must be less than 10 characters'
    ],
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4'
    ],
    checkbox: false
  }),
  methods: {
    validate () {
      this.$refs.form.resetValidation()
      if (this.$refs.form.validate()) {
        updateRole(this.role).then(res => {
          this.$router.go(-1)
        })
      }
    }
  }
}
</script>
