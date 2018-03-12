<template>
    <div class="cart-something">
        <div class="chose-selected">
            <input type="checkbox">1243
        </div>
        <div class="cart-something-img">
            <img src="" alt="">
        </div>
        <div class="product-info">
            <div class="title"></div>
            <div class="chose"></div>
            <div class="price"></div>
            <v-icon class="delete" iconText="icon-lajixiang"></v-icon>
        </div>
    </div>
</template>

<script>
import Icon from '@/public/_icon.vue';
import { mapState } from 'vuex';
export default {
    data() {
        return {
            value:[],
        }
    },
    components: {
        "v-icon": Icon,
    }
}
</script>

<style lang="less" scoped>

</style>
