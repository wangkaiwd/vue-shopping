<template>
    <div class="nothing">
        <div class="nothing-img">
            <img src="@/common/images/cart.svg" alt="">
        </div>
        <div class="nothing-text">
            <span class="empty">购物车是空的</span>
            <span class="look" @click="$router.push({path:'/'})">去逛逛</span>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.nothing {
  background-color: rgba(251, 240, 217, 0.3);
  .nothing-img {
    width: 3.4133rem;
    height: 3.4133rem;
    margin: 0 auto;
  }
  .nothing-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5333rem;
    height: 1.1467rem;
    font-size: 16px;
    background-color: rgb(244, 244, 244);
  }
  .look {
    display: inline-block;
    padding: 0.1333rem;
    background-color: #ffb300;
    color: #fff;
    border-radius: 0.1333rem;
  }
}
</style>
