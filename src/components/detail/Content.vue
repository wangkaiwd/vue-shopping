<template>
    <div class="detail-content">
        <div class="content-img" v-for="item in content" :key="item.id">
            <img src="" v-lazy="item.imgPath" alt="">
        </div>
    </div>
</template>

<script>
export default {
    props: ['content'],

}
</script>

<style lang="less" scoped>
    .detail-content {
        .content-img {
            height: 12rem;
        }
    }
</style>
