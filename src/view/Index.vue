<template>
    <div class="index pb">
      <v-header></v-header>
      <v-swiper :toSwiperData='swiperData'></v-swiper>
      <v-service></v-service>
      <v-section1 :toSection1='section1Data'></v-section1>
      <v-section2 :toSection2='section2Data'></v-section2>
      <v-section3 :toSection3='section3Data'></v-section3>
      <v-section4 :toSection4='section4Data'></v-section4>
      <v-baseline></v-baseline>
      <v-tabbar></v-tabbar>
    </div>
</template>

<script>
import Header from "@/components/index/Header.vue";
import Swiper from "@/public/_swiper.vue";
import Service from "@/components/index/Service.vue";
import Section1 from "@/components/index/Section1.vue";
import Section2 from "@/components/index/Section2.vue";
import Section3 from "@/components/index/Section3.vue";
import Section4 from "@/components/index/Section4.vue";
import Baseline from "@/public/_baseline.vue";
import Tabbar from "@/public/_tabbar.vue";

// 引入请求方法和mock数据
import { fetchIndex } from "@/http/url";
import {index} from "../http/mock";

export default {
  data() {
    return {
      swiperData: {},
      section1Data: {},
      section2Data: {},
      section3Data: {},
      section4Data: {},
    };
  },
  created() {
    this.getIndexData();
  },
  methods: {
    getIndexData() {
      fetchIndex({},({ data }) => {
        this.swiperData = data.swiper;
        this.section1Data = data.section1;
        this.section2Data = data.section2;
        this.section3Data = data.section3;
        this.section4Data = data.section4;
      })
    },
  },
  // 组件用-隔开必须加引号
  components: {
    "v-header": Header,
    "v-swiper": Swiper,
    "v-service": Service,
    "v-section1": Section1,
    "v-section2": Section2,
    "v-section3": Section3,
    "v-section4": Section4,
    "v-baseline": Baseline,
    "v-tabbar": Tabbar,
  }
};
</script>
<style lang="less" scoped>

</style>
