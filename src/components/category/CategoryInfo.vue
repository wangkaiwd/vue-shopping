<template>
    <div class="category-info">
        <div class="l-list">
            <ul>
                <li v-for="item in toCategoryInfo" :key="item.id">{{item.title}}</li>
            </ul>
        </div>
        <!-- 最开始会将空值传过来，即：toCategoryInfo: [] -->
        <div class="r-info" v-if="toCategoryInfo[0]">
            <div class="info-title">
                <h3>{{toCategoryInfo[0].title}}</h3>
            </div>
            <div class="infobody">
                <div class="info-col" v-for="item in toCategoryInfo[0].list" :key="item.id">
                    <div class="info-img">
                        <img :src="item.imgPath" alt="">
                    </div>
                    <div class="info-detail">
                        {{item.title}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["toCategoryInfo"],
    data() {
        return {
            mainName: '',
        }
    },
    updated () {
        console.log(this.toCategoryInfo);
    }

}
</script>

<style lang="less" scoped>
    // html,body {
    //     height: 100%;
    // }
    .category-info {
        width: 100%;
        height: 100%;
        display: flex;
        .l-list {
            width: 1.8667rem;
            text-align: center;
            li {
                padding: 0.4rem 0;
                font-size: 16px;
            }
        }
        .r-info {
            background-color: #f7f7f7;
            flex: 1;
            .infobody {
                display: flex;
                flex-wrap: wrap;
            }
            .info-col {
                padding: 0.2rem 0.48rem;
                flex-shrink: 0;
            }
            .info-title {
                h3 {
                    padding: 0.4rem 0 0 0.5rem;
                    font-weight: 400;
                    font-size: 18px;
                }
                
            }
            .info-img {
                width: 1.7333rem;
                height: 1.7333rem;
            }
            .info-detail {
                width: 100%;
                padding-top: 0.1067rem;
                text-align: center;
                font-size: 14px;
            }
        }
    }
</style>
