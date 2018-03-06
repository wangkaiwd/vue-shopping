<template>
    <div class="shop-footer">
        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item id="首页">
                <router-link to="/" exact>
                    <v-icon class="footer-icon" iconText="icon-homepage"></v-icon>
                    首页
                </router-link>
            </mt-tab-item>
            <mt-tab-item id="分类">
                <router-link to="/category">
                    <v-icon class="footer-icon" iconText="icon-manage"></v-icon>
                    分类
                </router-link>
            </mt-tab-item>
            <mt-tab-item id="购物车">
                <v-icon class="footer-icon" iconText="icon-gouwuche"></v-icon>
                购物车
            </mt-tab-item>
            <mt-tab-item id="我的">
                <v-icon class="footer-icon" iconText="icon-wode"></v-icon>
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
import Icon from "@/public/_icon.vue";
export default {
  data() {
    return {
      selected: ""
    };
  },
  components: {
    "v-icon": Icon
  }
};
</script>

<style lang="less" scoped>
.shop-footer {
    .footer-icon {
        display: block;
        font-size: 30px;
        margin-bottom: 0.1333rem;
    }
    .mint-tabbar > .mint-tab-item.is-selected {
        color: #ffaa00;
        background-color: inherit;
    }
}
</style>
