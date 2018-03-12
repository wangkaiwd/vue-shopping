import Vue from 'vue';
import Vuex from 'vuex';
import category from './modules/category';
import detail from './modules/detail';
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        category,
        detail
    }
});

export default store;