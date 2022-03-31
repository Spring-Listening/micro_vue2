/*
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2021-11-02 14:59:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-31 10:46:59
 */
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/home',
    name: 'Home',
    meta: { title: 'micro_react首页' },
    component: Home,
  },
  {
    path: '/about',
    meta: { title: 'micro_react关于' },
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/',
    redirect: Home,
  },
];

export default routes;
