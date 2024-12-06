import {createRouter, createWebHistory} from 'vue-router';

import Home from '@views/home/home-view.vue';
import Albums from '@views/album/album-view.vue';
import AlbumDetail from '@views/album/detail-album-view.vue';
import PhotoView from '@views/photo/photo-view.vue';
import Login from '@views/authentication/login-view.vue';
import SignUp from '@views/authentication/sign-up-view.vue';
import passwordReset from '@views/authentication/password-reset-view.vue';

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
    path: '/alben',
    name: 'albums',
    component: Albums,
  },
  {
    path: '/album/:uuid',
    name: 'album-detail',
    component: AlbumDetail,
  },
  {
    path: '/album/:uuid/foto/:number',
    name: 'photo-detail',
    component: PhotoView,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp,
  },
  {
    path: '/resetPassword',
    name: 'pwReset',
    component: passwordReset,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
