<template>
    <div class="category-info">
        <div class="l-list">
            <ul>
                <li
                    :class="{current:index === tabIndex }"
                    @click="handleClick(index)"
                    v-for="(item,index) in toCategoryInfo"
                    :key="item.id">
                        {{item.title}}
                </li>
            </ul>
        </div>
        <!-- 最开始会将空值传过来，即：toCategoryInfo: [] -->
        <div class="r-info" v-if="toCategoryInfo[tabIndex]">
            <div class="info-title">
                <h3>{{toCategoryInfo[tabIndex].title}}</h3>
            </div>
            <div class="infobody content">
                <div class="info-col" @click="$router.push({path:'/detail'})" v-for="item in toCategoryInfo[tabIndex].list" :key="item.id">
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
import BScroll from 'better-scroll'
export default {
  props: ["toCategoryInfo"],
  data() {
    return {
      tabIndex: 0
    };
  },
  methods: {
    handleClick(i) {
      this.tabIndex = i;
    }
  }
};
</script>

<style lang="less" scoped>
.category-info {
  width: 100%;
  height: 100%;
  display: flex;
  .l-list {
    height: 100%;
    width: 1.8667rem;
    text-align: center;
    overflow: scroll;
    > ul {
      width: 100%;
      height: 100%;
    }
    li {
      position: relative;
      padding: 0.4rem 0;
      font-size: 16px;
    }
    .current {
      font-size: 18px;
      &:after {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        height: 50%;
        width: 0.08rem;
        background-color: orange;
        color: #333;
      }
    }
  }
  .r-info {
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
}
</style>
