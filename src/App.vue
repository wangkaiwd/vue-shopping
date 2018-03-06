<template>
    <div class="root">
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

<style lang="less">
body,
html,
#app {
  width: 100%;
  height: 100%;
}
.root {
  height: 100%;
}
</style>
