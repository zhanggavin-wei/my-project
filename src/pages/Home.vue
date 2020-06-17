<template>
  <div id="appList">
    <h1 class="home">
      首页
      <span v-text="msg"></span>
    </h1>
    <h1 v-text="msg2"></h1>
    <!-- 渲染音乐列表 -->
    <table border="1" cellspacing="0">
      <tr>
        <td>歌曲</td>
        <td>歌手</td>
        <td>专辑</td>
        <td>时长</td>
      </tr>
      <div v-for="item in songList" :key="item.id">
        <tr>
          <td v-text="item.name"></td>
          <td v-text="item.singer[0].name">2</td>
          <td v-text='item.album.name'>3</td>
          <td v-text='item.interval+"s"'>4</td>
        </tr>
      </div>
    </table>
    <div class="list">
      <!-- 声明式导航写法（不建议） -->
      <!-- <div v-for="item in goods" :key="item.id">
        <router-link :to='"/detail/"+item.id' tag='span'>
            <span v-text="item.id"></span>
            <span>-</span>
            <span v-text="item.name"></span>
        </router-link>
      </div>-->
      <!-- 编程式路由导航（建议） -->
      <div class="listtabs" v-for="item in goods" :key="item.id" @click="skip(item.id)">
        <span v-text="item.id"></span>
        <span>-</span>
        <span v-text="item.name"></span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  computed: {
    //mapState的作用是把Vuex中的state中的数据进行映射，在计算属性中
    ...mapState("study", ["msg", "foo"]),
    ...mapGetters("study", ["msg2"]),
    ...mapState("song", ["songList"])
  },
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
  mounted() {
    let params = {
      ct: 24,
      qqmusic_ver: 1298,
      new_json: 1,
      remoteplace: "txt.yqq.song",
      searchid: 54616638128860322,
      t: 0,
      aggr: 1,
      cr: 1,
      catZhida: 1,
      lossless: 0,
      flag_qc: 0,
      p: 1,
      n: 10,
      // w:'%E5%91%A8%E6%9D%B0%E4%BC%A6',
      w: "周杰伦",
      g_tk_new_20200303: 5381,
      g_tk: 5381,
      loginUin: 0,
      hostUin: 0,
      format: "json",
      inCharset: "utf8",
      outCharset: "utf-8",
      notice: 0,
      platform: "yqq.json",
      needNewCode: 0
    };
    console.log(this.getQQMusic);
    this.getQQMusic(params);
  },
  methods: {
    ...mapActions("song", ["getQQMusic"]),
    skip(id) {
      this.$router.push("/detail/" + id);
    }
  }
};
</script>
<style>
#appList {
  text-align: center;
}
.home {
  color: green;
}
.list {
  display: flex;
}
.list .listtabs {
  flex: 1;
  border: 1px solid #ccc;
}
table {
  width: 600px;
  text-align: center;
}
table td{
  display: block;
  float: left;
  width: 145px;
}
</style>