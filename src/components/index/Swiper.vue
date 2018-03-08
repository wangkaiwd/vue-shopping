<template>
    <div class="swiper">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in toSwiperData.swiperList" :key="item.id" v-if="toSwiperData">
              <img @click="$router.push({path:'/detail'})" :src="item.imgPath" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
  props: ["toSwiperData"],
  // 要在页面元素更新成功后在进行调用
  // updated () {
  //     console.log(this.toSwiperData);
  // }
};
</script>

<style lang="less">
// 为什么style加scoped,会导致无法修改mint-ui swipe的样式？
.swiper {
  .mint-swipe-items-wrap {
    height: 5.3333rem;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
