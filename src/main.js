import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入全局样式表
import './assets/css/global.css'

import './plugins/element.js'
import TreeTable from 'vue-table-with-tree-grid'

import axios from 'axios'
// import { config } from 'vue/types/umd'
// 配置请求的根路径
axios.defaults.baseURL='https://www.liulongbin.top:8888/api/private/v1/'
axios.interceptors.request.use(config => {
  console.log(config)
  config.headers.Authorization =window.sessionStorage.getItem('token')
  // 最后必须return config
  return config
})
Vue.prototype.$http=axios

Vue.use(axios)
Vue.config.productionTip = false
Vue.componment('tree-table',TreeTable)

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
