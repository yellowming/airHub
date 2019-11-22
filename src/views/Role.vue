<template>
  <v-dialog v-model="dialog" max-width="400" persistent>
    <v-card>
      <div class="cropper">
      <vueCropper
          ref="cropper"
          :img="option.img"
          :outputSize="option.size"
          :outputType="option.outputType"
          :info="option.info"
          :full="option.full"
          :canMove="option.canMove"
          :canMoveBox="option.canMoveBox"
          :original="option.original"
          :autoCrop="option.autoCrop"
          :fixed="option.fixed"
          :fixedNumber="option.fixedNumber"
          :centerBox="option.centerBox"
          :infoTrue="option.infoTrue"
          :fixedBox="option.fixedBox"
          :autoCropWidth="option.autoCropWidth"
          :autoCropHeight="option.autoCropHeight"
        ></vueCropper>
      </div>
      <v-card-actions>
        <v-btn icon>
        <v-icon>mdi-rotate-left</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-rotate-right</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-image</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn color="gray">
        取消
      </v-btn>
      <v-btn color="success">
        确定
      </v-btn>
    </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { VueCropper } from 'vue-cropper'
import img from '@/assets/banner.jpg'
export default {
  components: { VueCropper },
  data () {
    return {
      option: {
        img: img, // 裁剪图片的地址
        info: false, // 裁剪框的大小信息
        outputSize: 0.8, // 裁剪生成图片的质量
        outputType: 'jpeg', // 裁剪生成图片的格式
        canScale: true, // 图片是否允许滚轮缩放
        autoCrop: true, // 是否默认生成截图框
        fixedBox: true, // 固定截图框大小 不允许改变
        fixed: true, // 是否开启截图框宽高固定比例
        fixedNumber: [1, 1], // 截图框的宽高比例
        full: false, // 是否输出原图比例的截图
        canMoveBox: false, // 截图框能否拖动
        original: true, // 上传图片按照原始比例渲染
        centerBox: true, // 截图框是否被限制在图片里面
        infoTrue: true, // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
        heigh: false,
        mode: 'cover',
        autoCropWidth: '400',
        autoCropHeight: '400'
      },
      dialog: false
    }
  }
}
</script>

<style lang="scss">
.cropper {
    width: 400px;
    height: 400px;
    margin: 0 auto;
}
.vue-cropper {
  background-repeat: repeat;
}
</style>
