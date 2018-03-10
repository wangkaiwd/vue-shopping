<template>
    <div class="section3">
        <div class="section3-item">
            <div class="section3-item-list" v-for="item in toSection3.section3List" :key="item.id">
                <div class="m-kill">
                    <div class="m-kill-name">
                        {{item.goodsName}}
                    </div>
                    <div class="m-kill-time" v-if="h && m && s">
                        <span class="square">{{h}}</span> : <!--
                        --><span class="square">{{m}}</span> : <!--
                        --><span class="square">{{s}}</span>
                    </div>
                    <div class="m-kill-startstime">Starts at {{item.startTime}}</div>
                </div>
                <div class="m-kill-goods">
                    <router-link to='/detail'>
                      <img src="" v-lazy="item.imgPath" alt="">
                    </router-link>
                    <div class="block-price">
                        {{item.price|currency}}
                    </div>
                </div>
            </div>
        </div>
        <div class="section3-banner">
          <router-link to='/detail'>
            <img src="" v-lazy="toSection3.banner" alt="">
          </router-link>
        </div>
    </div>
</template>

<script>
export default {
  props: ["toSection3"],
  data() {
    return {
      h: "",
      m: "",
      s: ""
    };
  },
  created() {
    this.getNowTime();
  },
  methods: {
    getNowTime() {
      let timer = null;
      timer = setInterval(() => {
        let h = new Date().getHours();
        let m = new Date().getMinutes();
        let s = new Date().getSeconds();
        h < 0 ? (h = "0" + h) : h;
        m < 0 ? (m = "0" + m) : m;
        s < 0 ? (s = "0" + s) : s;
        this.h = h;
        this.m = m;
        this.s = s;
      }, 1000);
    }
  }
};
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
    padding-left: 0.6667rem;
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
      background-color: #ffaa00;
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
    margin-top: 0.2667rem;
    height: 0.7467rem;
    .square {
      display: inline-block;
      width: 0.7467rem;
      height: 100%;
      background-color: #444;
      text-align: center;
      line-height: 0.7467rem;
      color: #fff;
      border-radius: 0.1333rem;
    }
  }
  .m-kill-startstime {
    margin-top: 0.2667rem;
    font-size: 16px;
  }
  .section3-banner {
    margin-top: 0.16rem;
    height: 2.6667rem;
    border-bottom: 1px solid rgba(185, 185, 185, 0.14);
  }
}
</style>
