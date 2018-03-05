<template>
    <div class="section3">
        <div class="section3-item">
            <div class="section3-item-list" v-for="item in toSection3.section3List" :key="item.id">
                <div class="m-kill">
                    <div class="m-kill-name">
                        {{item.goodsName}}
                    </div>
                    <div class="m-kill-time">
                        <span class="square">00</span>:<!--
                        --><span class="square">00</span>:<!--
                        --><span class="square">00</span>
                    </div>
                    <div class="m-kill-startstime"></div>
                </div>
                <div class="m-kill-goods">
                    <img :src="item.imgPath" alt="">
                    <div class="block-price">
                        {{item.price|currency}}
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['toSection3'],
}
</script>

<style lang="less" scoped>
    .section3 {
        padding-top: 0.6667rem;
        .section3-item {
            border-top: 1px solid rgba(185, 185, 185, 0.14);
            padding: 0.5333rem 0.2667rem;
        }
        .section3-item-list {
            padding-top: 0.5333rem;
            display: flex;
            justify-content: space-around;
        }
        .m-kill {
            padding-left: 0.2667rem;
            width: 4.2667rem;
            height: 2.6667rem;
        }
        .m-kill-goods {
            position: relative;
            width: 4.2667rem;
            height: 2.6667rem;
            .block-price {
                position: absolute;
                right: 0;
                bottom: 0;
                width: 0.96rem;
                height: 0.4267rem;
                background-color: #FFAA00;
                border-radius: 0.1067rem;
                text-align: center;
                line-height: 0.4267rem;
                color: #fff;
                font-size: 12px;
            }
        }
        .m-kill-name {
            height: 0.48rem;
            font-size: 16px;
            font-weight: normal;
        }
        .m-kill-time {
            height: 0.7467rem;
            .square {
                display: inline-block;
                width: 0.7467rem;
                height: 100%;
                background-color: pink;
                text-align: center;
                line-height: 0.7467rem;
            }
        }

    }
</style>
