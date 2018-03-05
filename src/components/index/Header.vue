<template>
    <div class="header">
        <mt-header class="header-title" :title="headerTitle">
            <router-link to="/" slot="left">
            </router-link>
        </mt-header>
    </div>
</template>

<script>
export default {
    props:['headerTitle']
};
</script>

<style lang="less">
    .header {
        .mint-header-title {
            font-size: 18px;
        }
        .mint-header {
            background-color: #fff;
            color: #000;
        }
    }
</style>
