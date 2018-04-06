<template>
  <div class="detail pb">
    <v-swiper :swiper="swiperData"></v-swiper>
    <v-select class="v-select"></v-select>
    <v-content :content="contentData"></v-content>
    <v-baseline></v-baseline>
    <v-footer class="v-footer"></v-footer>
  </div>
</template>

<script>
import Swiper from "@/components/detail/Swiper.vue";
import Select from "@/components/detail/Select.vue";
import Content from "@/components/detail/Content.vue";
import Baseline from "@/public/_baseline.vue";
import Footer from "@/components/detail/Footer.vue";

// 引入请求方法和mock数据
import {fetchDetail} from '@/http/url';
import { detail } from "@/http/mock.js";
export default {
  data() {
    return {
      swiperData: {},
      contentData: {},
      selectData: [],
    };
  },
  created() {
    this.$store.dispatch("getProductInfo");
    this.getDetailData();
  },
  methods: {
    getDetailData() {
      fetchDetail({},({ data }) => {
        this.swiperData = data.swiper;
        this.contentData = data.content;
        this.selectData = data.view;
      });
    }
  },
  components: {
    "v-swiper": Swiper,
    "v-content": Content,
    "v-baseline": Baseline,
    "v-footer": Footer,
    "v-select": Select,
  },
};
</script>

<style lang="less" scoped>
.detail {
  .v-select {
    position: relative;
    z-index: 10;
  }
  .v-footer {
    z-index: 5;
  }
}

</style>
