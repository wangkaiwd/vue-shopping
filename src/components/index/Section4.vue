<template>
    <div class="section4">
        <h2 class="section4-title">
          section4
          <v-icon class="section4-icon" iconText="icon-xiangyoujiantou"></v-icon>
        </h2>
        <div class="section4-item clearfix">
            <div class="section4-item-list" v-for="item in toSection4.section4List" :key="item.id">
                <div class="section4-item-list-img">
                    <img :src="item.imgPath" alt="">
                    <p class="section4-item-list-goodsinfo">{{item.goodsInfo}}</p>
                </div>
                <div class="section4-item-list-name">{{item.goodsName}}</div>
                <div class="section4-item-list-price">{{item.goodsPrice|currency}}</div>
            </div>
        </div>
        <div class="section4-banner">
          <img :src="toSection4.banner" alt="">
        </div>
    </div>
</template>

<script>
import Icon from "@/public/Icon.vue";
export default {
  props: ["toSection4"],
  components: {
    "v-icon": Icon
  }
};
</script>

<style lang="less" scoped>
@import "../../common/styles/minix.less";
.section4 {
  padding-top: 0.6667rem;
  .section4-title {
    border-top: 1px solid rgba(185, 185, 185, 0.14);
    height: 1.0667rem;
    text-align: center;
    line-height: 1.0667rem;
    font-weight: normal;
    background-color: #fff;
    color: #333;
  }
  .section4-icon {
    font-size: 14px;
    margin-right: 0.5333rem;
    float: right;
  }
  .section4-item {
    padding: 0.2667rem;
  }
  .section4-item-list {
    margin-right: 0.4rem;
    float: left;
    &:nth-child(even) {
      margin-right: 0;
      float: right;
    }
  }
  .section4-item-list-img {
    width: 4.4rem;
    height: 4.4rem;
    position: relative;
    .section4-item-list-goodsinfo {
      .sigle-over();
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      // height: 0.8rem;
      padding: 0.1333rem 0.1067rem;
      background-color: gold;
    }
  }
  .section4-item-list-name {
    margin-top: 0.2667rem;
    font-size: 20px;
  }
  .section4-item-list-price {
    padding-bottom: 0.2667rem;
    font-size: 14px;
    color: #b4282d;
  }
  .section4-banner {
    margin-top: 0.16rem;
    height: 2.6667rem;
    border-bottom: 1px solid rgba(185, 185, 185, 0.14);
  }
}
</style>
