<template>
  <div class="catalog-page">
    <h1 class="catalog-title">Каталог</h1>
    <p class="catalog-subtitle">Все произведения из нашей коллекции</p>
    <PaintingList />
  </div>
</template>

<script setup lang="ts">
import PaintingList from '@/components/PaintingList.vue'
</script>

<style scoped>
.catalog-page {
  padding: 96px 32px 64px;
  max-width: 1200px;
  margin: 0 auto;
}

.catalog-title {
  font-size: 48px;
  text-align: center;
  margin: 0 0 16px;
  color: var(--color-text);
}

.catalog-subtitle {
  font-size: 16px;
  text-align: center;
  color: var(--color-text-secondary);
  margin: 0 0 48px;
}
</style>
