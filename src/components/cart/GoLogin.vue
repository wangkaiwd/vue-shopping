<template>
    <div class="gologin">
        <span class="loginafter">登陆后享受更多优惠</span>
        <span class="go">
            <!-- 这里也需要精确匹配，否则会一直处于激活状态 -->
            <router-link to="/" exact>
                去登陆 >
            </router-link>
        </span>
    </div>
</template>
<script>

export default {
    
}
</script>

<style lang="less" scoped>
.gologin {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5333rem;
    height: 1.3867rem;
    .loginafter {
        font-size: 16px;
        color: #333;
    }
    .go {
        font-size: 13px;
        color: rgba(0, 0, 0, 0.54);
    }
    border-bottom: 1px solid rgba(185, 185, 185, 0.14);
}

</style>
