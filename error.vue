<template>
    <NuxtLayout name="default">
        
        <h1>404</h1>
    </NuxtLayout>
</template>

<script setup lang='ts'>
// 需要注册error  否则报警告
defineProps({
    error: Object
})

</script>

<style lang='less' scoped>
h1 {
    color: rgb(249, 59, 59);
    text-align: center;
    font-size: 60px;
    margin-top: 200px;
}
</style>