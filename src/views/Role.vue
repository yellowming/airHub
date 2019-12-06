<template>
  <h1><v-img :src="img" /></h1>
</template>

<script>
import img from '@/assets/banner.jpg'
export default {
  data () {
    return {
      dialog: false,
      img
    }
  }
}
</script>
