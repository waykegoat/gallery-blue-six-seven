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
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { paintings } from '../data/paintings'

const route = useRoute()
const router = useRouter()

const painting = computed(() => {
  const id = Number(route.params.id)
  return paintings.find(p => p.id === id)
})

const goBack = () => {
  router.back()
}

onMounted(() => {
  window.scrollTo(0, 0)
})
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
  font-family: 'Serif', 'Times New Roman', Times, serif;
  font-size: 40px;
  font-weight: 400;
  margin: 0 0 8px;
  color: #333333;
}

.painting-author {
  font-size: 18px;
  color: #666666;
  margin: 0 0 4px;
}

.painting-year {
  font-size: 16px;
  color: #999999;
  margin: 0 0 24px;
}

.painting-description {
  font-size: 16px;
  line-height: 27px;
  color: #555555;
  margin: 0 0 32px;
}

.back-link {
  display: inline-block;
  text-decoration: none;
  color: #4a6178;
  font-size: 16px;
  transition: color 200ms;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  padding: 0;
}

.back-link:hover {
  color: #333;
}

.not-found {
  text-align: center;
  padding: 64px 0;
}

.not-found h1 {
  font-family: 'Serif', 'Times New Roman', Times, serif;
  font-weight: 400;
  color: #333333;
}
</style>
