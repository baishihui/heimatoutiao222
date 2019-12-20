import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui' // 引入UI
import 'element-ui/lib/theme-chalk/index.css' // 引入UI样式
import './styles/index.less' // 引入初始化样式

Vue.config.productionTip = false
Vue.use(ElementUI) // 注册全局UI
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')