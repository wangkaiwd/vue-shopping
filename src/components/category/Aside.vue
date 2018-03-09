<template>
    <div class="aside">
        <ul>
            <li 
                :class="{current:index === tabIndex }" 
                @click="changeTabIndex(index)" 
                v-for="(item,index) in aside" 
                :key="item.id">
                    {{item.title}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  props: ['aside'],
  methods: {
    // 点击更改选择的aside
    changeTabIndex(index) {
      this.$store.commit('CHANGE_TABINDEX',index);
    }
  },
  computed: {
    tabIndex() {
      return this.$store.state.category.tabIndex;
    }
  }
}
</script>

<style lang="less" scoped>
.aside {
    height: 100%;
    width: 1.8667rem;
    text-align: center;
    overflow: scroll;
    > ul {
      width: 100%;
      height: 100%;
    }
    li {
      position: relative;
      padding: 0.4rem 0;
      font-size: 16px;
    }
    .current {
      font-size: 18px;
      &:after {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        height: 50%;
        width: 0.08rem;
        background-color: orange;
        color: #333;
      }
    }
  }
</style>
