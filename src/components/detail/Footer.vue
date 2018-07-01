<template>
  <div class="detail-footer">
    <div class="detail-home">
      <v-icon @click.native="$router.push({path: '/'})"
        iconText="icon-home"></v-icon>
    </div>
    <div class="detail-cart">
      <mt-badge class="badge"
        size="small"
        type="error">
          {{count}}
      </mt-badge>
      <v-icon @click.native="goShopcart()"
        iconText="icon-feedback"></v-icon>
    </div>
    <div class="detail-join"
      @click="joinCart">
      加入购物车
    </div>
  </div>
</template>

<script>
import Icon from "@/public/_icon";
import { MessageBox } from "mint-ui";
import { mapState } from 'vuex';
import Utils from '@/utils/storage';
export default {
  components: {
    "v-icon": Icon
  },
  computed: mapState({
    views: state => state.detail.productData.view,
    colSelected: state => state.detail.colSelected,
    sizeSelected: state => state.detail.sizeSelected,
    count() {
      this.$store.commit('CHANGE_COUNT');
      return this.$store.state.detail.count;
    }
  }),
  methods: {
    joinCart() {
      const params = {};
      params.title = this.views.title;
      params.size = this.views.chose[this.sizeSelected].size;
      params.price = this.views.price * ((this.sizeSelected + 1) / 2);
      // console.log('price', params);
      // debugger
      params.col = this.views.chose[this.colSelected].col;
      params.imgPath = this.$store.state.detail.productData.swiper.swiperList[0].imgPath;
      const title = '提示';
      const message = `商品名称：${this.views.title}<br />
        价格：${params.price}<br />
        规格：${this.views.chose[this.sizeSelected].size}<br />
        颜色：${this.views.chose[this.colSelected].col}<br />
        商品ID：${this.views.id}
      `
      MessageBox({ title, message, showCancelButton: true }).then(action => {
        if (action === 'confirm') {
          this.$store.dispatch('oprateProduct', true);
          Utils.setItem('goodsList', params, true);
        }
      });
    },
    goShopcart() {
      this.$router.push({ path: '/shopcart' });
      this.$store.commit('RESET_CARLIST');
    }
  },
};
</script>

<style lang="less">
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
    background-color: #fff
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
    background-color: red;
  }
}
</style>
