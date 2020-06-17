<template>
  <div>
    <h1 class="find" @click="changeMsg">
      发现
      <span v-text="msg"></span>
    </h1>
    <h1 v-text='msg2'></h1>
    <div class="tabs2">
      <router-link to="/find/good" tag="span" active-class="on">发现好货</router-link>
      <router-link to="/find/price" tag="span" active-class="on">发现优惠</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  computed: {
    //mapState的作用是把Vuex中的state中的数据进行映射，在计算属性中
    // mapGetters的作用是把Vuex中的getters数据映射进来，在计算属性进行映射，然后通过this.进行访问
// mapActions用于映射Vuex中的actions方法，在methods选项中进行映射，然后this.进行访问
// mapMutations用于映射Vuex中的mutations方法，在methods选项中进行映射，然后this.进行访问
    ...mapState('study',["msg", "foo"]),
    ...mapGetters('study',["msg2"])
  },
  methods: {
    ...mapMutations('study',['updateMsg']),
    ...mapActions('study',['asyncUpdateMsg']),
    mounted() {
      console.log("map", this.msg, this.foo);
    },
    changeMsg() {
      //不建议直接的去修改Vuex中的状态组数
      // this.$store.state.msg++

      let payload = {
        count: 10,
        type: "查收"
      };

      //向store提交一个名叫updateMsg的Mutations方法，去申请同步修改msg
      //this.commit('updateMsg',payload)
      this.updateMsg(payload);

      //向store提交一个名叫asyncUpdateMsg的方法，qu申请异步的改变msa的值
      //this.$store.dispatch("asyncUpdateMsg", payload);
      // this.asyncUpdateMsg(payload)
    }
  }
};
</script>
<style>
.find {
  color: red;
}
.tabs2 {
  display: flex;
}
.tabs2 > span {
  flex: 1;
  border: 1px solid #ccc;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
}
.tabs2 > span.on {
  background: #bbb;
  color: #fff;
}
</style>