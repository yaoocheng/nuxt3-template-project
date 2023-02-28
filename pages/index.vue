<template>
    <NuxtLayout name="default">

        <div class="mid">
            <img style="width: 100px;margin-bottom: 20px;" src="~@/assets/img/logo.png" alt="">
            <h1>欢迎使用<a class="ye-cli" target="_blank" href="https://github.com/yc-cooding/ye-cli">ye-cli</a>搭建项目</h1>
            <h2>本项目基于Nuxt3，用于构建SSR应用</h2>
            <h2>各个模块都已配置好，搭建后即可进行开发</h2>
        </div>

    </NuxtLayout>
</template>

<script setup lang='ts'>

</script>

<style lang='less' scoped>
.mid {
    text-align: center;
    padding-top: 100px;
    h1,
    h2 {
        color: #666;
        margin-bottom: 20px;
    }

    h3 {
        &:hover {
            color: rgb(44, 118, 255);
        }
        color: rgb(101, 155, 255);
        margin-bottom: 10px;
    }
}
</style>