<template>
    <div class="header">
        <header class="otherheader">
            <v-icon 
              @click.native="$router.go(-1)" 
              class="otherheader-icon" 
              iconText="icon-fanhui">
            </v-icon>
            <slot name="title"></slot>
        </header>
    </div>
</template>
<script>
import Icon from "./_icon.vue";
export default {
  components: {
    "v-icon": Icon
  },
};
</script>

<style lang="less">
.header {
  .otherheader {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.12rem;
    text-align: center;
    line-height: 1.12rem;
    background-color: #f8fcff;
  }
  .otherheader-icon {
    position: absolute;
    left: 0.5333rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 18px;
  }
  h2 {
    letter-spacing: 0.1067rem;
    font-size: 20px;
  }
}
</style>
