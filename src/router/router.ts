import {createRouter, createWebHistory} from 'vue-router';

import Home from '@views/home/home-view.vue';
import Albums from '@views/album/album-view.vue';
import AlbumDetail from '@views/album/detail-album-view.vue';

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
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
