import Vue from 'vue';
import App from './App.vue';
import router from './router/index';

// 引入flexible布局
import 'lib-flexible';
// 不能兼容ipad
// 移动端兼容方案：
//  不能使用px2rem进行自动转换，
//  原因：使用mint-ui封装好的组件已经做好的自适应，使用px2rem会将mint-ui封装好的继续进行适配，导致页面大小匹配失败
// 解决方法:使用vscode的插件px to rem
import axios from './http/api'
Vue.use( Vue => {
    Vue.prototype.$axios = axios;
})

// 引入初始化css
import './common/styles/root.less';
// 引入mint-ui(全部引入)
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false

Vue.use(MintUI)

const vm = new Vue({
    el:"#app",
    router,
    render: createElement => createElement(App),
})