<template>
    <div class="detail-swiper">
        <v-icon @click.native="$router.go(-1)"
            class="detail-swiper-icon"
            iconText="icon-fanhui"></v-icon>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="k in swiper.swiperList"
                :key="k.id">
                <img src="" v-lazy="k.imgPath"
                    alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
import Icon from "@/public/_icon";
export default {
    props: ["swiper"],
    components: {
        "v-icon": Icon
    }
};
</script>

<style lang="less">
.detail-swiper {
  position: relative;
  .mint-swipe-items-wrap {
    height: 10rem;
    width: 100%;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .detail-swiper-icon {
    position: absolute;
    top: 0.1333rem;
    left: 0.2667rem;
    padding: 0.1333rem;
    font-size: 14px;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 999;
    color: #fff;
    border-radius: 50%;
  }
}
</style>
