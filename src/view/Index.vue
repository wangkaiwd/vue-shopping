<template>
    <div class="index">
        <v-header></v-header>
        <v-swiper :toSwiperData='swiperData'></v-swiper>
    </div>
</template>

<script>
import Header from "../components/index/Header.vue";
import Swiper from "../components/index/Swiper.vue";
import index from "../http/mock";
export default {
  data() {
    return {
      swiperData: []
    };
  },
  created() {
    this.getSwiperData();
  },
  methods: {
    getSwiperData() {
      this.$axios.get("/index/swiper").then(({ data }) => {
        this.swiperData = data.swiperList;
      });
    }
  },
  // 组件用-隔开必须加引号
  components: {
    "v-header": Header,
    "v-swiper": Swiper
  }
};
</script>
<style>

</style>
