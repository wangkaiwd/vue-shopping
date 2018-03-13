<template>
    <div class="shopcart pb">
        <v-header>
            <h2 slot="title">购物车</h2>
        </v-header>
        <v-gologin></v-gologin>
        <v-nothing v-if="count===0"></v-nothing>
        <v-something else></v-something>
        <v-footer></v-footer>
    </div>
</template>

<script>
import GoLogin from "@/components/cart/GoLogin.vue";
import Nothing from "@/components/cart/Nothing.vue";
import Something from "@/components/cart/Something.vue";
import Footer from "@/components/cart/Footer.vue";
import Header from "@/public/_header.vue";
export default {
    computed: {
        count() {
            this.$store.state.detail.count;
        },
    },
    // updated() {
    //     console.log(this.count);
    // },
    components: {
        "v-gologin": GoLogin,
        "v-nothing": Nothing,
        "v-header": Header,
        "v-footer": Footer,
        "v-something": Something,
    }
};
</script>

<style lang="less" scoped>

</style>
