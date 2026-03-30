<template>
  <div class="news-detail">
    <div v-if="newsItem" class="news-content">
      <div class="news-date">{{ newsItem.date }}</div>
      <h1 class="news-title">{{ newsItem.title }}</h1>
      <div class="news-text">{{ newsItem.content }}</div>
      <button @click="goBack" class="back-link">&larr; Назад к новостям</button>
    </div>
    <div v-else class="not-found">
      <h1>Новость не найдена</h1>
      <RouterLink to="/news" class="back-link">&larr; К новостям</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { news } from '@/data/news'

const route = useRoute()
const router = useRouter()

const newsItem = computed(() => {
  const id = Number(route.params.id)
  return news.find(n => n.id === id)
})

const goBack = () => {
  router.back()
}
</script>

<style scoped>
.news-detail {
  padding: 96px 32px 64px;
  max-width: 800px;
  margin: 0 auto;
}

.news-date {
  font-size: 14px;
  color: var(--text-tertiary);
  margin-bottom: 16px;
}

.news-title {
  font-family: var(--serif-font);
  font-size: 48px;
  margin: 0 0 32px;
  color: var(--text-color);
}

.news-text {
  font-size: 16px;
  line-height: 24px;
  color: var(--text-secondary);
  margin-bottom: 32px;
}

.back-link {
  background: none;
  border: none;
  color: var(--link-color);
  font-size: 16px;
  cursor: pointer;
  padding: 0;
  transition: color 200ms;
}

.back-link:hover {
  color: var(--link-hover);
}

.not-found {
  text-align: center;
  padding: 64px 0;
}

.not-found h1 {
  font-family: var(--serif-font);
  color: var(--text-color);
}
</style>
