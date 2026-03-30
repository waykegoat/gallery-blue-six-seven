import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: () => import('../views/CatalogPage.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsPage.vue')
    },
    {
      path: '/news/:id',
      name: 'news-detail',
      component: () => import('../views/NewsDetailView.vue')
    },
    {
      path: '/painting/:id',
      name: 'painting',
      component: () => import('../views/PaintingView.vue')
    }
  ],
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

export default router
