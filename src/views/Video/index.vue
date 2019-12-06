<template>
  <div>
    <v-data-table
      :headers="tableHeaders"
      :items="videos"
      :items-per-page="15"
      :loading="tableLoading"
      :options.sync="options"
      :server-items-length="totalDesserts"
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
          <p class="subtitle-1">{{preViewVideo.body_zhcn}}</p>
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
    dialog: false,
    totalDesserts: 0,
    options: {}
  }),
  watch: {
    options: {
      handler () {
        this.getData()
      },
      deep: true
    }
  },
  methods: {
    dateFormat (time) {
      return moment(time).fromNow()
    },
    getData () {
      this.tableLoading = true
      getVideoList(this.options).then(res => {
        this.tableLoading = false
        this.totalDesserts = res.data.count
        this.videos = res.data.videos
      })
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
