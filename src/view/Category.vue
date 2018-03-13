<template>
    <div class="shop-category">
      <v-header>
        <h2 slot="title">商品分类</h2>
      </v-header>
      <!-- <v-category-info :toCategoryInfo="asideData"></v-category-info> -->
      <div class="category-body">
        <v-aside :aside="asideData"></v-aside>
        <v-main :main="asideData"></v-main>
      </div>
    </div>
</template>

<script>
import Header from "@/public/_header.vue";
// import CategoryInfo from "@/components/category/CategoryInfo.vue";
import Aside from '@/components/category/Aside.vue';
import Main from '@/components/category/Main.vue';

// 引入mockjs生成的请求
import { category } from "@/http/mock.js";

export default {
  data() {
    return {
      asideData: [],
    };
  },
  created() {
    this.getCategoryData();
  },
  components: {
    // "v-category-info": CategoryInfo,
    "v-header": Header,
    "v-aside": Aside,
    "v-main": Main,
  },
  methods: {
    getCategoryData() {
      this.$axios.get("/category").then(({ data }) => {
        //   console.log(data);
        this.asideData = data.aside;
      });
    }
  }
};
</script>
<style lang="less" scoped>
.shop-category {
  width: 100%;
  height: 100%;
  .category-body {
    width: 100%;
    height: 100%;
    display: flex;
  }
}
</style>
