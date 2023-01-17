import { createRouter, createWebHistory } from 'vue-router';
import FrontEndView from '../views/frontend/FrontEndView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
          path: '/login',
          component: () => import('../views/frontend/LoginView.vue'),
        },
      ],
    },
    {
      path: '/admin',
      name: 'back',
      component: () => import('../views/backend/DashboardView.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/backend/AttractionsManage.vue'),
        },
      ],
    },
  ],
});

export default router;
