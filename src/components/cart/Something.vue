<template>
    <div class="cart-something">
        <div class="something-list"
            v-for="(k,i) in carList"
            :key="i">
            <div class="chose-selected">
                <mt-switch @change="select(i)" v-model="k.value"></mt-switch>
            </div>
            <div class="cart-something-img">
                <img 
                    :src="k.imgPath"
                    alt="">
            </div>
            <div class="product-info">
                <div class="title">{{k.title}}</div>
                <div class="chose">{{k.col}} -- {{k.size}}</div>
                <div class="price">售价：{{k.price}}元</div>
                <v-icon 
                    :class="[{active: i===deleteIndex},'del']"
                    iconText="icon-lajixiang"
                    @click.native="cut(i)">
                </v-icon>
            </div>
        </div>
    </div>
</template>

<script>
import Icon from '@/public/_icon.vue';
import { mapState } from 'vuex';
import Utils from '@/utils/storage';
export default {
    data() {
        return {
            deleteIndex: '',
            isClick: true,
        }
    },
    components: {
        "v-icon": Icon,
    },
    computed: {
        carList() {
            // 进入页面的时候内容会重置：
            // 1. 在当前页面刷新
            // 2. 从其它页面进入当前页面（比如添加完商品后）
            if(this.$store.state.detail.carList.length===0) {
                this.$store.commit('RESET_CARLIST');
            }
            return this.$store.state.detail.carList;
        }
    },
    methods: {
        cut(i) {
            this.deleteIndex = i;
            setTimeout( () => {
                this.$store.dispatch('oprateProduct',false);
                this.$store.dispatch('cutCarList',i);
                this.deleteIndex='';
            },200)
        },
        select() {
            this.$store.commit('CHANGE_TOTAL_PRICE');
            this.$store.commit('CHANGE_SELECTED_GOODSLIST');
        }
    }
}
</script>

<style lang="less">
.cart-something {
    .something-list {
        border-top: 1px solid rgba(185, 185, 185, 0.14);
        border-bottom: 1px solid rgba(185, 185, 185, 0.14);
        padding: 0.2667rem 0.1333rem;
        display: flex;
        justify-content: space-around;
        .chose-selected {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .cart-something-img {
        width: 2.1867rem;
        height: 2.6133rem;
    }
    .mint-switch-core {
        width: 1.12rem;
        height: 0.61rem;
        &::before {
            width: 1.0667rem;
            height: 0.5333rem;
        }
        &::after {
            width: 0.5333rem;
            height: 0.5333rem;
        }
    }
    .product-info {
        width: 5.5rem;
        position: relative;
        .title {
            font-size: 13px;
        }
        .chose {
            padding-top: 0.4rem;
            font-size: 13px;
            color: rgb(199, 108, 28);
        }
        .price {
            padding-top: 0.2667rem;
            font-size: 12px;
            color: #a8a8a8;
        }
        .del {
            position: absolute;
            bottom: 0;
            right: 0;
            padding: 0.2667rem;
            color: #999;
            font-size: 25px;
            &.active {
                animation: fd 0.2s;
            }
            @keyframes fd {
                0% {
                    transform: scale(1);
                };
                100% {
                    transform: scale(1.3);
                }
            }
        }
    }
}
    
</style>
