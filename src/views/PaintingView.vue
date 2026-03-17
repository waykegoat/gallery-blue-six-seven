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
        <RouterLink to="/" class="back-link">&larr; На главную</RouterLink>
      </div>
    </div>
    <div v-else class="not-found">
      <h1>Картина не найдена</h1>
      <RouterLink to="/" class="back-link">&larr; На главную</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { paintings } from '../data/paintings'

const route = useRoute()

const painting = computed(() => {
  const id = Number(route.params.id)
  return paintings.find(p => p.id === id)
})
</script>

<style scoped>
.painting-page {
  padding: 6rem 2rem 4rem;
  max-width: 1000px;
  margin: 0 auto;
}

.painting-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
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
  font-family: 'Serif', 'Times New Roman', Times, serif;
  font-size: 2.5rem;
  font-weight: 400;
  margin: 0 0 0.5rem;
  color: #333;
}

.painting-author {
  font-size: 1.1rem;
  color: #666;
  margin: 0 0 0.25rem;
}

.painting-year {
  font-size: 1rem;
  color: #999;
  margin: 0 0 1.5rem;
}

.painting-description {
  font-size: 1rem;
  line-height: 1.7;
  color: #555;
  margin: 0 0 2rem;
}

.back-link {
  display: inline-block;
  text-decoration: none;
  color: #4a6178;
  font-size: 1rem;
  transition: color 0.2s;
}

.back-link:hover {
  color: #333;
}

.not-found {
  text-align: center;
  padding: 4rem 0;
}

.not-found h1 {
  font-family: 'Serif', 'Times New Roman', Times, serif;
  font-weight: 400;
  color: #333;
}
</style>
