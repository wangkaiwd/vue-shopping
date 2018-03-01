<template>
    <div class="swiper">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in toSwiperData" :key="item.id"><img :src="item.imgPath" alt=""></mt-swipe-item>
            <!-- <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item> -->
        </mt-swipe>
    </div>
</template>

<script>
export default {
    props:['toSwiperData'],
    created() {
        console.log(this.toSwiperData);
    }
};
</script>

<style>

</style>
