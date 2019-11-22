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
    <vueCropper
      ref="cropper"
      :img="option.img"
      :outputSize="option.size"
      :outputType="option.outputType"
    ></vueCropper>
  </div>
</template>

<script>
import AvatarCropper from '../components/AvatarCropper'
import { VueCropper } from 'vue-cropper'
import img from '@/assets/banner.jpg'
export default {
  components: { AvatarCropper, VueCropper },
  data () {
    return {
      userAvatar: undefined,
      option: {
        img: img,
        size: 1,
        outputType: 'png'
      }
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
