<template>
<v-container>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field v-model="apiData.name" :counter="20" :rules="rules.name" label="名称" required></v-text-field>
    <v-text-field v-model="apiData.title" :counter="20" :rules="rules.title" label="标题" required></v-text-field>
    <v-text-field v-model="apiData.uri" :counter="20" :rules="rules.uri" label="URI" required></v-text-field>
    <v-select v-model="apiData.method" :items="methods" :rules="rules.method" label="Method" required></v-select>
    <v-select v-model="apiData.category_id" :items="categories" item-text="title" item-value="_id" :loading="categoryLoading" label="分组" required></v-select>
    <v-checkbox v-model="apiData.authentication" label="Authentication 认证"></v-checkbox>
    <v-checkbox v-model="apiData.authorization" label="Authorization 授权"></v-checkbox>
    <v-btn class="mr-5" @click="$router.go(-1)">取消并返回</v-btn>
    <v-btn color="primary" @click="validate"> 提交 </v-btn>
  </v-form>
  <v-dialog v-model="loading" persistent width="300">
    <v-card color="primary" dark>
      <v-card-text>
        加载中
        <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
</v-container>
</template>

<script>
export default {
  data: () => ({
    apiData: {
      name: '',
      title: '',
      method: 'get',
      authentication: true,
      authorization: true,
      category_id: null
    },
    rules: {
      name: [
        v => !!v || '必须填写名称',
        v => (v && v.length <= 20) || '不得大于20个字符'
      ],
      title: [
        v => !!v || '必须填写标题',
        v => (v && v.length <= 20) || '不得大于20个字符'
      ],
      uri: [
        v => !!v || '必须填写URI',
        v => (v && v.length <= 20) || '不得大于20个字符'
      ],
      method: [v => !!v || '必须选择']
    },
    valid: true,
    methods: ['get', 'post', 'put', 'delete', 'patch'],
    categories: [{ _id: null, title: '不分组' }],
    categoryLoading: false,
    loading: false
  }),
  mounted () {
    this.categoryLoading = true
    this.helper.permissionRequest('CATEGORY').then(res => {
      this.categoryLoading = false
      this.categories = this.categories.concat(res.data.categories)
    })

    if (this.$route.name === 'API_EDIT') {
      this.loading = true
      let params = { _id: this.$route.params.id }
      this.helper.permissionRequest('API_LIST', { params }).then(res => {
        this.loading = false
        this.apiData = res.data.apis[0]
      })
    }
  },
  methods: {
    validate () {
      this.$refs.form.resetValidation()
      if (this.$refs.form.validate()) {
        if (this.apiData._id) {
          this.helper.permissionRequest('API_EDIT', { data: this.apiData }).then(res => {
            this.$router.go(-1)
          })
        } else {
          this.helper.permissionRequest('API_ADD', { data: this.apiData }).then(res => {
            this.$router.go(-1)
          })
        }
      }
    }
  }
}
</script>
