import Vue from 'vue'
import VueRouter from 'vue-router'
//注册路由
Vue.use(VueRouter)
//引入三个页面组件

//建议使用路由懒加载，以节省项目性能
const Home=()=>import('./page/Home.vue')
const Find=()=>import('./page/Find.vue')
const User=()=>import('./page/User.vue')
const Detail=()=>import('./page/Detail.vue')
const Cart=()=>import('./page/Cart.vue')

// 不建议以下写法
// import Home from './pages/Home.vue'
// import Find from './pages/Find.vue'
// import User from './pages/User.vue'
// import Detail from './pages/Detail.vue'
// import Cart from './pages/Cart.vue'
// @别名，他代表就是当前代码所在的绝对路径+/src
import A from '@/components/home/A.vue'
import B from '@/components/home/B.vue'
import C from '@/components/home/C.vue'

import Good from '@/components/find/Good.vue'
import Price from '@/components/find/Price.vue'
//路由：定义了一组："路径-组件"匹配关系
//创建路由实例
let router = new VueRouter({
    //有#号的路径，就是Hash路由，没有#号的就是history路由
    mode:'hash',
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
        // {
        //     path:'/',redirect:'/home'
        // },
        //命名视图，给router-view命名
        {
            path: '/home',
            components: {
                ddd: Home
            }
        },
        //二级嵌套
        {
            path: '/find',
            components: {
                ddd: Find
            },
            children:[
                {
                    path:'good',component:Good
                },
                {
                    path:'price',component:Price
                },
                {
                    path:'',redirect:'/find/good'
                },
            ]
        },
        //使用命名视图
        {
            path: '/user',
            components: {
                ddd: User
            }
        },
        //动态路由。冒号后面的id是一个变量，最终可以在this.route.params.id拿到
        //路由传参：props开启路由传参，并且允许接受参数的那个组件使用
        
        {
            path:'/detail/:id',
            component:Detail,
            props:true
        },
        {
            path:'/cart',
            component:Cart
        }
        //通配符(一般放最后面，和优先级有关，放前面的优先级高)
        // {
        //     path:'*',component:Home
        // },
        // {path:'*',redirect:'/'},
        // {path:'/find*',component:Find}
    ]
})
//全局路由守卫：会拦截所有的漏油跳转行为
//常用于实现登录拦截
router.beforeEach((to,from,next)=>{
    console.log(to,from)
    //只对访问购物车逐渐的路由跳转行为进行拦截
    if(to.fullPath=='/cart'){
        let isLogin=false
        if(isLogin){
            next()
        }else{
            next({path:'/user'})
        }
    }else{
        next()
    }
})
//抛出实例
export default router
