<template>
    <div class="detail-views" v-if="views">
        <div class="shopname">
            {{views.title}}~~
            <span class="views-type"
                v-if="views.chose">
                (已选 {{colText}}-{{sizeText}})
            </span>
        </div>
        <div class="detail-price">
            {{views.price*((sizeSelected+1)/2)}} 元
        </div>
        <div class="intro">
            商品简介：{{views.intro}}
        </div>
        <div class="detail-type">
            <div class="type-main">
                <span class="main-text">颜色 : </span>
                <div class="detail-type-list">
                    <p :class="['type-btn',{now: index===colSelected}]"
                        v-for="(item,index) in views.chose"
                        @click="chooseCol(index)"
                        :key="item.id">
                        {{item.col}}
                    </p>
                </div>
            </div>
            <div class="type-main">
                <span class="main-text">尺寸 : </span>
                <div class="detail-type-list">
                    <p :class="['type-btn',{now: index===sizeSelected}]"
                        @click="chooseSize(index)"
                        v-for="(item,index) in views.chose"
                        :key="item.id">
                        {{item.size}}
                    </p>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      isShow: false,
    }
  },
  computed: mapState({
    views: state => state.detail.productData.view,
    colSelected: state => state.detail.colSelected,
    sizeSelected: state => state.detail.sizeSelected,
    // 当前选择的颜色
    colText() {
      return this.views.chose[this.colSelected].col;
    },
    // 当前选择的大小
    sizeText() {
      return this.views.chose[this.sizeSelected].size;
    }
  }),
  methods: {
    chooseCol(i) {
      this.$store.commit('CHANGE_COL', i);

    },
    chooseSize(i) {
      this.$store.commit('CHANGE_SIZE', i);
    },
    joinCart() {
      this.isShow = !this.isShow;
    },
    beforeEnter: function (el) {
      // debugger
      // 初始坐标
      el.style.transfrom = "translate3d(3.18rem,0,0)";
    },
    // 此回调函数是可选项的设置
    // 与 CSS 结合时使用
    enter: function (el, done) {
      // 为了让动画不停的执行
      var width = el.offsetWidth;
      // 动画结束坐标
      el.style.transform = "translate3d(3.18rem, 8.2rem,0)";
      done();
    },
    afterEnter: function (el) {
      // this.isShow = false;
    }
  }
}
</script>

<style lang="less" scoped>
    .detail-views {
        padding: 0.2133rem;
        .shopname {
            font-size: 16px;
            .views-type {
                color: #ee7150;
            }
        }
        .detail-price {
            padding-top: 0.2667rem;
            font-size: 16px;
            color: #FFAA00;
            opacity: 0.7;
            border-radius: 10px;
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
                margin-left: 0.2667rem;
                &.now {
                    border: 1px solid #FFAA00;
                    color: #FFAA00;
                }
            }
            .detail-type-list {
                flex: 1;
                display: flex;
                flex-wrap: wrap;
                margin-left: -0.2667rem;
            }
        }
        .intro {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 0.1333rem;
            height: 1.3333rem;
            font-size: 14px;
            border-top: 2px solid rgba(185, 185, 185, 0.14);
            border-bottom: 2px solid rgba(185, 185, 185, 0.14);
        }
    }
</style>
