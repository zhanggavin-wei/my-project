//安装Vue
import Vue from 'vue'
//引入更组件
import App from './App.vue'
//关闭项目且启动的生产提示
Vue.config.productionTip = false
//创建根组件实例
import router from './router.js'
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
//$mount()手动挂载