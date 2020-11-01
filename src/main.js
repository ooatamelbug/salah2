import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import axios from 'axios'
// import vuelidate from 'vuelidate'

import { routes } from './routes'

axios.defaults.baseURL= 'http://website22.pythonanywhere.com/'

var VueCookie = require('vue-cookie');

Vue.use(VueRouter);
Vue.use(VueCookie);
// vue.use(vuelidate);

const router = new VueRouter({
  mode: 'history',
  routes
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
