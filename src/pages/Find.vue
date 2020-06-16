<template>
    <div>
        <h1 class="find">发现</h1>
        <div class="tabs2">
            <router-link to="/find/good" tag="span" active-class='on'>发现好货</router-link>
            <router-link to="/find/price" tag="span" active-class='on'>发现优惠</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default{
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
</style>