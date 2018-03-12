import * as types from '../types';
import Utils from '@/utils/storage';

import Vue from 'vue';

// 要发起异步请求，axios是挂载在vue实例上的
const vm = new Vue();

const state = {
  // 最初的商品信息的数据
  productData: '',
  // 选择的颜色的索引，默认为0（第一个）
  colSelected: 0,
  // 选择的尺寸的索引，默认为0（第一个）
  sizeSelected: 0,
  // 购车中的商品数量
  count: 0,
};
const mutations = {
  // 商品信息赋值
  [types.SET_DATA](state, res) {
    state.productData = res;
  },
  // 更改商品颜色
  [types.CHANGE_COL](state,res) {
    state.colSelected = res;
  },
  // 更改商品大小
  [types.CHANGE_SIZE](state,res) {
    state.sizeSelected = res;
  },
  // 获取当前购物车数量
  [types.CHANGE_COUNT](state) {
    state.count = Utils.getItem('count');
  },
  // 购物车中添加商品
  [types.ADD_PRODUCT](state) {
    state.count ++;
    Utils.setItem('count',state.count);
  }
}


// action提交的mutations，不直接更改状态(通过store.dispatch触发)
const actions = {
  // 获取商品详情

  // action函数接收一个与store实例具有相同属性和方法的context对象，
  // 可以调用context.commit提交一个mutation
  getProductInfo({commit}) {
    vm.$axios.get('/detail').then(
      ({data}) => {
        commit('SET_DATA', data)
      }
    );
  },

  // 购物车中添加或删除商品,bool=true(增加商品),bool=false(删除商品)
  oprateProduct({commit},bool) {
    if(bool){
      Utils.setItem('count',state.count++);
      console.log('----vuex-----');
      console.log(state.count);
    }
    else {
      Utils.setItem('count',state.count--);
    }
    commit('CHANGE_COUNT');
  }


}

// 相当于state的计算属性
const getters = {

}

export default {
  state,
  mutations,
  actions,
}