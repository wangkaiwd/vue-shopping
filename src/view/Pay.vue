<template>
    <div class="shop-pay">
        <v-header>
            <h2 slot="title">支付订单</h2>
        </v-header>
        <div class="receive-msg">
            <p class="receive-pople">
                <span>收货人：王先生</span>
                <span>15985698749</span>
            </p>
            <p class="receive-address">
                收货地址：河南省郑州市中原区秦岭路8号院59号单元28层15号东户第三家
            </p>
        </div>
        <div class="pay-list wrapper"
            ref="wrapper">
            <ul class="content"
                v-if="selectedGoods.length !== 0">
                <li v-for="(k,i) in selectedGoods"
                    :key="i">
                    <div class="pay-img">
                        <img :src="k.imgPath"
                            alt="">
                    </div>
                    <div class="pay-info">
                        <span class="pay-list-title">{{k.title}}</span>
                        <span class="pay-price">{{k.price}} 元</span>
                    </div>
                </li>
            </ul>
            <div class="empty"
                v-else>
                没有选择商品!!
            </div>
        </div>
        <div class="white-space"></div>
        <div class="pay-total">
            <p>总需要支付：
                <span class="pay-num">{{selectedTotalPrice|currency}}</span>
            </p>
        </div>
        <div class="immediate-pay">
            <mt-button size="large"
                type="danger"
                @click="payOnTime">立即支付</mt-button>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
import Header from '@/public/_header.vue';
import { MessageBox, Toast } from 'mint-ui';
export default {
    components: {
        'v-header': Header,
    },
    computed: {
        selectedGoods() {
            this.$store.commit('CHANGE_SELECTED_GOODSLIST');
            return this.$store.state.detail.selectedGoods;
        },
        selectedTotalPrice() {
            let price = 0;
            this.selectedGoods.map(item => price += item.price);
            return price;
        }
    },
    methods: {
        // 立即支付
        payOnTime() {
            if(this.selectedGoods.length === 0) {
                return Toast({
                        message: '请选择商品后再进行付款！',
                        duration: 1000
                    });
            }
            MessageBox({
                title: '提示',
                message: '确定支付吗?',
                showCancelButton: true
            }).then(action => {
                console.log('action', action);
                if (action === 'confirm') {
                    Toast({
                        message: '支付成功！',
                        duration: 1000
                    });
                    this.$store.commit('CLEAR_PAYGOODS');
                    this.$store.commit('CHANGE_TOTAL_PRICE');
                    this.$store.commit('CHANGE_COUNT');
                }
            });
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.wrapper, { tap: true });
        })
    }
}
</script>

<style lang="less" scoped>
.shop-pay {
    .receive-msg {
        height: 2.96rem;
        padding: 0.5333rem;
        .receive-pople {
            display: flex;
            justify-content: space-between;
            font-size: 16px;
        }
        .receive-address {
            font-size: 14px;
            line-height: 0.6rem;
            padding-top: 0.3rem;
        }
        border-bottom: 1px solid #e8e4e4;
    }
    .pay-list {
        height: 6.6667rem;
        overflow: hidden;
        li {
            padding: 0.18rem 0.4rem;
            display: flex;
            border-bottom: 1px solid #e8e4e4;
            .pay-img {
                width: 2.5067rem;
                height: 2.5067rem;
                margin-right: 0.5333rem;
            }
            .pay-info {
                flex: 1;
            }
            .pay-list-title {
                font-size: 16px;
            }
            .pay-price {
                padding-top: 1.6rem;
                display:block;
                text-align: right; 
                color:#4D4D4D;
            }
        }
        .empty {
            height: 100%;
            text-align: center;
            line-height: 6.6667rem;
            font-size: 24px;
            color: #fff;
            background-color: #FFAA00;
        }
    }
    .white-space {
        height: 0.5333rem;
        background-color: rgba(232, 230, 230, 0.6);
    }
    .pay-total {
        padding: 0 0.5333rem;
        p {
            padding-top: 0.2667rem;
            text-align: right;
            font-size: 16px;
            color: #999999;
        }
        .pay-num {
            color: #FFAA00;
        }
    }
    .immediate-pay {
        position: fixed;
        width: 100%;
        left: 0;
        bottom: 0.2667rem;
        padding: 0 0.5333rem;
    }
}

</style>
