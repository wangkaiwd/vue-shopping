<template>
    <div class="service">
        <div class="row">
            <div class="col"><v-icon class="service-icon" iconText="icon-iconfont5"></v-icon>自营品牌</div>
            <div class="col"><v-icon class="service-icon" iconText="icon-iconfont5"></v-icon>无忧退货</div>
            <div class="col"><v-icon class="service-icon" iconText="icon-iconfont5"></v-icon>48小时快速退款</div>
        </div>
    </div>
</template>

<script>
import Icon from '@/public/Icon.vue';
export default {
    components: {
        'v-icon': Icon
    }
}
</script>

<style lang="less" scoped>
@import '../../common/styles/minix.less';
    .service {
        border-bottom: 1px solid rgba(185, 185, 185, .14);
        .row {
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 1.1733rem;
            font-size: 14px;
        }
        .service-icon {
            color: #ea545d;
            font-size: 0.4267rem;
        }
    }
</style>
