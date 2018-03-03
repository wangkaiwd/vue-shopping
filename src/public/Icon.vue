<template>
    <div class="shop-icon">
        <svg class="icon" aria-hidden="true">
            <!-- 字体图标的应用，将 '#' 后面的内容替换为图标名称 -->
            <use :xlink:href="handleIconText"></use>
            
        </svg>
    </div>
</template>

<script>
export default {
    props:['iconText'],
    computed: {
        // 利用计算属性对data中的数据进行简单处理
        handleIconText () {
            return `#${this.iconText}`
        }
    }
}
</script>

<style lang="less" scoped>
    .shop-icon {
        display: inline-block;
    }
</style>
