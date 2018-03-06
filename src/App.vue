<template>
    <div>
        <v-header></v-header>
        <router-view></router-view>
        <v-tabbar></v-tabbar>
    </div>
</template>

<script>
import Tabbar from "@/public/_tabbar.vue";
import Header from "@/public/_header.vue";
export default {
  components: {
    "v-tabbar": Tabbar,
    "v-header": Header
  }
};
</script>

<style lang="less" scoped>

</style>
