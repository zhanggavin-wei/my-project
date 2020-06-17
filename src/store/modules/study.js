const studyMoudule ={
    //state:它是Vuex的数据存储中心
    //放在state中的数据，所有组件都可以共享，并保持同步
    //只要state中的数据发生变化，视图中自动更新页面
    namespaced:true,
    state:{
        msg:2001,
        foo:'foo'
    },
    //getters:计算属性
    //在getters关联的state只要发生变化，getters会自动更新
    //getters是一个函数，但一定要return表达式，我们把它当作变量使用
    getters:{
        msg2:function(state){
            return state.msg*10
        }
    },
    //mutations:同步修改(vue官方建议使用)
    //在组件中使用this.$store.commit('已定义的mutations的方法'，'负载')来触发mutations方法
    //改变state时，devtols会记录下来
    mutations:{
        //payload 负载就是组件带过来的数据
        updateMsg(state,payload){
            state.msg+=payload.count
        }
    },
    //actions:异步行为
     // 在actions里面的方法，都是异步，比如调接口、定时器等
    //可以异步修改state，也可以同步修改state，但是devtools不会记录
    // Vuex官方特别建议，只用mutations来修改state，不要使用actions来修改state
    actions:{
        asyncUpdateMsg(store,payload){
            setTimeout(()=>{
                store.commit('updateMsg',payload)
            },3000)
        }
    }
}
export default studyMoudule