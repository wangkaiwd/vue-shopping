<template>
    <div class="section1">
        <h2 class="section1-title">
          section1
          <v-icon class="section1-icon" iconText="icon-mian"></v-icon>
        </h2>
        <div class="section1-item clearfix">
          <div class="section1-item-list" v-for="k in toSection1.section1List" :key="k.id">
            <img :src="k.imgPath" alt="">
          </div>
        </div>
        <div class="section1-banner">
          <img :src="toSection1.banner" alt="">
        </div>
    </div>
</template>

<script>
import Icon from "@/public/Icon.vue";
export default {
  props: ["toSection1"],
  // updated() {
  //   console.log(111);
  //   console.log(this.toSection1);
  // },
  components: {
    "v-icon": Icon
  }
};
</script>

<style lang="less" scoped>
// 引入less的语法为@import
@import "../../common/styles/minix.less";
.section1 {
  padding-top: 0.6667rem;
  .section1-title {
    border-top: 1px solid rgba(185, 185, 185, 0.14);
    height: 1.0667rem;
    text-align: center;
    line-height: 1.0667rem;
    font-weight: normal;
    background-color: #fff;
    color: #333;
  }
  .section1-icon {
    margin-right: 0.5333rem;
    float: right;
  }
  .section1-item {
    padding: 0.16rem;
    padding-top: 0;
  }
  .section1-item-list {
    float: left;
    padding: 0.1467rem;
    width: 4.8rem;
    height: 4.8rem;
  }
  .section1-banner {
    margin-top: 0.16rem;
    height: 2.6667rem;
    border-bottom: 1px solid rgba(185, 185, 185, 0.14);
  }
}
</style>
