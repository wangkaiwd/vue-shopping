import Vue from 'vue';
import routes from './routes';
import VueRouter from 'vue-router';
// 在Vue的构造函数的原型上添加属性和方法，在每个实例中就可以直接调用原型上的方法
// 1. 可以在全局访问this.$router和this.$route
// 2. 可以使用全局的一些组件和属性，如：<router-view></router-view>
Vue.use(VueRouter);

const router = new VueRouter({
    linkActiveClass: "active",
    routes,
})
export default router;