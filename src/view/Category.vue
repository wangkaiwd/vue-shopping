<template>
    <div class="shop-category">
        <v-category-info :toCategoryInfo="asideData"></v-category-info>
    </div>
</template>

<script>
import Header from "@/public/_header.vue";
import CategoryInfo from "@/components/category/CategoryInfo.vue";

// 引入mockjs生成的请求
import { category } from "@/http/mock.js";

export default {
  data() {
    return {
      asideData: []
    };
  },
  created() {
    this.getCategoryData();
  },
  components: {
    "v-category-info": CategoryInfo
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
<style>
.shop-category {
  width: 100%;
  height: 100%;
}
</style>
