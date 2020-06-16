# my-project
##一、Vue项目创建

1、安装node.js环境（node -v 验证）
	A -> B C -> D -> E 依赖的层级关系

2、安装vue脚手架（@vue/cli)
	脚手架是一个第三方库，需先安装才能使用
	-g 表示全局安装 global
    npm install -g @vue/cli

3、使用脚手架来创建项目
    vue create web-shop
	warn warning 警告,可不处理
	error 红色报错,是失败，一定要处理
    babel编译器，eslinst代码风格

4、vue.config.js 配置文件
	让我们的vue项目更加灵活、满足个性化的开发需求

5、npm的使用（用于安装第三方模块）
	(c)npm install xxx -S  把包记录在dependencies这里
	(c)npm install yyy -D  把包记录在devDependencies这里
	(c)npm install 会根据根目录中的package.json文件中记录的第三方包来进行安装。
	(c)npm install zzz -g  全局安装永久可用

6、cnpm的使用
	把国外的服务器，切换至淘宝镜像源。
	使用cnpm安装第三方模块，网速会更快。
	npm install -g cnpm --registry=https://registry.npm.taobao.org
7、ESLint
	作用：用于规范代码风格
	如果你的代码不满足规范，就会出现警告或报错。
8、安装devtools

git clone https://github.com/arcliang/Vue-Devtools-.git
	打开谷歌浏览器：设置-扩展程序-加载已解压的扩展包
	重启一下浏览器

9、webpack
	：webpack实时监测代码的变化，并实时编译，页面自动更新
	当npm start启动了本地服务后，webpack就会动态地把入口文件main.js编译压缩插入到index.html文件中去。
10、.vue文件
	由html、css和script组成

##二、路由 vue-router

1、单页面应用程序（SPA）
	一切皆组件

2、vue-router的基础使用（让SPA开发更简单）
	 安装 cnpm install vue-router -S
	 在src/router.js文件，注册路由、创建路由实例并抛出
	 在入口文件main.js中引入路由实例并挂载
	 在App.js组件中，使用内置组件<router-view></router-view>容器来放置匹配成功的组件
	 使用<router-link></router-link>实现页面的跳转
3、路由的三个问题
	1）安装与配置：设计路径和组件的匹配isrouter.push()/replace()关系(一一对应的关系)router.js配置
	2）和路径url匹配成功的组件，放在哪里进行展示？(<routr-view></router-view>)
	3)如何改变url？(router-link,编程式路由)
	
4、Hash和history的区别
	Hash模式的唯一缺点：带有#号，难看
	优点：
	history优点是url是正常的，它的缺点是部署后刷新视图会找不到页面
	
5.路由的基础知识
	1）命名视图：给router-view组件命名
	2）路由别名：给路由匹配关系取个小名 alias
	3）命名路由：给路由匹配关系取一个名字
	4）重定向：从一个路径自动跳转到另一个路径 redirect
	5）两种路由模式：History模式 vs.Hash模式
	6）编程式导航：他会isrouter.push()/replace()
	7）通配符：在定义一一对应的路由匹配关系时，path中可以使用 * 来匹配任意字符。
	8）动态路由：`{path:'/detail/:id', component: Detail}`，在Detail组件中可以使用`this.route.params.id来接收参数。
	9）路由传参：{path:'/detail/:id', component: Detail, props:true}props选项来接收参数。
	10）嵌套路由：<router-view>组件可以进行多级嵌套，譬如/find/good这样的多级路由。
	11）路由懒加载：一种性能优化方案，让组件可以在路由匹配成功时按需加载。
	12）路由守卫：对路由匹配行为进行拦截，全局守卫使用router.beforeEach()，局部守卫使用beforeRouteEach()`，常常用于实现登录权限拦截功能。
	13）watch侦听器，还可以监听 $route的变化。