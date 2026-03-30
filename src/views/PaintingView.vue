<template>
  <div class="painting-page">
    <div v-if="painting" class="painting-detail">
      <div class="painting-image-wrapper">
        <img :src="painting.image" :alt="painting.title" class="painting-image" />
      </div>
      <div class="painting-info">
        <h1 class="painting-title">{{ painting.title }}</h1>
        <p class="painting-author">{{ painting.author }}</p>
        <p class="painting-year">{{ painting.year }} г.</p>
        <p class="painting-description">{{ painting.description }}</p>
        <button @click="goBack" class="back-link">&larr; Назад</button>
      </div>
    </div>
    <div v-else class="not-found">
      <h1>Картина не найдена</h1>
      <RouterLink to="/catalog" class="back-link">&larr; В каталог</RouterLink>
    </div>
    <ReviewFormComponent @submit="handleReviewSubmit" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { paintings } from '@/data/paintings'
import ReviewFormComponent from '@/components/ReviewForm.vue'
import type { ReviewForm } from '@/types'

const route = useRoute()
const router = useRouter()

const painting = computed(() => {
  const id = Number(route.params.id)
  return paintings.find(p => p.id === id)
})

const goBack = () => {
  router.back()
}

const handleReviewSubmit = (review: ReviewForm) => {
  console.log('Review submitted:', review)
}
</script>

<style scoped>
.painting-page {
  padding: 96px 32px 64px;
  max-width: 1000px;
  margin: 0 auto;
}

.painting-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

.painting-image-wrapper {
  width: 100%;
  max-width: 700px;
  border-radius: 4px;
  overflow: hidden;
}

.painting-image {
  width: 100%;
  height: auto;
  display: block;
}

.painting-info {
  text-align: center;
  max-width: 600px;
}

.painting-title {
  font-family: var(--serif-font);
  font-size: 40px;
  margin: 0 0 8px;
  color: var(--text-color);
}

.painting-author {
  font-size: 18px;
  color: var(--text-secondary);
  margin: 0 0 4px;
}

.painting-year {
  font-size: 16px;
  color: var(--text-tertiary);
  margin: 0 0 24px;
}

.painting-description {
  font-size: 16px;
  line-height: 24px;
  color: var(--text-secondary);
  margin: 0 0 32px;
  white-space: pre-wrap;
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
