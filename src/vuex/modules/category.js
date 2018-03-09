import * as types from '@/vuex/types';

// 存储全局状态
const state = {
    tabIndex : 0,
}


// 对状态进行更改
const mutations = {
    [types.CHANGE_TABINDEX](state,res) {
        state.tabIndex = res;
    }
}

export default {
    state,
    mutations,
}