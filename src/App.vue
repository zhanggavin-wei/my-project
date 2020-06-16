<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <world></world> -->
    <router-view name="ddd"></router-view>
    <router-view name="aaa"></router-view>
    <router-view name="bbb"></router-view>
    <router-view name="ccc"></router-view>
    
    <div class="tabs">
      <!-- <router-link to="/home" tag="span" active-class='on'>首页</router-link>
      <router-link to="/abc" tag="span" active-class='on'>商品</router-link>
      <router-link to="/find" tag="span" active-class='on'>发现</router-link>
      <router-link to="/user" tag="span" active-class='on'>我的</router-link> -->
      <span @click='skip(1)' :class="on">首页</span>
      <span @click='skip(2)' :class="on">商品</span>
      <span @click='skip(3)' :class="on">发现</span>
      <span @click='skip(4)' :class="on">我的</span>
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
    console.log('1',this.$rouetr)
    console.log('2',this.$rouet)
  },
  methods:{
    skip(idx){
      switch(idx){
        case 1:
        // this.$router.replace('/home')
        this.$router.push('/home')
        break
        case 2:
        this.$router.replace('/abc')
        break
        case 3:
        this.$router.replace('/find')
        break
        case 4:
        this.$router.replace('/user')
        break
      }
      
    }
  }
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
.tabs span.on{
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
