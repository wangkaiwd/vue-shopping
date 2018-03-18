// 引入各个需要分配路由的组件
import Index from '../view/Index.vue';
import Category from '../view/Category.vue';
import Mine from '../view/Mine.vue';
import Shopcart from '../view/Shopcart.vue';
import Login from '../view/Login.vue';
import Detail from '../view/Detail.vue';
import Pay from '../view/Pay.vue';

// 使用webpack require-resure进行组件的按需加载
// 1. 在应用最初加载代码量可以尽量的小。
   // 上面的引入方式会在npm run build命令之后在dist/js文件下生成一个整体的app.js
  //  启动服务时app.js会很大
// 2. 把不同路由对应的组件分割成不同的代码块，当路由被访问的时候才加载对应的组件
//    把路由对应的组件定义成异步组件，进行懒加载
// 语法：const Home = r => require.ensure([依赖的模块数组],回调函数,模块名)
// const Index = r => require.ensure([],r(require('@/view/Index.vue')), 'Index' );
// const Category = r => require.ensure([],r(require('../view/Category.vue')),'Category');
// const Mine = r => require.ensure([],r(require('../view/Mine.vue')), 'Mine' );
// const Shopcart = r => require.ensure([],r(require('@/view/Shopcart.vue')), 'Shopcart' );
// const Login = r => require.ensure([],r(require('@/view/Login.vue')), 'Login' );
// const Detail = r => require.ensure([],r(require('../view/Detail.vue')),'Detail');
// const Pay = r => require.ensure([],r(require('../view/Pay.vue')), 'Pay' );

const routes = [{
    name: 'index',
    path: '/',
    component: Index,
  },
  {
    name: 'category',
    path: '/category',
    component: Category,
  },
  {
    name: 'mine',
    path: '/mine',
    component: Mine,
  },
  {
    name: 'shopcart',
    path: '/shopcart',
    component: Shopcart,
  },
  {
    name: 'login',
    path: '/login',
    component: Login,
  },
  {
    name: 'detail',
    path: '/detail',
    component: Detail,
  },
  {
    name: 'pay',
    path: '/pay',
    component: Pay,
  },
]

export default routes;
