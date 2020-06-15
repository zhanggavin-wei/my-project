import Vue from 'vue'
import VueRouter from 'vue-router'
//注册路由
Vue.use(VueRouter)
//引入三个页面组件
import Home from './pages/Home.vue'
import Find from './pages/Find.vue'
import User from './pages/User.vue'
//路由：定义了一组："路径-组件"匹配关系
//创建路由实例
let router=new VueRouter({
    routes:[
        {path:'/home',component:Home},
        {path:'/find',component:Find},
        {path:'/user',component:User}
    ]
})
//抛出实例
export default router