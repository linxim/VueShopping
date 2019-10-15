// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueResource from 'vue-resource'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/font/iconfont.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import layer from 'layui-layer'
import $ from 'jquery'
import BaiduMap from 'vue-baidu-map'

Vue.config.productionTip = false
Vue.use(layer)
Vue.use(ElementUI)
Vue.use($)
Vue.use(VueResource)
Vue.use(BaiduMap, {
  ak: 'MYiuOlcui11VdqBCsptfXfnRIM2WNvLL'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
