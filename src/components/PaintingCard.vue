<template>
  <RouterLink :to="`/painting/${painting.id}`" class="painting-card">
    <div class="card-image-wrapper">
      <img :src="painting.image" :alt="painting.title" class="card-image" />
    </div>
    <div class="card-info">
      <h3 class="card-title">{{ painting.title }}</h3>
      <p class="card-author">{{ painting.author }}</p>
      <p class="card-year">{{ painting.year }}</p>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import type { Painting } from '@/data/paintings'

defineProps<{
  painting: Painting
}>()
</script>

<style scoped>
.painting-card {
  display: flex;
  gap: 24px;
  text-decoration: none;
  color: inherit;
  align-items: center;
}

.card-image-wrapper {
  width: 200px;
  height: 150px;
  overflow: hidden;
  border-radius: 4px;
  flex-shrink: 0;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 300ms;
}

.painting-card:hover .card-image {
  transform: scale(1.05);
}

.card-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.card-title {
  font-size: 24px;
  margin: 0;
  color: var(--color-text);
}

.card-author {
  font-size: 16px;
  color: var(--color-text-secondary);
  margin: 0;
}

.card-year {
  font-size: 14px;
  color: var(--color-text-tertiary);
  margin: 0;
}

@media (max-width: 768px) {
  .painting-card {
    flex-direction: column;
    align-items: flex-start;
  }

  .card-image-wrapper {
    width: 100%;
    height: 200px;
  }
}
</style>
