<template>
    <div>
        <h1 class="find" @click='changeMsg'>发现 <span v-text='$store.state.msg'></span> </h1>
        <div class="tabs2">
            <router-link to="/find/good" tag="span" active-class='on'>发现好货</router-link>
            <router-link to="/find/price" tag="span" active-class='on'>发现优惠</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default{
        methods: {
            changeMsg(){
                //不建议直接的去修改Vuex中的状态组数
                // this.$store.state.msg++
                
                let payload={
                    count:10,
                    type:'查收'
                }
                
                //向store提交一个名叫updateMsg的Mutations方法，去申请同步修改msg
                //this.commit('updateMsg',payload)
                
                //向store提交一个名叫asyncUpdateMsg的方法，qu申请异步的改变msa的值
                this.$store.dispatch('asyncUpdateMsg',payload)
            }
        },
    }
</script>
<style>
.find{
    color:red
}
.tabs2{
    display: flex;
}
.tabs2>span{
    flex: 1;
    border: 1px solid #ccc;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
}
.tabs2>span.on{
    background: #bbb;
    color: #fff;
}
</style>