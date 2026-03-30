<template>
  <div class="news-page">
    <h1 class="news-title">Новости</h1>
    <p class="news-subtitle">Последние события из жизни галереи</p>
    <div class="news-list">
      <article
        v-for="item in news"
        :key="item.id"
        class="news-item"
      >
        <div class="news-date">{{ item.date }}</div>
        <h2 class="news-item-title">{{ item.title }}</h2>
        <p class="news-text">{{ item.content }}</p>
        <RouterLink :to="`/news/${item.id}`" class="news-link">Читать далее</RouterLink>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { news } from '@/data/news'
</script>

<style scoped>
.news-page {
  padding: 96px 32px 64px;
  max-width: 800px;
  margin: 0 auto;
}

.news-title {
  font-family: var(--serif-font);
  font-size: 48px;
  text-align: center;
  margin: 0 0 16px;
  color: var(--text-color);
}

.news-subtitle {
  font-size: 16px;
  text-align: center;
  color: var(--text-secondary);
  margin: 0 0 48px;
}

.news-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.news-item {
  border-left: 3px solid var(--primary-color);
  padding-left: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--border-color);
}

.news-date {
  font-size: 14px;
  color: var(--text-tertiary);
  margin-bottom: 8px;
}

.news-item-title {
  font-family: var(--serif-font);
  font-size: 24px;
  margin: 0 0 12px;
  color: var(--text-color);
}

.news-text {
  font-size: 16px;
  line-height: 24px;
  color: var(--text-secondary);
  margin: 0 0 16px;
}

.news-link {
  color: var(--link-color);
  text-decoration: none;
  font-size: 14px;
  transition: color 200ms;
}

.news-link:hover {
  color: var(--link-hover);
}
</style>
