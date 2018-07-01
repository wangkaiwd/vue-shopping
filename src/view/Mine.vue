<template>
    <div class="mine pb">
        <div class="personal">
            <div class="icon-person">
                <v-icon iconText="icon-shouye"></v-icon>
            </div>
            <div class="login" v-if="isLogin !== '登录'">
                <router-link to="/login">
                    {{isLogin}}
                </router-link>
            </div>
            <div class="login" v-else>
              {{isLogin}}
            </div>
        </div>
        <div class="order">
            <div class="myorder">
                <span class="my">我的订单</span>
                <span class="all">全部订单 ></span>
            </div>
            <div class="replace">
                <div class="replace-list">
                    <v-icon class="replace-icon" iconText="icon-PDAshouchigongzuoshebei"></v-icon>
                    <p>待付款</p>
                </div>
                <div class="replace-list">
                    <v-icon class="replace-icon" iconText="icon-yunshuzhongwuliu-xianxing"></v-icon>
                    <p>待收货</p>
                </div>
                <div class="replace-list">
                    <v-icon class="replace-icon" iconText="icon-quanxianyuechi-xianxing"></v-icon>
                    <p>退换修</p>
                </div>
            </div>
        </div>
        <div class="member">
            <div class="member-list">
                <div class="welfare"><v-icon class="member-icon" iconText="icon-select_fill"></v-icon>会员福利</div>
                <div class="arrow">></div>
            </div>
            <div class="member-list">
                <div class="scale"><v-icon class="member-icon" iconText="icon-shake"></v-icon>我的优惠</div>
                <div class="arrow">></div>
            </div>
        </div>
        <div class="member">
            <div class="member-list">
                <div class="welfare"><v-icon class="member-icon" iconText="icon-taobaoxingdian"></v-icon>服务中心</div>
                <div class="arrow">></div>
            </div>
            <div class="member-list">
                <div class="scale"><v-icon class="member-icon" iconText="icon-taonvlang"></v-icon>电商之家</div>
                <div class="arrow">></div>
            </div>
        </div>
        <div class="member">
            <div class="member-list">
                <div class="welfare"><v-icon class="member-icon" iconText="icon-duihuanwifiiocn"></v-icon>F码通道</div>
                <div class="arrow">></div>
            </div>
            <div class="member-list">
                <div class="scale"><v-icon class="member-icon" iconText="icon-shezhi"></v-icon>设置</div>
                <div class="arrow">></div>
            </div>
        </div>
        <v-baseline></v-baseline>
        <v-tabbar></v-tabbar>
    </div>
</template>

<script>
import Icon from "@/public/_icon";
import Baseline from "@/public/_baseline";
import Tabbar from "@/public/_tabbar";
import Utils from "@/utils/storage"
export default {
  data() {
    return {

    }
  },
  computed: {
    isLogin() {
      let text;
      const userInfo = Utils.getItem('userInfo');
      userInfo ? text = userInfo.username : text = "登录"
      return text
    }
  },
  components: {
    "v-icon": Icon,
    "v-baseline": Baseline,
    "v-tabbar": Tabbar,
  }
};
</script>

<style lang="less" scoped>
.mine {
  .personal {
    padding-left: 0.5333rem;
    display: flex;
    align-items: center;
    width: 100%;
    height: 2.24rem;
    background: url("/static/carbg.png");
    background-size: 100% 100%;
    background-color: #f37d0f;
  }
  .icon-person {
    width: 1.3867rem;
    height: 1.3867rem;
    border-radius: 50%;
    border: 2px solid #fff;
    background-color: #ffaa00;
    text-align: center;
    line-height: 1.3867rem;
    font-size: 24px;
    color: #fff;
  }
  .login {
    padding-left: 0.5333rem;
    font-size: 14px;
    color: #fff;
  }
  .myorder {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 1.4933rem;
    padding: 0 0.5333rem;
    border-bottom: 1px solid rgba(185, 185, 185, 0.14);
  }
  .my {
    font-size: 16px;
    color: #333;
  }
  .all {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.4);
  }
  .replace {
    height: 2.3467rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.4);
    border-bottom: 1px solid rgba(185, 185, 185, 0.14);
    .replace-list {
      text-align: center;
    }
    .replace-icon {
      font-size: 26px;
      padding-bottom: 0.1333rem;
    }
  }
  .member {
    &:before {
      content: "";
      display: block;
      height: 0.5333rem;
      background-color: rgba(185, 185, 185, 0.14);
    }
  }
  .member-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 1.4933rem;
    padding: 0 0.5333rem;
    font-size: 16px;
    line-height: 1.4933rem;
    &:last-child {
      border-bottom: 1px solid rgba(185, 185, 185, 0.14);
    }
  }
  .member-icon {
    font-size: 26px;
    vertical-align: top;
    color: orange;
    padding-right: 0.8rem;
  }
}
</style>
