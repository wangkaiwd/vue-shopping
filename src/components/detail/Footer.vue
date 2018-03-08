<template>
    <div class="detail-footer">
        <div class="detail-home">
           <v-icon @click.native="$router.push({path: '/'})" iconText="icon-home"></v-icon>
        </div>
        <div class="detail-cart">
            <mt-badge class="badge" size="small" type="error">10</mt-badge>
            <v-icon @click.native="$router.push({path: '/shopcart'})" iconText="icon-feedback"></v-icon>
        </div>
        <div class="detail-join">
            加入购物车
        </div>
    </div>
</template>

<script>
import Icon from "@/public/_icon";
export default {
  components: {
    "v-icon": Icon
  }
};
</script>

<style lang="less" scoped>
.detail-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1.67rem;
  background-color: #fff;
  border-top: 1px solid rgba(185, 185, 185, 0.14);
  .detail-home {
    text-align: center;
    flex: 1;
    font-size: 38px;
  }
  .detail-cart {
    position: relative;
    text-align: center;
    flex: 1;
    font-size: 38px;
  }
  .detail-join {
    text-align: center;
    flex: 2;
    font-size: 16px;
    height: 100%;
    line-height: 1.67rem;
    background-color: #FFAA00;
    color: #fff;
  }
  .badge {
    position: absolute;
    right: 0.5rem;
    top: 0.14rem;
    border-radius: 50%;
    padding: 0rem;
    height: 0.46rem;
    width: 0.46rem;
    font-size: 12px;
    line-height: 0.46rem;
    background-color: #FFAA00;
  }
}
</style>
