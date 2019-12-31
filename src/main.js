import Vue from 'vue'
import axios from './plugins/axios'
import App from './views/Router.vue'
import vuetify from './plugins/vuetify'

import router from './router'
import store from './store'
import helper from '@/plugins/helper'

Vue.prototype.helper = helper
Vue.config.productionTip = false

new Vue({
  vuetify,
  axios,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
