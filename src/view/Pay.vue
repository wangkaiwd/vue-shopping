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
        <div class="pay-list">
            <ul>
                <li>
                    <div class="pay-img">
                        <img 
                            src="/static/carbg.png"
                            alt="">
                    </div>
                    <div class="pay-info">
                        <span class="pay-list-title">1234</span>
                        <span class="pay-price">279 元</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="immediate-pay">

        </div>
    </div>
</template>

<script>
import Header from '@/public/_header.vue';
export default {
    components: {
        'v-header': Header,
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
        height: 3.3333rem;
        overflow: scroll;
        li {
            padding: 0.36rem 0.5333rem;
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
    }
}

</style>
