<template>
  <div>
    <v-data-table
      :headers="tableHeaders"
      :items="videos"
      :items-per-page="20"
      :loading="tableLoading"
    >
      <template v-slot:item.create_time="{ item }">
        {{dateFormat(item.create_time)}}
      </template>
      <template v-slot:item.action="{ item }">
        <v-btn icon color="primary" @click="videoPreview(item)">
          <v-icon> mdi-eye </v-icon>
        </v-btn>
        <v-icon
          color="red"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
    <v-dialog v-model="dialog" scrollable max-width="800px" :fullscreen="$vuetify.breakpoint.smAndDown">
      <v-card v-if="dialog">
        <v-card-title>

      <span class="title font-weight-light">{{preViewVideo.title_zhcn}}</span>
      <v-spacer></v-spacer>
      <v-btn icon @click="dialog = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>
        <v-card-text>
          <p class="d-flex">
            <span>发布人：{{preViewVideo.approve_user_name}}</span>
            <v-spacer></v-spacer>
            <span>发布时间：{{moment(preViewVideo.approve_time).format('YYYY-MM-DD, h:mm:ss')}}</span>
          </p>
          <p class="d-flex">
            <span>编辑：{{preViewVideo.create_user_name}}</span>
            <v-spacer></v-spacer>
            <span>创建时间：{{moment(preViewVideo.create_time).format('YYYY-MM-DD, h:mm:ss')}}</span>
          </p>
          <video :src="preViewVideo.mp4_url" :poster="getimg(preViewVideo)" controls width="100%" autoplay></video>
          <p></p>
          <p class="grey--text text--darken-4 subtitle-1">{{preViewVideo.body_zhcn}}</p>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { getVideoList } from '@/plugins/api'
import moment from 'moment'
moment.locale('zh-cn')

export default {
  data: () => ({
    videos: [],
    preViewVideo: null,
    tableLoading: false,
    tableHeaders: [
      { text: '标题', value: 'title_zhcn', sortable: false },
      { text: '创建时间', value: 'create_time' },
      { text: '撰稿人', value: 'create_user_name' },
      { text: '操作', value: 'action', sortable: false }
    ],
    dialog: false
  }),
  mounted () {
    let _this = this
    this.tableLoading = true
    getVideoList().then(res => {
      _this.tableLoading = false
      this.videos = res.data.videos
    })
  },
  methods: {
    dateFormat (time) {
      return moment(time).fromNow()
    },
    moment,
    getimg (video) {
      let timeDir = moment(video.create_time).format('YYYYMM')
      return 'http://finet-fs.oss-cn-hongkong.aliyuncs.com/videoimage/org/' + timeDir + '/' + video.video_id + '.jpg'
    },
    videoPreview (video) {
      this.preViewVideo = video
      this.dialog = true
    }
  }
}
</script>
