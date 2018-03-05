<template>
    <div class="index">
        <v-header headerTitle="电子商城"></v-header>
        <v-swiper :toSwiperData='swiperData'></v-swiper>
        <v-service></v-service>
        <v-section1 :toSection1='section1Data'></v-section1>
        <v-section2 :toSection2='section2Data'></v-section2>
        <v-section3 :toSection3='section3Data'></v-section3>
    </div>
</template>

<script>
import Header from "@/components/index/Header.vue";
import Swiper from "@/components/index/Swiper.vue";
import Service from "@/components/index/Service.vue";
import Section1 from "@/components/index/Section1.vue";
import Section2 from "@/components/index/Section2.vue";
import Section3 from "@/components/index/Section3.vue";
// mock数据
import index from "../http/mock";

export default {
  data() {
    return {
      swiperData: {},
      section1Data: {},
      section2Data: {},
      section3Data: {},
    };
  },
  created() {
    this.getIndexData();
  },
  methods: {
    getIndexData() {
      this.$axios.get("/index").then(({ data }) => {
        this.swiperData = data.swiper;
        this.section1Data = data.section1;
        this.section2Data = data.section2;
        this.section3Data = data.section3;
        console.log(data);
      });
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
  }
};
</script>
<style lang="less" scoped>

</style>
