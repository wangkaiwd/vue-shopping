import Vue from 'vue';
import App from './App.vue';
import router from './router/index';

import axios from './http/api'
Vue.use( Vue => {
    Vue.prototype.$axios = axios;
})

// 引入初始化css
import './common/styles/root.less';
// 引入mint-ui(全部引入)
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

const vm = new Vue({
    el:"#app",
    router,
    render: createElement => createElement(App),
})