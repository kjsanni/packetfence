import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import i18n from '@/utils/locale'
import VueTimeago from 'vue-timeago'
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/arrow-circle-right'
import 'vue-awesome/icons/bell'
import 'vue-awesome/icons/check'
import 'vue-awesome/icons/columns'
import 'vue-awesome/icons/info-circle'
import 'vue-awesome/icons/minus-circle'
import 'vue-awesome/icons/plus-circle'
import 'vue-awesome/icons/search'
import 'vue-awesome/icons/times'
import 'vue-awesome/icons/wifi'
import 'vue-awesome/icons/cogs'
import 'vue-awesome/icons/thumbtack'
import 'vue-awesome/icons/ban'
import 'vue-awesome/icons/sync'
import 'vue-awesome/icons/retweet'
import 'vue-awesome/icons/user-plus'
import 'vue-awesome/icons/unlink'
import 'vue-awesome/icons/trash-alt'
import 'vue-awesome/icons/ellipsis-v'
import 'vue-awesome/icons/exclamation-triangle'
import 'vue-awesome/icons/sign-in-alt'
import 'vue-awesome/icons/sign-out-alt'
import 'vue-awesome/icons/save'
import 'vue-awesome/icons/chevron-down'
import { Timeline } from 'vue2vis'

import store from './store'
import router from './router'
import filters from './utils/filters'
import App from './App'

import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue2vis/dist/vue2vis.css'

Vue.use(VueTimeago, {
  name: 'Timeago',
  locale: undefined,
  locales: {
    'fr': require('date-fns/locale/fr')
  }
})
Vue.config.productionTip = process.env.NODE_ENV === 'production'

Vue.component('icon', Icon)
Vue.component('timeline', Timeline)

Vue.use(BootstrapVue)

// Register global filters
for (const filter of Object.keys(filters)) {
  Vue.filter(filter, filters[filter])
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App }
})
