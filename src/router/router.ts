import { createRouter, createWebHistory } from 'vue-router';

import Home from '@views/home/home-view.vue';
import Albums from '@views/album/album-view.vue';
import Login from '@views/authentication/login-view.vue';
import Register from '@views/authentication/register-view.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/home',
    redirect: '/',
  },
  {
    path: '/foto-alben',
    name: 'albums',
    component: Albums,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
