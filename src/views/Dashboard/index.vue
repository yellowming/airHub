<template>
  <div>
    <v-row>
    <v-col cols="12" sm="12" md="6" >
      <v-card color="grey lighten-4" flat height="200px">
        <v-toolbar color="elevation-0">
          <v-toolbar-title>操作记录</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-toolbar>
      </v-card>
    </v-col>
  </v-row>
    <avatar-cropper ref="avatarPicker" @submit="avatarUpload" />
    <v-avatar color="primary" size="64" class="ma-2" @click="pickAvatar">
      <img v-if="userAvatar" :src="userAvatar">
      <v-icon v-else dark>mdi-account-circle</v-icon>
    </v-avatar>
  </div>
</template>

<script>
import AvatarCropper from '@/components/AvatarCropper'
export default {
  components: { AvatarCropper },
  data () {
    return {
      userAvatar: undefined
    }
  },
  methods: {
    handleUploaded (response) {
      let data = response.data
      this.userAvatar = data.url
      console.log(response)
    },
    handleUploading (progress) {
      console.log(progress)
    },
    pickAvatar () {
      this.$refs.avatarPicker.pickImg()
    },
    avatarUpload (formData) {
      let _this = this
      this.$axios.post('upload', formData, { contentType: false, processData: false, headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then((response) => {
        var res = response.data
        _this.userAvatar = res.url
      })
    }
  }
}
</script>
