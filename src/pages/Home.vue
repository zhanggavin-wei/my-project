<template>
  <div>
    <h1 class="home">首页<span v-text='$store.state.msg'></span></h1>
    <h1 v-text='$store.getters.msg2'></h1>
    <div class="list">
        <!-- 声明式导航写法（不建议） -->
      <!-- <div v-for="item in goods" :key="item.id">
        <router-link :to='"/detail/"+item.id' tag='span'>
            <span v-text="item.id"></span>
            <span>-</span>
            <span v-text="item.name"></span>
        </router-link>
      </div> -->
      <!-- 编程式路由导航（建议） -->
      <div class="listtabs" v-for="item in goods" :key="item.id" @click='skip(item.id)'>
            <span v-text="item.id"></span>
            <span>-</span>
            <span v-text="item.name"></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      goods: [
        {
          id: 1,
          name: "笔记本",
          price: "5000"
        },
        {
          id: 2,
          name: "鼠标",
          price: "100"
        },
        {
          id: 3,
          name: "键盘",
          price: "300"
        },
        {
          id: 4,
          name: "耳机",
          price: "200"
        }
      ]
    };
  },
  methods: {
    skip(id){
      this.$router.push('/detail/'+id)
    }
  },
};
</script>
<style>
.home {
  color: green;
}
.list {
    display: flex;
}
.list .listtabs{
  flex: 1;
  border: 1px solid #ccc;
}
</style>