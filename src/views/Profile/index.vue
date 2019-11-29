<template>
  <div>
    <v-tabs vertical>
      <v-tab>
        <v-icon left>mdi-account</v-icon>
        账户信息
      </v-tab>
      <v-tab>
        <v-icon left>mdi-lock</v-icon>
        修改密码
      </v-tab>
    </v-tabs>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    linP: ''
  })
}
</script>
