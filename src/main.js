import Vue from 'vue'
import App from './App'

import Router from 'vue-router'
Vue.use(Router)

import router from '@/router'
new Vue({
  el: '#app',
  template: '<App />',
  components: {
    App,
  },
  router,
})
