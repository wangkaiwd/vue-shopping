<template>
    <div class="swiper">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in toSwiperData" :key="item.id"><img :src="item.imgPath" alt=""></mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    props:['toSwiperData'],
};
</script>

<style>

</style>
