import { createRouter, createWebHashHistory } from 'vue-router';
import FrontEndView from '../views/frontend/FrontEndView.vue';

const routes = [
      {
      path: '/',
      name: 'front',
      component: FrontEndView,
      children: [
        {
          path: '/',
          component: () => import('../views/frontend/HomeView.vue'),
        },
        {
          path: 'login',
          component: () => import('../views/frontend/LoginView.vue'),
        },
        {
          path: 'attractions',
          component: () => import('../views/frontend/AttractionsView.vue'),
        },
        {
          path: 'collections',
          component: () => import('../views/frontend/collectionsView.vue'),
        },
        {
          path: 'orders',
          component: () => import('../views/frontend/ordersView.vue'),
        },
      ],
    },
    {
      path: '/admin/',
      name: 'back',
      component: () => import('../views/backend/DashboardView.vue'),
      beforeEnter: (to, from, next) => { 
        console.log('Dashboard guard',to, from);
        next();
      },
      children: [
        {
          path: '',
          component: () => import('../views/backend/AttractionsManage.vue'),
        },
      ],
  },
  { 
    path: '/:catchAll(.*)*', // 這是正則表達式，會在查找目前所有的路徑後還找不到而套用
    // redirect: { name: 'home' },
    component: () => import('../views/frontend/NotFound.vue'),
  }
]


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-blue-500'
});

// router.beforeEach((to, from, next) => { 
//   next(); // 注意: 若沒有呼叫 next() 則路由不會被渲染
// })

export default router;
