// 引入各个需要分配路由的组件
import Index from '../view/Index.vue';
import Category from '../view/Category.vue';
import Mine from '../view/Mine.vue';

const routes = [{
    name: 'index',
    path: '/',
    component: Index,
    title: '首页',
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
  }
]

export default routes;
