import * as types from '../types';
import Vue from 'vue';

// 要发起异步请求，axios是挂载在vue实例上的
const vm = new Vue();

const state = {
    // 最初的商品信息的数据
    productData: '',
    // 选择的颜色，默认为0（第一个）
    colSelected: 0,
    // 选择的尺寸，默认为0（第一个）
    sizeSelected: 0,
  },




  const mutation = {
    [types.SET_DATA](state, res) {
        state.productData = res;
    }
  }


// 定义一些异步的请求
const action = {
  // 获取商品详情
  getProductInfo() {
    vm.$axios.get('/detail').then(
      ({
        data
      }) => {

      }
    );
  }
}
