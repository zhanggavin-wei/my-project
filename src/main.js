//安装Vue
import Vue from 'vue'
//引入更组件
import App from './App.vue'
//关闭项目且启动的生产提示
Vue.config.productionTip = false

import store from './store'
//创建根组件实例
import xxxx from './router.js'
new Vue({
  store,
  router:xxxx,//xxxx也可以是router，router可以只写一个
  render: h => h(App),
}).$mount('#app')
//$mount()手动挂载