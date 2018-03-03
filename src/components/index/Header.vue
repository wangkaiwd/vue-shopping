<template>
    <div class="header">
        <mt-header class="header-title" :title="headerTitle">
            <router-link to="/" slot="left">
                <!-- <mt-button icon="back">返回</mt-button> -->
            </router-link>
            <!-- <mt-button icon="more" slot="right"></mt-button> -->
        </mt-header>
    </div>
</template>

<script>
export default {
    props:['headerTitle']
};
</script>

<style lang="less" scoped>
    .header {
        font-size: 18px;
        .mint-header {
            background-color: #fff;
            color: #000;
        }
    }
</style>
