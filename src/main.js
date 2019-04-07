// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Tabs from "./components/Tabs"
import BackTop from "./components/BackTop"
import Axios from "axios"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './assets/font/iconfont.css'

//全局组件 tabs
Vue.use(Tabs)
Vue.use(BackTop)
//axios
Vue.prototype.$axios = Axios;
//跨域配置
Vue.prototype.HOST = "/baidu_sing_api"
//swiper
Vue.use(VueAwesomeSwiper, /* { default global options } */)


Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
