<template>
    <div class="swiper">
        <mt-swipe :auto="4000">
            <!-- <mt-swipe-item v-for="item in toSwiperData" :key="item.id"><img v-bind='{src:"/static/0"+item.id+".jpg"}' alt=""></mt-swipe-item> -->
            <!-- 如果v-bind绑定的内容中涉及到字符串和变量，v-bind不能简写，并以对象的形式绑定 -->
            <mt-swipe-item v-for="item in toSwiperData" :key="item.id" v-if="toSwiperData">
              <img :src="item.imgPath" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
  props: ["toSwiperData"]
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
