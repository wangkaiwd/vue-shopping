<template>
    <div class="index">
        <v-header headerTitle="电商联盟"></v-header>
        <v-swiper :toSwiperData='swiperData'></v-swiper>
        <v-service></v-service>
        <!-- <div class="space"></div> -->
        <v-section1 :toSection1='section1Data'></v-section1>
    </div>
</template>

<script>
import Header from "@/components/index/Header.vue";
import Swiper from "@/components/index/Swiper.vue";
import Service from "@/components/index/Service.vue";
import Section1 from "@/components/index/Section1.vue";
// mock数据
import index from "../http/mock";

export default {
  data() {
    return {
      swiperData: [],
      section1Data: [],
    };
  },
  created() {
    this.getSwiperData();
    this.getSection1Data();
  },
  methods: {
    getSwiperData() {
      this.$axios.get("/index/swiper").then(({ data }) => {
        this.swiperData = data.swiperList;
      });
    },
    getSection1Data() {
      this.$axios.get("/index/section1").then(({ data }) => {
        this.section1Data = data;
        // console.log(data);
      });
    }
  },
  // 组件用-隔开必须加引号
  components: {
    "v-header": Header,
    "v-swiper": Swiper,
    "v-service": Service,
    "v-section1": Section1,
  }
};
</script>
<style lang="less" scoped>

</style>
