<template>
    <div>
        <router-view></router-view>
        <v-tabbar></v-tabbar>
    </div>
</template>

<script>
import Tabbar from '@/public/Tabbar.vue';
export default {
    components: {
        'v-tabbar': Tabbar,
    }
}
</script>

<style>

</style>
