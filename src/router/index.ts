import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MapView from '@/views/MapView.vue'
import AdvocacyPage from '@/views/AdvocacyPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/es',
    },
    {
      path: '/:locale',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/:locale/mapa',
      name: 'map',
      component: MapView,
    },
    {
      path: '/:locale/advocacy',
      name: 'advocacy',
      component: AdvocacyPage,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue'),
    },
  ],
})

export default router
