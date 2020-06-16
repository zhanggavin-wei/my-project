<template lang="html">
    <div>
        <h1>购物车</h1>
    </div>
</template>
<script>
    export default{
        beforeRouteEnter (to, from, next) {
            let isLogin=true
            if(isLogin){
                next()
            }else{
                next('/user')
            }
        }
    }
</script>
<style lang="">
    
</style>