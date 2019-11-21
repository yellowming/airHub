<template>
  <div>
    <v-dialog v-model="dialog" max-width="600" max-height="600" persistent>
      <v-card>
        <img
            :src="dataUrl"
            @load.stop="createCropper"
            alt
            ref="img"
          >

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="destroy">
            取消
          </v-btn>

          <v-btn color="green darken-1" text @click="submit">
            提交
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <input :accept="mimes" class="d-none" ref="input" type="file" />
  </div>
</template>

<script>
import 'cropperjs/dist/cropper.css'
import Cropper from 'cropperjs'

export default {
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
    cropperOptions: {
      type: Object,
      default () {
        return {
          aspectRatio: 1,
          autoCropArea: 1,
          viewMode: 1,
          movable: false,
          zoomable: true,
          dialog: false,
          resizable: true
        }
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
      dialog: false
    }
  },
  methods: {
    destroy () {
      this.cropper.destroy()
      this.$refs.input.value = ''
      this.dataUrl = undefined
      this.dialog = false
    },
    submit () {
      this.$emit('submit')
      if (this.uploadUrl) {
        this.uploadImage()
      } else if (this.uploadHandler) {
        this.uploadHandler(this.cropper)
      } else {
        this.$emit('error', 'No upload handler found.', 'user')
      }
      this.destroy()
    },
    pickImage (e) {
      console.log(e)
      this.$refs.input.click()
    },
    createCropper () {
      this.cropper = new Cropper(this.$refs.img, this.cropperOptions)
    },
    uploadImage () {
      this.cropper.getCroppedCanvas(this.outputOptions).toBlob(
        blob => {
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
        },
        this.outputMime,
        this.outputQuality
      )
    }
  },
  mounted () {
    // listen for click event on trigger
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
          this.dataUrl = e.target.result
          this.dialog = true
        }

        reader.readAsDataURL(fileInput.files[0])
        this.filename = fileInput.files[0].name
        this.outputMime = fileInput.files[0].type
        this.$emit('changed', fileInput.files[0], reader)
      }
    })
  }
}
</script>
