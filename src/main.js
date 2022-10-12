import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import E from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import Hl from "../packages/index.js" //引入全部组件
Vue.use(E)
Vue.use(Hl)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
