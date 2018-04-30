<template>
    <div class="shop-login">
        <v-header>
            <h2 slot="title">登录页</h2>
        </v-header>
        <mt-field class="username" label="账号" v-model="username"></mt-field>
        <mt-field class="password" label="密码" type="password" v-model="password"></mt-field>
        <mt-button class="loginbtn" type="default" @click.native="login" size="large">登录</mt-button>
    </div>
</template>

<script>
import Header from "@/public/_header.vue";
import { userInfo } from '@/http/mock';
import { Toast } from 'mint-ui';
import Utils from '@/utils/storage';
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  components: {
    "v-header": Header,
  },
  methods: {
    login() {
      const { username, password } = this;
      let bool = false;
      userInfo.map(item => {
        if (item.username === username && item.password === password) {
          bool = true;
        }
      })
      if (bool) {
        Toast({
          message: '登录成功！',
        })
        const { username, password } = this
        Utils.setItem('userInfo', { username, password });
        this.$router.go(-1);
        return
      }
      Toast({
        message: '用户名或密码错误！',
      })
    }
  }
}
</script>

<style lang="less">
.shop-login {
    .mint-field-core {
        border-radius: 0.16rem;
        background-color: rgb(250, 255, 189);
    }
    .loginbtn {
        width: 100%;
        height: 1.0667rem;
        background-color: #fff;
        outline: none;
        border: 1px solid #ccc;
        font-size: 16px;
        border-radius: 0.1333rem;
        font-weight: 500;
    }
}
</style>
