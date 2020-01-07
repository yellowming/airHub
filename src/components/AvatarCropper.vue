<template>
  <div>
    <input type="file" ref="input" class="d-none" :fieldName="fieldName" :value="imgFile" accept="image/png, image/jpeg, image/gif, image/jpg" @change="uploadImg($event, 1)">
    <v-dialog :value="option.img" max-width="400" persistent>
      <v-card>
        <div class="cropper" style="height:400px">
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
          <v-btn icon @click="rotateLeft">
            <v-icon>mdi-rotate-left</v-icon>
          </v-btn>
          <v-btn icon @click="rotateRight">
            <v-icon>mdi-rotate-right</v-icon>
          </v-btn>
          <v-btn icon @click="pickImg">
            <v-icon>mdi-image</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="gray" @click="destroy">
            取消
          </v-btn>
          <v-btn color="success" @click="finish('blob')">
            确定
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { VueCropper } from 'vue-cropper'
export default {
  props: {
    trigger: {
      type: Element
    },
    fieldName: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      headImg: '',
      crap: false,
      previews: {},
      dialog: false,
      option: {
        img: '', // 裁剪图片的地址
        info: true, // 裁剪框的大小信息
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
        mode: '100%',
        autoCropWidth: '400',
        autoCropHeight: '400'
      },
      fileName: '',
      downImg: '#',
      imgFile: '',
      uploadImgRelaPath: ''
    }
  },
  components: {
    VueCropper
  },
  methods: {
    rotateLeft () {
      this.$refs.cropper.rotateLeft()
    },
    rotateRight () {
      this.$refs.cropper.rotateRight()
    },
    destroy () {
      this.$refs.cropper.clearCrop()
      this.option.img = ''
    },
    pickImg () {
      this.$refs.input.click()
    },
    finish () {
      let formData = new FormData()
      this.$refs.cropper.getCropBlob((data) => {
        let img = window.URL.createObjectURL(data)
        this.model = true
        this.modelSrc = img
        formData.append('avatar', data, this.fileName)
        console.log(formData)
        this.$emit('submit', formData)
        this.destroy()
      })
    },
    uploadImg (e, num) {
      this.fileName = 'avatar.jpg'
      if (!/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/.test(e.target.value)) {
        alert('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种')
        return false
      }
      var reader = new FileReader()
      reader.onload = (e) => {
        this.option.img = window.URL.createObjectURL(new Blob([e.target.result]))
      }
      reader.readAsArrayBuffer(e.target.files[0])
    }
  },
  mounted () {
    if (this.trigger) this.trigger.addEventListener('click', this.pickImg)
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
