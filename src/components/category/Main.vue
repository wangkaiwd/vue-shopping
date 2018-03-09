<template>
    <div class="main" v-if="main[tabIndex]">
        <div class="info-title">
            <h3>{{main[tabIndex].title}}</h3>
        </div>
        <div class="infobody">
            <div class="info-col"
                @click="$router.push({path:'/detail'})"
                v-for="item in main[tabIndex].list"
                :key="item.id">
                <div class="info-img">
                    <img :src="item.imgPath"
                        alt="">
                </div>
                <div class="info-detail">
                    {{item.title}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['main'],
    computed: {
        tabIndex() {
            return this.$store.state.category.tabIndex;
        }
    }
}
</script>

<style lang="less" scoped>
.main {
    height: 100%;
    background-color: #f7f7f7;
    overflow: scroll;
    flex: 1;
    .infobody {
      height: 100%;
      display: flex;
      flex-wrap: wrap;
    }
    .info-col {
      padding: 0.2rem 0.48rem;
      flex-shrink: 0;
    }
    .info-title {
      h3 {
        padding: 0.4rem 0 0.2rem 0.5rem;
        font-weight: 400;
        font-size: 20px;
        color: black;
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
</style>
