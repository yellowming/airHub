<template>
  <div>
    <avatar-cropper
      @uploaded="handleUploaded"
      @uploading="handleUploading"
      trigger="#pick-avatar"
      upload-url="/upload" />
    <v-avatar color="primary" size="64" class="ma-2" id="pick-avatar">
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
    }
  }
}
</script>
