import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import utils from './utils/index'
import 'normalize.css'
import './assets/css/common.scss'
import 'font-awesome/scss/font-awesome.scss'
Vue.config.productionTip = false
import layer from 'vue2-layer-mobile'
import VueAnimateNumber from 'vue-animate-number'
Vue.use(VueAnimateNumber)
Vue.use(layer)
Vue.prototype.utils = utils

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
