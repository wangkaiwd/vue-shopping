<template>
    <div class="shopcart-footer">
        <div class="total-price">
            <div class="total-top">
                共{{selectedNum}}件 金额 : 
            </div>
            <div class="total-bottom">
                <span class="price-number"> {{totalPrice}} </span> 元
            </div>
        </div>
        <div class="continue" @click="$router.push({path:'/category'})">
            继续购物
        </div>
        <div class="accounts" @click="$router.push({path:'/pay'})">
            去结算
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        selectedNum() {
            return this.$store.state.detail.selectedNum;
        },
        totalPrice() {
            return this.$store.state.detail.totalPrice;
        }
    }
}
</script>

<style lang="less" scoped>
.shopcart-footer {
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 1.6rem;
    .total-price,
    .continue,
    .accounts {
        height: 100%;
        text-align: center;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .continue,
    .accounts {
        font-size: 16px;
    }
    .continue {
        background-color: #F4F4F4;
    }
    .accounts {
        background-color: #FFAA00;
        color: #fff;
    }
    .total-price {
        flex-direction: column;
        flex-wrap: wrap;
        background-color: #fff;
    }
    .total-top {
        color: #999;
    }
    .price-number {
        font-size: 20px;
        color: #FFAA00;
    }
}
</style>
