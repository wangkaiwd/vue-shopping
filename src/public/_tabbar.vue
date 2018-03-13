<template>
    <div class="shop-footer">
        <mt-tabbar v-model="selected"
            fixed>
            <mt-tab-item id="index">
                <router-link :to="{path: '/'}"
                    exact>
                    <v-icon class="footer-icon"
                        iconText="icon-homepage"></v-icon>
                    首页
                </router-link>
            </mt-tab-item>
            <mt-tab-item id="category">
                <router-link :to="{path: '/category'}">
                    <v-icon class="footer-icon"
                        iconText="icon-manage"></v-icon>
                    分类
                </router-link>
            </mt-tab-item>
            <mt-tab-item id="shopcart"
                class="shop-footer-cart">
                <router-link :to="{path:'/shopcart'}">
                    <mt-badge class="badge"
                        size="small"
                        type="error">{{count}}</mt-badge>
                    <v-icon class="footer-icon"
                        iconText="icon-gouwuche"></v-icon>
                    购物车
                </router-link>
            </mt-tab-item>
            <mt-tab-item id="mine">
                <router-link :to="{path: '/mine'}">
                    <v-icon class="footer-icon"
                        iconText="icon-wode"></v-icon>
                    我的
                </router-link>
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
import Icon from "@/public/_icon.vue";
import Utils from '@/utils/storage.js';
export default {
    data() {
        return {
            selected: ""
        };
    },
    components: {
        "v-icon": Icon
    },
    computed: {
        count() {
            this.$store.commit('CHANGE_COUNT');
            return this.$store.state.detail.count;
        }
    },
    methods: {
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
  .shop-footer-cart {
    position: relative;
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
