<template>
    <div class="section2">
        <div class="section2-item">
            <div class="section2-item-list" v-for="item in toSection2.section2List" :key="item.id">
                <div class="section2-item-list-img">
                  <router-link :to="{path: '/detail'}">
                    <img src="" v-lazy="item.imgPath"  alt="">
                  </router-link>
                </div>
                <div class="section2-item-list-body">
                    <h3 class="section2-item-list-title">{{item.title}}</h3>
                    <div class="section2-item-list-des">{{item.detail}}</div>
                    <div class="section2-price">{{item.price|currency}}</div>
                </div>
            </div>
            <!--  -->
            <div class="section2-item-fill">

            </div>
        </div>
        <div class="section2-banner">
          <router-link :to="{path: '/detail'}">
            <img src="" v-lazy="toSection2.banner" alt="">
          </router-link>
        </div>
    </div>
</template>

<script>
export default {
  props: ["toSection2"],
};
</script>

<style lang="less" scoped>
// less引入文件只能使用相对路径
@import "../../common/styles/minix.less";
.section2 {
  padding-top: 0.6667rem;
  .section2-item {
    width: 100%;
    overflow-y: scroll;
    display: flex;
    border-top: 1px solid rgba(185, 185, 185, 0.14);
    padding: 0.5333rem;
    // padding-bottom: 0.6667rem;
  }
  .section2-item-list {
    width: 2.6667rem;
    flex-shrink: 0;
    margin-left: 1.0667rem;
    &:first-child {
      margin-left: 0;
    }
  }
  .section2-item-list-img {
    width: 2.6667rem;
    height: 2.6667rem;
  }
  // 解决方法
  // flex布局使内容在一行显示后，会导致父元素设置的右侧padding值失效
  // 为了使样式统一，添加充一个空白的样式
  .section2-item-fill {
    flex-shrink: 0;
    width: 0.5333rem;
    background-color: #fff;
  }
  .section2-item-list-title {
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 18px;
    font-weight: normal;
    color: #333;
    .sigle-over();
    text-align: center;
  }
  .section2-item-list-des {
    .sigle-over();
    color: #969696;
  }
  .section2-price {
      color: #b4282d;
      font-size: 16px;
  }
  .section2-banner {
    margin-top: 0.16rem;
    height: 2.6667rem;
    border-bottom: 1px solid rgba(185, 185, 185, 0.14);
  }
}
</style>
