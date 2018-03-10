<template>
    <div class="shopcart pt">
        <v-header>
            <h2 slot="title">购物车</h2>
        </v-header>
        <v-gologin></v-gologin>
        <v-nothing></v-nothing>
        <v-footer></v-footer>
    </div>
</template>

<script>
import GoLogin from "@/components/cart/GoLogin.vue";
import Nothing from "@/components/cart/Nothing.vue";
import Footer from "@/components/cart/Footer.vue";
import Header from "@/public/_header.vue";
export default {
  components: {
    "v-gologin": GoLogin,
    "v-nothing": Nothing,
    "v-header": Header,
    "v-footer": Footer,
  }
};
</script>

<style lang="less" scoped>

</style>
