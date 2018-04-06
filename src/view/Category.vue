<template>
    <div class="shop-category pt">
      <v-header class="category-title">
        <h2 slot="title">商品分类</h2>
      </v-header>
      <div class="category-body">
        <v-aside :aside="asideData"></v-aside>
        <v-main :main="asideData"></v-main>
      </div>
    </div>
</template>

<script>
import Header from "@/public/_header.vue";
import Aside from '@/components/category/Aside.vue';
import Main from '@/components/category/Main.vue';


// 引入请求方法和mocks数据
import { fetchCategory } from '@/http/url';
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
      fetchCategory({},({ data }) => {
        //   console.log(data);
        this.asideData = data.aside;
      })
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
  .category-title {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
  }
}
</style>
