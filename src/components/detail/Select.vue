<template>
    <div class="detail-select">
        <div class="shopname">
            {{select.title}}~~
            <span class="select-type" v-if="select.chose">
                (已选 {{select.chose[colorIndex].col}}-{{select.chose[sizeIndex].size}})
            </span>
        </div>
        <div class="detail-price">
            {{select.price*((sizeIndex+1)/2)}} 元
        </div>
        <div class="detail-type">
            <div class="type-main">
                <span class="main-text">颜色 : </span>
                <div class="detail-type-list">
                    <p :class="['type-btn',{now: index===colorIndex}]"
                        v-for="(item,index) in select.chose"
                        @click="colorIndex=index"
                        :key="item.id">
                        {{item.col}}
                    </p>
                </div>
            </div>
            <div class="type-main">
                <span class="main-text">尺寸 : </span>
                <div class="detail-type-list">
                    <p :class="['type-btn',{now: index===sizeIndex}]"
                        @click="sizeIndex=index"
                        v-for="(item,index) in select.chose"
                        :key="item.id">
                        {{item.size}}
                    </p>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['select'],
    data() {
        return {
            colorIndex: 0,
            sizeIndex: 0,
        }
    },
    methods: {

    }
}
</script>

<style lang="less" scoped>
    .detail-select {
        padding: 0.2133rem;
        .shopname {
            font-size: 16px;
            .select-type {
                color: #ee7150;
            }
        }
        .detail-price {
            padding: 0.2667rem 0.1333rem;
            font-size: 14px;
            color: #FFAA00;
            font-weight: 700;
        }
        .detail-type {
            .type-main {
                display: flex;
                margin-top: 0.2667rem;
            }
            .main-text {
                margin-top: 0.1333rem;
                padding: 0.2133rem 0.2rem 0.2133rem 0;
            }
            p {
                margin-top: 0.1333rem;
                padding: 0.2133rem 0.4rem;
                font-size: 14px;
                border: 1px solid #ccc;
                border-radius: 0.1333rem;
                margin-right: 0.2667rem;
                &.now {
                    border: 1px solid #FFAA00;
                    color: #FFAA00;
                }
            }
            .detail-type-list {
                flex: 1;
                display: flex;
                flex-wrap: wrap;
            }
        }
        
    }
</style>
