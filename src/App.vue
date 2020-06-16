<template>
  <div id="app">
    <!-- 路由的视图容器 -->
    <!-- 它的作用就是告诉vue在哪里显示路由匹配的组件 -->
    <!-- 用于显示匹配成功的页面组件 -->
    <!-- 它的默认名字叫default -->
    <!-- 这是一级路由的位置 -->
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <world></world> -->
    <!-- 命名视图 -->
    <router-view name="ddd"></router-view>
    <router-view name="aaa"></router-view>
    <router-view name="bbb"></router-view>
    <router-view name="ccc"></router-view>
    <router-view></router-view>
    <div class="tabs">
      <!-- 它就是一个a标签，它的作用就是触发url路径的变化 -->
      <!-- to属性，表示要跳转到哪个路径 -->
      <!-- tag属性，指定最终渲染成哪个HTML标签 -->
      <!-- active-class用于指定高亮样式的类名 -->

      <!-- 声明式导航 -->
      <router-link to="/home" tag="span" active-class='on'>首页</router-link>
      <router-link to="/abc" tag="span" active-class='on'>商品</router-link>
      <router-link to="/find" tag="span" active-class='on'>发现</router-link>
      <router-link to="/cart" tag="span" active-class='on'>购物车</router-link>
       <router-link to="/user" tag="span" active-class='on'>我的</router-link>
      <!-- 编程式导航 -->
       <!-- 底部tab导航，不建议使用编程式导航来实现，因为this.$router.push()不支持向路由栈中推入相同的路由 -->
      <!-- <span @click='skip(1)'>首页</span>
      <span @click='skip(2)'>商品</span>
      <span @click='skip(3)'>发现</span>
       <span @click='skip(4)'>购物车</span>
      <span @click='skip(5)'>我的</span> -->
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import World from './components/World'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // World
  },
  mounted() {
    // this.$route 中记录当前url的各种匹配关系
    // this.$router 这个用于编程式路由导航
    // .push()  路由栈（先进后出）
    // .replace()
    // 声明式导航和编程式导航，怎么灵活使用呢？答：如果是侧边栏类似的导航建议用声明式导航，如果按钮跳转时使用编程式导航。
    console.log('路由', this.$route)
    console.log('路由', this.$router)
  },
  //编程式导航的事件处理
  // methods:{
  //   skip(idx){
  //     switch(idx){
  //       case 1:
  //       // this.$router.replace('/home')
  //       this.$router.replace('/home')
  //       break
  //       case 2:
  //       this.$router.replace('/abc')
  //       break
  //       case 3:
  //       this.$router.replace('/find')
  //       break
  //       case 4:
  //       this.$router.replace('/cart')
  //       break
  //       case 5:
  //       this.$router.replace('/user')
  //       break
  //     }
      
  //   }
  // }
}
</script>

<style>
html,body{
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
.app {
  width: 100%;
  height: 100%;
  position: relative;
}
.tabs{
  position: absolute;
  bottom:0;
  right: 0;
  left: 0;
  height: 80px;
  display: flex;
}
.tabs span{
  flex: 1;
  text-align: center;
  border: 1px solid #ccc;
  line-height: 80px;
}
.tabs span .on{
  color:red;
}
.box{
  position: absolute;
  bottom: 120px;
  right: 0;
}
.box1{
  position: absolute;
  top: 0;
  right: 0;
}
</style>
