<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <world></world> -->
    <router-view></router-view>
    <div class="tabs">
      <router-link to="/home" tag="span" active-class='on'>首页</router-link>
      <router-link to="/find" tag="span" active-class='on'>发现</router-link>
      <router-link to="/user" tag="span" active-class='on'>我的</router-link>
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
    for(let i=0;i<10;i++){
      console.log(i)
    }
    console.log('mounted')
  },
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
.tabs span on{
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
