<template>
  <v-card>
    <v-list two-line subheader>
      <v-subheader>头像</v-subheader>

      <v-list-item>
        <v-list-item-avatar color="primary" size="128" tile>
          <img v-if="$store.state.User.user.avatar" :src="$store.state.User.user.avatar">
          <span v-else class="white--text text-uppercase">{{ $store.state.User.user.name.substr(0, 1) }}</span>
        </v-list-item-avatar>
        <v-list-item-content></v-list-item-content>
        <v-list-item-action>
          <avatar-cropper ref="avatarPicker" @submit="avatarUpload" />
          <v-btn icon @click="pickAvatar">
            <v-icon>mdi-pencil-outline</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>

    </v-list>

    <v-divider></v-divider>

    <v-list subheader>
      <v-subheader>基本信息</v-subheader>

        <v-list-item>
            <v-list-item-content>
              <v-list-item-title>用户名</v-list-item-title>
              <v-list-item-subtitle>
                <v-text-field v-if="nameInput" v-model="nameInput" autofocus @blur="nameInput = false"></v-text-field>
                <span v-else>{{ $store.state.User.user.name }}</span>
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn v-if="nameInput" color="primary" @click="nameInput = false">
                确定
              </v-btn>
              <v-btn v-else icon @click="nameInput = $store.state.User.user.name">
                <v-icon>mdi-pencil-outline</v-icon>
              </v-btn>
            </v-list-item-action>
        </v-list-item>

        <v-list-item>
            <v-list-item-content>
              <v-list-item-title>邮箱</v-list-item-title>
              <v-list-item-subtitle>
                <v-text-field v-if="emailInput" v-model="emailInput" autofocus @blur="emailInput = false"></v-text-field>
                <span v-else>{{ $store.state.User.user.email }}</span>
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action-text>
              <v-btn v-if="emailInput" color="primary" @click="emailInput = false"> 确定 </v-btn>
              <v-btn v-else icon @click="emailInput = $store.state.User.user.email">
                <v-icon>mdi-pencil-outline</v-icon>
              </v-btn>
            </v-list-item-action-text>
        </v-list-item>

        <v-list-item>
            <v-list-item-content>
              <v-list-item-title>角色</v-list-item-title>
              <v-list-item-subtitle>
                <v-chip label pill small v-for="role in $store.state.User.roles" :key="role._id" class="mx-1">{{role.name}}</v-chip>
              </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

    </v-list>

    <v-divider></v-divider>

    <v-list subheader>
      <v-subheader>账户安全</v-subheader>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title><v-btn color="primary">修改密码</v-btn></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import AvatarCropper from '@/components/AvatarCropper'
export default {
  components: { AvatarCropper },
  data: () => ({
    nameInput: false,
    emailInput: false
  }),
  methods: {
    pickAvatar () {
      this.$refs.avatarPicker.pickImg()
    },
    avatarUpload (formData) {
      let _this = this
      this.$axios.post('upload', formData, { contentType: false, processData: false, headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then((response) => {
        var res = response.data
        _this.$store.state.User.user.avatar = res.url
        _this.userAvatar = res.url
      })
    }
  }
}
</script>
