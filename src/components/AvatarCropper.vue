<template>
  <div>
    <input :accept="mimes" class="d-none" ref="input" type="file" />
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
      <v-btn color="gray" @click="destroy">
        取消
      </v-btn>
      <v-btn color="success" @click="submit">
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
  components: { VueCropper },
  props: {
    trigger: {
      type: [String, Element],
      required: true
    },
    uploadHandler: {
      type: Function
    },
    uploadUrl: {
      type: String
    },
    requestMethod: {
      type: String,
      default: 'POST'
    },
    uploadFormName: {
      type: String,
      default: 'file'
    },
    uploadFormData: {
      type: Object,
      default () {
        return {}
      }
    },
    outputOptions: {
      type: Object
    },
    outputQuality: {
      type: Number,
      default: 0.9
    },
    mimes: {
      type: String,
      default: 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon'
    },
    labels: {
      type: Object,
      default () {
        return {
          submit: '提交',
          cancel: '取消'
        }
      }
    }
  },
  data () {
    return {
      cropper: undefined,
      dataUrl: undefined,
      filename: undefined,
      outputMime: undefined,
      dialog: false,
      option: {
        img: '', // 裁剪图片的地址
        info: false, // 裁剪框的大小信息
        outputSize: 0.8, // 裁剪生成图片的质量
        outputType: 'jpeg', // 裁剪生成图片的格式
        canScale: true, // 图片是否允许滚轮缩放
        autoCrop: true, // 是否默认生成截图框
        fixedBox: true, // 固定截图框大小 不允许改变
        fixed: true, // 是否开启截图框宽高固定比例
        fixedNumber: [1, 1], // 截图框的宽高比例
        full: true, // 是否输出原图比例的截图
        canMoveBox: false, // 截图框能否拖动
        original: true, // 上传图片按照原始比例渲染
        centerBox: true, // 截图框是否被限制在图片里面
        infoTrue: true, // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
        heigh: false,
        mode: 'cover',
        autoCropWidth: '400',
        autoCropHeight: '400'
      }
    }
  },
  methods: {
    destroy () {
      this.$refs.cropper.clearCrop()
      this.option.img = undefined
      this.dialog = false
    },
    submit () {
      this.$emit('submit')
      if (this.uploadUrl) {
        this.$refs.cropper.startCrop()
        this.uploadImage()
      } else if (this.uploadHandler) {
        this.uploadHandler(this.cropper)
      } else {
        this.$emit('error', 'No upload handler found.', 'user')
      }
      this.destroy()
    },
    pickImage (e) {
      this.$refs.input.click()
    },
    uploadImage () {
      this.$refs.cropper.getCropBlob((blob) => {
        let form = new FormData()
        let data = Object.assign({}, this.uploadFormData)
        for (let key in data) {
          form.append(key, data[key])
        }
        form.append(this.uploadFormName, blob, this.filename)
        return this.$axios({
          url: this.uploadUrl,
          method: 'post',
          data: form,
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          onUploadProgress: progressEvent => {
            this.$emit('uploading', progressEvent)
          }
        }).then(response => {
          this.$emit('uploaded', response)
        })
      })
    }
  },
  mounted () {
    let trigger =
      typeof this.trigger === 'object'
        ? this.trigger
        : document.querySelector(this.trigger)
    if (!trigger) {
      this.$emit('error', 'No avatar make trigger found.', 'user')
    } else {
      trigger.addEventListener('click', this.pickImage)
    }

    // listen for input file changes
    let fileInput = this.$refs.input
    fileInput.addEventListener('change', () => {
      if (fileInput.files != null && fileInput.files[0] != null) {
        let reader = new FileReader()
        reader.onload = e => {
          this.option.img = e.target.result
        }
        reader.readAsDataURL(fileInput.files[0])
        this.dialog = true
        this.filename = fileInput.files[0].name
        this.outputMime = fileInput.files[0].type
        this.$emit('changed', fileInput.files[0], reader)
      }
    })
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
