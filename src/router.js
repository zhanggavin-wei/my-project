import Vue from 'vue'
import VueRouter from 'vue-router'
//注册路由
Vue.use(VueRouter)
//引入三个页面组件
import Home from './pages/Home.vue'
import Find from './pages/Find.vue'
import User from './pages/User.vue'
// @别名，他代表就是当前代码所在的绝对路径+/src
import A from '@/components/home/A.vue'
import B from '@/components/home/B.vue'
import C from '@/components/home/C.vue'
//路由：定义了一组："路径-组件"匹配关系
//创建路由实例
let router = new VueRouter({
    //有#号的路径，就是Hash路由，没有#号的就是history路由
    mode:'history',
    routes: [
        {
            //当访问？abc时，用三个命名视图来分别显示三个组件
            path: '/abc',
            components: {
                aaa: A,
                bbb: B,
                ccc: C
            }
        },
        //重定向：当你访问一个路径时，自动跳转到另一个页面
        {
            path:'/',redirect:'/home'
        },
        {
            path: '/home',
            components: {
                ddd: Home
            }
        },
        {
            path: '/find',
            components: {
                ddd: Find
            }
        },
        {
            path: '/user',
            components: {
                ddd: User
            }
        },
    ]
})
//抛出实例
export default router
