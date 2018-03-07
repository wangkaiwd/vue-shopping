// 引入各个需要分配路由的组件
import Index from '../view/Index.vue';
import Category from '../view/Category.vue';
import Mine from '../view/Mine.vue';
import Shopcart from '../view/Shopcart.vue';
import Login from '../view/Login.vue';

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
]

export default routes;
