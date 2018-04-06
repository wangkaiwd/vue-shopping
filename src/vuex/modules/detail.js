import * as types from '../types';
import Utils from '@/utils/storage';
import {fetchDetail} from '@/http/url';
// 购物车结算逻辑：
//    用户勾选商品时,根据bool值将勾选商品选出
//    如果用户进行支付的话，将付款的商品从列表删除


const state = {
  // 最初的商品信息的数据
  productData: '',
  // 选择的颜色的索引，默认为0（第一个）
  colSelected: 0,
  // 选择的尺寸的索引，默认为0（第一个）
  sizeSelected: 0,
  // 购车中的商品数量
  count: 0,
  // 购物车中的商品列表
  carList: [],
  // 商品总金额
  totalPrice: 0,
  // 选中商品的数量
  selectedNum: 0,
  // 勾选的商品信息
  selectedGoods: [],
  // 未勾选的商品信息
  unSelectedGoods:[],
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
    // 如果没有内容的话,Utils.getItem('count')为null;
    state.count = Utils.getItem('count') || 0;
  },
  // 重新获取购物车商品列表
  [types.RESET_CARLIST](state) {
    state.carList = Utils.getItem('goodsList');
    Utils.setItem('goodsList',state.carList,false);
  },
  // 获取商品总价格
  [types.CHANGE_TOTAL_PRICE](state) {
    state.totalPrice = 0;
    state.selectedNum = 0;
    state.carList.map(item => {
      if(item.value) {
        state.selectedNum += 1;
        state.totalPrice += item.price;
      }
    })
    Utils.setItem('goodsList',state.carList,false);
    Utils.setItem('totalPrice',state.totalPrice,false);
    Utils.setItem('selectedNum', state.selectedNum, false);
  },
  [types.CLEAR_PAYGOODS](state){
    const carList = state.carList.filter( item => !item.value);
    Utils.setItem('count',carList.length,false);
    Utils.setItem('goodsList',carList,false);
    state.carList = Utils.getItem('goodsList');
  },

  // 获取勾选商品列表
  [types.CHANGE_SELECTED_GOODSLIST](state) {
    state.selectedGoods = Utils.getItem('goodsList').filter(item => item.value);
  }
}


// action提交的mutations，不直接更改状态(通过store.dispatch触发)
const actions = {
  // 获取商品详情
  
  // action函数接收一个与store实例具有相同属性和方法的context对象，
  // 可以调用context.commit提交一个mutation
  getProductInfo({commit}) {
    fetchDetail({},({data}) => {
        commit('SET_DATA', data)
      }
    );
  },

  // 购物车中添加或删除商品,bool=true(增加商品),bool=false(删除商品)
  oprateProduct({commit},bool) {
    // 确保获取准确的商品数量
    commit('CHANGE_COUNT');
    if(bool){
      state.count++;
      Utils.setItem('count',state.count,false);
    }
    else {
      if(state.count<=0) {
        return alert('购物车为空');
      }
      state.count--;
      Utils.setItem('count',state.count,false);
    }
  },
  cutCarList({commit},i) {
    commit('RESET_CARLIST');
    state.carList.splice(i,1);
    Utils.setItem('goodsList',state.carList,false);
    // 删除之后同步localStorage中的数据
    commit('CHANGE_TOTAL_PRICE');
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