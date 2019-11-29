import Vue from 'vue'
import axios from './plugins/axios'
import App from './views/Router.vue'
import vuetify from './plugins/vuetify'

import router from './router'
import store from './store'

import moment from 'moment'
Vue.filter('dateformat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})

Vue.config.productionTip = false
new Vue({
  vuetify,
  axios,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
