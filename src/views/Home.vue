<template>
  <div>
    <avatar-cropper ref="avatarPicker" @submit="avatarUpload" />
    <v-avatar color="primary" size="64" class="ma-2" @click="pickAvatar">
      <img v-if="userAvatar" :src="userAvatar">
      <v-icon v-else dark>mdi-account-circle</v-icon>
    </v-avatar>
  </div>
</template>

<script>
import AvatarCropper from '../components/AvatarCropper'
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
